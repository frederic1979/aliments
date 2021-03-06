import { Injectable } from '@angular/core';
import{Aliment} from './aliment'

@Injectable({
  providedIn: 'root'
})
export class AlimentsService {
  
  
  aliments: Aliment[]=




  [{
    "ig": 110,
    "carbs": 4.5,
    "name": "Bière"
  },
  {
    "ig": 100,
    "carbs": 100,
    "name": "Glucose"
  },
  {
    "ig": 95,
    "carbs": 73,
    "name": "Farine de riz blanc"
  },
  {
    "ig": 95,
    "carbs": 86.3,
    "name": "Fécule de pomme de terre (amidon)"
  },
  {
    "ig": 95,
    "carbs": 20,
    "name": "Pomme de terre au four"
  },
  {
    "ig": 95,
    "carbs": 20,
    "name": "Pomme de terre frites"
  },
  {
    "ig": 90,
    "carbs": 50,
    "name": "Pain blanc"
  },
  {
    "ig": 90,
    "carbs": 80,
    "name": "Riz glutineux, riz agglutinant"
  },
  {
    "ig": 85,
    "carbs": 2.6,
    "name": "Carottes (cuites)"
  },
  {
    "ig": 85,
    "carbs": 4.6,
    "name": "Céleri rave (cuit)"
  },
  {
    "ig": 85,
    "carbs": 75,
    "name": "Corn Flakes, flocons de mais"
  },
  {
    "ig": 85,
    "carbs": 76,
    "name": "Farine de blé blanche"
  },
  {
    "ig": 85,
    "carbs": 21.9,
    "name": "Gâteau de riz"
  },
  {
    "ig": 85,
    "carbs": 89.2,
    "name": "Maizena (amidon de maïs)"
  },
  {
    "ig": 85,
    "carbs": 3.8,
    "name": "Navet (cuit)"
  },
  {
    "ig": 85,
    "carbs": 50.7,
    "name": "Pain très blanc, pain de mie (type Harry's®)"
  },
  {
    "ig": 85,
    "carbs": 11.5,
    "name": "Panais"
  },
  {
    "ig": 85,
    "carbs": 59.7,
    "name": "Pop corn (sans sucre)"
  },
  {
    "ig": 85,
    "carbs": 80.5,
    "name": "Riz soufflé, galettes de riz"
  },
  {
    "ig": 85,
    "carbs": 87.8,
    "name": "Tapioca"
  },
  {
    "ig": 80,
    "carbs": 12.2,
    "name": "Pomme de terre en purée"
  },
  {
    "ig": 75,
    "carbs": 4.3,
    "name": "Courges (diverses)"
  },
  {
    "ig": 75,
    "carbs": 39.4,
    "name": "Doughnuts"
  },
  {
    "ig": 75,
    "carbs": 73.9,
    "name": "Farine de riz complète"
  },
  {
    "ig": 75,
    "carbs": 7.38,
    "name": "Pastèque"
  },
  {
    "ig": 75,
    "carbs": 4.5,
    "name": "Potiron"
  },
  {
    "ig": 75,
    "carbs": 21.3,
    "name": "Riz au lait (sucré)"
  },
  {
    "ig": 70,
    "carbs": 54.2,
    "name": "Baguette, pain blanc"
  },
  {
    "ig": 70,
    "carbs": 28.9,
    "name": "Banane plantain (cuite)"
  },
  {
    "ig": 70,
    "carbs": 60,
    "name": "Barres chocolatées (sucrées)"
  },
  {
    "ig": 70,
    "carbs": 77.1,
    "name": "Biscotte"
  },
  {
    "ig": 70,
    "carbs": 51.6,
    "name": "Brioche"
  },
  {
    "ig": 70,
    "carbs": 51.1,
    "name": "Chips"
  },
  {
    "ig": 70,
    "carbs": 10.2,
    "name": "Colas, boissons gazeuses, sodas (type Coca-Cola®)"
  },
  {
    "ig": 70,
    "carbs": 43.2,
    "name": "Croissant"
  },
  {
    "ig": 70,
    "carbs": 64.7,
    "name": "Dattes"
  },
  {
    "ig": 70,
    "carbs": 78.1,
    "name": "Farine de maïs"
  },
  {
    "ig": 70,
    "carbs": 63.2,
    "name": "Farine de millet"
  },
  {
    "ig": 70,
    "carbs": 35,
    "name": "Gnocchi"
  },
  {
    "ig": 70,
    "carbs": 74.7,
    "name": "Mélasse"
  },
  {
    "ig": 70,
    "carbs": 65.4,
    "name": "Mil, millet, sorgho"
  },
  {
    "ig": 70,
    "carbs": 74,
    "name": "Polenta, semoule de maïs"
  },
  {
    "ig": 70,
    "carbs": 10,
    "name": "Pomme de terre en salade"
  },
  {
    "ig": 70,
    "carbs": 78,
    "name": "Riz blanc standard"
  },
  {
    "ig": 70,
    "carbs": 5.7,
    "name": "Rutabaga"
  },
  {
    "ig": 70,
    "carbs": 99.7,
    "name": "Sucre blanc (saccharose)"
  },
  {
    "ig": 70,
    "carbs": 97.1,
    "name": "Sucre roux / complet / intégral"
  },
  {
    "ig": 65,
    "carbs": 13.6,
    "name": "Ananas (boîte)"
  },
  {
    "ig": 65,
    "carbs": 8.56,
    "name": "Betterave (cuite)"
  },
  {
    "ig": 65,
    "carbs": 41.2,
    "name": "Confiture standard (sucrée)"
  },
  {
    "ig": 65,
    "carbs": 72.7,
    "name": "Couscous, semoule"
  },
  {
    "ig": 65,
    "carbs": 64,
    "name": "Farine d'épeautre (raffinée)"
  },
  {
    "ig": 65,
    "carbs": 70.4,
    "name": "Farine de châtaigne"
  },
  {
    "ig": 65,
    "carbs": 73.4,
    "name": "Farine de blé (semi complète)"
  },
  {
    "ig": 65,
    "carbs": 10.4,
    "name": "Fèves (cuites)"
  },
  {
    "ig": 65,
    "carbs": 18.4,
    "name": "Maïs en grains"
  },
  {
    "ig": 65,
    "carbs": 67.9,
    "name": "Muesli (avec sucre, miel…)"
  },
  {
    "ig": 65,
    "carbs": 80.5,
    "name": "Nouilles / vermicelle chinois (riz)"
  },
  {
    "ig": 65,
    "carbs": 47.5,
    "name": "Pain au chocolat"
  },
  {
    "ig": 65,
    "carbs": 46.3,
    "name": "Pain au seigle (30% de seigle)"
  },
  {
    "ig": 65,
    "carbs": 53.1,
    "name": "Pain au levain"
  },
  {
    "ig": 65,
    "carbs": 40.8,
    "name": "Pain complet"
  },
  {
    "ig": 65,
    "carbs": 15.4,
    "name": "Pomme de terre cuite dans sa peau (eau/vapeur)"
  },
  {
    "ig": 65,
    "carbs": 62.4,
    "name": "Raisins secs"
  },
  {
    "ig": 65,
    "carbs": 67.1,
    "name": "Sirop d’érable"
  },
  {
    "ig": 65,
    "carbs": 20.8,
    "name": "Sorbet (sucré)"
  },
  {
    "ig": 60,
    "carbs": 19.6,
    "name": "Banane (mûre)"
  },
  {
    "ig": 60,
    "carbs": 36.5,
    "name": "Châtaigne, marron"
  },
  {
    "ig": 60,
    "carbs": 26.2,
    "name": "Crème glacée classique (sucrée)"
  },
  {
    "ig": 60,
    "carbs": 62.5,
    "name": "Farine de blé complète"
  },
  {
    "ig": 60,
    "carbs": 6.57,
    "name": "Melon"
  },
  {
    "ig": 60,
    "carbs": 81.3,
    "name": "Miel"
  },
  {
    "ig": 60,
    "carbs": 68.6,
    "name": "Orge perlé"
  },
  {
    "ig": 60,
    "carbs": 49.3,
    "name": "Pain au lait"
  },
  {
    "ig": 60,
    "carbs": 26.8,
    "name": "Pizza"
  },
  {
    "ig": 60,
    "carbs": 78.6,
    "name": "Riz long"
  },
  {
    "ig": 55,
    "carbs": 66.8,
    "name": "Boulgour, bulgur (blé, cuit)"
  },
  {
    "ig": 55,
    "carbs": 21.4,
    "name": "Ketchup"
  },
  {
    "ig": 55,
    "carbs": 4.33,
    "name": "Moutarde (avec sucre ajouté)"
  },
  {
    "ig": 55,
    "carbs": 57.9,
    "name": "Nutella"
  },
  {
    "ig": 55,
    "carbs": 9.9,
    "name": "Papaye (fruit frais)"
  },
  {
    "ig": 55,
    "carbs": 13.8,
    "name": "Pêches (boîte, au sirop)"
  },
  {
    "ig": 55,
    "carbs": 16.3,
    "name": "Raisin [Jus de] (sans sucre)"
  },
  {
    "ig": 55,
    "carbs": 70.4,
    "name": "Riz rouge"
  },
  {
    "ig": 50,
    "carbs": 14.3,
    "name": "Kaki"
  },
  {
    "ig": 50,
    "carbs": 8.45,
    "name": "Kiwi"
  },
  {
    "ig": 50,
    "carbs": 15.2,
    "name": "Litchi (fruit frais)"
  },
  {
    "ig": 50,
    "carbs": 13.7,
    "name": "Mangue (fruit frais)"
  },
  {
    "ig": 50,
    "carbs": 67.9,
    "name": "Muesli (sans sucre)"
  },
  {
    "ig": 50,
    "carbs": 18.3,
    "name": "Patate douce"
  },
  {
    "ig": 50,
    "carbs": 65.8,
    "name": "Pâtes"
  },
  {
    "ig": 50,
    "carbs": 9.79,
    "name": "Pomme [Jus de] (sans sucre)"
  },
  {
    "ig": 50,
    "carbs": 77.8,
    "name": "Riz basmati long"
  },
  {
    "ig": 50,
    "carbs": 77.8,
    "name": "Riz complet brun"
  },
  {
    "ig": 50,
    "carbs": 11.8,
    "name": "Surimi"
  },
  {
    "ig": 50,
    "carbs": 11.5,
    "name": "Topinambour"
  },
  {
    "ig": 45,
    "carbs": 7.6,
    "name": "Airelle rouge, canneberge"
  },
  {
    "ig": 45,
    "carbs": 11,
    "name": "Ananas (fruit frais)"
  },
  {
    "ig": 45,
    "carbs": 19.6,
    "name": "Banane (verte)"
  },
  {
    "ig": 45,
    "carbs": 29.6,
    "name": "Banane plantain (crue)"
  },
  {
    "ig": 45,
    "carbs": 44.8,
    "name": "Farine de seigle (complète)"
  },
  {
    "ig": 45,
    "carbs": 69.4,
    "name": "Blé (type Ebly)"
  },
  {
    "ig": 45,
    "carbs": 64,
    "name": "Farine d'épeautre (intégrale)"
  },
  {
    "ig": 45,
    "carbs": 62.5,
    "name": "Farine de blé (intégrale)"
  },
  {
    "ig": 45,
    "carbs": 9.58,
    "name": "Orange [Jus de] (sans sucre et pressé)"
  },
  {
    "ig": 45,
    "carbs": 7.83,
    "name": "Pamplemousse [Jus de] (sans sucre)"
  },
  {
    "ig": 45,
    "carbs": 10,
    "name": "Petits pois (boîte)"
  },
  {
    "ig": 45,
    "carbs": 15.7,
    "name": "Raisin (fruit frais)"
  },
  {
    "ig": 45,
    "carbs": 7.5,
    "name": "Sauce tomate, coulis de tomate (avec sucre)"
  },
  {
    "ig": 40,
    "carbs": 55.7,
    "name": "Avoine"
  },
  {
    "ig": 40,
    "carbs": 16,
    "name": "Beurre de cacahuète (sans sucre ajouté)"
  },
  {
    "ig": 40,
    "carbs": 6.55,
    "name": "Carottes [Jus de] (sans sucre)"
  },
  {
    "ig": 40,
    "carbs": 57.2,
    "name": "Chicorée (boisson)"
  },
  {
    "ig": 40,
    "carbs": 2.62,
    "name": "Cidre brut"
  },
  {
    "ig": 40,
    "carbs": 18.7,
    "name": "Falafel (fèves)"
  },
  {
    "ig": 40,
    "carbs": 68.4,
    "name": "Farine de sarrasin"
  },
  {
    "ig": 40,
    "carbs": 44.8,
    "name": "Farine de seigle (intégrale)"
  },
  {
    "ig": 40,
    "carbs": 4.4,
    "name": "Fèves (crues)"
  },
  {
    "ig": 40,
    "carbs": 53.7,
    "name": "Figues sèches"
  },
  {
    "ig": 40,
    "carbs": 57.9,
    "name": "Flocons d'avoine (non cuite)"
  },
  {
    "ig": 40,
    "carbs": 12.1,
    "name": "Haricots rouges, noirs, blancs (boîte)"
  },
  {
    "ig": 40,
    "carbs": 3.4,
    "name": "Lait de coco"
  },
  {
    "ig": 40,
    "carbs": 55.7,
    "name": "Pruneaux"
  },
  {
    "ig": 40,
    "carbs": 13.8,
    "name": "Purée de sésame, tahin"
  },
  {
    "ig": 35,
    "carbs": 39.8,
    "name": "Abricot sec"
  },
  {
    "ig": 35,
    "carbs": 8.9,
    "name": "Brugnons, nectarines (blancs ou jaunes"
  },
  {
    "ig": 35,
    "carbs": 10,
    "name": "Cassoulet"
  },
  {
    "ig": 35,
    "carbs": 4.3,
    "name": "Céleri rave (cru"
  },
  {
    "ig": 35,
    "carbs": 47,
    "name": "Farine de pois chiche"
  },
  {
    "ig": 35,
    "carbs": 14.3,
    "name": "Figue (fraîche)"
  },
  {
    "ig": 35,
    "carbs": 14.2,
    "name": "Grenade (fruit frais)"
  },
  {
    "ig": 35,
    "carbs": 43.9,
    "name": "Haricots rouges, noirs, blancs (secs)"
  },
  {
    "ig": 35,
    "carbs": 2.2,
    "name": "Moutarde à l'ancienne"
  },
  {
    "ig": 35,
    "carbs": 7.15,
    "name": "Noix de coco"
  },
  {
    "ig": 35,
    "carbs": 7.92,
    "name": "Orange (fruit frais)"
  },
  {
    "ig": 35,
    "carbs": 9,
    "name": "Pêches (fruit frais)"
  },
  {
    "ig": 35,
    "carbs": 7,
    "name": "Petits pois (frais)"
  },
  {
    "ig": 35,
    "carbs": 15,
    "name": "Pois chiches (boîte)"
  },
  {
    "ig": 35,
    "carbs": 24.4,
    "name": "Pomme (compote)"
  },
  {
    "ig": 35,
    "carbs": 11.6,
    "name": "Pomme (fruit frais)"
  },
  {
    "ig": 35,
    "carbs": 57.2,
    "name": "Pomme séchée"
  },
  {
    "ig": 35,
    "carbs": 8.83,
    "name": "Prune (fruit frais)"
  },
  {
    "ig": 35,
    "carbs": 58.1,
    "name": "Quinoa"
  },
  {
    "ig": 35,
    "carbs": 69.2,
    "name": "Riz sauvage"
  },
  {
    "ig": 35,
    "carbs": 9.81,
    "name": "Sésame (graines de)"
  },
  {
    "ig": 35,
    "carbs": 3.22,
    "name": "Tomate [Jus de]"
  },
  {
    "ig": 35,
    "carbs": 10.2,
    "name": "Tournesol (graines)"
  },
  {
    "ig": 35,
    "carbs": 1.53,
    "name": "Yaourt au soja (aromatisé)"
  },
  {
    "ig": 35,
    "carbs": 3.7,
    "name": "Yaourt, yoghourt, yogourt (nature)"
  },
  {
    "ig": 30,
    "carbs": 7.14,
    "name": "Abricot (fruit frais)"
  },
  {
    "ig": 30,
    "carbs": 21.2,
    "name": "Ail"
  },
  {
    "ig": 30,
    "carbs": 9.1,
    "name": "Betterave (crue)"
  },
  {
    "ig": 30,
    "carbs": 6.45,
    "name": "Carottes (crues)"
  },
  {
    "ig": 30,
    "carbs": 3.46,
    "name": "Fromage blanc non égoutté"
  },
  {
    "ig": 30,
    "carbs": 9.39,
    "name": "Fruit de la passion, maracudja, grenadille pourpre"
  },
  {
    "ig": 30,
    "carbs": 4,
    "name": "Haricots verts"
  },
  {
    "ig": 30,
    "carbs": 1.45,
    "name": "Lait d’amande"
  },
  {
    "ig": 30,
    "carbs": 7.8,
    "name": "Lait d'avoine (non cuite)"
  },
  {
    "ig": 30,
    "carbs": 0.7,
    "name": "Lait de soja"
  },
  {
    "ig": 30,
    "carbs": 4.8,
    "name": "Lait (écrémé ou non)"
  },
  {
    "ig": 30,
    "carbs": 15,
    "name": "Lentilles"
  },
  {
    "ig": 30,
    "carbs": 9.7,
    "name": "Mandarines, clémentines"
  },
  {
    "ig": 30,
    "carbs": 4.7,
    "name": "Navet (cru)"
  },
  {
    "ig": 30,
    "carbs": 7.4,
    "name": "Pamplemousse (fruit frais)"
  },
  {
    "ig": 30,
    "carbs": 10.6,
    "name": "Poires (fruits frais)"
  },
  {
    "ig": 30,
    "carbs": 47,
    "name": "Pois chiches"
  },
  {
    "ig": 30,
    "carbs": 4.15,
    "name": "Salsifis"
  },
  {
    "ig": 30,
    "carbs": 2.26,
    "name": "Tomate"
  },
  {
    "ig": 25,
    "carbs": 10.6,
    "name": "Airelle, myrtille"
  },
  {
    "ig": 25,
    "carbs": 11.6,
    "name": "Cerises"
  },
  {
    "ig": 25,
    "carbs": 35,
    "name": "Chocolat noir (>70% de cacao)"
  },
  {
    "ig": 25,
    "carbs": 42.1,
    "name": "Flageolets"
  },
  {
    "ig": 25,
    "carbs": 6.4,
    "name": "Fraise (fruit frais)"
  },
  {
    "ig": 25,
    "carbs": 4.26,
    "name": "Framboise (fruit frais)"
  },
  {
    "ig": 25,
    "carbs": 6.64,
    "name": "Groseille"
  },
  {
    "ig": 25,
    "carbs": 4.83,
    "name": "Groseille à maquereau"
  },
  {
    "ig": 25,
    "carbs": 2.35,
    "name": "Haricot mungo (soja)"
  },
  {
    "ig": 25,
    "carbs": 44.5,
    "name": "Lentilles vertes"
  },
  {
    "ig": 25,
    "carbs": 6,
    "name": "Mûres"
  },
  {
    "ig": 25,
    "carbs": 52,
    "name": "Pois cassés"
  },
  {
    "ig": 20,
    "carbs": 5.02,
    "name": "Artichaut"
  },
  {
    "ig": 20,
    "carbs": 2.39,
    "name": "Aubergine"
  },
  {
    "ig": 20,
    "carbs": 11.6,
    "name": "Cacao en poudre (sans sucre)"
  },
  {
    "ig": 20,
    "carbs": 35,
    "name": "Chocolat noir (>85% de cacao)"
  },
  {
    "ig": 20,
    "carbs": 3.1,
    "name": "Citron"
  },
  {
    "ig": 15,
    "carbs": 78.1,
    "name": "Agave (sirop)"
  },
  {
    "ig": 15,
    "carbs": 7.85,
    "name": "Amande"
  },
  {
    "ig": 15,
    "carbs": 2.03,
    "name": "Asperge"
  },
  {
    "ig": 15,
    "carbs": 0.5,
    "name": "Blette, bette"
  },
  {
    "ig": 15,
    "carbs": 1.68,
    "name": "Brocoli"
  },
  {
    "ig": 15,
    "carbs": 14.8,
    "name": "Cacahuètes, arachides"
  },
  {
    "ig": 15,
    "carbs": 3.6,
    "name": "Céleri branches"
  },
  {
    "ig": 15,
    "carbs": 1.88,
    "name": "Champignon"
  },
  {
    "ig": 15,
    "carbs": 0.83,
    "name": "Choucroute"
  },
  {
    "ig": 15,
    "carbs": 2.05,
    "name": "Chou-fleur"
  },
  {
    "ig": 15,
    "carbs": 4,
    "name": "Choux"
  },
  {
    "ig": 15,
    "carbs": 4,
    "name": "Choux de Bruxelles"
  },
  {
    "ig": 15,
    "carbs": 2.04,
    "name": "Concombre"
  },
  {
    "ig": 15,
    "carbs": 1.3,
    "name": "Cornichon"
  },
  {
    "ig": 15,
    "carbs": 1.8,
    "name": "Courgettes"
  },
  {
    "ig": 15,
    "carbs": 8.35,
    "name": "Echalote"
  },
  {
    "ig": 15,
    "carbs": 3.15,
    "name": "Endives, chicorée"
  },
  {
    "ig": 15,
    "carbs": 2.25,
    "name": "Epinards"
  },
  {
    "ig": 15,
    "carbs": 2.3,
    "name": "Fenouil"
  },
  {
    "ig": 15,
    "carbs": 3.4,
    "name": "Gingembre"
  },
  {
    "ig": 15,
    "carbs": 8.03,
    "name": "Groseille noire, cassis"
  },
  {
    "ig": 15,
    "carbs": 6.2,
    "name": "Haricot mange-tout"
  },
  {
    "ig": 15,
    "carbs": 21.5,
    "name": "Lupin"
  },
  {
    "ig": 15,
    "carbs": 6.99,
    "name": "Noisettes"
  },
  {
    "ig": 15,
    "carbs": 6.88,
    "name": "Noix"
  },
  {
    "ig": 15,
    "carbs": 26.7,
    "name": "Noix de cajou"
  },
  {
    "ig": 15,
    "carbs": 6.25,
    "name": "Oignons"
  },
  {
    "ig": 15,
    "carbs": 0.3,
    "name": "Olives"
  },
  {
    "ig": 15,
    "carbs": 1.6,
    "name": "Oseille"
  },
  {
    "ig": 15,
    "carbs": 6.31,
    "name": "Pignon de pin"
  },
  {
    "ig": 15,
    "carbs": 7.7,
    "name": "Piment"
  },
  {
    "ig": 15,
    "carbs": 18,
    "name": "Pistache"
  },
  {
    "ig": 15,
    "carbs": 4.9,
    "name": "Poireaux"
  },
  {
    "ig": 15,
    "carbs": 4.5,
    "name": "Poivrons"
  },
  {
    "ig": 15,
    "carbs": 2,
    "name": "Radis"
  },
  {
    "ig": 15,
    "carbs": 1.46,
    "name": "Rhubarbe"
  },
  {
    "ig": 15,
    "carbs": 1.5,
    "name": "Salade (laitue, scarole, frisée, mâche, etc.)"
  },
  {
    "ig": 15,
    "carbs": 23,
    "name": "Son (de blé, d'avoine...)"
  },
  {
    "ig": 15,
    "carbs": 6.4,
    "name": "Tempeh"
  },
  {
    "ig": 15,
    "carbs": 1.78,
    "name": "Tofu (soja)"
  },
  {
    "ig": 10,
    "carbs": 3.67,
    "name": "Avocat"
  },
  {
    "ig": 5,
    "carbs": 0.6,
    "name": "Vinaigre"
  }
]

  constructor() { }
}
