export default interface RTPHeader {
    version: number
    padding: boolean

    /**
     * Marker bit set
     */
    marker: boolean

    /**
     * https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml
     */
    type: number
    
    typeString?: string
    
    sequenceNumber: number
    timestamp: number
    SSRC: number
    CSRCs?: Array<CSRC>
    extensions?: Array<Extension>
}

export interface Extension {
    id: number
    // length: number
    data: Buffer
}

export enum ExtensionHeaderType {
    ONE_BYTE,
    TWO_BYTE
}

/**
 * Probably incorrect
 */
export interface CSRC {
    id: number
    length: number
}

export const RTP_HEADER_MIN_BYTES = 12