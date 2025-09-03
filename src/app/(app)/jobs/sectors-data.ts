
export type JobSubCategory = { name: string; subcategories: (string | JobSubCategory)[] };
export type JobCategory = { name: string; subcategories: (string | JobSubCategory)[] };

export const jobSectors: JobCategory[] = [
    { name: 'Agriculture', subcategories: ['Culture', 'Elevage', 'Pêche'] },
    { name: 'Armée', subcategories: [] },
    { name: 'Art', subcategories: ['Architecture', 'Art Design', 'Cinéma Audiovisuel', 'Décoration intérieur', 'Divers', 'Graphisme'] },
    { name: 'Artisanat', subcategories: [] },
    { name: 'BTP', subcategories: ['Bâtiment', 'Travaux publics'] },
    { name: 'Culture et patrimoine', subcategories: [] },
    { name: 'Édition', subcategories: [] },
    { name: 'Études et conseils', subcategories: [] },
    { name: 'Environnement', subcategories: [] },
    { name: 'Finance', subcategories: ['Assurance', 'Banque', 'Fonds d\'investissement'] },
    { name: 'Fonction publique', subcategories: [] },
    { name: 'Formation Enseignement', subcategories: [] },
    { name: 'French Tech', subcategories: ['Agritech', 'Biotech', 'Cleantech', 'Deeptech', 'Edtech', 'Fintech', 'Foodtech', 'Greentech', 'Healthtech', 'Intelligence artificielle', 'Legaltech', 'Medtech'] },
    {
        name: 'Industrie',
        subcategories: [
            { name: 'Agroalimentaire', subcategories: ['Vins et spiritueux'] },
            {
                name: 'Biens de consommation', subcategories: [
                    'Biologie', 'Bois', 'Caoutchouc', 'Carton', 'Chimie', 'Défense', 'Électronique',
                    'Emballage', 'Fabrication de meubles', 'Gestion des déchets et recyclage', 'Imprimerie'
                ]
            },
            { name: 'Industries du transport', subcategories: ['Aéronautique et spatial', 'Automobile', 'Cycles', 'Nautisme', 'Naval'] },
            'Luxe',
            'Machines et équipements',
            'Matériaux de construction',
            'Matériel médical',
            'Mécanique',
            'Menuiserie',
            'Métallurgie',
            'Papier',
            'Parfum et cosmétique',
            'Pharmacie',
            'Plasturgie',
            'Production et distribution d\'eau',
            {
                name: 'Production et distribution d\'énergie', subcategories: [
                    'Nucléaire', 'Renouvelable', 'Eolien', 'Hydrogène', 'Solaire'
                ]
            },
            'Textile et mode'
        ]
    },
    {
        name: 'Services',
        subcategories: [
            { name: 'Administratif', subcategories: ['Secrétariat'] },
            'Animaux',
            { name: 'Commerce', subcategories: ['Commerce de détail', 'Distribution', 'E-commerce', 'Services de location'] },
            { name: 'Emploi', subcategories: ['Intérim', 'Organismes de formation', 'Recrutement'] },
            'Immobilier',
            { name: 'Information-communication', subcategories: ['Activités culturelles et événementiel', 'Conseil en communication et marketing', 'Médias'] },
            { name: 'Numérique', subcategories: ['Conseil en informatique', 'Cybersécurité', 'Edition de logiciels', 'Gestion informatique', 'Métiers de la data', 'Support informatique', 'Télécoms', 'Web Informatique'] },
            { name: 'Santé', subcategories: ['Médical', 'Paramédical'] },
            { name: 'Services à la personne', subcategories: ['Aide à domicile', 'Beauté esthétique coiffure', 'Bien-être', 'Métiers du coaching', 'Petite enfance', 'Services Divers', 'Social'] },
            { name: 'Services aux entreprises', subcategories: ['Activités juridiques et comptables', 'Conseil de gestion', 'Entretien', 'Ingénierie', 'Propreté', 'Recherche et développement', 'Ressources humaines', 'Sécurité', 'Vente négociation'] },
            'Sport',
            { name: 'Tourisme', subcategories: ['Animation et loisirs', 'Bar, café, pub', 'Campings', 'Hôtellerie', 'Parcs de loisirs', 'Restauration'] },
            { name: 'Transport-logistique', subcategories: ['Aérien', 'Ferroviaire', 'Fluvial', 'Logistique', 'Maritime', 'Routier'] },
        ]
    }
];
