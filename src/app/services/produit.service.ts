import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLCat } from '../config';
import { CategorieWrapped } from '../model/CategorieWrapped.model';

// Options HTTP pour spécifier le type de contenu JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  
  produits!: Produit[]; //un tableau de Produits
  produit!: Produit;

  categories!: Categorie[];  // un Tableau de categorie*/
  

  // Injection du service HttpClient pour effectuer des requêtes HTTP
  constructor(private http: HttpClient) {
  }

  // Méthode pour récupérer la liste des produits depuis l'API
  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(apiURL + "/listProduit");
  }

  // Méthode pour ajouter un produit via une requête POST à l'API
  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(apiURL + "/addProduit", prod, httpOptions);
  }

  // Methode de suppression de produit
  supprimerProduit(idProduit: number) {
    const url = `${apiURL}/delete/${idProduit}`;
    return this.http.delete(url, httpOptions);

  }

  //Methode permettant de consulter produit
  consulterProduit(idProduit: number): Observable<Produit> {
    const url = `${apiURL}/${idProduit}`;
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
    return this.http.put<Produit>(apiURL + "/updateProduit", prod, httpOptions);

  }

  //Utilisation de la classe CategorieWrapped

  listeCategories():Observable<CategorieWrapped>{
    return this.http.get<CategorieWrapped>(apiURLCat);
    }
 // Methode recher par categorie 
 rechercheParCategorie(idCat:number):Observable<Produit[]>{
  const url = `${apiURL}/produitCat/${idCat}`;
  return this.http.get<Produit[]>(url);

 }
}
