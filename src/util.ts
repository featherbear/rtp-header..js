import type RTPHeader from './definition'
import { CSRC, Extension, ExtensionHeaderType, RTP_HEADER_MIN_BYTES } from './definition'

export function parseBytes(bytes: Buffer): RTPHeader {
    if (bytes.length < RTP_HEADER_MIN_BYTES) throw new Error("Header too short")

    let result: RTPHeader = {
        version: (bytes[0] >> 6) & 3,
        padding: !!((bytes[0] >> 5) & 1),
        marker: !!((bytes[1] >> 7) & 1),
        type: (bytes[1]) & 0x7F,
        sequenceNumber: bytes.readUInt16BE(2),
        timestamp: bytes.readUInt32BE(4),
        SSRC: bytes.readUInt32BE(8),
        CSRCs: undefined,
        extensions: undefined
    }

    let CSRC_count = bytes[0] & 0xF;
    if (CSRC_count) {
        let CSRCs: CSRC[] = []
        for (let i = 0; i < CSRC_count; i++) {
            CSRCs.push({
                id: bytes.readUInt16BE(12 + i * 4),
                length: bytes.readUInt16BE(12 + i * 4 + 2)
            })
        }
        result.CSRCs = CSRCs
    }

    // https://www.rfc-editor.org/rfc/rfc5285
    if (!!((bytes[0] >> 4) & 1)) {
        let extensions: Extension[] = []
        let cursor = 12 + CSRC_count * 4;

        let header_type__raw = bytes.readUInt16BE(cursor)
        let headerType: ExtensionHeaderType;
        if (header_type__raw == 0xBEDE) {
            headerType = ExtensionHeaderType.ONE_BYTE
        } else if (header_type__raw == 0x100) {
            headerType = ExtensionHeaderType.TWO_BYTE
        } else {
            throw new Error("Invalid extension header type " + header_type__raw)
        }

        let ext_count = bytes.readUInt16BE(cursor + 2)
        cursor += 4
        for (let i = 0; i < ext_count; i++) {
            if (bytes[cursor] == 0) {
                cursor++;
                i--;
                continue;
            }
            switch (headerType) {
                case ExtensionHeaderType.ONE_BYTE: {
                    let id = bytes[cursor] >> 4
                    let len = (bytes[cursor] & 0xF) + 1
                    let data = bytes.slice(cursor + 1, cursor + 1 + len)
                    extensions.push({ id, data })
                    cursor += 1 + len
                    break
                }
                case ExtensionHeaderType.TWO_BYTE: {
                    let id = bytes[cursor]
                    let len = bytes[cursor + 1]
                    let data = bytes.slice(cursor + 2, cursor + 2 + len)
                    extensions.push({ id, data })
                    cursor += 2 + len
                    break
                }
            }
        }
        result.extensions = extensions
    }

    return result
}
