// index.js — Express.js Server (Preview)
import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json()); // Middleware: แปลง JSON
// Routes
app.get('/', (req, res) => {
res.json({ message: 'สวัสดีจาก Express.js!' });
});
app.listen(PORT, () => {
console.log("Server is running on http://localhost:3000");
});