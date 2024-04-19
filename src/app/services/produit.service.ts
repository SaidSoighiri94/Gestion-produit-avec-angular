import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
//import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Options HTTP pour spécifier le type de contenu JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  // URL de l'API des produits
  apiURL: string = 'http://localhost:9001/produits/api'
  produits!: Produit[]; //un tableau de Produits
  produit!: Produit;

  /*categories: Categorie[];  // un Tableau de categorie*/

  // Injection du service HttpClient pour effectuer des requêtes HTTP
  constructor(private http: HttpClient) {
    /* this.categories = [
      { idCat: 1, nomCat: "PC" },
      { idCat: 2, nomCat: "Imprimante" }
    ];*/

    /* this.produits = [
      {
        idProduit: 1, nomProduit: "Pc Asus", prixProduit: 4600, dateCreation: new Date("12-23-2023"),
        categorie: { idCat: 1, nomCat: "Pc" }
      },
      {
        idProduit: 2, nomProduit: "Samsung Tablette", prixProduit: 2333, dateCreation: new Date("11/16/2020"),
        categorie: { idCat: 1, nomCat: "Pc" }
      },
      {
        idProduit: 3, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"),
        categorie: { idCat: 2, nomCat: "Imprimante" }
      }
    ]; */
  }

  // on va creer une methode qui va qui va nous retourner un tablea de produit
  /*listeProduit(): Produit[] {
    return this.produits;
  }*/

  // Méthode pour récupérer la liste des produits depuis l'API
  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL + "/listProduit");
  }

  // Méthode pour ajouter un produit via une requête POST à l'API
  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL + "/addProduit", prod, httpOptions);
  }

  // Methode de suppression de produit
  supprimerProduit(idProduit: number) {
    const url = `${this.apiURL}/delete/${idProduit}`;
    return this.http.delete(url, httpOptions);

  }

  //Methode permettant de consulter produit
  consulterProduit(idProduit: number): Observable<Produit> {
    const url = `${this.apiURL}/${idProduit}`;
    return this.http.get<Produit>(url)
  }
  // Methode pour le trie des donnees
  trierProduits() {                        // Ajout d'une methode pour le trie des produits
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1
      }
      return 0;
    });
  }
 
  // Methode permettant la modification d'un produit 
  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiURL + "/updateProduit", prod, httpOptions);

  }
  // Ajout de la listes des categorie dans le menu deroulant
  /*listeCategories():Categorie[] {
    return this.categories;
  }
  consulterCategorie(idCat:number): Categorie{
    return this.categories.find(cat => cat.idCat ==idCat)!;
  }*/
}
