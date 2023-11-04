import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  getCategories(): string[] {
    return [
      'Anasayfa',
      'Kategoriler',
      'Is-Dunyasi',
      'Eglence',
      'Genel',
      'Saglik',
      'Bilim',
      'Spor',
      'Teknoloji',
      'Hakkimizda',
    ];
  }
  
  constructor() { }
}
