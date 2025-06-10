import express from "express";
import helmet from "helmet";
import http from "http";
import cors from "cors";


const app = express();
const server = http.createServer(app);

app.use(helmet());
app.use(cors());



server.listen(5000, () => console.log(`Server running on port ${5000}`))