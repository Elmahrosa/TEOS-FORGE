#!/usr/bin/env node
import { run } from "../src/index.js";

run(process.argv).catch((err) => {
  const msg = err?.message || String(err);
  console.error(msg);
  process.exit(1);
});
