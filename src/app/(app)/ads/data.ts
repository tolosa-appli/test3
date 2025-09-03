
export type Ad = {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  location: string;
  price: number;
  user: {
    name: string;
    avatar: string;
    dataAiHint?: string;
  };
  postedAt: string;
  image: string;
  dataAiHint?: string;
};

export const adsData: Ad[] = [
    { id: '1', title: 'Vélo de ville bon état', description: 'Vends vélo de ville de marque Btwin, peu servi. Idéal pour les déplacements en ville.', category: 'Sport & Plein air', subcategory: 'Vélo de ville', location: 'Toulouse - Carmes', price: 80, user: { name: 'Sophie', avatar: 'https://placehold.co/40x40.png', dataAiHint: 'woman portrait' }, postedAt: '2024-07-22T14:00:00Z', image: 'https://placehold.co/600x400.png', dataAiHint: 'city bike' },
    { id: '2', title: 'Donne canapé convertible', description: 'Canapé 3 places, convertible en lit. Quelques traces d\'usure mais fonctionnel. A venir chercher sur place.', category: 'Maison', subcategory: 'Canapé', location: 'Blagnac', price: 0, user: { name: 'Juliette', avatar: 'https://placehold.co/40x40.png', dataAiHint: 'woman portrait' }, postedAt: '2024-07-21T10:30:00Z', image: 'https://placehold.co/600x400.png', dataAiHint: 'sofa bed' },
    { id: '3', title: 'Cours de guitare pour débutants', description: 'Guitariste expérimenté propose des cours particuliers à domicile. Tous styles, tous âges.', category: 'Loisirs', subcategory: 'Instruments de musique', location: 'Toulouse - Centre', price: 25, user: { name: 'Alex', avatar: 'https://placehold.co/40x40.png', dataAiHint: 'male portrait' }, postedAt: '2024-07-20T18:00:00Z', image: 'https://placehold.co/600x400.png', dataAiHint: 'acoustic guitar' },
    { id: '4', title: 'Table basse design', description: 'Table basse en verre et métal, style industriel. Très bon état.', category: 'Maison', subcategory: 'Table', location: 'Colomiers', price: 50, user: { name: 'Laura', avatar: 'https://placehold.co/40x40.png', dataAiHint: 'female portrait' }, postedAt: '2024-07-22T09:00:00Z', image: 'https://placehold.co/600x400.png', dataAiHint: 'coffee table' },
];

export const adCategories: { [key: string]: string[] } = {
  'Général': ['Animaux', 'Bricolage', 'Divers', 'Dons', 'Jardin', 'Papeterie'],
  'Électronique': ['Accessoires', 'Accessoires informatique', 'Appareil photo', 'Casque', 'Consoles', 'Écouteurs', 'Électroménager', 'Enceintes', 'Image & son', 'Imprimantes', 'Jeux vidéo', 'Objets connectés', 'Ordinateurs', 'Photo, audio & vidéo', 'Tablettes & Liseuses', 'Téléphones', 'Télévision', 'Vidéoprojecteur', 'Autre'],
  'Immobilier': ['Bureau & Commerce', 'Colocation', 'Location', 'Parking', 'Terrain', 'Vente', 'Autre'],
  'Librairie': ['Bande-Dessinée', 'Biographie', 'Conte', 'Cours', 'Document', 'Essai', 'Fantasy', 'Fantastique', 'Géographie', 'Guide', 'Histoire', 'Mémoires', 'Nouvelle', 'Poésie', 'Roman historique', 'Roman d\'amour', 'Roman d\'aventures', 'Roman policier', 'Science-Fiction', 'Théâtre', 'Autre'],
  'Loisirs': ['Antiquités', 'Artistes', 'Billetterie', 'CD - Musique', 'Collection', 'Cuisines et dînettes', 'DVD - Films', 'Instruments de musique', 'Jeux & Jouets', 'Jeux de construction', 'Jeux de société', 'Jouets d’éveil', 'Livres', 'Loisirs créatifs', 'Modélisme', 'Monnaies', 'Porteurs, trotteurs et draisiennes', 'Poupées et accessoires', 'Puzzle', 'Timbres', 'Vins & Gastronomie', 'Voiturettes et circuits', 'Autre'],
  'Maison': ['Armoire & placard', 'Buffet', 'Canapé', 'Chaise, tabouret et banc', 'Lit', 'Meuble de cuisine', 'Meuble de salon', 'Table', 'Assiette', 'Vaisselle', 'Verre', 'Horloge, pendule et réveil', 'Lampadaire', 'Lampe', 'Lustre', 'Miroir', 'Rideaux, voilage et store', 'Sculpture et statue', 'Suspension', 'Tableau & toile', 'Tapis', 'Vase, cache pot et céramique', 'Aspirateur', 'Chauffage et climatisation', 'Congélateur', 'Four', 'Lave-linge', 'Lave-vaisselle', 'Micro-ondes', 'Réfrigérateur', 'Équipement du lit', 'Déco textile', 'Linge de bain', 'Linge de lit', 'Linge de table', 'Autre'],
  'Mode & Santé': ['Accessoires & Bagagerie', 'Beauté, bien-être et parfums', 'Bons Plans Mode', 'Chapeau', 'Chaussure', 'Hygiène & Santé', 'Joaillerie', 'Maroquinerie', 'Montre & Bijou', 'Vêtement', 'Autre'],
  'Services': ['Baby-Sitting', 'Cours particuliers', 'Entraide', 'Pet', 'Autres services'],
  'Sport & Plein air': ['Arts Martiaux', 'Athlétisme', 'Bateau, voile et nautisme', 'Fitness', 'Natation', 'Pêche', 'Pétanque', 'Skates, rollers, trottinettes', 'Sports d\'hiver', 'Sports de balle et ballon', 'Vélos', 'Vélo électrique', 'Vélo de route', 'Vélo de ville', 'VTT', 'Yoga', 'Autre'],
  'Vacances': ['Appartement', 'Camping', 'Chalet', 'Chambre d’hôtes', 'Maison', 'Mobil-home', 'Studio', 'Villa', 'Autre'],
  'Véhicule ou Équipement': ['Camion', 'Caravaning', 'Moto', 'Nautisme', 'Remorque', 'Utilitaire', 'Vélo', 'Voiture', 'Autre'],
};
