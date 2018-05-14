import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './../restaurant/restaurant.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: ':city/a-domicilio/:slug/:id',
        component: RestaurantComponent,
    },
    {
        path: 'search',
        component: SearchComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
