export const audio_map = {
    0: "PCMU",
    1: "Reserved",
    2: "Reserved",
    3: "GSM",
    4: "G723",
    5: "DVI4",
    6: "DVI4",
    7: "LPC",
    8: "PCMA",
    9: "G722",
    10: "L16",
    11: "L16",
    12: "QCELP",
    13: "CN",
    14: "MPA",
    15: "G728",
    16: "DVI4",
    17: "DVI4",
    18: "G729",
    19: "Reserved",
    20: "Unassigned",
    21: "Unassigned",
    22: "Unassigned",
    23: "Unassigned",
} as const

export const video_map = {
    24: "Unassigned",
    25: "CelB",
    26: "JPEG",
    27: "Unassigned",
    28: "nv",
    29: "Unassigned",
    30: "Unassigned",
    31: "H261",
    32: "MPV",
    34: "H263",
} as const

export const mixed_map = {
    33: 'MP2T'
} as const

export const misc_ranges_map = {
    Unassigned: [
        [77, 95]
    ],
    RTCP: [
        [72, 76]
    ],
    dynamic: [
        [96, 127]
    ]
} as const


type AllTypes =
    typeof audio_map[keyof typeof audio_map] |
    typeof video_map[keyof typeof video_map] |
    typeof mixed_map[keyof typeof mixed_map] |
    typeof misc_ranges_map |
    "Unknown"
    
export const AllTypes = <AllTypes><unknown>[...new Set([
    ...Object.values(audio_map),
    ...Object.values(video_map),
    ...Object.values(mixed_map),
    ...Object.keys(misc_ranges_map),
    "Unknown"
])]

export function resolve(type: number): AllTypes {
    let result = { ...audio_map, ...video_map, ...mixed_map }[type]
    if (result) return result

    for (const [key, ranges] of Object.entries(misc_ranges_map)) {
        for (let range of ranges) {
            if (range[0] <= type && type <= range[1]) return <AllTypes>key
        }
    }

    return "Unknown"
}