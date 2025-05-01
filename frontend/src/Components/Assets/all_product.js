import m1_img from './b1_img.jpg';
import m2_img from './b2_img.avif';
import m3_img from './b3_img.jpg';
import m4_img from './b4_img.jpg';
import m5_img from './b5_img.webp';
import m6_img from './b6_img.png';
import m7_img from './b7_img.jpg';
import m8_img from './b8_img.avif';
import m9_img from './b9_img.jpg';
import m10_img from './b10_img.jpg';
import m11_img from './b11_img.avif';
import m12_img from './b12_img.jpg';
import w1_img from './w1_img.avif';
import w2_img from './w2_img.jpg';
import w3_img from './w3_img.jpg';
import w4_img from './w4_img.webp';
import w5_img from './w5_img.jpg';
import w6_img from './w6_img.jpg';
import w7_img from './w7_img.jpg';
import w8_img from './w8_img.jpg';
import k1_img from './k1_img.webp';
import k2_img from './k2_img.jpg';
import k3_img from './k3_img.jpg';
import k4_img from './k4_img.jpg';
import k5_img from './k5_img.jpg';
import k6_img from './k6_img.jpg';
import k7_img from './k7_img.jpg';
import k8_img from './k8_img.png';
import k9_img from './k9_img.webp';
import k10_img from './k10_img.jpg';
import k11_img from './k11_img.jpg';
import k12_img from './k12_img.jpg';
import p1_img from './product_1.png';
import p2_img from './product_2.png';
import p3_img from './product_3.png';
import p4_img from './product_4.png';

const all_product = [
  // men category
  {
    id: 1,
    name: "Classic White Shirt",
    image: m1_img,
    new_price: 45.99,
    old_price: 69.99,
    category: "men"
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    image: m2_img,
    new_price: 89.99,
    old_price: 129.99,
    category: "men"
  },
  {
    id: 3,
    name: "Beige Chino Pants",
    image: m3_img,
    new_price: 55.0,
    old_price: 75.0,
    category: "men"
  },
  {
    id: 4,
    name: "Navy Blue Hoodie",
    image: m4_img,
    new_price: 60.5,
    old_price: 95.0,
    category: "men"
  },
  {
    id: 5,
    name: "Slim Fit Black Jeans",
    image: m5_img,
    new_price: 49.99,
    old_price: 79.99,
    category: "men"
  },
  {
    id: 6,
    name: "Gray Crew Neck T-Shirt",
    image: m6_img,
    new_price: 24.99,
    old_price: 39.99,
    category: "men"
  },
  {
    id: 7,
    name: "Stylish Bomber Jacket",
    image: m7_img,
    new_price: 99.99,
    old_price: 149.99,
    category: "men"
  },
  {
    id: 8,
    name: "Red Checked Shirt",
    image: m8_img,
    new_price: 39.99,
    old_price: 59.99,
    category: "men"
  },
  {
    id: 9,
    name: "Black Leather Boots",
    image: m9_img,
    new_price: 120.0,
    old_price: 180.0,
    category: "men"
  },
  {
    id: 10,
    name: "Light Blue Jeans",
    image: m10_img,
    new_price: 55.0,
    old_price: 85.0,
    category: "men"
  },
  {
    id: 11,
    name: "Gray Sweatpants",
    image: m11_img,
    new_price: 40.0,
    old_price: 60.0,
    category: "men"
  },
  {
    id: 12,
    name: "White Sneakers",
    image: m12_img,
    new_price: 80.0,
    old_price: 110.0,
    category: "men"
  },

  // womens category
  {
    id: 13,
    name: "Floral Maxi Dress",
    image: w1_img,
    new_price: 45.99,
    old_price: 70.99,
    category: "womens"
  },
  {
    id: 14,
    name: "Black Leather Handbag",
    image: w2_img,
    new_price: 120.0,
    old_price: 160.0,
    category: "womens"
  },
  {
    id: 15,
    name: "Striped Blouse",
    image: w3_img,
    new_price: 30.0,
    old_price: 50.0,
    category: "womens"
  },
  {
    id: 16,
    name: "High-Waisted Jeans",
    image: w4_img,
    new_price: 55.0,
    old_price: 75.0,
    category: "womens"
  },
  {
    id: 17,
    name: "Sunglasses",
    image: w5_img,
    new_price: 20.0,
    old_price: 30.0,
    category: "womens"
  },
  {
    id: 18,
    name: "Pink Cardigan",
    image: w6_img,
    new_price: 45.0,
    old_price: 65.0,
    category: "womens"
  },
  {
    id: 19,
    name: "White Sneakers",
    image: w7_img,
    new_price: 80.0,
    old_price: 110.0,
    category: "womens"
  },
  {
    id: 20,
    name: "Black Skirt",
    image: w8_img,
    new_price: 35.0,
    old_price: 50.0,
    category: "womens"
  },
  {
    id: 21,
    name: "Red Heels",
    image: p1_img,
    new_price: 65.0,
    old_price: 90.0,
    category: "womens"
  },
  {
    id: 22,
    name: "Oversized Sweater",
    image: p2_img,
    new_price: 40.0,
    old_price: 60.0,
    category: "womens"
  },
  {
    id: 23,
    name: "Black Jumpsuit",
    image: p3_img,
    new_price: 75.0,
    old_price: 100.0,
    category: "womens"
  },
  {
    id: 24,
    name: "Chic Boots",
    image: p4_img,
    new_price: 85.0,
    old_price: 120.0,
    category: "womens"
  },

  // kid category
  {
    id: 25,
    name: "Teddy Bear Hoodie",
    image: k1_img,
    new_price: 35.99,
    old_price: 50.99,
    category: "kid"
  },
  {
    id: 26,
    name: "Dinosaur Print T-Shirt",
    image: k2_img,
    new_price: 18.0,
    old_price: 30.0,
    category: "kid"
  },
  {
    id: 27,
    name: "Cotton Overalls",
    image: k3_img,
    new_price: 25.0,
    old_price: 40.0,
    category: "kid"
  },
  {
    id: 28,
    name: "Blue Denim Shorts",
    image: k4_img,
    new_price: 22.0,
    old_price: 35.0,
    category: "kid"
  },
  {
    id: 29,
    name: "Yellow Sneakers",
    image: k5_img,
    new_price: 30.0,
    old_price: 45.0,
    category: "kid"
  },
  {
    id: 30,
    name: "Animal Print Backpack",
    image: k6_img,
    new_price: 28.0,
    old_price: 40.0,
    category: "kid"
  },
  {
    id: 31,
    name: "Rainbow Socks",
    image: k7_img,
    new_price: 6.0,
    old_price: 10.0,
    category: "kid"
  },
  {
    id: 32,
    name: "Straw Hat",
    image: k8_img,
    new_price: 12.0,
    old_price: 20.0,
    category: "kid"
  },
  {
    id: 33,
    name: "Superhero Pajamas",
    image: k9_img,
    new_price: 18.0,
    old_price: 28.0,
    category: "kid"
  },
  {
    id: 34,
    name: "Fun Print Raincoat",
    image: k10_img,
    new_price: 35.0,
    old_price: 50.0,
    category: "kid"
  },
  {
    id: 35,
    name: "Cute Bear Mittens",
    image: k11_img,
    new_price: 12.0,
    old_price: 18.0,
    category: "kid"
  },
  {
    id: 36,
    name: "Colorful Leggings",
    image: k12_img,
    new_price: 15.0,
    old_price: 25.0,
    category: "kid"
  }
];

export default all_product;
