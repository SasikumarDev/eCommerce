import { AuthorizationInterceptor } from './Shared/Interceptors/authorization.interceptor';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { ViewProductComponent } from './Components/view-product/view-product.component';
import { DialogComponent } from './Shared/Components/dialog/dialog.component';
import { ShopCartIconComponent } from './Shared/Components/shop-cart-icon/shop-cart-icon.component';
import { RippleDirective } from './Shared/Directives/ripple.directive';
import { PaginationComponent } from './Shared/Components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ViewProductComponent,
    DialogComponent,
    ShopCartIconComponent,
    RippleDirective,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}