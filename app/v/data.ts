// Contenu partagé des archives de design (FR uniquement).

export const archiveProjects = [
  {
    number: "01",
    title: "JobTrack AI",
    subtitle: "L'architecture",
    category: "SaaS — Intelligence artificielle",
    image: "/media/jobtrackai/a.png",
    description:
      "Une solution SaaS intelligente pour organiser vos candidatures. L'IA analyse vos applications et les classe efficacement pour garder une vue à jour de vos opportunités.",
    proof: [
      "Des centaines de petites fonctionnalités à livrer : j'ai appris à décomposer un produit en modules, et à les livrer tous de la même manière.",
      "Ma méthode : construire l'interface d'abord — elle révèle ce qui doit réellement être codé — puis les services et les endpoints, connecter le tout, et tester en dernier.",
      "Les traitements longs côté serveur m'ont forcé à découper les tâches en lots : mon premier vrai problème d'échelle.",
    ],
    corollary:
      "Un produit ne se code pas fonction par fonction : il se construit module par module.",
    tags: ["Next.js", "TypeScript", "IA"],
  },
  {
    number: "02",
    title: "Tactorelia",
    subtitle: "La maîtrise",
    category: "EdTech — Intelligence artificielle",
    image: "/media/tactorelia/a.png",
    description:
      "Une plateforme de mentorat propulsée par l'IA fusionnant pédagogie et technologie, qui brise les barrières d'apprentissage grâce à des parcours personnalisés.",
    proof: [
      "Beaucoup plus de fonctionnalités que JobTrack — et le principe des modules a tenu. Concentration sur la qualité : rendu React, journalisation, rate limiting, partage sécurisé des clés.",
      "Un client chaque semaine : planifier, fixer des échéances réalistes, tester efficacement.",
      "Un workflow avec les IA qui a fait considérablement croître ma productivité.",
    ],
    corollary:
      "Quand l'architecture tient, l'attention se libère pour tout le reste : performance, sécurité, délais.",
    tags: ["React", "IA", "EdTech"],
  },
  {
    number: "03",
    title: "Café Sans Fil",
    subtitle: "Les fondations",
    category: "Gestion — Application mobile",
    image: "/media/cafeSansFil/cafeSansFil.png",
    description:
      "Une application de gestion complète pour un café étudiant : bénévoles et stocks, avec une réduction de 40 % de la charge administrative (Flutter/Node.js).",
    proof: [
      "Ma première vraie application — c'est ici que j'ai tout appris : les endpoints, les API, la communication entre le front et le back.",
      "La leçon la plus durable : savoir ce qu'il faut coder soi-même, et ce qui existe déjà.",
    ],
    corollary: "On n'apprend pas à construire en lisant des plans.",
    tags: ["Flutter", "Node.js", "MongoDB"],
  },
];

export const archiveStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "Tailwind CSS",
];

export const archiveVersions = [
  { href: "/v/editorial", label: "Édition I — Journal" },
  { href: "/v/brutal", label: "Édition II — Brut" },
  { href: "/v/galerie", label: "Édition III — Galerie" },
];
