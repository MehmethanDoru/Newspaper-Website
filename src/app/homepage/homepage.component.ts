import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  news: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews(1).subscribe((data: any) => {
      // API'den gelen tüm haberler data.articles içindedir.
      this.news = data.articles.slice(0, 3); // İlk 3 haberi seçin
    });
  }
}
