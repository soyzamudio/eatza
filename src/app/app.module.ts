import { DragScrollModule } from 'ngx-drag-scroll';

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantInfoComponent } from './restaurant/shared/info/info.component';
import { MenuItemComponent } from './restaurant/shared/menu/menu-item/menu-item.component';
import { MenuSectionComponent } from './restaurant/shared/menu/menu-section/menu-section.component';
import { SearchComponent } from './search/search.component';
import { CardSliderComponent } from './shared/components/card-slider/card-slider.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { SectionHeaderComponent } from './shared/components/section-header/section-header.component';
import { CheckoutService } from './shared/services/checkout/checkout.service';
import { MockService } from './shared/services/mock/mock.service';
import { ScrollerService } from './shared/services/scroller/scroller.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ItemCardComponent,
    ScrollTopComponent,
    SectionHeaderComponent,
    CardSliderComponent,
    HomeComponent,
    RestaurantComponent,
    SearchComponent,
    RestaurantInfoComponent,
    MenuSectionComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    DragScrollModule,
    MaterialModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
  ],
  providers: [ScrollerService, MockService, Title, CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
