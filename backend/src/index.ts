import { HOSTNAME, PORT } from "./config/environment";
import http from "http";
import express, { ErrorRequestHandler } from "express";
import helmet from "helmet";
import cors from "cors";
import errorHandler, { ErrorResponse } from "./middlewares/errorhandler";
import Logger from "./utils/logger.util";

import apiRoutes from "./api/routes";

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: false }));


// Add API routes
app.use("/api", apiRoutes);

app.use("*", (req, res) => {
    let message = `Can't ${req.method} ${req.originalUrl}`;

    Logger.error(message);
    throw new ErrorResponse(404, message);
});

app.use((errorHandler as ErrorRequestHandler));

// Gi export ang server para magamit sa uban nga service
export const server = http.createServer(app);

server.listen(PORT, () => Logger.success(`Server running on http://${HOSTNAME}:${PORT}`));