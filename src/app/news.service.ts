import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'e8713d12bbc04ec99a550c671618934e';
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) { }
  
  getNews(page: number){
    return this.http.get(`${this.apiUrl}?country=tr&page=${page}&apiKey=${this.apiKey}`);
  }

  getNewsWithCategory(category: string, page: number) {
    return this.http.get(`${this.apiUrl}?country=tr&category=${category}&page=${page}&apiKey=${this.apiKey}`);
  }
  
  getNewsWithQuery(word: string, page: number) {
    return this.http.get(`${this.apiUrl}?country=tr&q=${word}&page=${page}&apiKey=${this.apiKey}`);
  }
}
