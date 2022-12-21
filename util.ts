import type RTPHeader from './definition'
import { CSRC, RTP_HEADER_MIN_BYTES } from './definition'

export function parseBytes(bytes: Buffer): RTPHeader {
    if (bytes.length < RTP_HEADER_MIN_BYTES) throw new Error("Header too short")

    let result: RTPHeader = {
        version: (bytes[0] >> 6) & 3,
        hasPadding: !!((bytes[0] >> 5) & 1),
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

}
