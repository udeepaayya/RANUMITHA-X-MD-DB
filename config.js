const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "uItzXTgB#d5YUlBlohlFosNN_eUYAXbuQcYVKDtkcgJYKwuTFm0k",
// add your Session Id (මුලට "ranu& keella oni naha")
MONGODB: process.env.MONGODB || "mongodb://mongo:bGqezNHhlqiuAtcEornqgvwRRcXJdclS@crossover.proxy.rlwy.net:27565",
// Enter your mongoDB public URL
OWNER_NUM: process.env.OWNER_NUM || "94762095304",
// add owner number 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94762095304",
// add your bot owner number
DEV: process.env.DEV || "94762095304"
//replace with your whatsapp number

};
