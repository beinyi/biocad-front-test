import { useTheme, useMediaQuery } from "@mui/material";
import type { Breakpoint } from "@mui/system";

/**
 * Конфигурация: сколько элементов в строке на каждом брейкпоинте.
 */
const config: Record<Breakpoint, number> = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

/**
 * Хук возвращает число элементов в строке, основываясь на текущем брейкпоинте.
 * @param totalLength — общая длина последовательности, чтобы не выйти за пределы
 */
export const useItemsPerRow = (totalLength: number): number => {
  const theme = useTheme();

  const matchesXl = useMediaQuery(theme.breakpoints.up("xl"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  if (matchesXl) return Math.min(config.xl, totalLength);
  if (matchesLg) return Math.min(config.lg, totalLength);
  if (matchesMd) return Math.min(config.md, totalLength);
  if (matchesSm) return Math.min(config.sm, totalLength);
  return Math.min(config.xs, totalLength);
};
