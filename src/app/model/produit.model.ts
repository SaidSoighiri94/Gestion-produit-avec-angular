import { Categorie } from "./categorie.model";

//  Creation de la classe produit dans notre model 
export class Produit {
    idProduit?: number;
    nomProduit?: string;
    prixProduit?: number;
    dateCreation?: Date;
    categorie! : Categorie;
}