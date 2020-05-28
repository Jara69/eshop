import {Product} from './Product.model';

export class Category {
  constructor(public id: number,
              public name: string,
              public products: Product,
              public description: string,
              public category: Category[]) { }

}
