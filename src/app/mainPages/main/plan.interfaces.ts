export interface Plan {
    time: string[];
    price: string[];
    description: string[];
    characteristics: {
      [key: string]: string[];
    }[];
  }
  