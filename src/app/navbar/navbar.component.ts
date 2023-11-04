import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router, NavigationEnd } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  selectedCategory: string = '';
  categories: string[];
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private categoriesService: CategoriesService, private router: Router) {
    this.categories = this.categoriesService.getCategories();
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // Her sayfa değiştiğinde seçili kategoriyi güncelle
        console.log(val);
        this.selectedCategory = val.url.split('/')[2]; // Örnek URL yapısına göre düzenlenmeli
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
