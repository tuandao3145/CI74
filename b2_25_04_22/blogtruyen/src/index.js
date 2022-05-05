import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

//component file
import MangaList from "./components/MangaList.js";

//
const element = <MangaList />;

// render root
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(element);
