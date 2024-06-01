import { style } from "../styles/f.css";

export const topAreaTitle = style([
  "network--text-base",
  "network--font-bold",
  "network--h-4",
  "network--leading-4",
]);

export const topArea = style([
  "network--flex",
  "network--flex-col",
  "network--bg-white",
  "network--px-3",
  "network--py-4",
  "network--border-solid",
  "network--border-b",
  "network--border-slate-700",
  "network--rounded-tr-lg",
  "network--rounded-tl-lg",
  "network--gap-2",
]);

export const topAreaLinks = style([
  "network--flex",
  "network--flex-col",
  "network--bg-white",
  "network--py-2",
  "network--border-b",
]);

export const topAreaLink = [
  style([
    "network--flex",
    "network--flex-row",
    "network--text-base",
    "network--text-gray-600",
    "network--py-2",
    "network--px-3",
    "network--justify-between",
  ]),
  "hover:network--bg-gray-200",
  "network--cursor-pointer",
].join(" ");

export const topAreaLinkCount = style([
  "network--text-base",
  "network--text-gray-600",
]);

export const img = style(["network--w-12"]);

export const name = style(["network--text-base", "network--font-bold"]);

export const email = style(["network--text-xs", "network--text-gray-600"]);

export const bottomArea = style([
  "network--flex",
  "network--flex-col",
  "network--bg-white",
  "network--px-3",
  "network--py-4",
  "network--rounded-br-lg",
  "network--rounded-bl-lg",
  "network--gap-2",
  "network--justify-center",
  "network--items-center",
]);
