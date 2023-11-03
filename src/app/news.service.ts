import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '676f017549224f488970f1835f9db971';
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) { }

  getNews(page: number){
    return this.http.get(`${this.apiUrl}?country=tr&page=${page}&apiKey=${this.apiKey}`);
  }

  getNewsWithCategory(category: string, page: number) {
    return this.http.get(`${this.apiUrl}?country=tr&category=${category}&page=${page}&apiKey=${this.apiKey}`);
  }
  
}
