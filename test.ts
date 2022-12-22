let rawPayload = [
//     `80 c8 00 06 60 84 bf 35 e7 4e 30 bf d8 db 16 3b
// 7c 68 d2 d8 00 00 00 be 00 01 02 d9 81 ca 00 06
// 60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
// 36 58 38 57 30 4e 00 00`,

//     `80 c8 00 06 60 84 bf 35 e7 4e 30 c0 f0 de 4c 51
// 7c 6a 53 74 00 00 00 be 00 01 02 d9 81 ca 00 06
// 60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
// 36 58 38 57 30 4e 00 00`,

//     `80 c8 00 06 60 84 bf 35 e7 4e 30 c1 dc a2 a9 0c
// 7c 6b 97 3e 00 00 00 be 00 01 02 d9 81 ca 00 06
// 60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
// 36 58 38 57 30 4e 00 00`,

//     `80 c8 00 06 60 84 bf 35 e7 4e 30 c2 a8 95 f2 45
// 7c 6c af 16 00 00 00 be 00 01 02 d9 81 ca 00 06
// 60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
// 36 58 38 57 30 4e 00 00`,

//     `90 a7 68 e0 7c 6d e4 1c 60 84 bf 35 be de 00 06
// 22 a6 55 cc 41 00 bf 90 30 7c 01 00 00 00 01 00
// 02 00 02 00 00 00 00 00 61 e0 02 40 04 be 42 f1
// b8 b8 e0 00 72 38 00 08 1f e2 7c 4f 89 f1 3e 27
// c4 f8 9f 13 e2 7c 4f 89 f1 3e 27 c4 f8 9f 13 e2
// 7c 4f 89 f1 3e 27 c4 f8 9f 13 e2 7c 4f 89 f1 3e
// 27 cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe
// 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9
// fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7
// f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f
// cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f
// 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc
// fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3
// f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf
// e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f
// 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe
// 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9
// fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7
// f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f
// cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f
// 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc
// fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3
// f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf
// e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f
// 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe
// 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9
// fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7
// f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f
// cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f
// 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc
// fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3
// f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf
// e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f
// 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe
// 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f3 f9
// fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f cf e7
// f3 f9 fc fe 7f 3f 9f cf e7 f3 f9 fc fe 7f 3f 9f
// cf e7 f3 f9 fc fe 7f 3f 9f cf e7 f8 18 67 89 00
// 04 84 00 40 00 40 5d 60 c5 4b 28 a9 78 1c 41 0b
// 2c 38 82 16 5c df f8 fd 02 aa ff a1 30 a1 05 af
// ed b7 10 b8 85 c4 2e 21 71 0b 88 5c 42 e2 17 10
// b8 85 c4 2e 21 71 0b 88 5c 42 e2 17 10 b8 85 c4
// 2e 21 71 0b 88 5c 42 e2 17 10 b8 85 c4 2e`,

    `80 c8 00 06 60 84 bf 35 e7 4e 30 c3 c0 bb f5 0e
7c 6e 30 0c 00 00 00 bf 00 01 05 5f 81 ca 00 06
60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
36 58 38 57 30 4e 00 00`,

    `80 c8 00 06 60 84 bf 35 e7 4e 30 c4 50 d1 c7 de
7c 6e f5 fa 00 00 00 bf 00 01 05 5f 81 ca 00 06
60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
36 58 38 57 30 4e 00 00`,

    `80 c8 00 06 60 84 bf 35 e7 4e 30 c4 e4 d4 66 f5
7c 6f c1 2e 00 00 00 bf 00 01 05 5f 81 ca 00 06
60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
36 58 38 57 30 4e 00 00`,

    `80 c8 00 06 60 84 bf 35 e7 4e 30 c5 e8 c2 d6 a9
7c 71 26 04 00 00 00 bf 00 01 05 5f 81 ca 00 06
60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
36 58 38 57 30 4e 00 00`,

//     `90 a7 68 e1 7c 72 03 80 60 84 bf 35 be de 00 06
// 22 b2 58 b2 41 00 c0 90 30 7c 01 00 01 00 02 00
// 02 00 02 00 00 00 00 00 61 e0 02 80 05 3e 47 80
// 70 cf c1 e4`,

//     `80 c8 00 06 60 84 bf 35 e7 4e 30 c7 3c b4 07 03
// 7c 72 f8 e4 00 00 00 c0 00 01 05 6b 81 ca 00 06
// 60 84 bf 35 01 10 48 48 4f 70 78 38 69 30 37 69
// 36 58 38 57 30 4e 00 00`
]

import { parseBytes } from './src/util'
rawPayload.forEach(raw => {
    let payload = Buffer.from(raw.replace(/\W/g, ''), 'hex')

    const [data, length] = parseBytes(payload)

    console.log(payload, data);
    console.log(payload.slice(length));
    console.log(payload.slice(length).toString());


    console.log('\n\n\n');
})