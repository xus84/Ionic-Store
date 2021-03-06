import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface ICategory {
  id: number,
  name: string,
  image: string,
}

export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
  amount: number,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor() { }

 

  getCategories () {
    let categories = [];

    let cat1: ICategory = {
      id:1,
      name: 'women',
      image: '../../assets/categories/women.jfif'
    }
    let cat2: ICategory = {
      id:2,
      name: 'men',
      image: '../../assets/categories/men.jfif'
    }
    let cat3: ICategory = {
      id:3,
      name: 'children',
      image: '../../assets/categories/children.jfif'
    }
    categories.push(cat1,cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Men Shoes',
      price: 150,
      image: '../../assets/products/shoes.jfif',
      amount: 1,
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Trousers',
      price: 90,
      image: '../../assets/products/trousers.jpg',
      amount: 1,
    }
    let prod3: IProduct = {
      id: 3,
      name: 'Black Jacket',
      price: 250,
      image: '../../assets/products/jacket.jfif',
      amount: 1,
    }
    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 4,
      name: 'Sunglasses',
      price: 110,
      image: '../../assets/products/sunglasses.jpg',
      amount: 1,
    }
    let prod2: IProduct = {
      id: 5,
      name: 'Red solid Skirt',
      price: 60,
      image: '../../assets/products/skirt.jpg',
      amount: 1,
    }
    let prod3: IProduct = {
      id: 6,
      name: 'Black Dress',
      price: 100,
      image: '../../assets/products/dress.jfif',
      amount: 1,
    }
    products.push(prod1, prod2, prod3);

    return products;
  }
  
}
