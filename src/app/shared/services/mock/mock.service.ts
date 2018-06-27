import find from 'lodash-es/find';

import { Injectable } from '@angular/core';

import { Checkout } from './../../../checkout/checkout.interface';

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
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
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
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
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
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
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
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
        ],
        entradas: [
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
        ],
        hamburguesas: [
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
        ],
        postres: [
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
        ],
        bebidas: [
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
          },
          {
            id: '123456',
            quantity: 1,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.',
            ingredients: [
              {
                name: 'Pan',
                included: true,
              },
              {
                name: 'Carne',
                included: true,
              },
              {
                name: 'Queso',
                included: true,
              }
            ],
            specialInstructions: '',
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
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        entradas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        hamburguesas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        postres: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
        ],
        bebidas: [
          {
            id: '123456',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '654321',
            quantity: 0,
            name: 'Hamburguesa Doble',
            price: 120,
            priceLabel: '$120',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit purus nunc, \
              ut ultricies lectus facilisis ut. Praesent dictum eros.'
          },
          {
            id: '567890',
            quantity: 0,
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

  order: Checkout = {
    orderId: '123456',
    deliveryInformation: {
      storeInfo: {
        address: {
          street: 'Avenida 5 y 6 de Julio 719',
          city: 'Veracruz',
          zipcode: '91940',
          county: 'Colonia Zaragoza',
          reference: 'Entre Santos Perez Abascal y Horacio Diaz',
        },
        retailer: {
          name: 'Las Alitas',
          phoneNumber: '2292292292',
          storeId: '1234567890',
        },
      },
      clientInfo: {
        address: {
          street: 'Avenida 5 y 6 de Julio 719',
          city: 'Veracruz',
          zipcode: '91940',
          county: 'Colonia Zaragoza',
          reference: 'Entre Santos Perez Abascal y Horacio Diaz',
        },
        client: {
          fullName: 'Jose Zamudio',
          phoneNumber: '2292292292',
        },
      },
      ETA: '20 minutes,'
    }
  }

  constructor() { }

  getCheckoutOrder(): Checkout {
    return this.order;
  }

  getAllRestaurants(): Array<ItemCard> {
    return this.items;
  }

  getStoreById(id: string): ItemCard {
    return find(this.items, (store) => store.id === id);
  }
}
