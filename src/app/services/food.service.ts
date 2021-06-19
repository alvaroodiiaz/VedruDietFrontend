import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  createFood(f: any): Observable<any> {
    const endpoint = 'http://localhost:8080/food';
    return this.http.post(endpoint, f);
  }

  getFoods(): Observable<any> {
    const endpoint = 'http://localhost:8080/food';
    return this.http.get(endpoint);
  }

  getFoodById(id: any): Observable<any> {

    const endpoint = 'http://localhost:8080/food/'+id;
    return this.http.get(endpoint);
  }

  getFoodByName(name: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/food/filter/${name}`)
  }

  orderByNutrientDesc(nutriente: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/food/order/${nutriente}`)
  }
}
