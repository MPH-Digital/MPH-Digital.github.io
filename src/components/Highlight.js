import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Highlight({ children }) {
  const { colorMode, setColorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#555" : "#ddd";
  const fontColor = colorMode === "dark" ? "#eee" : "#444";
  return (
    <span
      style={{
        backgroundColor: bgColor,
        borderRadius: "4px",
        color: fontColor,
        padding: "2px 5px",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}
