import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories: string[];

  constructor(private categoriesService: CategoriesService) {
    this.categories = this.categoriesService.getCategories();
  }
  
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
