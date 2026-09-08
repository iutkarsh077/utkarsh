const fs = require("fs");

function readJson(path) {
  const raw = fs.readFileSync(path, "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(raw);
}

const base = readJson("music-fetch.json");
const fixes = readJson("music-fetch-fixes.json");
const more = readJson("music-fetch-more.json");
const byId = new Map();
for (const t of [...base, ...fixes, ...more]) byId.set(t.id, t);

function track(id) {
  const t = byId.get(id);
  if (!t) throw new Error("missing " + id);
  const preview = t.previewUrl ? JSON.stringify(t.previewUrl) : "null";
  return `      {
        id: ${JSON.stringify(t.id)},
        name: ${JSON.stringify(t.name)},
        artist: ${JSON.stringify(t.artist)},
        album: ${JSON.stringify(t.album)},
        albumArt: ${JSON.stringify(t.albumArt)},
        previewUrl: ${preview},
        duration: ${t.duration},
      }`;
}

function playlist(cfg) {
  const tracks = cfg.ids.map(track).join(",\n");
  return `  {
    id: ${JSON.stringify(cfg.id)},
    name: ${JSON.stringify(cfg.name)},
    description: ${JSON.stringify(cfg.description)},
    coverArt: ${JSON.stringify(byId.get(cfg.coverFrom).albumArt)},
${cfg.featured ? "    is_featured: true,\n" : ""}    tracks: [
${tracks}
    ],
  }`;
}

const playlists = [
  playlist({
    id: "frequently-played",
    name: "Frequently Played",
    description: "On repeat — Punjabi heat and a few wildcards",
    coverFrom: "fp1",
    featured: true,
    ids: [
      "fp1", "fp2", "fp3", "fp4", "fp5", "fp6", "fp7", "fp8", "fp9", "fp10",
      "fp11", "fp12", "fp13", "fp14", "fp15", "fp16", "fp17", "fp18", "fp19",
      "fp20", "fp21", "fp22",
    ],
  }),
  playlist({
    id: "moosetape-essentials",
    name: "Essential: Moosetape",
    description: "Sidhu Moose Wala essentials",
    coverFrom: "ms3",
    ids: [
      "ms1", "ms2", "ms3", "ms4", "ms5", "ms6", "ms7", "ms8", "ms9", "ms10",
      "ms11", "fp1", "fp14", "fp17",
    ],
  }),
  playlist({
    id: "karan-aujla",
    name: "Fan Favourite: Karan Aujla",
    description: "Softly, antidotes, and P-POP energy",
    coverFrom: "ka1",
    ids: ["ka1", "ka2", "ka3", "ka4", "ka6", "ka7", "fp3", "fp10", "fp11", "fp15", "fp18"],
  }),
  playlist({
    id: "judaa-classic",
    name: "Classic: Judaa",
    description: "Amrinder Gill era classics and vibes",
    coverFrom: "jd1",
    ids: ["jd1", "jd2", "jd3", "jd8", "jd9", "jd10"],
  }),
  playlist({
    id: "punjabi-singles",
    name: "Punjabi Singles",
    description: "Chart-leaning Punjabi hits",
    coverFrom: "mx4",
    ids: ["mx4", "mx5", "mx6", "mx7", "mx8", "mx1", "mx2", "mx3", "fp2", "fp7", "fp20"],
  }),
  playlist({
    id: "violin-and-vibes",
    name: "Violin & Vibes",
    description: "Lindsey Stirling cuts in the mix",
    coverFrom: "ls1",
    ids: ["ls1", "ls2", "fp19", "fp21", "fp22", "fp5", "fp12"],
  }),
];

const old = fs.readFileSync("components/apps/music/data.ts", "utf8");
const helpers = old.split("// Get all unique albums from playlists")[1];

const out =
  `import { Playlist } from "./types";\n\n` +
  `// Punjabi-forward library inspired by nikhilsheoran.com/music\n` +
  `export const DEFAULT_PLAYLISTS: Playlist[] = [\n` +
  playlists.join(",\n") +
  `\n];\n\n` +
  `// Get all unique albums from playlists` +
  helpers.replace(
    /export const DEFAULT_TRACK = DEFAULT_PLAYLISTS\[0\]\.tracks\[0\];.*/,
    'export const DEFAULT_TRACK = DEFAULT_PLAYLISTS[0].tracks[0]; // Dark Love'
  );

fs.writeFileSync("components/apps/music/data.ts", out);
console.log("Wrote", playlists.length, "playlists from", byId.size, "tracks");
