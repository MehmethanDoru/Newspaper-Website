import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  selectedCategory: string = '';
  categories: string[];
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private categoriesService: CategoriesService, private router: Router) {
    this.categories = this.categoriesService.getCategories();
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val);
        this.selectedCategory = val.url.split('/')[2];
        console.log(this.selectedCategory);
      }
    });
  }

  navigateToCategory(category: string) {
    if (category === 'anasayfa') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/category', category]);
    }
    this.categorySelected.emit(category);
  }
}
