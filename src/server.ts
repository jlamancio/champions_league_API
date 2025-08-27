import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT;

// midleware 
app.use(express.json())     

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ player: "beckham" });
});

app.listen(port);
console.log(`⚡ Server is running at port http://localhost:${port}`);

