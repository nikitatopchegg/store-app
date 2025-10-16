export const breakpoint = {
  desktop: "1435px",
  table: "980px",
  bigPhone: "640px",
  smallPhone: "470px",
};

export const media = {
  desktop: (styles: string) =>
    `@media (max-width: ${breakpoint.desktop}) { ${styles} }`,
  table: (styles: string) =>
    `@media (max-width: ${breakpoint.table}) { ${styles} }`,
  bigPhone: (styles: string) =>
    `@media (max-width: ${breakpoint.bigPhone}) { ${styles} }`,
  smallPhone: (styles: string) =>
    `@media (max-width: ${breakpoint.smallPhone}) { ${styles} }`,
};
