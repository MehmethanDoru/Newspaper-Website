import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service'; // NewsService'nin yolunu düzgün olarak belirttiğinizden emin olun

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  newsList: any[] = []; // newsList özelliğini tanımlayın
  currentPage: number = 1;
  totalResults: number = 0;
  pageNumbers: number[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews(this.currentPage);
  }

  loadNews(page: number) {
    this.newsService.getNews(page).subscribe((data: any) => {
      this.newsList = data.articles.slice(3,);
      this.totalResults = data.totalResults;
      this.calculatePageNumbers();
    });
  }

  // Titleda bulunan kaynak silme
  getDescriptionPart(news: any) {
    const descriptionPart = news.title.split('- ' + news.author)[0].trim();
    return descriptionPart;
  }
  

  calculatePageNumbers() {
    const totalPages = Math.ceil(this.totalResults / 20); // Sayfa başına haber sayısı API'ye göre değişebilir
    this.pageNumbers = Array(totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 1000); 
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
  } 
  
  // secili sayfa gosterimi
  activePage: number = 1;
  setPageActive(page: number) {
    this.activePage = page; // Aktif sayfayı güncelle
    this.loadNews(page); // Haberleri yükle
  }
}
