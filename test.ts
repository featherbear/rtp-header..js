let rawPayload =
    [`
    90 00 7e 1b bf 75 65 2b 76 e9 48 83 be de 00 03
    22 fa 9c 28 31 02 fe 10 a9 00 00 00 78 ef 94 95
    63 c3 85 7e ea bc 8e 64 cd 40 36 df 6d c8 6a 22
    71 c3 55 7f 09 20 80 9a 0b ff d5 1d 68 cc d3 6b
    69 ec 06 0f d2 81 da b7 e8 d4 b7 3b f7 dc 1a 42
    ed 7b 88 65 57 ec 89 4d 83 11 50 f5 35 f6 2f e1
    69 41 3f a1 33 12 11 c1 5a 7d 56 ee 91 1d 6c 01
    ad c4 e7 aa f6 51 c7 fe 92 75 3e 6e 7c a8 91 64
    00 b0 aa 5b ec 11 1a 95 d5 be 80 bf 5b 8c 2d 09
    4b 7f c1 af ca 0f 13 a2 a0 cd ae 1b 71 3b 1b 3f
    a6 22 b6 ee 52 96 f1 32 ca 4b 74 41 27 99 28 6f
    96 91 b6 1b 32 d3 81 73 7d 65 98 f3 f9 f4 a4 2e
    9f 50 67 d2 48 f5
    `]

import { parseBytes } from './src/util'
rawPayload.forEach(raw => {
    let payload = Buffer.from(raw.replace(/\W/g, ''), 'hex')
    
    console.log(payload, parseBytes(payload), '\n\n\n\n');
})
