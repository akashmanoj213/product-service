import { Injectable } from '@nestjs/common';
import { ProductRecommendationDto } from './dto/product-recommendation.dto';

export type Products = Array<{
  id: number;
  name: string;
  description: string;
  basePrice: number;
  tenures: Array<{
    duration: number;
    price: number;
  }>,
  features: Array<{
    id: number;
    name: string;
    description: string;
    price: number;
  }>,
  riders: Array<{
    id: number;
    name: string;
    description: string;
    price: number;
  }>
}>;

@Injectable()
export class ProductService {
  getRecommendation(productRecommendationDto: ProductRecommendationDto) {
    const { selectedProductId } = productRecommendationDto;

    let products: Products;

    // TODO: Make a call to product recommendation engine in PAS to get products
    products = [
      {
        id: 1001,
        name: "Health care product",
        description: "Covers all kinds of health issues.",
        basePrice: 3000,
        tenures: [
          {
            duration: 12,
            price: 9000
          },
          {
            duration: 24,
            price: 11000
          }
        ],
        features: [
          {
            id: 3001,
            name: "Product Feature 1",
            description: "Description explaining the first feature of product",
            price: 300
          },
          {
            id: 3002,
            name: "Product Feature 2",
            description: "Description explaining the second feature of product",
            price: 300
          },
          {
            id: 3003,
            name: "Product Feature 3",
            description: "Description explaining the third feature of product",
            price: 200
          }
        ],
        riders: [
          {
            id: 2011,
            name: "Rider 1",
            description: "A short description of Rider 1",
            price: 200
          },
          {
            id: 2012,
            name: "Rider 2",
            description: "A short description of Rider 2",
            price: 200
          },
          {
            id: 2013,
            name: "Rider 3",
            description: "A short description of Rider 3",
            price: 200
          }
        ]
      },
      {
        id: 1002,
        name: "Cancer care product",
        description: "Covers all kinds of cancer related issues.",
        basePrice: 3500,
        tenures: [
          {
            duration: 12,
            price: 12000
          },
          {
            duration: 24,
            price: 23000
          }
        ],
        features: [
          {
            id: 3001,
            name: "Product Feature 1",
            description: "Description explaining the first feature of product",
            price: 300
          },
          {
            id: 3002,
            name: "Product Feature 2",
            description: "Description explaining the second feature of product",
            price: 300
          },
          {
            id: 3003,
            name: "Product Feature 3",
            description: "Description explaining the third feature of product",
            price: 200
          }
        ],
        riders: [
          {
            id: 2011,
            name: "Rider 1",
            description: "A short description of Rider 1",
            price: 200
          },
          {
            id: 2012,
            name: "Rider 2",
            description: "A short description of Rider 2",
            price: 200
          },
          {
            id: 2013,
            name: "Rider 3",
            description: "A short description of Rider 3",
            price: 200
          }
        ]
      },
      {
        id: 1003,
        name: "Heart care product",
        description: "Covers all kinds of heart related issues.",
        basePrice: 2400,
        tenures: [
          {
            duration: 12,
            price: 12500
          },
          {
            duration: 24,
            price: 14200
          }
        ],
        features: [
          {
            id: 3001,
            name: "Product Feature 1",
            description: "Description explaining the first feature of product",
            price: 600
          },
          {
            id: 3002,
            name: "Product Feature 2",
            description: "Description explaining the second feature of product",
            price: 400
          },
          {
            id: 3003,
            name: "Product Feature 3",
            description: "Description explaining the third feature of product",
            price: 100
          }
        ],
        riders: [
          {
            id: 2011,
            name: "Rider 1",
            description: "A short description of Rider 1",
            price: 530
          },
          {
            id: 2012,
            name: "Rider 2",
            description: "A short description of Rider 2",
            price: 260
          },
          {
            id: 2013,
            name: "Rider 3",
            description: "A short description of Rider 3",
            price: 120
          }
        ]
      }
    ];


    if (selectedProductId) {
      const product = products.find(product => product.id === selectedProductId) || [];
      return product;
    }

    return products;
  }

  getProduct(id: number) {
    //TODO: return a specific product from Product configurator
    return {
      id: 1001,
      name: "Health care product",
      description: "Covers all kinds of health issues.",
      tenures: [
        {
          duration: 12,
          price: 9000
        },
        {
          duration: 24,
          price: 11000
        }
      ],
      features: [
        {
          id: 3001,
          name: "Product Feature 1",
          description: "Description explaining the first feature of product",
          price: 300
        },
        {
          id: 3002,
          name: "Product Feature 2",
          description: "Description explaining the second feature of product",
          price: 300
        },
        {
          id: 3003,
          name: "Product Feature 3",
          description: "Description explaining the third feature of product",
          price: 200
        }
      ],
      riders: [
        {
          id: 2011,
          name: "Rider 1",
          description: "A short description of Rider 1",
          price: 200
        },
        {
          id: 2012,
          name: "Rider 2",
          description: "A short description of Rider 2",
          price: 200
        },
        {
          id: 2013,
          name: "Rider 3",
          description: "A short description of Rider 3",
          price: 200
        }
      ]
    };
  }
}
