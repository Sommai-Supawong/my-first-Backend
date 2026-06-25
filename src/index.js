// Node.js 20+ รองรับ .env
// โดยไมตองติดตั้ง Package เพิ่ม!
// const port = process.env.PORT || 3000;
// console.log(`Server จะรันที่ Port: ${port}`);

import "dotenv/config";

const port = process.env.PORT;
const name = process.env.NAME;

console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);
