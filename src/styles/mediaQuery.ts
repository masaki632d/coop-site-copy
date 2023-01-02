const breakpoints = [640, 992, 1200]

export const mq = {
  sm: `@media (max-width: ${breakpoints[0] - 1}px)`,
  md: `@media (max-width: ${breakpoints[1] - 1}px)`,
  lg: `@media (max-width: ${breakpoints[2] - 1}px)`,
} as const
