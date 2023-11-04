import { Component, OnInit  } from '@angular/core';
import { NewsService } from '../news.service';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoriesService],
})
export class CategoriesComponent implements OnInit {
  categories: string[];
  categoryName: any;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) {
    this.categories = this.categoriesService.getCategories();
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.categoryName = params.get('categoryName');
      if (this.categoryName === 'anasayfa') {
        // Burada sadece anasayfa içeriğini görüntüle
      }
    });
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
