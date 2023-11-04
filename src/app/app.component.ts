import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Newspaper';
  selectedCategory!: string;

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}
