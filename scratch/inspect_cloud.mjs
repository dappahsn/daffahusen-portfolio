import fs from "fs";

const buf = fs.readFileSync("public/awan-section.png");
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log("Dimensions:", width, "x", height);
