import image1 from './assets/images/MSI_MAG_Infinite_S3_11SI-044EU.jpg';
import image2 from './assets/images/MAD_DOG_MD5600X-A03.jpg';
import image3 from './assets/images/MAD_DOG_MD3600-A06.jpg';
import image4 from './assets/images/ACER_Predator_Orion_3000_PO3-630.jpg';
import image5 from './assets/images/HP_Victus_TG02-0723NW.jpg';

export interface ProductI {
  id: string;
  name: string;
  processor: string;
  ram: string;
  disk: string;
  graphics: string;
  isAvailible: boolean;
  price: string;
  image: string;
}

const product: Array<ProductI> = [
  {
    id: '1',
    name: 'MSI MAG Infinite S3 11SI-044EU',
    processor: 'Intel Core i5-11400F',
    ram: '16 GB',
    disk: '512 GB SSD',
    graphics: 'NVIDIA GeForce GTX 1660 Super',
    isAvailible: false,
    price: '3999',
    image: image1,
  },
  {
    id: '2',
    name: 'MAD DOG MD5600X-A03',
    processor: 'AMD Ryzen 5 5600X',
    ram: '16 GB',
    disk: '1000 GB HDD + 500GB SSD',
    graphics: 'AMD Radeon RX 6600 XT',
    isAvailible: true,
    price: '6299',
    image: image2,
  },
  {
    id: '3',
    name: 'MAD DOG MD3600-A06',
    processor: 'AMD Ryzen 5 3600',
    ram: '16 GB',
    disk: '1000 GB HDD + 500GB SSD',
    graphics: 'NVIDIA GeForce RTX 3060',
    isAvailible: true,
    price: '5625',
    image: image3,
  },
  {
    id: '4',
    name: 'ACER Predator Orion 3000 PO3-630',
    processor: 'Intel Core i5-11400F',
    ram: '16 GB',
    disk: '512 GB SSD',
    graphics: 'NVIDIA GeForce GTX 1650',
    isAvailible: false,
    price: '4499',
    image: image4,
  },
  {
    id: '5',
    name: 'HP Victus TG02-0723NW',
    processor: 'AMD Ryzen 5 5600G',
    ram: '16 GB',
    disk: '512 GB SSD',
    graphics: 'AMD Radeon RX 6600 XT',
    isAvailible: true,
    price: '3888',
    image: image5,
  },
];

export default product;
