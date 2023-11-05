import { Component, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string | undefined;
  newsList: any[] = [];
  currentPage: number = 1;
  totalResults: number = 0;
  pageNumbers: number[] = [];
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      if (this.query) {
        console.log('Aranan terim:', this.query);
        this.loadNews(this.currentPage);
      }
    });
  }

  loadNews(page: number) {
    if (this.query) {
      this.newsService
        .getNewsWithQuery(this.query, page)
        .subscribe((data: any) => {
          this.newsList = data.articles;
          this.totalResults = data.totalResults;
          this.calculatePageNumbers();
        });
      console.log('12Aranan terim:', this.query);
    }
    console.log(this.newsList);
  }

  // Titleda bulunan kaynak silme
  getDescriptionPart(news: any) {
    const descriptionPart = news.title.split('- ' + news.author)[0].trim();
    return descriptionPart;
  }

  // Sayfalama
  calculatePageNumbers() {
    const totalPages = Math.ceil(this.totalResults / 20);
    this.pageNumbers = Array(totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 1000);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('tr-TR', options);
  }

  // secili sayfa gosterimi
  activePage: number = 1;
  setPageActive(page: number) {
    this.activePage = page;
    this.loadNews(page);
  }

  highlightQueryInTitle(title: string): string {
    if (!this.query || !title) {
      return title;
    }

    const queryLower = this.query.toLowerCase();
    const titleLower = title.toLowerCase();

    const startIndex = titleLower.indexOf(queryLower);

    if (startIndex !== -1) {
      const highlightedTitle =
        title.substr(0, startIndex) +
        '<mark>' +
        title.substr(startIndex, this.query.length) +
        '</mark>' +
        title.substr(startIndex + this.query.length);
      return highlightedTitle;
    } else {
      return title;
    }
  }
}
