import http from "http";
import { Server } from "socket.io";

const server = http.createServer();
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(socket.id);
});

server.listen(4000, () => console.log(`Socket running on port ${4000}`));