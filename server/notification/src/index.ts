import http from "http";
import { Server } from "socket.io";

const server = http.createServer();
const io = new Server(server);


io.on("connetion", socket => {
    console.log(socket.id)
})

server.listen(6000, () => console.log(`Notification service running on ${6000}`));