export type ProjectType = 'Interne' | 'Public'

export type Project = {
  id: string
  type: ProjectType
  category: string
  client: string
  title: string
  summary: string
  context: string
  need: string
  solution: string
  results: string[]
  imageUrl: string
  projectUrl?: string
}

export const projectCategories = [
  {
    title: 'Projets internes',
    text: 'Plateformes privées déployées chez les clients pour digitaliser les processus internes, sécuriser les données et améliorer le suivi opérationnel.',
  },
  {
    title: 'Projets publics',
    text: 'Sites vitrines et plateformes accessibles au public pour renforcer la visibilité, la crédibilité et l’accès aux services des organisations.',
  },
]

export const projects: Project[] = [
  {
    id: 'signatures-electroniques-upowa',
    type: 'Interne',
    category: 'Projet interne',
    client: 'EDF Upowa Cameroun',
    title: 'Plateforme de gestion des signatures électroniques',
    summary:
      'Conception, développement et déploiement d’une plateforme interne dédiée à la gestion et au suivi des signatures électroniques.',
    context:
      'EDF Upowa Cameroun avait besoin de fluidifier les circuits de validation documentaire et de réduire les traitements manuels.',
    need:
      'Centraliser les demandes, suivre l’avancement des signatures et garantir une meilleure traçabilité des documents internes.',
    solution:
      'ENK Consulting a conçu une plateforme privée permettant de gérer les flux de signature, les statuts, les utilisateurs et l’historique des validations.',
    results: ['Traçabilité améliorée', 'Processus de validation accéléré', 'Suivi centralisé des signatures'],
    imageUrl: '/images/projets/signatures-electroniques-upowa.png',
  },
  {
    id: 'conges-heures-permissions-upowa',
    type: 'Interne',
    category: 'Projet interne',
    client: 'EDF Upowa Cameroun',
    title: 'Plateforme RH de gestion des congés et permissions',
    summary:
      'Conception, développement et déploiement d’une plateforme de gestion des congés, heures supplémentaires et permissions.',
    context:
      'Les demandes RH nécessitaient un meilleur suivi, avec des validations plus lisibles entre collaborateurs, managers et administration.',
    need:
      'Digitaliser les demandes, automatiser les circuits de validation et disposer d’un historique fiable des absences et heures supplémentaires.',
    solution:
      'ENK Consulting a développé une plateforme RH interne avec formulaires de demande, rôles utilisateurs, workflows de validation et tableaux de suivi.',
    results: ['Demandes RH centralisées', 'Validations plus rapides', 'Historique fiable des absences'],
    imageUrl: '/images/projets/rh-conges-permissions-upowa.png',
  },
  {
    id: 'elearning-upowa',
    type: 'Interne',
    category: 'Projet interne',
    client: 'EDF Upowa Cameroun',
    title: 'Plateforme e-learning pour la formation du personnel interne',
    summary:
      'Conception, développement et déploiement d’une plateforme e-learning destinée à la formation continue du personnel interne.',
    context:
      'L’entreprise souhaitait structurer la formation interne et rendre les contenus pédagogiques accessibles aux équipes.',
    need:
      'Mettre à disposition des modules, suivre la progression des apprenants et faciliter la montée en compétences du personnel.',
    solution:
      'ENK Consulting a conçu une plateforme de formation avec gestion des cours, suivi des participants et organisation des contenus pédagogiques.',
    results: ['Formation interne structurée', 'Suivi des apprenants', 'Accès simplifié aux contenus'],
    imageUrl: '/images/projets/elearning-upowa.png',
  },
  {
    id: 'exploitation-piscicole-aquafloo',
    type: 'Interne',
    category: 'Projet interne',
    client: 'Aquafloo SARL',
    title: 'Plateforme de gestion d’exploitation piscicole avec application mobile terrain',
    summary:
      'Conception, développement et déploiement d’une plateforme complète d’exploitation, accompagnée d’une application mobile pour la remontée des données terrain.',
    context:
      'Aquafloo SARL avait besoin d’un outil métier pour mieux suivre les opérations d’exploitation piscicole et les données collectées sur le terrain.',
    need:
      'Centraliser les données d’exploitation, faciliter la remontée mobile depuis le terrain et disposer d’une vue claire des opérations.',
    solution:
      'ENK Consulting a développé une plateforme web de gestion complète et une application mobile dédiée à la collecte et à la synchronisation des données terrain.',
    results: ['Données terrain centralisées', 'Suivi d’exploitation amélioré', 'Application mobile métier'],
    imageUrl: '/images/projets/exploitation-piscicole-aquafloo.png',
  },
  {
    id: 'site-vitrine-aquafloo',
    type: 'Public',
    category: 'Projet public',
    client: 'Aquafloo SARL',
    title: 'Site vitrine Aquafloo',
    summary:
      'Conception, développement et déploiement du site vitrine d’Aquafloo pour présenter l’entreprise, ses activités et ses offres.',
    context:
      'Aquafloo souhaitait renforcer sa présence en ligne avec un site professionnel accessible au public.',
    need:
      'Présenter clairement l’activité, améliorer la crédibilité de l’entreprise et faciliter la prise de contact.',
    solution:
      'ENK Consulting a conçu un site vitrine responsive, structuré autour de la présentation de l’entreprise, de ses services et de ses informations de contact.',
    results: ['Présence en ligne renforcée', 'Site responsive', 'Parcours de contact simplifié'],
    imageUrl: '/images/projets/site-vitrine-aquafloo.png',
    projectUrl: 'https://aquafloo.com',
  },
  {
    id: 'site-vitrine-upowa',
    type: 'Public',
    category: 'Projet public',
    client: 'EDF Upowa Cameroun',
    title: 'Site vitrine EDF Upowa Cameroun',
    summary:
      'Conception, développement et déploiement du site vitrine d’EDF Upowa Cameroun pour valoriser ses activités et ses solutions.',
    context:
      'EDF Upowa Cameroun avait besoin d’un site public moderne pour présenter son positionnement, ses services et son impact.',
    need:
      'Créer une vitrine institutionnelle claire, accessible et cohérente avec l’image de l’entreprise.',
    solution:
      'ENK Consulting a développé un site vitrine responsive avec une structure éditoriale adaptée aux visiteurs, partenaires et prospects.',
    results: ['Image institutionnelle renforcée', 'Information mieux structurée', 'Accès public simplifié'],
    imageUrl: '/images/projets/site-vitrine-upowa.png',
    projectUrl: 'https://upowa.energy',
  },
  {
    id: 'analyses-medicales-smartmedicalsolution',
    type: 'Public',
    category: 'Projet public',
    client: 'Smart Medical Solution',
    title: 'Plateforme de gestion des analyses médicales',
    summary:
      'Développement d’une plateforme de gestion des analyses médicales pour Smart Medical Solution.',
    context:
      'Smart Medical Solution souhaitait disposer d’un outil numérique pour mieux organiser le suivi des analyses médicales.',
    need:
      'Structurer les informations, faciliter la gestion des dossiers et améliorer le suivi des opérations liées aux analyses.',
    solution:
      'ENK Consulting a développé une plateforme dédiée à la gestion des analyses médicales, avec une interface pensée pour les usages métier.',
    results: ['Gestion métier digitalisée', 'Suivi des analyses amélioré', 'Informations mieux organisées'],
    imageUrl: '/images/projets/analyses-medicales-smartmedicalsolution.png',
    projectUrl: '/projets/smartmedicalsolution',
  },
]
