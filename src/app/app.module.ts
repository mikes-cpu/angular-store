import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ItemListComponent } from './shop/item-list/item-list.component';
import { ItemComponent } from './shop/item-list/item/item.component';
import { ItemDescriptionComponent } from './shop/item-description/item-description.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';


const appRoutes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'cart', component: ShoppingCartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ItemListComponent,
    ItemComponent,
    ItemDescriptionComponent,
    FooterComponent,
    ShoppingCartComponent,
    HomeComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
