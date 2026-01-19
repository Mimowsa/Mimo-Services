import type { Locale } from "@/app/i18n/locale";

export type Project = {
  sector: string;
  period: string;
  title: string;
  context: string[];
  solution: string[];
  results: string[];
  stack: string[];
};

const projectsByLocale: Record<Locale, Project[]> = {
  fr: [
    {
      sector: "Agroalimentaire 🍏",
      period: "09/2025 - Actuel",
      title: "Digitalisation de processus métiers Power Platform",
      context: [
        "Organisation multi-sites avec des processus encore partiellement manuels.",
        "Utilisation intensive de Microsoft 365, mais validations et suivis dispersés entre plusieurs outils.",
        "Objectif: fluidifier les demandes, fiabiliser les données et améliorer la visibilité métier."
      ],
      solution: [
        "Conception et développement de solutions Power Apps et Power Automate adaptées aux usages terrain.",
        "Structuration des workflows, cadrage des besoins et accompagnement des équipes pour assurer l'adoption."
      ],
      results: [
        "Processus plus lisibles, délais de traitement réduits et meilleure traçabilité.",
        "Outils intégrés à l'écosystème Microsoft 365 avec un usage plus homogène."
      ],
      stack: ["Power Apps", "Power Automate", "Microsoft 365"]
    },
    {
      sector: "Énergie ⚡",
      period: "03/2025 - 08/2025",
      title: "Automatisation des flux documentaires et validations",
      context: [
        "Documents critiques nécessitant plusieurs étapes de validation entre équipes.",
        "Suivi manuel par email ou fichiers partagés, peu de visibilité en temps réel.",
        "Besoin de fiabiliser la chaîne documentaire et d'accélérer les décisions."
      ],
      solution: [
        "Mise en place de workflows Power Automate pour automatiser le cycle de validation.",
        "Création d'une application Power Apps pour centraliser les demandes et le suivi.",
        "Intégrations avec Excel et Power BI pour suivre l'avancement et piloter les KPI."
      ],
      results: [
        "Validation plus rapide et traçabilité renforcée.",
        "Vision claire de l'état des demandes et réduction des tâches manuelles."
      ],
      stack: ["Power Apps", "Power Automate", "Excel", "Power BI", "Microsoft 365"]
    },
    {
      sector: "Industrie 🏭",
      period: "04/2024 - 06/2024",
      title: "Automatisation de processus RH",
      context: [
        "Demandes RH (heures supplémentaires, intérim) traitées via des échanges manuels.",
        "Risque d'informations incomplètes et manque de suivi opérationnel.",
        "Attente d'un process clair et traçable pour les validations."
      ],
      solution: [
        "Digitalisation des demandes via Power Platform avec des règles métier adaptées.",
        "Workflows de validation structurés pour sécuriser les décisions RH."
      ],
      results: [
        "Traitement plus rapide et réduction des erreurs administratives.",
        "Suivi RH plus fiable avec des validations mieux cadrées."
      ],
      stack: ["Power Automate", "Power Platform"]
    },
    {
      sector: "Médias & Production 🎬",
      period: "Mission courte - 1 jour",
      title: "Synchronisation d'outils Microsoft",
      context: [
        "Organisation du travail via Planner et Outlook sans synchronisation native.",
        "Besoin d'aligner les tâches et les échéances sans changer les outils existants."
      ],
      solution: [
        "Automatisation Power Automate pour synchroniser tâches et échéances.",
        "Déploiement rapide dans un format de mission courte."
      ],
      results: [
        "Meilleur suivi des tâches et diminution des oublis.",
        "Organisation quotidienne plus fiable sans surcharge pour les équipes."
      ],
      stack: ["Power Automate", "Planner", "Outlook", "Microsoft 365"]
    }
  ],
  en: [
    {
      sector: "Food & Beverage 🍏",
      period: "09/2025 - Present",
      title: "Power Platform business process digitalization",
      context: [
        "Multi-site organization with partially manual processes.",
        "Heavy Microsoft 365 usage, but approvals and tracking spread across tools.",
        "Goal: streamline requests, improve data reliability, and increase business visibility."
      ],
      solution: [
        "Designed Power Apps and Power Automate solutions tailored to field usage.",
        "Structured workflows, clarified requirements, and supported teams for adoption."
      ],
      results: [
        "Clearer processes, shorter lead times, and stronger traceability.",
        "Tools integrated into Microsoft 365 with more consistent usage."
      ],
      stack: ["Power Apps", "Power Automate", "Microsoft 365"]
    },
    {
      sector: "Energy ⚡",
      period: "03/2025 - 08/2025",
      title: "Automation of document workflows and approvals",
      context: [
        "Critical documents requiring multiple approval steps across teams.",
        "Manual tracking via email or shared files with limited real-time visibility.",
        "Need to secure the document chain and accelerate decisions."
      ],
      solution: [
        "Built Power Automate workflows to automate the approval lifecycle.",
        "Created a Power Apps application to centralize requests and tracking.",
        "Integrated Excel and Power BI to track progress and monitor KPIs."
      ],
      results: [
        "Faster approvals and stronger traceability.",
        "Clear view of request status and fewer manual tasks."
      ],
      stack: ["Power Apps", "Power Automate", "Excel", "Power BI", "Microsoft 365"]
    },
    {
      sector: "Industry 🏭",
      period: "04/2024 - 06/2024",
      title: "HR process automation",
      context: [
        "HR requests (overtime, temporary staff) handled via manual exchanges.",
        "Risk of incomplete information and limited operational tracking.",
        "Need for clear and traceable validation workflows."
      ],
      solution: [
        "Digitized requests with Power Platform and tailored business rules.",
        "Structured approval workflows to secure HR decisions."
      ],
      results: [
        "Faster processing and fewer administrative errors.",
        "More reliable HR tracking with clearer validations."
      ],
      stack: ["Power Automate", "Power Platform"]
    },
    {
      sector: "Media & Production 🎬",
      period: "Short engagement - 1 day",
      title: "Microsoft tools synchronization",
      context: [
        "Work organized in Planner and Outlook without native synchronization.",
        "Need to align tasks and deadlines without changing tools."
      ],
      solution: [
        "Power Automate flow to sync tasks and deadlines.",
        "Rapid delivery in a short engagement format."
      ],
      results: [
        "Better task tracking and fewer missed deadlines.",
        "More reliable daily organization with minimal overhead."
      ],
      stack: ["Power Automate", "Planner", "Outlook", "Microsoft 365"]
    }
  ]
};

export const getProjects = (locale: Locale): Project[] => projectsByLocale[locale];
