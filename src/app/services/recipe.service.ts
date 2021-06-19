import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  createRecipe(r: any): Observable<any> {

    const endpoint = 'http://localhost:8080/recipe';
    return this.http.post(endpoint, r);
  }

  getRecipes(): Observable<any> {
    const endpoint = 'http://localhost:8080/recipe';
    return this.http.get(endpoint);
  }

  getRecipetById(id: any): Observable<any> {

    const endpoint = 'http://localhost:8080/recipe/' + id;
    return this.http.get(endpoint);
  }

  addFood(idr: any, idf: any): Observable<any> {
    const endpoint = 'http://localhost:8080/recipe/recipe/' + idr + '&' + idf;
    return this.http.get(endpoint);
  }

  getRecipeByName(name: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/recipe/filter/${name}`)
  }
}
