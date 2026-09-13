import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const planPath = join(root, "data", "timscare-visuals.ts");
const plan = readFileSync(planPath, "utf8");
const photoPattern = /\/images\/cliente\/timscare-(\d{2})\.jpeg/g;
const planned = [...plan.matchAll(photoPattern)].map((match) => ({
  number: match[1],
  path: match[0],
}));
const expectedNumbers = Array.from({ length: 31 }, (_, index) =>
  String(index + 1).padStart(2, "0"),
);
const errors = [];

if (planned.length !== 31) {
  errors.push(`Le plan contient ${planned.length} chemins au lieu de 31.`);
}

const uniquePaths = new Set(planned.map(({ path }) => path));
if (uniquePaths.size !== 31) {
  errors.push(`Le plan contient ${31 - uniquePaths.size} doublon(s).`);
}

const numbers = new Set(planned.map(({ number }) => number));
for (const number of expectedNumbers) {
  if (!numbers.has(number)) errors.push(`PHOTO ${number} manque dans le plan.`);
}

for (const { path } of planned) {
  if (!existsSync(join(root, "public", path))) {
    errors.push(`Fichier absent : ${path}`);
  }
}

const photoDirectory = join(root, "public", "images", "cliente");
const diskPhotos = readdirSync(photoDirectory)
  .filter((name) => /^timscare-\d{2}\.jpeg$/.test(name))
  .sort();
const expectedFiles = expectedNumbers.map((number) => `timscare-${number}.jpeg`);

if (
  diskPhotos.length !== expectedFiles.length ||
  diskPhotos.some((name, index) => name !== expectedFiles[index])
) {
  errors.push("Le dossier cliente doit contenir exactement timscare-01.jpeg à timscare-31.jpeg.");
}

const ignoredDirectories = new Set([".git", ".next", "node_modules", "public"]);
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    if (ignoredDirectories.has(entry)) continue;
    const absolute = join(directory, entry);
    if (statSync(absolute).isDirectory()) {
      walk(absolute);
      continue;
    }
    if (!sourceExtensions.has(extname(entry)) || absolute === planPath) continue;
    const content = readFileSync(absolute, "utf8");
    if (photoPattern.test(content)) {
      errors.push(`Chemin photo codé hors du plan : ${relative(root, absolute)}`);
    }
    photoPattern.lastIndex = 0;
  }
}

walk(root);

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Plan Timscare valide : 31 photos, 31 chemins uniques, aucun fichier dupliqué et chemins centralisés.");
