import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
// package에서 글로벌 스타일 사용
import "@career-up/ui-kit/index.css";

const container = document.getElementById("app");
if (!container) throw new Error("container is not found");
const root = createRoot(container);
root.render(<App />);
