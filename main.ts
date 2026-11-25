// One Star, Written in Sap
// Writes a single one-line 1-star review, in the voice of a houseplant
// reviewing its human owner, to /output/entry.txt.
// Node 22 stdlib only: no dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star. He waters my leaves like they're the ones thirsty, then drags me to a new 'better light' every Tuesday. I've lived in this corner since 2021. I wrote this review in sap, so by the time it dries he'll have moved me again and watered the curtains.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
