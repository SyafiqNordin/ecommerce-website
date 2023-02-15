import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { WsApiService } from 'src/app/service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  category: string;
  products$: any;
  products: any;
  test$: any;
  maxLength: number;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    private route: ActivatedRoute,
    private ws: WsApiService,
  ) { }

  ngOnInit() {
    this.category = this.route.snapshot.queryParams['type'];
    console.log(this.category);
    this.products$ = this.ws.get('https://dummyjson.com/products').subscribe( (res: any) => {
      this.products = res.products.filter( (product: any) => product.category === this.category);
      console.log(this.products);

    })


  }

}
