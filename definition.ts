export default interface RTPHeader {
    version: number
    hasPadding: boolean
    marker: boolean
    type: number
    sequenceNumber: number
    timestamp: number
    SSRC: number
    CSRCs?: Array<CSRC>
    extensions?: Array<unknown>
}

/**
 * Probably incorrect
 */
export interface CSRC {
    id: number
    length: number
}

export const RTP_HEADER_MIN_BYTES = 12