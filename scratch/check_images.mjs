import fs from "fs";

["lanyard-front.png", "lanyard-back.png", "lanyard-band.png"].forEach(f => {
  const p = `public/lanyard/${f}`;
  if (fs.existsSync(p)) {
    const stats = fs.statSync(p);
    console.log(f, "exists! Size:", stats.size, "bytes");
  } else {
    console.log(f, "DOES NOT EXIST!");
  }
});
