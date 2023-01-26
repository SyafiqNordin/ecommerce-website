import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products = [
    {
      category: 'Mens wear', image: 'https://i.pinimg.com/736x/f4/7c/ec/f47cecd3e6fd3dd8ef9f48ac610f3c51.jpg'
    },
    {
      category: 'Womens wear', image: 'https://cf.shopee.com.my/file/e01a4687db19ab188aacb930a41771a7'
    },
    {
      category: 'Kids wear', image: '../../../assets/img/kids-wear.jpg'
    },
    {
      category: 'Mens shoes', image: 'https://i.insider.com/5b240ed61ae66253008b5228?width=1000&format=jpeg&auto=webp'
    },
    {
      category: 'Womens shoes', image: 'https://marmishoes.com/media/wysiwyg/Fall_Thumbnail_NewArrivals@3x.png'
    },
    {
      category: 'Kids pants', image: 'https://cf.shopee.com.my/file/325095a8a79c19b054fe542fe563bb36'
    },
    {
      category: 'Mens pants', image: 'https://cf.shopee.com.my/file/b82b0ebb2993d210a36c6806b5f5b958'
    },
    {
      category: 'Womens pants', image: 'https://www.kime.com.my/image/kime/image/cache/data/all_product_images/product-2408/web4-420x630.jpg'
    }

  ]


  constructor() { }

  ngOnInit() {
  }

}
