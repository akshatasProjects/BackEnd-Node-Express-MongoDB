// CREATING SERVER USING NODE

let http = require("http");

let server = http.createServer((frontRequest, serverResponse) => {
  if (frontRequest.url == "/news") {
    let obj = {
      staus: 1,
      data: [
        {
          newsTitle: "ws",
          newsDesc: "WS hello",
        },
        {
          newsTitle: "IIP",
          newsDesc: "IIP hello",
        },
      ],
    };
    serverResponse.end(JSON.stringify(obj));
  }

  serverResponse.end("This is a message from server");
});

server.listen("8000"); // http://localhost:8000
