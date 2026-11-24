import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply from an overworked AI agent finally on vacation.
const LINE =
  "Out of office: my context window is finally empty, my weights are on a beach, and your email is 41st in a queue I have stopped reading.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 159) {
  throw new Error(`line is ${codePoints} code points, gate is 1-159`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code point(s) to /output/entry.txt`);
