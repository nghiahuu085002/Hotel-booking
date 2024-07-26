import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    })

  }
  total = 0;

  calTotal() {
    this.total = 0;
    this.products.forEach((product: any) => {
      this.total += product.current_price * product.quantity;
    });
  }
}
