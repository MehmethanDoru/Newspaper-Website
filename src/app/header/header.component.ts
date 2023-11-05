import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  categories: string[];
  searchQuery: any;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {
    this.categories = this.categoriesService.getCategories();
  }

 
  openSearchPage(word: string) {
    this.router.navigate(['/search'], {
      queryParams: { query: this.searchQuery },
    });
    this.searchQuery = '';
  }
  
}
