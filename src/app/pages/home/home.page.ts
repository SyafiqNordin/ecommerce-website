import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs';
import { WsApiService } from 'src/app/service';
import { ProductPage } from '../product/product.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories$: any;
  categories: any;
  category_image =[
    'https://www.techspot.com/articles-info/2468/images/2022-06-06-image-5.jpg',
    'https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png',
    'https://m.buro247.my/images/2022/06/1654051693929615.jpg',
    'https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg',
    'https://midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harder-jett-008-1643379018.jpg?crop=1.00xw:0.749xh;0.00160xw,0.115xh&resize=480:*',
    'https://www.fella.com.my/media/blog/living_room_sofa-resize.jpg',
    'https://cdn.shopify.com/s/files/1/0261/2386/2082/products/2_00f8ae5a-5d53-49ff-8070-dfddd842b95b_540x.jpg?v=1655968802',
    'https://media.kohlsimg.com/is/image/kohls/115753-1-d',
    'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://i0.wp.com/www.theweddingvowsg.com/wp-content/uploads/2021/10/The-Batik-Boutique-1.jpg?resize=540%2C540&ssl=1',
    'https://cdn.shopify.com/s/files/1/0242/2753/products/TMAZ5891-2_1000x1000.jpg?v=1672116680',
    'https://cf.shopee.com.my/file/47f382db05af1de57cfde8243aeacaf9',
    'https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/92/5d/925dde91-3c65-4ef8-b5d9-cabeefdcc627/vacheron-constantin-traditionnelle-perpetual-calendar-ultra-thin-womens-watch.jpg__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1169781202.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
    'https://plazza.pk/wp-content/uploads/2022/07/Women-Fancy-Jewelry-in-Pakistan.jpeg',
    'https://www.vmcdn.ca/f/files/glaciermedia/images/contributed/sunglassesyellow.jpg;w=960',
    'https://www.solvay.com/sites/g/files/srpend221/files/styles/header/https/media.solvay.com/medias/domain1446/media978/149593-0vuduqe055.jpg?itok=sF0xgnUs',
    'https://d29sx7s964xey6.cloudfront.net/52950879-ee2e-4b32-9cdc-3bc97a096004_SRS_Asphalt.136.1.png?auto=compress,format',
    'https://www.embunlighting.com/images/000_embun/home/img001.png'
  ]
  combined_array: any[] = [];

  constructor(
    private ws: WsApiService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.categories$ = this.ws.get('https://dummyjson.com/products/categories')

  }

  goToPage(category: any) {
    this.navCtrl.navigateForward('/product', { queryParams: { type: category}});

  }

}
