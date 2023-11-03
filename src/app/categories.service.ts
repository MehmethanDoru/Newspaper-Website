import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  getCategories(): string[] {
    return [
      'Anasayfa',
      'Kategoriler',
      'İş Dünyası',
      'Eğlence',
      'Genel',
      'Sağlık',
      'Bilim',
      'Spor',
      'Teknoloji',
      'Hakkımda',
    ];
  }
  
  constructor() { }
}
