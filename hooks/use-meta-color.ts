import { useTheme } from "next-themes";
import { META_THEME_COLORS } from "@/lib/constants";

export function useMetaColor() {
  const { resolvedTheme } = useTheme();

  const metaColor = resolvedTheme !== "dark" ? META_THEME_COLORS.light : META_THEME_COLORS.dark;

  const setMetaColor = (color: string) => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", color);
  };

  return {
    metaColor,
    setMetaColor,
  };
}
