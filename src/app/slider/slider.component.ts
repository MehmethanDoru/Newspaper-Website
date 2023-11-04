import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  news: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews(1).subscribe((data: any) => {
      this.news = data.articles.slice(0, 3);
    });
    
  }

  // Gelen tarihi g-m-y sekline donusturmek
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
  } 

  getRandomNumber(): number {
    return Math.floor(Math.random() * 1000); 
  }
  
}
