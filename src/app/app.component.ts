import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Newspaper';
  selectedCategory: boolean = false; // başlangıçta false değeri atandı
  

  onCategorySelected(category: string) {
    this.selectedCategory = true;
    console.log(this.selectedCategory);
  }
}
