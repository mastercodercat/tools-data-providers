#!/usr/bin/env node
import { $ } from "zx";

const outputs = JSON.parse(process.argv[2]);

for (const key in outputs) {
  const value = outputs[key];
  const match = key.match(/^(.*\/.*)--release_created$/);
  if (!match || !value) continue;
  const workspace = match[1];
  await $`pnpm publish --files ./${workspace} --access public`;
}
