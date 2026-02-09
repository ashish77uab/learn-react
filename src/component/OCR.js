


// import { Mistral } from '@mistralai/mistralai';
// import fs from 'fs';

// const apiKey = process.env.REACT_APP_MISTRAL_API_KEY;

// const client = new Mistral({ apiKey: apiKey });

// async function encodeImage(imagePath) {
//     const imageBuffer = fs.readFileSync(imagePath);
//     const base64Image = imageBuffer.toString('base64');
//     return base64Image;
// }

// const imagePath = "/images/ticket.png";
// const base64Image = await encodeImage(imagePath);

// const ocrResponse = await client.ocr.process({
//     model: "mistral-ocr-latest",
//     document: {
//         type: "image_url",
//         imageUrl: "data:image/jpeg;base64," + base64Image
//     },
//     includeImageBase64: true
// });

// console.log(ocrResponse, 'res')