import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtserviceService {
  artUrl = "http://localhost:3000/articles"
  modifieArt: any;

  constructor(private http: HttpClient) { }


  ajoutArticle(article: any) {
    return this.http.post(`${this.artUrl}`, article)
  }
  getArticle() {
    return this.http.get(`${this.artUrl}`)
  }
  getArticleById(id: number): Observable<any> {
    return this.http.get(`${this.artUrl}/${id}`)
  }
  deletArticle(id: any) {
    return this.http.delete(`${this.artUrl}/${id}`)
  }
  updatedArticle(article: any, id: number) {
    return this.http.put<any>(`${this.artUrl}/${id}`, article);
  }
}
