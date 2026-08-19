import fs from "fs";

// Read card.glb and check for node names in the binary JSON chunk
const glb = fs.readFileSync("src/assets/lanyard/card.glb");
const jsonLength = glb.readUInt32LE(12);
const jsonChunk = glb.subarray(20, 20 + jsonLength).toString("utf8");
const parsed = JSON.parse(jsonChunk);

console.log("Nodes:", parsed.nodes?.map(n => n.name));
console.log("Materials:", parsed.materials?.map(m => m.name));
console.log("Meshes:", parsed.meshes?.map(m => m.name));
