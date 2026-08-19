import fs from "fs";

["lanyard-front.png", "lanyard-back.png", "lanyard-band.png"].forEach(f => {
  const p = `public/lanyard/${f}`;
  const buf = fs.readFileSync(p);
  console.log(f, "Size:", buf.length, "Magic bytes:", buf.subarray(0, 8).toString("hex"));
});
