import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoriesService],
})
export class CategoriesComponent implements OnInit {
  categories: string[];
  selectedCategories: { [key: string]: boolean } = {};
  newsList: any[] = [];
  totalResults: any;
  categoryNews: { [key: string]: any[] } = {};

  hiddenCategories: { [key: string]: boolean } = {
    'Anasayfa': true,
    'Hakkimizda': true,
    'Kategoriler': true,
  };

  constructor(
    private categoriesService: CategoriesService,
    private newsService: NewsService
  ) {
    this.categories = this.categoriesService.getCategories();
    this.selectedCategories['Genel'] = true;
  }

  ngOnInit(){
    this.hiddenCategories['anasayfa'] = false;
    this.hiddenCategories['hakkimizda'] = true;
    this.loadNewsForSelectedCategories();
  }

  onCategorySelectionChange() {
    // secilen kategoriye gore
    this.loadNewsForSelectedCategories();
  }

  selectedCategoriesNotEmpty(): boolean {
    return Object.values(this.selectedCategories).some(selected => selected);
  }

  loadNewsForSelectedCategories() {

    const selectedCategories = Object.keys(this.selectedCategories).filter(
      (category) => this.selectedCategories[category]
    );
    console.log('SEELECT:' + selectedCategories);

    if (selectedCategories.length === 0) {
      return; // kategori secmediysen bos kalsin
    }

    for (const category of selectedCategories) {
      if (category === 'Is-Dunyasi') {
        this.newsService.getNewsWithCategory('business',1).subscribe((data: any) => {
          this.categoryNews['Is-Dunyasi'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }

      if (category === 'Eglence') {
        this.newsService.getNewsWithCategory('entertainment',1).subscribe((data: any) => {
          this.categoryNews['Eglence'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      
      if (category === 'Genel') {
        this.newsService.getNewsWithCategory('general',1).subscribe((data: any) => {
          this.categoryNews['Genel'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      if (category === 'Saglik') {
        this.newsService.getNewsWithCategory('health',1).subscribe((data: any) => {
          this.categoryNews['Saglik'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      if (category === 'Bilim') {
        this.newsService.getNewsWithCategory('Science',1).subscribe((data: any) => {
          this.categoryNews['Bilim'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      if (category === 'Spor') {
        this.newsService.getNewsWithCategory('sports',1).subscribe((data: any) => {
          this.categoryNews['Spor'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      if (category === 'Teknoloji') {
        this.newsService.getNewsWithCategory('technology',1).subscribe((data: any) => {
          this.categoryNews['Teknoloji'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }

  }
}
// Titleda bulunan kaynak silme
getDescriptionPart(news: any) {
  const descriptionPart = news.title.split('- ' + news.author)[0].trim();
  return descriptionPart;
  
}

formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('tr-TR', options);
} 

getRandomNumber(): number {
  return Math.floor(Math.random() * 1000); 
}
}