import fs from "fs";

const p = "public/lanyard/lanyard-band.png";
const buf = fs.readFileSync(p);
console.log("Size:", buf.length);
console.log("Magic bytes (hex):", buf.subarray(0, 16).toString("hex"));
console.log("First 64 bytes (utf8):", buf.subarray(0, 64).toString("utf8"));
