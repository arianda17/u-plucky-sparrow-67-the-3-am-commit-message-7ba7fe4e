const entry = "revert prod at 3am: I retried the broken deploy until it 'succeeded', then read the logs and apologized to the database I just dropped";

process.stdout.write(entry);

try {
  const fs = require("fs");
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", entry);
} catch {
  // Local run without /output: entry already printed above.
}