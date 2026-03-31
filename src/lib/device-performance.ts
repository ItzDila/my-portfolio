type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
    saveData?: boolean;
  };
};

export function isLowEndAndroidDevice(): boolean {
  if (typeof window === "undefined") return false;

  const nav = navigator as NavigatorWithHints;
  const userAgent = nav.userAgent.toLowerCase();
  const isAndroid = /android/.test(userAgent);

  if (!isAndroid) return false;

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  const cores = nav.hardwareConcurrency ?? 8;
  const memory = nav.deviceMemory ?? 8;
  const effectiveType = nav.connection?.effectiveType ?? "";
  const saveData = nav.connection?.saveData ?? false;
  const poorNetwork = /2g|3g/.test(effectiveType);

  return prefersReducedMotion || saveData || poorNetwork || cores <= 4 || memory <= 4;
}