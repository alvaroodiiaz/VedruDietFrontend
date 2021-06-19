import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  createMenu(m: any): Observable<any> {
    const endpoint = 'http://localhost:8080/menu';
    return this.http.post(endpoint, m);
  }

  getMenus(): Observable<any> {
    const endpoint = 'http://localhost:8080/menu';
    return this.http.get(endpoint);
  }

  getMenuById(id: any): Observable<any> {

    const endpoint = 'http://localhost:8080/menu/'+id;
    return this.http.get(endpoint);
  }

  getMenuByPacientName(name: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/menu/filter/${name}`)
  }
}
