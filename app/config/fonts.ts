import { Space_Grotesk, DM_Serif_Text } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-serif"
});
