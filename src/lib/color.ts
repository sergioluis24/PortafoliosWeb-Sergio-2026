export function hexToRgb(hex: string) {
  if (!hex) return { r: 255, g: 255, b: 255 };
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const int = parseInt(full, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

export function hexToRgba(hex: string, alpha = 0.18) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function hexToShadow(hex: string, alpha = 0.18) {
  return hexToRgba(hex, alpha);
}

export function hexToBorder(hex: string, alpha = 0.1) {
  return hexToRgba(hex, alpha);
}
