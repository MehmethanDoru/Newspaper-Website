import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  categories: string[];

  constructor(private categoriesService: CategoriesService) {
    this.categories = this.categoriesService.getCategories();
  }


}
