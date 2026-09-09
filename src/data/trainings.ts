export type Training = {
  category: string
  title: string
  summary: string
  objectives: string[]
  audience: string
  program: string[]
  duration: string
  format: string
}

export type CompletedTraining = {
  client: string
  title: string
  summary: string
}

export const trainingCategories = [
  {
    title: 'Formations cybersécurité',
    text: 'Sensibilisation, bonnes pratiques, protection des accès, gestion des incidents et sécurité opérationnelle.',
  },
  {
    title: 'Formations cloud, systèmes & réseaux',
    text: 'Administration, supervision, sauvegarde, réseaux professionnels, cloud hybride et disponibilité des services.',
  },
  {
    title: 'Formations data & reporting',
    text: 'Structuration des données, KPI, tableaux de bord, reporting de direction et prise de décision.',
  },
  {
    title: 'Formations IA & automatisation',
    text: 'Cas d’usage IA, assistants, automatisation de tâches, productivité et gouvernance des outils intelligents.',
  },
  {
    title: 'Formations bureautique & productivité',
    text: 'Méthodes de travail, outils collaboratifs, Microsoft 365, Google Workspace et organisation numérique.',
  },
]

export const trainings: Training[] = [
  {
    category: 'Formations cybersécurité',
    title: 'Cybersécurité pour équipes IT et utilisateurs',
    summary:
      'Un parcours pratique pour réduire les risques humains, protéger les accès et adopter les bons réflexes au quotidien.',
    objectives: ['Comprendre les menaces courantes', 'Protéger les comptes et les données', 'Réagir face à un incident'],
    audience: 'Dirigeants, équipes IT, responsables métiers et utilisateurs clés.',
    program: ['Phishing et mots de passe', 'Sécurité des postes', 'Gestion des incidents', 'Bonnes pratiques terrain'],
    duration: '1 à 3 jours',
    format: 'Présentiel, distanciel ou atelier intra-entreprise',
  },
  {
    category: 'Formations cloud, systèmes & réseaux',
    title: 'Cloud, réseaux et administration systèmes',
    summary:
      'Une formation orientée exploitation pour mieux administrer les environnements techniques et améliorer la disponibilité.',
    objectives: ['Comprendre l’architecture réseau', 'Organiser les sauvegardes', 'Superviser les services critiques'],
    audience: 'Techniciens, administrateurs systèmes, équipes support et responsables IT.',
    program: ['Réseaux LAN/WAN', 'Serveurs et accès', 'Sauvegarde et PRA', 'Supervision et documentation'],
    duration: '2 à 5 jours',
    format: 'Atelier technique avec cas pratiques',
  },
  {
    category: 'Formations data & reporting',
    title: 'Data, tableaux de bord et reporting',
    summary:
      'Un parcours pour transformer les données internes en indicateurs fiables et exploitables par les équipes de direction.',
    objectives: ['Définir les bons KPI', 'Nettoyer et structurer les données', 'Construire un tableau de bord lisible'],
    audience: 'Directions, responsables opérationnels, analystes, équipes administratives et financières.',
    program: ['Qualité des données', 'Modèle d’indicateurs', 'Visualisation', 'Reporting mensuel'],
    duration: '2 à 4 jours',
    format: 'Formation pratique avec vos données ou jeux de données simulés',
  },
  {
    category: 'Formations IA & automatisation',
    title: 'IA pratique, automatisation et productivité',
    summary:
      'Un programme pour identifier les bons cas d’usage IA et automatiser les tâches répétitives de manière responsable.',
    objectives: ['Identifier les cas d’usage utiles', 'Créer des assistants simples', 'Automatiser des workflows métier'],
    audience: 'Dirigeants, chefs de projet, équipes support, RH, finance, communication et opérations.',
    program: ['Prompting utile', 'Assistants IA', 'Automatisation de processus', 'Gouvernance et limites'],
    duration: '1 à 3 jours',
    format: 'Atelier pratique et accompagnement personnalisé',
  },
  {
    category: 'Formations bureautique & productivité',
    title: 'Outils collaboratifs et productivité numérique',
    summary:
      'Une formation pour mieux organiser le travail quotidien avec les outils collaboratifs et les méthodes numériques.',
    objectives: ['Structurer les fichiers et échanges', 'Mieux collaborer en équipe', 'Automatiser les tâches simples'],
    audience: 'Utilisateurs métiers, assistants, équipes commerciales, administratives et support.',
    program: ['Organisation numérique', 'Documents partagés', 'Réunions efficaces', 'Bonnes pratiques collaboratives'],
    duration: '1 à 2 jours',
    format: 'Présentiel, distanciel ou coaching en petit groupe',
  },
]

export const completedTrainings: CompletedTraining[] = [
  {
    client: 'CCPAC',
    title: 'Formation en analyse forensique pour enquête judiciaire',
    summary:
      'Session orientée investigation numérique, préservation des preuves, analyse technique et bonnes pratiques de restitution.',
  },
  {
    client: 'SITE ANRS MIE Cameroun',
    title: 'Formation-action en IA générative',
    summary:
      'Accompagnement pratique sur les usages responsables de l’IA générative, la productivité et l’automatisation des tâches.',
  },
  {
    client: 'Upowa Cameroun',
    title: 'Formation sur le CRM Upya',
    summary:
      'Formation des équipes à l’utilisation du CRM Upya pour améliorer le suivi commercial, client et opérationnel.',
  },
]
