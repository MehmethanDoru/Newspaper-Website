import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  categories: string[];
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private categoriesService: CategoriesService, private router: Router) {
    this.categories = this.categoriesService.getCategories();
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
