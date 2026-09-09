export type FeatureIconName =
  | 'consulting'
  | 'monitor'
  | 'ai'
  | 'cloud'
  | 'shield'
  | 'workplace'
  | 'data'
  | 'support'
  | 'training'
  | 'erp'

export type ServiceCategory = {
  code: string
  icon: FeatureIconName
  title: string
  summary: string
}

export type FeaturedService = {
  icon: FeatureIconName
  title: string
  summary: string
  details: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    code: '01',
    icon: 'consulting',
    title: 'Conseil & transformation digitale',
    summary: 'Audit SI, maturité numérique, feuille de route, gouvernance IT, AMOA et DSI à temps partagé.',
  },
  {
    code: '02',
    icon: 'monitor',
    title: 'Développement & solutions logicielles',
    summary: 'Sites corporate, portails, intranets, applications web et mobiles, API et logiciels métier.',
  },
  {
    code: '03',
    icon: 'ai',
    title: 'Intelligence artificielle & automatisation',
    summary: 'Roadmap IA, assistants, chatbots, agents, RAG, OCR intelligent et workflows automatisés.',
  },
  {
    code: '04',
    icon: 'cloud',
    title: 'Infrastructure, réseaux & cloud',
    summary: 'LAN/WAN, Wi-Fi pro, VPN, serveurs, cloud hybride, sauvegarde, PRA/PCA et DevOps.',
  },
  {
    code: '05',
    icon: 'shield',
    title: 'Cybersécurité',
    summary: 'Audits, pentest, PSSI, IAM, durcissement, EDR/XDR, SOC as a Service et sensibilisation.',
  },
  {
    code: '06',
    icon: 'workplace',
    title: 'Solutions de gestion & digital workplace',
    summary: 'GED, ITSM, helpdesk, VoIP, centres de contact, Microsoft 365, Google Workspace et collaboration.',
  },
  {
    code: '07',
    icon: 'data',
    title: 'Data, BI & reporting',
    summary: 'Qualité des données, architecture data, tableaux de bord, KPI, Power BI, Metabase et Superset.',
  },
  {
    code: '08',
    icon: 'support',
    title: 'Support, maintenance & infogérance',
    summary: 'Helpdesk, support sur site et à distance, supervision 24/7, gestion de parc, sauvegarde et SLA.',
  },
  {
    code: '09',
    icon: 'training',
    title: 'Formation & renforcement de capacités',
    summary: 'Parcours IA, cybersécurité, systèmes, réseaux, cloud, data, bureautique et développement.',
  },
  {
    code: '10',
    icon: 'erp',
    title: 'Déploiement ERP & CRM',
    summary: 'Intégration, paramétrage et accompagnement sur Odoo, Sage, Dolibarr et CRM Upya.',
  },
]

export const featuredServices: FeaturedService[] = [
  {
    icon: 'shield',
    title: 'Cybersécurité',
    summary: 'Protégez vos données, vos applications et vos infrastructures contre les risques cyber.',
    details: 'Audits de sécurité, durcissement, protection des endpoints, sensibilisation, gestion des vulnérabilités et accompagnement à la remédiation.',
  },
  {
    icon: 'monitor',
    title: 'Développement d’applications et de sites web',
    summary: 'Digitalisez vos processus avec des plateformes fiables, modernes et adaptées au terrain.',
    details: 'Sites institutionnels, portails clients, intranets, applications métier, API, intégration Mobile Money, SMS, email et WhatsApp.',
  },
  {
    icon: 'cloud',
    title: 'Cloud et infrastructure',
    summary: 'Fiabilisez vos réseaux, serveurs, sauvegardes et environnements cloud.',
    details: 'Architecture LAN/WAN, Wi-Fi professionnel, VPN, serveurs, cloud privé ou hybride, sauvegarde, reprise d’activité et supervision.',
  },
  {
    icon: 'ai',
    title: 'IA et automatisation',
    summary: 'Automatisez les tâches répétitives et accélérez les équipes avec des assistants IA utiles.',
    details: 'Roadmap IA, chatbots, agents, OCR intelligent, RAG documentaire et automatisation des workflows métier.',
  },
  {
    icon: 'data',
    title: 'Data, BI et reporting',
    summary: 'Pilotez votre activité avec des tableaux de bord clairs, fiables et orientés décision.',
    details: 'Qualité des données, architecture data, indicateurs KPI, Power BI, Metabase, Superset et reporting de direction.',
  },
  {
    icon: 'support',
    title: 'Support, maintenance et infogérance',
    summary: 'Gardez vos outils disponibles grâce à un support structuré, mesurable et réactif.',
    details: 'Helpdesk, support sur site et à distance, supervision, gestion de parc, sauvegarde, maintenance et engagements SLA.',
  },
]

export const processSteps = [
  {
    number: '01',
    icon: 'select',
    title: 'Choisir un service',
    text: 'Identifiez la solution qui répond à vos besoins. Nous vous conseillons sur le bon périmètre si le besoin doit encore être clarifié.',
  },
  {
    number: '02',
    icon: 'meeting',
    title: 'Demande de réunion',
    text: 'Contactez notre équipe pour cadrer les enjeux, les risques, les contraintes et les livrables attendus.',
  },
  {
    number: '03',
    icon: 'plan',
    title: 'Recevoir un plan personnalisé',
    text: 'Après l’analyse, nous vous remettons une feuille de route claire avec priorités, planning et architecture cible.',
  },
  {
    number: '04',
    icon: 'deploy',
    title: 'Passer à l’action',
    text: 'Nous déployons la solution, accompagnons vos utilisateurs et assurons le support pour une adoption durable.',
  },
] as const

export const packages = [
  'Audit Digital 360',
  'CRM 360',
  'AI Discovery',
  'AI Productivity',
  'IT Care 360',
  'Cyber Protect',
  'Data Pilot',
  'Cloud & Backup',
  'ERP & CRM',
]

export const stats = [
  ['10', 'pôles de services'],
  ['24/7', 'supervision possible'],
  ['360', 'vision conseil, build et run'],
  ['SLA', 'engagements mesurables'],
] as const
