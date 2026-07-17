"use client";

import React from "react";

interface LogoProps {
  variant?: "horizontal" | "stacked" | "icon";
  theme?: "gold" | "black" | "white" | "auto";
  className?: string;
}

export const MaisonDevamLogo: React.FC<LogoProps> = ({
  variant = "horizontal",
  theme = "auto",
  className = "",
}) => {
  const getThemeColors = () => {
    switch (theme) {
      case "gold":
        return { primary: "#C9A227", text: "#C9A227", accent: "#E8DFD4" };
      case "black":
        return { primary: "#1A1A1A", text: "#1A1A1A", accent: "#C9A227" };
      case "white":
        return { primary: "#F8F6F2", text: "#F8F6F2", accent: "#C9A227" };
      case "auto":
      default:
        return {
          primary: "currentColor",
          text: "currentColor",
          accent: "#C9A227",
        };
    }
  };

  const colors = getThemeColors();

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-10 h-10 transition-transform duration-300 ${className}`}
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={colors.accent}
          strokeWidth="1.2"
          opacity="0.8"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={colors.accent}
          strokeWidth="0.5"
          opacity="0.4"
          strokeDasharray="2 2"
        />
        <path
          d="M50 14 C47 20, 42 22, 50 28 C58 22, 53 20, 50 14 Z"
          fill={colors.accent}
          opacity="0.95"
        />
        <path
          d="M41 19 C42 23, 46 25, 48 27 C42 26, 38 23, 41 19 Z"
          fill={colors.accent}
          opacity="0.65"
        />
        <path
          d="M59 19 C58 23, 54 25, 52 27 C58 26, 62 23, 59 19 Z"
          fill={colors.accent}
          opacity="0.65"
        />
        <path
          d="M30 68 V38 L43 53 L56 38 V68"
          stroke={colors.primary}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56 38 H64 C72 38, 76 44, 76 53 C76 62, 72 68, 64 68 H56"
          stroke={colors.primary}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="78" r="1.6" fill={colors.accent} />
      </svg>
    );
  }

  if (variant === "stacked") {
    return (
      <svg
        viewBox="0 0 200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-36 h-auto ${className}`}
      >
        <g transform="translate(60, 10) scale(0.8)">
          <circle cx="50" cy="50" r="46" stroke={colors.accent} strokeWidth="1.5" />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke={colors.accent}
            strokeWidth="0.5"
            opacity="0.5"
            strokeDasharray="2 2"
          />
          <path
            d="M50 14 C47 20, 42 22, 50 28 C58 22, 53 20, 50 14 Z"
            fill={colors.accent}
          />
          <path
            d="M41 19 C42 23, 46 25, 48 27 C42 26, 38 23, 41 19 Z"
            fill={colors.accent}
            opacity="0.7"
          />
          <path
            d="M59 19 C58 23, 54 25, 52 27 C58 26, 62 23, 59 19 Z"
            fill={colors.accent}
            opacity="0.7"
          />
          <path
            d="M30 68 V38 L43 53 L56 38 V68"
            stroke={colors.primary}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56 38 H64 C72 38, 76 44, 76 53 C76 62, 72 68, 64 68 H56"
            stroke={colors.primary}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="78" r="1.8" fill={colors.accent} />
        </g>
        <text
          x="100"
          y="126"
          textAnchor="middle"
          className="font-serif font-semibold tracking-[0.14em]"
          style={{ fontFamily: "'Playfair Display', serif" }}
          fontSize="22"
          fill={colors.text}
        >
          MAISON DEVAM
        </text>
        <line
          x1="30"
          y1="139"
          x2="170"
          y2="139"
          stroke={colors.accent}
          strokeWidth="0.7"
          opacity="0.6"
        />
        <text
          x="100"
          y="156"
          textAnchor="middle"
          className="font-sans font-light tracking-[0.35em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
          fontSize="8.5"
          fill={colors.accent}
        >
          LUXURY • BEAUTY • SERENITY
        </text>
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="#C9A227"
            strokeWidth="1.4"
            opacity="0.85"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#C9A227"
            strokeWidth="0.5"
            opacity="0.4"
            strokeDasharray="2 2"
          />
          <path
            d="M50 14 C47 20, 42 22, 50 28 C58 22, 53 20, 50 14 Z"
            fill="#C9A227"
          />
          <path
            d="M41 19 C42 23, 46 25, 48 27 C42 26, 38 23, 41 19 Z"
            fill="#C9A227"
            opacity="0.7"
          />
          <path
            d="M59 19 C58 23, 54 25, 52 27 C58 26, 62 23, 59 19 Z"
            fill="#C9A227"
            opacity="0.7"
          />
          <path
            d="M30 68 V38 L43 53 L56 38 V68"
            stroke={colors.primary === "currentColor" ? "#C9A227" : colors.primary}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56 38 H64 C72 38, 76 44, 76 53 C76 62, 72 68, 64 68 H56"
            stroke={colors.primary === "currentColor" ? "#C9A227" : colors.primary}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="78" r="1.8" fill="#C9A227" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className="font-serif font-semibold text-xl md:text-2xl tracking-[0.14em] text-zinc-900 dark:text-ivory leading-none transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          MAISON DEVAM
        </span>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[1px] w-4 bg-gradient-to-r from-gold to-transparent" />
          <span
            className="font-sans text-[9px] font-light tracking-[0.32em] text-[#C9A227] uppercase leading-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Luxury • Beauty • Serenity
          </span>
        </div>
      </div>
    </div>
  );
};
