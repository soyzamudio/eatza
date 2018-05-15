import find from 'lodash-es/find';

import { Injectable } from '@angular/core';

export interface ItemCard {
  id: string;
  title?: string;
  type?: string;
  categories?: string[];
  ETA?: string;
  priceRange?: string;
  image?: string;
  city?:  string;
  address?: string;
  phone?: string;
  menu?: any;
  openTimeLabel?: string;
  closeTimeLabel?: string;
}

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
      city: 'Veracruz',
      address: 'Avenida 5 y 6 de Julio 719',
      phone: '2291892390',
      closeTimeLabel: '10:30PM',
      menu: {
        categories: ['recomendado', 'entradas', 'hamburguesas', 'postres', 'bebidas'],
        recomendado: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ]
      }
    },
    {
      id: '12389',
      title: 'Que Chevere!',
      type: 'Mariscos',
      categories: ['Ceviche', 'Cocteles', 'Ensaladas'],
      ETA: '15-30 min',
      priceRange: '$',
      image: '../../../../assets/images/quechevere.jpg',
      city: 'Veracruz',
      address: 'Avenida 5 y 6 de Julio 719',
      phone: '2291892390',
      closeTimeLabel: '10:30PM',
      menu: {
        categories: ['recomendado', 'entradas', 'hamburguesas', 'postres', 'bebidas'],
        recomendado: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ]
      }
    },
    {
      id: '45678',
      title: 'Wings Army',
      type: 'Americano',
      categories: ['Alitas', 'Hamburguesas', 'Cerveza'],
      ETA: '15-30 min',
      priceRange: '$$',
      image: '../../../../assets/images/wingsarmy.jpg',
      city: 'Veracruz',
      address: 'Avenida 5 y 6 de Julio 719',
      phone: '2291892390',
      closeTimeLabel: '10:30PM',
      menu: {
        categories: ['recomendado', 'entradas', 'hamburguesas', 'postres', 'bebidas'],
        recomendado: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ]
      }
    },
    {
      id: '79876',
      title: 'Las Alitas',
      type: 'Americano',
      categories: ['Alitas', 'Cerveza'],
      ETA: '15-30 min',
      priceRange: '$$',
      image: '../../../../assets/images/lasalitas.jpg',
      city: 'Veracruz',
      address: 'Avenida 5 y 6 de Julio 719',
      phone: '2291892390',
      closeTimeLabel: '10:30PM',
      menu: {
        categories: ['recomendado', 'entradas', 'hamburguesas', 'postres', 'bebidas'],
        recomendado: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ]
      }
    },
    {
      id: '12345',
      title: 'Mamá Gallina',
      type: 'Americano',
      categories: ['Hamburguesas', 'Hot Dogs'],
      ETA: '15-30 min',
      priceRange: '$$',
      image: '../../../../assets/images/mamagallina.jpg',
      city: 'Veracruz',
      address: 'Avenida 5 y 6 de Julio 719',
      phone: '2291892390',
      closeTimeLabel: '10:30PM',
      menu: {
        categories: ['recomendado', 'entradas', 'hamburguesas', 'postres', 'bebidas'],
        recomendado: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ]
      }
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
