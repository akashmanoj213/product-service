import { Injectable } from '@nestjs/common';
import { ProductRecommendationDto } from './dto/product-recommendation.dto';

@Injectable()
export class ProductService {
  getRecommendation(productRecommendationDto: ProductRecommendationDto) {
    const { selectedProductId } = productRecommendationDto;

    let products: Array<{
      id: number;
      name: string;
      description: string;
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

    // TODO: Make a call to product recommendation engine in PAS to get products
    if (selectedProductId) {
      products = [
        {
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
        }
      ]
    } else {
      products = [
        {
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
        },
        {
          id: 1002,
          name: "Cancer care product",
          description: "Covers all kinds of cancer related issues.",
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
        }
      ]
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
