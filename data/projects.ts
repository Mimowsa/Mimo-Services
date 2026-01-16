export type Project = {
  company: string;
  period: string;
  logo: string;
  title: string;
  context: string[];
  solution: string[];
  results: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    company: "Danone",
    period: "09/2025 - Actuel",
    logo: "/img/danone.png",
    title: "Danone - Digitalisation et automatisation de processus métiers Power Platform",
    context: [
      "Danone évolue dans un environnement grand groupe où de nombreux processus métiers sont encore gérés de manière manuelle ou semi-automatisée.",
      "Les équipes utilisent massivement Microsoft 365, mais les échanges entre outils, les validations et le suivi des demandes manquent de fluidité. Cela entraîne des pertes de temps, des risques d'erreurs et une faible visibilité sur l'état réel des processus internes.",
      "Ce type de situation est très courant dans les grandes entreprises: les outils existent, mais ils ne sont pas exploités de manière cohérente."
    ],
    solution: [
      "J'ai accompagné les équipes dans la conception et le développement de solutions basées sur la Power Platform, en m'appuyant principalement sur Power Apps et Power Automate.",
      "L'objectif était de transformer des processus manuels en flux digitaux simples, accessibles et adaptés aux usages métiers. En parallèle, j'ai travaillé sur l'analyse des besoins, l'amélioration continue des processus et l'accompagnement des utilisateurs."
    ],
    results: [
      "Les équipes ont gagné en efficacité grâce à des processus plus fluides et mieux structurés.",
      "Les tâches manuelles ont été réduites, les validations fiabilisées et la visibilité sur les processus améliorée. Les utilisateurs disposent d'outils plus clairs, mieux intégrés à leur environnement Microsoft 365."
    ],
    stack: ["Power Apps", "Power Automate", "Microsoft 365"]
  },
  {
    company: "EDF",
    period: "03/2025 - 08/2025",
    logo: "/img/edf.png",
    title: "EDF - Automatisation des processus documentaires et des validations",
    context: [
      "Chez EDF, certains processus documentaires reposaient sur des échanges manuels entre plusieurs acteurs, avec peu de visibilité sur l'avancement des validations.",
      "Les documents circulaient par email ou via des fichiers partagés, ce qui rendait le suivi complexe et augmentait les risques d'oubli ou de retard.",
      "Ce type de problématique est fréquent dès que plusieurs équipes doivent valider, approuver ou suivre des documents critiques."
    ],
    solution: [
      "J'ai mis en place des workflows Power Automate permettant d'automatiser l'ensemble du cycle de validation documentaire.",
      "Les solutions s'appuyaient sur des intégrations avec Excel et Power BI pour récupérer et exploiter les données, ainsi que sur la génération automatique de documents PDF et le suivi en temps réel."
    ],
    results: [
      "Les processus documentaires sont devenus plus fiables et plus transparents.",
      "Les délais de validation ont été réduits, la traçabilité améliorée et les équipes disposent d'une vision claire de l'avancement des demandes."
    ],
    stack: ["Power Automate", "Excel", "Power BI", "Microsoft 365"]
  },
  {
    company: "Parker Hannifin",
    period: "04/2024 - 06/2024",
    logo: "/img/parker-hannifin.png",
    title: "Parker Hannifin - Optimisation et automatisation de processus RH",
    context: [
      "Les équipes RH de Parker Hannifin géraient certaines demandes (heures supplémentaires, intérimaires) via des processus manuels et peu structurés.",
      "Les validations prenaient du temps, les informations étaient parfois incomplètes et le suivi opérationnel manquait de fiabilité.",
      "Ces problématiques sont fréquentes dans les services RH lorsque les outils ne sont pas adaptés aux flux métiers réels."
    ],
    solution: [
      "J'ai conçu et déployé des workflows automatisés Power Platform afin de digitaliser les demandes d'heures supplémentaires et la gestion des intérimaires.",
      "Les processus ont été structurés autour de validations claires, avec des règles métiers adaptées aux contraintes RH."
    ],
    results: [
      "Les délais de traitement ont été réduits et les validations fiabilisées.",
      "Les équipes RH disposent d'un suivi plus clair et plus fiable, avec moins d'erreurs administratives."
    ],
    stack: ["Power Automate", "Power Platform"]
  },
  {
    company: "ICS Productions",
    period: "Mission courte - 1 jour",
    logo: "/img/ics.png",
    title: "ICS Productions - Synchronisation des outils Microsoft via Power Automate",
    context: [
      "ICS Productions utilisait Microsoft Planner et Outlook pour organiser le travail des équipes, sans synchronisation entre les deux outils.",
      "Cela entraînait des oublis, un manque de visibilité sur les échéances et une organisation difficile à maintenir dans le temps.",
      "C'est une problématique très courante dans les entreprises qui utilisent plusieurs outils Microsoft sans automatisation entre eux."
    ],
    solution: [
      "J'ai mis en place une automatisation Power Automate permettant de synchroniser les tâches entre Planner et Outlook.",
      "La solution a été conçue et déployée rapidement dans le cadre d'une mission courte et ciblée."
    ],
    results: [
      "Les équipes bénéficient d'un meilleur suivi des tâches et des échéances.",
      "Les risques d'oubli ont été réduits et l'organisation quotidienne est plus fiable."
    ],
    stack: ["Power Automate", "Planner", "Outlook", "Microsoft 365"]
  }
];
