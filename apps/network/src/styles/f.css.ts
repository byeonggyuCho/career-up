const prefix = "network--";

export const style = (classNames: string[]): string =>
  classNames.map((className) => `${prefix}${className}`).join("");
