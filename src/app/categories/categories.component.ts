import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoriesService],
})
export class CategoriesComponent {
  categories: string[];

  constructor(private categoriesService: CategoriesService) {
    this.categories = this.categoriesService.getCategories();
  }

  // news: any;
  // constructor(private newsService: NewsService) {}

  // ngOnInit() {
  //   this.newsService.getNewsWithCategory('business',3).subscribe((data) => {
  //     this.news = data;
  //     console.log(this.news);
  //   });
  // }
}
