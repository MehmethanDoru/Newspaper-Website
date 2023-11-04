import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  categories: string[];
  router: any;
  @Output() categorySelected = new EventEmitter<string>();


  constructor(private categoriesService: CategoriesService) {
    this.categories = this.categoriesService.getCategories();
  }

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
  
  navigateToCategory(category: string) {
    if (category === 'anasayfa') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/category', category]);
    }
  }

}
