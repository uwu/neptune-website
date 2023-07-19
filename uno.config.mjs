import { defineConfig, presetWebFonts, presetWind } from "unocss";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {
        mono: ["JetBrains Mono"],
        uwu: "IBM Plex Mono"
      },
    }),
  ],
  // extendTheme: true,
  theme: {
    colors: {
      accent: "#7C6BF6",
      secondary: "#4A408E",
      dark: "#181616",
      offwhite: "#efeef2"
    }
  }
});
