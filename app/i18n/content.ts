import type { Locale } from "@/app/i18n/locale";

export const content = {
  fr: {
    header: {
      nav: {
        projects: "Mes projets",
        about: "À propos"
      },
      cta: "Me contacter",
      navLabel: "Navigation principale",
      menuLabel: "Ouvrir le menu",
      logoAlt: "Logo Mimo Services",
      languageToggle: {
        label: "EN",
        ariaLabel: "Passer le site en anglais"
      }
    },
    footer: {
      tagline: "Freelance Power Platform à Paris, expert Power Apps et Power Automate.",
      links: {
        projects: "Mes projets",
        about: "À propos",
        contact: "Contact"
      },
      meta: {
        location: "Paris / Île-de-France",
        availability: "Disponibilités: À temps plein"
      },
      copyright: "Tous droits réservés."
    },
    home: {
      hero: {
        badge: "Freelance Power Platform - Paris",
        title: "Optimisez vos processus métiers avec la Power Platform",
        lead: "Automatisation rapide, fiable et adaptée pour vos équipes.",
        imageAlt:
          "Schéma de flux Power Platform reliant Power Apps et Power Automate",
        ctaPrimary: "Demander un audit Power Platform",
        ctaSecondary: "Voir les projets"
      },
      stats: {
        items: [
          {
            title: "Expérience terrain",
            description: "De nombreux projets Power Platform en entreprise"
          },
          {
            title: "Multi-métier",
            description: "RH, gestion des stocks, finance, process internes"
          },
          {
            title: "M365",
            description: "Intégration native Microsoft 365"
          }
        ]
      },
      trust: {
        eyebrow: "Ils m'ont fait confiance",
        title: "Des contextes exigeants, des solutions concrètes",
        lead:
          "Des missions Power Platform menées dans des environnements exigeants, avec une priorité claire : fiabilité, adoption et impact métier.",
        cta: "Voir les projets",
        carouselLabel: "Logos entreprises"
      },
      commitment: {
        eyebrow: "Engagement",
        title: "Un consultant qui parle technique et métier",
        lead:
          "Mes missions sont cadrées autour d'objectifs clairs : réduction des délais, fiabilité des données et meilleure collaboration. Chaque livraison est accompagnée d'un plan d'usage et de documentation.",
        metrics: [
          {
            value: "Jusqu'à 50%",
            label: "Gain de temps selon les processus automatisés"
          },
          {
            value: "Automatisation",
            label: "L'application travaille pendant que l'équipe se concentre"
          },
          {
            value: "Fiabilisation",
            label: "Validations plus solides et suivi plus clair"
          }
        ]
      },
      approach: {
        eyebrow: "Approche",
        title: "Une approche pragmatique adaptée aux enjeux réels des entreprises",
        lead:
          "Chaque projet Power Platform commence par une compréhension claire du besoin métier. L'objectif n'est pas d'automatiser pour automatiser, mais de simplifier les processus, fiabiliser les validations et livrer des solutions réellement utilisées par les équipes.",
        steps: [
          {
            title: "1. Compréhension du contexte métier",
            description:
              "Analyse des processus existants, des contraintes terrain et des usages réels afin d'identifier les leviers d'amélioration les plus pertinents."
          },
          {
            title: "2. Conception de la solution Power Platform",
            description:
              "Définition d'une solution adaptée à l'écosystème Microsoft 365, avec un focus sur la clarté, la maintenabilité et l'expérience utilisateur."
          },
          {
            title: "3. Mise en oeuvre et accompagnement",
            description:
              "Déploiement progressif de la solution, tests, documentation et accompagnement des équipes pour garantir une adoption durable."
          }
        ]
      },
      cta: {
        eyebrow: "Contact",
        title: "Parlons de votre projet Power Platform",
        lead:
          "Besoin d'une solution Power Apps ou Power Automate ? Je réponds sous 48h avec une proposition d'approche.",
        button: "Planifier un échange"
      }
    },
    about: {
      hero: {
        eyebrow: "À propos",
        title: "Développeur Power Platform",
        lead:
          "J'aide les entreprises à automatiser leurs processus et à gagner du temps grâce à l'écosystème Microsoft 365.",
        imageAlt: "Portrait professionnel du consultant Power Platform"
      },
      what: {
        eyebrow: "Ce que je fais",
        title: "Des solutions claires, adoptées et utiles au quotidien",
        cards: [
          {
            title: "Digitalisation des processus",
            imageAlt: "Icône digitalisation des processus",
            description:
              "Transformation de processus manuels en workflows clairs et automatisés."
          },
          {
            title: "Automatisation Power Platform",
            imageAlt: "Icône automatisation Power Platform",
            description: "Power Apps, Power Automate et intégrations Microsoft 365."
          },
          {
            title: "Accompagnement des équipes",
            imageAlt: "Icône accompagnement des équipes",
            description:
              "Des solutions pensées pour être adoptées et maintenues dans le temps."
          }
        ]
      },
      value: {
        eyebrow: "Pourquoi travailler avec moi",
        title: "Une approche orientée valeur métier",
        lead:
          "Mon approche est orientée valeur métier: comprendre le besoin avant d'automatiser, simplifier avant de complexifier, et livrer des solutions réellement utilisées.",
        statLabel: "de temps gagné",
        statPrefix: "Jusqu'à",
        statValue: "50%",
        statAriaLabel: "Jusqu'à 50% de temps gagné"
      },
      credibility: {
        eyebrow: "Crédibilité",
        title: "Références grands comptes"
      },
      cta: {
        eyebrow: "Et maintenant",
        title: "Parlons de votre contexte",
        lead:
          "Vous avez des processus manuels ou des workflows peu lisibles ? Voyons comment la Power Platform peut vous aider.",
        button: "Démarrer la discussion"
      }
    },
    contact: {
      hero: {
        eyebrow: "Contact",
        title: "Discutons de votre projet Power Platform",
        lead:
          "Indiquez votre contexte et vos objectifs. Je réponds sous 48h avec une proposition d'approche et une estimation de charge.",
        info: {
          emailLabel: "Email",
          locationLabel: "Zone",
          formatLabel: "Formats",
          locationValue: "Paris et Île-de-France",
          formatValue: "Missions courtes et/ou longues"
        }
      },
      form: {
        nameLabel: "Nom et entreprise",
        namePlaceholder: "Votre nom",
        emailLabel: "Email professionnel",
        emailPlaceholder: "prenom@entreprise.fr",
        subjectLabel: "Sujet",
        subjectPlaceholder: "Power Apps, Power Automate, audit",
        messageLabel: "Description du besoin",
        messagePlaceholder:
          "Décrivez le processus, les équipes impliquées et l'urgence.",
        submit: "Envoyer la demande",
        note: "Pas de tracking, vos informations restent privées."
      }
    },
    projects: {
      heroTitle: "Mes projets",
      heroKicker: {
        prefix: "Jusqu'à ",
        emph: "50 %",
        suffix: " de temps gagné grâce à la Power Platform"
      },
      cta: {
        eyebrow: "Votre contexte",
        title: "Besoin d'une automatisation Microsoft 365 ?",
        lead:
          "Parlons de vos workflows internes: Power Apps pour les interfaces, Power Automate pour les validations, et des intégrations Microsoft 365 adaptées à votre contexte.",
        button: "Discuter de mon projet"
      }
    },
    projectCard: {
      context: "Contexte client",
      solution: "Solution mise en place",
      results: "Résultats et bénéfices"
    }
  },
  en: {
    header: {
      nav: {
        projects: "Projects",
        about: "About"
      },
      cta: "Contact me",
      navLabel: "Primary navigation",
      menuLabel: "Open menu",
      logoAlt: "Mimo Services logo",
      languageToggle: {
        label: "FR",
        ariaLabel: "Switch the site to French"
      }
    },
    footer: {
      tagline: "Freelance Power Platform in Paris, Power Apps and Power Automate expert.",
      links: {
        projects: "Projects",
        about: "About",
        contact: "Contact"
      },
      meta: {
        location: "Paris / Île-de-France",
        availability: "Availability: Full-time"
      },
      copyright: "All rights reserved."
    },
    home: {
      hero: {
        badge: "Freelance Power Platform - Paris",
        title: "Optimize your business processes with Power Platform",
        lead: "Fast, reliable automation tailored to your teams.",
        imageAlt:
          "Power Platform flow diagram linking Power Apps and Power Automate",
        ctaPrimary: "Request a Power Platform audit",
        ctaSecondary: "View projects"
      },
      stats: {
        items: [
          {
            title: "Hands-on experience",
            description: "Many Power Platform projects in enterprise environments"
          },
          {
            title: "Cross-functional",
            description: "HR, inventory management, finance, internal workflows"
          },
          {
            title: "M365",
            description: "Native Microsoft 365 integration"
          }
        ]
      },
      trust: {
        eyebrow: "Trusted by",
        title: "Demanding contexts, concrete solutions",
        lead:
          "Power Platform engagements delivered in demanding environments, with a clear priority: reliability, adoption, and business impact.",
        cta: "View projects",
        carouselLabel: "Company logos"
      },
      commitment: {
        eyebrow: "Commitment",
        title: "A consultant who speaks both tech and business",
        lead:
          "My engagements are structured around clear objectives: shorter cycles, reliable data, and better collaboration. Each delivery includes an adoption plan and documentation.",
        metrics: [
          {
            value: "Up to 50%",
            label: "Time saved depending on automated processes"
          },
          {
            value: "Automation",
            label: "The app runs while the team focuses"
          },
          {
            value: "Reliability",
            label: "Stronger validations and clearer tracking"
          }
        ]
      },
      approach: {
        eyebrow: "Approach",
        title: "A pragmatic approach tailored to real business needs",
        lead:
          "Every Power Platform project starts with a clear understanding of the business need. The goal is not to automate for the sake of it, but to simplify processes, strengthen validations, and deliver solutions that teams actually use.",
        steps: [
          {
            title: "1. Understand the business context",
            description:
              "Review existing processes, field constraints, and real usage to identify the most relevant improvement levers."
          },
          {
            title: "2. Design the Power Platform solution",
            description:
              "Define a solution adapted to the Microsoft 365 ecosystem, with a focus on clarity, maintainability, and user experience."
          },
          {
            title: "3. Delivery and enablement",
            description:
              "Progressive rollout, testing, documentation, and enablement to ensure lasting adoption."
          }
        ]
      },
      cta: {
        eyebrow: "Contact",
        title: "Let's talk about your Power Platform project",
        lead:
          "Need a Power Apps or Power Automate solution? I reply within 48h with a tailored approach.",
        button: "Schedule a call"
      }
    },
    about: {
      hero: {
        eyebrow: "About",
        title: "Power Platform Developer",
        lead:
          "I help companies automate their processes and save time with the Microsoft 365 ecosystem.",
        imageAlt: "Professional portrait of the Power Platform consultant"
      },
      what: {
        eyebrow: "What I do",
        title: "Clear solutions that teams adopt and use daily",
        cards: [
          {
            title: "Process digitalization",
            imageAlt: "Process digitalization icon",
            description:
              "Transform manual processes into clear, automated workflows."
          },
          {
            title: "Power Platform automation",
            imageAlt: "Power Platform automation icon",
            description: "Power Apps, Power Automate, and Microsoft 365 integrations."
          },
          {
            title: "Team enablement",
            imageAlt: "Team enablement icon",
            description:
              "Solutions designed to be adopted and maintained over time."
          }
        ]
      },
      value: {
        eyebrow: "Why work with me",
        title: "A value-driven approach",
        lead:
          "My approach focuses on business value: understand before automating, simplify before adding complexity, and deliver solutions teams truly use.",
        statLabel: "time saved",
        statPrefix: "Up to",
        statValue: "50%",
        statAriaLabel: "Up to 50% time saved"
      },
      credibility: {
        eyebrow: "Credibility",
        title: "Enterprise references"
      },
      cta: {
        eyebrow: "Next steps",
        title: "Let's talk about your context",
        lead:
          "Do you have manual processes or unclear workflows? Let's see how Power Platform can help.",
        button: "Start the conversation"
      }
    },
    contact: {
      hero: {
        eyebrow: "Contact",
        title: "Let's discuss your Power Platform project",
        lead:
          "Share your context and objectives. I reply within 48h with an approach and a workload estimate.",
        info: {
          emailLabel: "Email",
          locationLabel: "Area",
          formatLabel: "Engagements",
          locationValue: "Paris and Île-de-France",
          formatValue: "Short and/or long-term projects"
        }
      },
      form: {
        nameLabel: "Name and company",
        namePlaceholder: "Your name",
        emailLabel: "Work email",
        emailPlaceholder: "name@company.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Power Apps, Power Automate, audit",
        messageLabel: "Project details",
        messagePlaceholder:
          "Describe the process, the teams involved, and the urgency.",
        submit: "Send request",
        note: "No tracking, your information stays private."
      }
    },
    projects: {
      heroTitle: "Projects",
      heroKicker: {
        prefix: "Up to ",
        emph: "50%",
        suffix: " time saved thanks to Power Platform"
      },
      cta: {
        eyebrow: "Your context",
        title: "Need Microsoft 365 automation?",
        lead:
          "Let's talk about your internal workflows: Power Apps for interfaces, Power Automate for approvals, and Microsoft 365 integrations tailored to your context.",
        button: "Discuss my project"
      }
    },
    projectCard: {
      context: "Client context",
      solution: "Solution delivered",
      results: "Results and benefits"
    }
  }
} as const;

export type SiteContent = (typeof content)[Locale];

export const getContent = (locale: Locale): SiteContent => content[locale];
