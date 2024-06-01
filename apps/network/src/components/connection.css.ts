import { style } from "../styles/f.css";

export const wrapper = [
  style([
    "network--flex",
    "network--flex-col",
    "network--bg-white",
    "network--p-4",
    "network--rounded-lg",
    "network--gap-4",
    "network--border-solid",
    "network--border",
    "network--border-slate-700",
    "network--items-center",
  ]),
  "hover:network--border-blue-600 cursor-pointer",
].join(" ");

export const picture = style(["network--w-12"]);

export const name = style(["network--text-base", "network--font-bold"]);

export const role = style(["network--text-xs", "network--text-gray-600"]);

export const networkCount = style([
  "network--text-xs",
  "network--text-gray-600",
]);
