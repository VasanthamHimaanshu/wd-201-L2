const http = require("http");
const fs = require("fs");
let homeContent = "";
let filecontent = "";
let reg = "";
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  filecontent = project;
});
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  reg = registration;
});
let args = require("minimist")(process.argv.slice(2));
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-type": "text/html" });
    switch (url) {
      case "./project":
        response.write(filecontent);
        response.end();
        break;
      case "/registration":
        response.write(reg);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args["port"]);
