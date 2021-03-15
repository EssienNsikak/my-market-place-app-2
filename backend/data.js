const bcrypt = require('bcryptjs');

const data = {

  users: [
    {
      name: 'Essien',
      email: 'essien@gmail.com',
      password: bcrypt.hashSync('1234567890', 8),
      isAdmin: true
    },

    {
      name: 'Uduakobong',
      email: 'ud@gmail.com',
      password: bcrypt.hashSync('1234567890', 8),
      isAdmin: false
    }
  ],

  products: [
    {
      name: 'Varsace Slim Shirt',
      category: "Shirts",
      image: '/images/d1.jpg',
      brand: 'Varsace',
      price: 69,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'Original Varsace Slim-fit shirt'
    },

    { 
      name: 'Prada Slim Shirt',
      category: "Shirts",
      image: '/images/d2.jpg',
      brand: 'Prada',
      price: 65,
      countInStock: 200,
      rating: 4.3,
      numReviews: 19,
      description: 'Original Prada Slim-fit shirt'
    },

    { 
      name: 'Forest Slim Fit T-Shirt',
      category: "Polo T-Shirts",
      image: '/images/d3.jpg',
      brand: 'Forest',
      price: 50,
      countInStock: 101,
      rating: 4.5,
      numReviews: 50,
      description: 'Original Forest Slim-fit T-shirt'
    },

    { 
      name: 'BYC T-Shirt',
      category: "Polo T-Shirts",
      image: '/images/d4.jpg',
      brand: 'BYC',
      price: 50,
      countInStock: 10,
      rating: 3.5,
      numReviews: 150,
      description: 'Original BYC branded Slim-fit T-shirt'
    },
  
    { 
      name: 'Zecca T-Shirt',
      category:"Polo T-Shirts",
      image: '/images/d5.jpg',
      brand: 'Zecca',
      price: 53,
      countInStock: 109,
      rating: 5,
      numReviews: 60,
      description: 'Original T-shirt from Zecca Itallian finest wears producers'
    },

    { 
      name: 'Polo T-Shirt',
      category: "Polo T-Shirts",
      image: '/images/d6.jpg',
      brand: 'Frank Vick',
      price: 65,
      countInStock: 30,
      rating: 4.5,
      numReviews: 150,
      description: 'Original Frank Vick Slim-fit T-shirt'
    },

    { 
      name: 'Face Cap',
      category: "Caps",
      image: '/images/d7.jpg',
      brand: 'Tommy Hilfiger',
      price: 54,
      countInStock: 24,
      rating: 4.5,
      numReviews: 31,
      description: 'Original Tommy Hilfiger branded face cap'
    },

    { 
      name: 'Trousers',
      category: "Trousers",
      image: '/images/d8.jpg',
      brand: 'TM Lewin',
      price: 70,
      countInStock: 20,
      rating: 5,
      numReviews: 50,
      description: 'Original quality slim-fit trouser from TM Lewin'
    },

    { 
      name: 'Cucci Slim Trousers',
      category: "Trousers",
      image: '/images/d9.jpg',
      brand: 'Cucci',
      price: 70,
      countInStock: 10,
      rating: 5,
      numReviews: 53,
      description: 'Original quality slim-fit trouser from Cucci'
    },

    { 
      name: 'Slim Trousers',
      category: "Trousers",
      image: '/images/d10.jpg',
      brand: 'Bosch',
      price: 60,
      countInStock: 12,
      rating: 4.5,
      numReviews: 30,
      description: 'Original quality slim-fit trouser from Bosch'
    },

    { 
      name: "Nike Men's Sneakers",
      category: "Shoes & Sneakers",
      image: '/images/d11.jpg',
      brand: 'Nike',
      price: 65,
      countInStock: 17,
      rating: 4.5,
      numReviews: 55,
      description: 'Original Sneakers from Nike'
    },

    { 
      name: 'Leather Mule',
      category: "Shoes & Sneakers",
      image: '/images/d12.jpg',
      brand: 'Cucci',
      price: 70,
      countInStock: 25,
      rating: 5,
      numReviews: 52,
      description: 'Original Itallian leather footwear made by Cucci'
    },

    { 
      name: 'Sneakers',
      category: "Shoes & Sneakers",
      image: '/images/d13.jpg',
      brand: 'Addidas',
      price: 72,
      countInStock: 5,
      rating: 5,
      numReviews: 200,
      description: 'Original Qaulity Sneakers, one of Addidas finest designs'
    },

    { 
      name: "Veragamo Men's Suit",
      category: "Suits",
      image: '/images/d14.jpg',
      brand: 'Veragamo',
      price: 90,
      countInStock: 7,
      rating: 4.9,
      numReviews: 69,
      description: 'Veragamo original stylish and quality men suit'
    },

    { 
      name: "Men's Blazzers Suit",
      category: "Suits",
      image: '/images/d15.jpg',
      brand: 'Gorgio Armani',
      price: 89,
      countInStock: 40,
      rating: 4.7,
      numReviews: 90,
      description: 'Original stylish and quality men suit, made by Black Men'
    },

    { 
      name: "Men's Suit",
      category: "Suits",
      image: '/images/d16.jpg',
      brand: 'Lorenzo',
      price: 92,
      countInStock: 10,
      rating: 5,
      numReviews: 100,
      description: 'Lorenzo original stylish and quality men suit'
    },

    { 
      name: "Men's Designers Suit",
      category: "Suits",
      image: '/images/d17.jpg',
      brand: 'TM Lewin',
      price: 100,
      countInStock: 13,
      rating: 7,
      numReviews: 250,
      description: 'Top quality stylish men suit carefully crafted and well design bt TM Lewin'
    },
    
    { 
      name: "Men's Pants",
      category: "Pants & Boxers",
      image: '/images/d18.jpg',
      brand: 'Polo',
      price: 15,
      countInStock: 100,
      rating: 5,
      numReviews: 50,
      description: 'Original Polo branded pants'
    },

    { 
      name: "Men's Boxers",
      category: "Pants & Boxers",
      image: '/images/d19.jpg',
      brand: 'Phil Collins',
      price: 12,
      countInStock: 10,
      rating: 4.5,
      numReviews: 40,
      description: 'Original Polo branded boxers'
    },

    { 
      name: "Men's Designers Pant",
      category: "Pants & Boxers",
      image: '/images/d20.jpg',
      brand: 'Polo',
      price: 13,
      countInStock: 21,
      rating: 4.5,
      numReviews: 50,
      description: 'Original Polo branded pants'
    },

    { 
      name: "Nexus split unit Air conditioner",
      category: "Electronics",
      image: '/images/d21.jpg',
      brand: 'Nexus',
      price: 200,
      countInStock: 27,
      rating: 4.5,
      numReviews: 50,
      description: 'Original super cool Nexus air conditioner'
    },

    { 
      name: "Ladies bump-shot & t-shirt",
      category: "Polo T-Shirts",
      image: '/images/d22.jpg',
      brand: 'Polo',
      price: 40,
      countInStock: 10,
      rating: 5,
      numReviews: 30,
      description: 'Designers stylish Bump-shot with quality cotton polo t-shirt for ladies'
    },

    { 
      name: "Channel slim-fit ladies gown",
      category: "Ladies wears",
      image: '/images/d23.jpg',
      brand: 'Channel',
      price: 47,
      countInStock: 11,
      rating: 5,
      numReviews: 80,
      description: 'Channel designers slim-fit ladies gown | color: Ox blood'
    },

    { 
      name: "Cway water dispenser",
      category: "Electronics",
      image: '/images/d24.jpg',
      brand: 'Cway',
      price: 150,
      countInStock: 5,
      rating: 4.5,
      numReviews: 87,
      description: 'Cway super quality water dispenser made in the Uk'
    },

    { 
      name: "Slim-fit Shirt",
      category: "Shirt",
      image: '/images/d25.jpg',
      brand: 'TM Lewin',
      price: 50,
      countInStock: 16,
      rating: 5,
      numReviews: 77,
      description: 'Well design quality slim-fit TM Lewin shirt'
    },

    { 
      name: "Slim-fit polo t-shirt",
      category: "t-shirt",
      image: '/images/d26.jpg',
      brand: 'Prada',
      price: 47,
      countInStock: 61,
      rating: 5,
      numReviews: 71,
      description: 'Polo super quality desingers t-shirt | color: white'
    },

    { 
      name: "Center Rug",
      category: "Carpet",
      image: '/images/d27.jpg',
      brand: 'Channel',
      price: 47,
      countInStock: 19,
      rating: 5,
      numReviews: 71,
      description: 'Channel specially designed center rug for luxury lovers'
    },

    { 
      name: "Slim-fit Ladies Gown",
      category: "Ladies wears",
      image: '/images/d28.jpg',
      brand: 'Channel',
      price: 49,
      countInStock: 20,
      rating: 3.5,
      numReviews: 101,
      description: 'Stylishly design ladies gown by Channel | color: black'
    },

    { 
      name: "Groceries",
      category: "Groceries",
      image: '/images/d29.jpg',
      brand: 'McDonalds',
      price: 15,
      countInStock: 100,
      rating: 3.5,
      numReviews: 78,
      description: 'Fresh and Healthy Groceries from McDonalds'
    },

    { 
      name: "LG flat screen Oled smart Television",
      category: "Electronics",
      image: '/images/d30.jpg',
      brand: 'LG',
      price: 410,
      countInStock: 4,
      rating: 5,
      numReviews: 209,
      description: 'Super quality LG Oled smart screen Television set'
    },

    { 
      name: "Men's Sneaker",
      category: "Foot wears",
      image: '/images/d31.jpg',
      brand: 'Nike',
      price: 70,
      countInStock: 37,
      rating: 4.5,
      numReviews: 109,
      description: 'Nike super designers sneakers for men'
    },

    { 
      name: "Vegetables",
      category: "Fruits & Vegetables",
      image: '/images/d32.jpg',
      brand: 'McDonalds',
      price: 20,
      countInStock: 10,
      rating: 4.5,
      numReviews: 309,
      description: 'Fresh and healthy vegetables from McDonalds'
    },

    { 
      name: "Royal Italian Sofa",
      category: "Household Furnitures",
      image: '/images/d33.jpg',
      brand: 'Italio Royalia',
      price: 1120,
      countInStock: 2,
      rating: 5,
      numReviews: 501,
      description: 'Quality, stylish and durable Italian Royal Sofa | color: Grey'
    },

    { 
      name: "Thermocool Deep Freezer",
      category: "Electronics",
      image: '/images/d34.jpg',
      brand: 'Thermocool',
      price: 400,
      countInStock: 15,
      rating: 5,
      numReviews: 301,
      description: 'Quality super cool thermocool deep freezer | color: white'
    },

    { 
      name: "Xiaomi Mobile Phone",
      category: "Electronics",
      image: '/images/d35.jpg',
      brand: 'Xiaomi',
      price: 400,
      countInStock: 5,
      rating: 5,
      numReviews: 301,
      description: 'Xiaomi quality andriod mobile phone | color: Gold'
    },

    {
      name: "Chivita Cocktail",
      category: "Fruit Drinks & Beverages",
      image: '/images/d36.jpg',
      brand: 'Chivita',
      price: 15,
      countInStock: 11,
      rating: 3.5,
      numReviews: 19,
      description: 'Highly nutritious Chivita cocktail'
    },

    {
      name: "Ladies Heel Cover Shoes",
      category: "Foot wears",
      image: '/images/d37.jpg',
      brand: 'Varsace',
      price: 53,
      countInStock: 17,
      rating: 4.5,
      numReviews: 190,
      description: 'Varsace designers heel for classic ladies | color: red'
    },

    {
      name: "iphone 11plus",
      category: "Electronics",
      image: '/images/d38.jpg',
      brand: 'Apple',
      price: 1200,
      countInStock: 9,
      rating: 5,
      numReviews: 590,
      description: 'Apple iphone 11plus | color: silver'
    },

    {
      name: "Agogs Electric Bicycle",
      category: "Vehicles",
      image: '/images/d39.jpg',
      brand: 'Agogs',
      price: 650,
      countInStock: 3,
      rating: 5,
      numReviews: 190,
      description: 'Super quality Agogs electric sports bicycle | color: white'
    },

    {
      name: "Ladies Bum-shot",
      category: "Ladies wears",
      image: '/images/d40.jpg',
      brand: 'Varsace',
      price: 40,
      countInStock: 30,
      rating: 4.5,
      numReviews: 59,
      description: 'Varsace quality designers bum shot for hot ladies | color: sky-blue'
    },

    {
      name: "Ladies Bikini",
      category: "Ladies wears",
      image: '/images/d41.jpg',
      brand: 'Varsace',
      price: 40,
      countInStock: 16,
      rating: 4.5,
      numReviews: 99,
      description: 'Varsace quality designers bikini for hot and classic ladies | color: blue'
    },

    {
      name: "Hot Ladies Bikini",
      category: "Ladies wears",
      image: '/images/d42.jpg',
      brand: 'Varsace',
      price: 41,
      countInStock: 0,
      rating: 5,
      numReviews: 102,
      description: 'Varsace quality designers bikini for hot and classic ladies'
    },

    {
      name: "300g 2 Tone Bone Straight Malaysian Human Hair Weaving",
      category: "Ladies wears",
      image: '/images/d43.jpg',
      brand: 'Faith Andyson',
      price: 1100,
      countInStock: 18,
      rating: 5,
      numReviews: 509,
      description: '300g 2 Tone Bone Straight Malaysian Human Hair Weaving classic ladies | color: grey & black combination'
    },

    {
      name: "Super Double Raw Donor Bone Straight Closure Wig",
      category: "Ladies wears",
      image: '/images/d44.jpg',
      brand: 'Faith Andyson',
      price: 1000,
      countInStock: 34,
      rating: 4.5,
      numReviews: 405,
      description: 'Super Double Raw Donor Bone Straight Closure Wig for hot & classic ladies | color: black'
    },

    {
      name: "MacBook Pro",
      category: "Electronics",
      image: '/images/d45.jpg',
      brand: 'Applen',
      price: 2400,
      countInStock: 10,
      rating: 5,
      numReviews: 98,
      description: 'Super fast slim body Macbook pro | color: grey'
    },

    {
      name: "Super Double Raw Quality Brazilian Wig",
      category: "Ladies wears",
      image: '/images/d46.jpg',
      brand: 'Faith Andyson',
      price: 100,
      countInStock: 15,
      rating: 4.5,
      numReviews: 96,
      description: 'Super Double Raw Quality Brazilian Wig for hot & classic ladies | color: black'
    },

    {
      name: "Super Double Raw Quality Brazilian Weavon",
      category: "Ladies wears",
      image: '/images/d47.jpg',
      brand: 'Black Ebony',
      price: 100,
      countInStock: 8,
      rating: 4.5,
      numReviews: 91,
      description: 'Super Double Raw Quality Brazilian Wig for hot & classic ladies | color: black & gold combination'
    },
    
  ]
}

module.exports = data;