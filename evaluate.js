const http = require("http");

const serverUrl = "http://localhost:3000";

// Test if the server is running
http
  .get(serverUrl, (res) => {
    if (res.statusCode === 200) {
      console.log("Server is running: PASS");
    } else {
      console.error("Server is not running: FAIL");
      process.exit(1);
    }
  })
  .on("error", (err) => {
    console.error("Server is not running: FAIL", err);
    process.exit(1);
  });

// Test if the /questions endpoint returns valid data
http
  .get(`${serverUrl}/questions`, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      try {
        const questions = JSON.parse(data);
        if (Array.isArray(questions) && questions.length > 0) {
          console.log("/questions endpoint: PASS");
        } else {
          console.error("/questions endpoint: FAIL");
          process.exit(1);
        }
      } catch (err) {
        console.error("/questions endpoint: FAIL", err);
        process.exit(1);
      }
    });
  })
  .on("error", (err) => {
    console.error("/questions endpoint: FAIL", err);
    process.exit(1);
  });
