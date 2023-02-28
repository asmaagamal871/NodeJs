const http = require("http");
// console.log(http)
const lab1 = require("fs");
lab1.writeFileSync("lab1.txt", "hello\n");
http
  .createServer((request, response) => {
    console.log(request.url);
    if (request.url != "/favicon.ico") {
      let url = request.url.split("/");
      console.log(url);
      let operator = url[1];
      var result = 0;
      switch (operator) {
        case "add":
          result = 0;
          for (let i = 2; i < url.length; i++) {
            result += Number(url[i]);
          }
          console.log(result);
          response.write(`<h1> ${result}</h1>`);
          //   lab1.appendFileSync("lab1.txt", operator + ":" + result);

          break;
        case "sub":
          result = url[2];
          for (let i = 3; i < url.length; i++) {
            result -= Number(url[i]);
          }
          console.log(result);
          response.write(`<h1> ${result}</h1>`);
          break;
        case "mult":
          result = 1;
          for (let i = 2; i < url.length; i++) {
            result *= Number(url[i]);
          }
          console.log(result);
          response.write(`<h1> ${result}</h1>`);
          break;
        case "div":
          result = url[2];
          for (let i = 3; i < url.length; i++) {
            result /= Number(url[i]);
          }
          console.log(result);
          response.write(`<h1> ${result}</h1>`);
          break;
      }
      lab1.appendFileSync("lab1.txt", operator + ":" + result + "\n");
    }
    response.end();
  })
  .listen("7000", () => {
    console.log("hello from the server");
  });
