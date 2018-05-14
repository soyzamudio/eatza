import find from 'lodash-es/find';

import { Injectable } from '@angular/core';

import { ItemCard } from './../../components/item-card/item-card.component';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  items: Array<ItemCard> = [
    {
      id: '99823',
      title: 'Los Giros',
      type: 'Mexicano',
      categories: ['Tacos'],
      ETA: '40-50 min',
      priceRange: '$$',
      image: '../../../../assets/images/losgiros.jpg',
      city: 'Veracruz'
    },
    {
      id: '12389',
      title: 'Que Chevere!',
      type: 'Mariscos',
      categories: ['Ceviche', 'Cocteles', 'Ensaladas'],
      ETA: '15-30 min',
      priceRange: '$',
      image: '../../../../assets/images/quechevere.jpg',
      city: 'Veracruz'
    },
    {
      id: '45678',
      title: 'Wings Army',
      type: 'Americano',
      categories: ['Alitas', 'Hamburguesas', 'Cerveza'],
      ETA: '15-30 min',
      priceRange: '$$',
      image: '../../../../assets/images/wingsarmy.jpg',
      city: 'Veracruz'
    },
    {
      id: '79876',
      title: 'Las Alitas',
      type: 'Americano',
      categories: ['Alitas', 'Cerveza'],
      ETA: '15-30 min',
      priceRange: '$$',
      image: '../../../../assets/images/lasalitas.jpg',
      city: 'Veracruz'
    },
    {
      id: '12345',
      title: 'Mamá Gallina',
      type: 'Americano',
      categories: ['Hamburguesas', 'Hot Dogs'],
      ETA: '15-30 min',
      priceRange: '$$',
      image: '../../../../assets/images/mamagallina.jpg',
      city: 'Veracruz'
    },
  ];

  constructor() { }

  getAllRestaurants(): Array<ItemCard> {
    return this.items;
  }

  getStoreById(id: string): ItemCard {
    return find(this.items, (store) => store.id === id);
  }
}
