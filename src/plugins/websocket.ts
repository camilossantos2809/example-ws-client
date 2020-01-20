let ws: WebSocket;

if (!ws) {
  ws = new WebSocket("ws://192.168.40.138:3000");
}

export default ws;
