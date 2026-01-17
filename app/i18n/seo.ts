import type { Metadata } from "next";
import type { Locale } from "@/app/i18n/locale";
import type { RouteKey } from "@/app/i18n/routes";
import { getRoute } from "@/app/i18n/routes";
import { site } from "@/app/config/site";

const pageMetadata: Record<Locale, Record<RouteKey, { title: string; description: string }>> = {
  fr: {
    home: {
      title: "Freelance Power Platform Paris | Power Apps & Power Automate",
      description: site.description.fr
    },
    projects: {
      title: "Mes projets Power Platform",
      description:
        "Portfolio Power Platform: missions Power Apps, Power Automate et automatisation Microsoft 365 pour grands groupes."
    },
    about: {
      title: "À propos du freelance Power Platform",
      description:
        "Profil de freelance Power Platform à Paris: expertise Power Apps, Power Automate, Microsoft 365 et missions en grands groupes."
    },
    contact: {
      title: "Contact freelance Power Platform Paris",
      description:
        "Contactez un freelance Power Platform à Paris pour vos projets Power Platform et automatisation Microsoft 365."
    }
  },
  en: {
    home: {
      title: "Power Platform Freelancer Paris | Power Apps & Power Automate",
      description: site.description.en
    },
    projects: {
      title: "Power Platform Projects",
      description:
        "Power Platform portfolio: Power Apps, Power Automate, and Microsoft 365 automation for enterprise teams."
    },
    about: {
      title: "About the Power Platform Freelancer",
      description:
        "Power Platform freelancer profile in Paris: Power Apps, Power Automate, Microsoft 365 expertise, and enterprise delivery."
    },
    contact: {
      title: "Contact Power Platform Freelancer Paris",
      description:
        "Get in touch with a Paris-based Power Platform freelancer for Power Apps, Power Automate, and Microsoft 365 automation."
    }
  }
};

export const getPageMetadata = (
  locale: Locale,
  page: RouteKey
): Metadata => {
  const pageInfo = pageMetadata[locale][page];
  const canonical = new URL(getRoute(page, locale), site.url).toString();

  return {
    title: pageInfo.title,
    description: pageInfo.description,
    alternates: {
      canonical,
      languages: {
        fr: new URL(getRoute(page, "fr"), site.url).toString(),
        en: new URL(getRoute(page, "en"), site.url).toString()
      }
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: canonical,
      siteName: site.name,
      title: pageInfo.title,
      description: pageInfo.description,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: site.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageInfo.title,
      description: pageInfo.description,
      images: [site.ogImage]
    }
  };
};

export const getLayoutMetadata = (locale: Locale): Metadata => {
  const pageInfo = pageMetadata[locale].home;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: pageInfo.title,
      template:
        locale === "fr"
          ? "%s | Freelance Power Platform Paris"
          : "%s | Power Platform Freelancer Paris"
    },
    description: pageInfo.description,
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: site.url,
      siteName: site.name,
      title: pageInfo.title,
      description: pageInfo.description,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: site.name
        }
      ]
    },
    alternates: {
      canonical: locale === "fr" ? site.url : `${site.url}/en`
    }
  };
};
