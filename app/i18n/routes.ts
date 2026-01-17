import type { Locale } from "@/app/i18n/locale";

export const routes = {
  home: {
    fr: "/",
    en: "/en"
  },
  projects: {
    fr: "/mes-projets",
    en: "/en/projects"
  },
  about: {
    fr: "/a-propos",
    en: "/en/about"
  },
  contact: {
    fr: "/contact",
    en: "/en/contact"
  }
} as const;

export type RouteKey = keyof typeof routes;

const routeKeyByLocale: Record<Locale, Record<string, RouteKey>> = {
  fr: {
    "/": "home",
    "/mes-projets": "projects",
    "/a-propos": "about",
    "/contact": "contact"
  },
  en: {
    "/en": "home",
    "/en/projects": "projects",
    "/en/about": "about",
    "/en/contact": "contact"
  }
};

const normalizePathname = (pathname: string): string => {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
};

export const getRoute = (key: RouteKey, locale: Locale): string =>
  routes[key][locale];

export const getAlternatePathname = (
  pathname: string,
  locale: Locale
): string => {
  const normalized = normalizePathname(pathname);
  const routeKey = routeKeyByLocale[locale][normalized];
  const nextLocale = locale === "fr" ? "en" : "fr";

  return routeKey ? getRoute(routeKey, nextLocale) : getRoute("home", nextLocale);
};
