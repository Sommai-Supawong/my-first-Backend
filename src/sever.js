// index.js — Express.js Server (Preview)
import express from 'express';
import "dotenv/config"; // Load environment variables from .env file
const app = express();
const PORT = 8888;
app.use(express.json()); // Middleware: แปลง JSON
// Routes
app.get('/', (req, res) => {
res.json({ message: 'สวัสดีจาก Express.js!' });
});
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});