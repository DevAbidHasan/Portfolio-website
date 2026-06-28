import sharp from "sharp";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const source = path.join(root, "public", "PXL_20240130_070044507.jpg");
const heroWebp = path.join(root, "public", "profile-hero.webp");
const heroJpg = path.join(root, "public", "profile-hero.jpg");
const avatarWebp = path.join(root, "public", "profile-avatar.webp");

const meta = await sharp(source).metadata();
console.log(`Source: ${meta.width}x${meta.height}, ${((await stat(source)).size / 1024 / 1024).toFixed(2)} MB`);

const heroPipeline = (instance) =>
  instance
    .resize(720, 900, { fit: "cover", position: "top" })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.3 });

await heroPipeline(sharp(source)).webp({ quality: 86, effort: 6 }).toFile(heroWebp);
await heroPipeline(sharp(source)).jpeg({ quality: 88, mozjpeg: true }).toFile(heroJpg);

await sharp(source)
  .resize(160, 160, { fit: "cover", position: "top" })
  .sharpen({ sigma: 0.4 })
  .webp({ quality: 85 })
  .toFile(avatarWebp);

for (const file of [heroWebp, heroJpg, avatarWebp]) {
  const { size } = await stat(file);
  console.log(`${path.basename(file)}: ${(size / 1024).toFixed(1)} KB`);
}
