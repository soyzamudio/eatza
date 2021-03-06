import { DragScrollModule } from 'ngx-drag-scroll';

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantInfoComponent } from './restaurant/shared/info/info.component';
import { IngredientsComponent } from './restaurant/shared/ingredients/ingredients.component';
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
import { DomService } from './shared/services/dom/dom.service';
import { MockService } from './shared/services/mock/mock.service';
import { ModalService } from './shared/services/modal/modal.service';
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
    IngredientsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    DragScrollModule,
    MaterialModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
  ],
  entryComponents: [
    IngredientsComponent,
  ],
  providers: [ScrollerService, MockService, Title, CheckoutService, DomService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
