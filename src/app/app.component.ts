import { Component } from '@angular/core';
import {Category} from './models/Category.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CategoriesService} from './services/categories.service';
import {Router} from '@angular/router';
import Host from './host';
import {query} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apieshop';

  public category: Category[];
  public length: number;
  public id: number;

  constructor(private httpClient: HttpClient, private categori: CategoriesService, private router: Router) {
    this.categori.getCategories()
      .subscribe(
        (data: Category[]) => {
          this.category = data;
          console.log(data);
        }, (error) =>  {
          console.log(error);
        }
      );
  }

  clickCategory(id: number) {
    this.router.navigate(['/category'], {queryParams: {id}});
    console.log(id);
  }
}