export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  timing?: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    id: "all-day",
    title: "Thatte Idly & Dosa (All Day)",
    timing: "8 AM - 11 PM",
    items: [
      { name: "Signature (Mini Tiffin)", price: "23/25", image: "/Assets/Breakfast/mini-tiffin-combo-1509x2048.jpg" },
      { name: "K Special Dosa", price: "18", description: "Ghee garlic podi masala served with butter", image: "/Assets/Thatte Idly and Dosa/k-special-dosa-1536x2048.jpg" },
      { name: "Ghee Podi Masala Dosa", price: "16", image: "/Assets/Thatte Idly and Dosa/ghee-podi-masal-dosa.png" },
      { name: "Ghee Garlic Masala Dosa", price: "16", image: "/Assets/Thatte Idly and Dosa/ghee-garlic-masal-dosa.png" },
      { name: "Ghee Garlic Podi Dosa", price: "15.5", image: "/Assets/Thatte Idly and Dosa/Ghee Garlic podi dosa (2).JPG" },
      { name: "Ghee Masala Dosa", price: "14.5", image: "/Assets/Thatte Idly and Dosa/ghee-masala-dosa.bak.png" },
      { name: "Ghee Podi Dosa", price: "14.5", image: "/Assets/Thatte Idly and Dosa/ghee-podi-dosa.png" },
      { name: "Ghee Garlic Dosa", price: "14.5", image: "/Assets/Thatte Idly and Dosa/ghee-gralic-dosa.png" },
      { name: "Ghee Dosa", price: "12.5", image: "/Assets/Thatte Idly and Dosa/ghee-dosa.png" },
      { name: "Ghee Sambar Button Idly", price: "13", image: "/Assets/Thatte Idly and Dosa/Ghee sambar button idly.JPG" },
      { name: "Garlic Podi Thatte Idly", price: "10.5", image: "/Assets/Thatte Idly and Dosa/Garlic-podi-thatte-idly.png" },
      { name: "Thayir Thatte Idly", price: "10", image: "/Assets/Thatte Idly and Dosa/Thayir-thatte-idly-i-1.bak.png" },
      { name: "Ghee Podi Thatte Idly", price: "9.5", image: "/Assets/Thatte Idly and Dosa/Ghee podi thatte idly (3) (3).jpg" },
      { name: "Ghee Sambar Thatte Idly", price: "9.5", image: "/Assets/Thatte Idly and Dosa/ghee-sambar-thatte-idly-i-e1756646482282-300x244.png" },
      { name: "Podi Thatte Idly", price: "8.5", image: "/Assets/Thatte Idly and Dosa/podi thatte idly (3) (3) - Copy.jpg" },
      { name: "Ghee Thatte Idly", price: "8", image: "/Assets/Thatte Idly and Dosa/ghee-thatte-idly.bak.png" },
      { name: "Thatte Idly", price: "7", image: "/Assets/Thatte Idly and Dosa/Thate idly (1).JPG" },
      { name: "Vada Set (2pc)", price: "10" },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast Specials (8 AM - 11 AM)",
    timing: "8 AM - 11 AM",
    items: [
      { name: "Ghee Pongal", price: "13", image: "/Assets/Breakfast/Ghee pongal (1).PNG" },
      { name: "Wheat Upma (Mon/Thu)", price: "9.5", image: "/Assets/Breakfast/Wheat-rava-Upma-1.png" },
      { name: "Kichidi (Tue/Fri)", price: "9.5", image: "/Assets/Breakfast/kichidi-e1758644845534.png" },
      { name: "Semiya Upma (Wed/Sat)", price: "9.5", image: "/Assets/Breakfast/semiya-upma-150x150.png" },
      { name: "Rava Upma (Sun)", price: "9.5", image: "/Assets/Breakfast/rava-upma-300x300.png" },
    ],
  },
  {
    id: "specials",
    title: "K Cafe Specialties",
    timing: "From 3 PM / Dinner",
    items: [
      { name: "Halwa Poori Set", price: "12", description: "Exclusively at Shabiya branch" },
      { name: "Kaara Poori Set", price: "12", description: "Exclusively at Shabiya branch" },
      { name: "Chef's Special (Dinner)", price: "16", image: "/Assets/K Cafe Specials/chefs-special-dinner.bak.png" },
      { name: "Mini Perattal Idly (From 3pm)", price: "13", image: "/Assets/K Cafe Specials/mini-perttal-idly.bak.png" },
      { name: "Rava Pongal (Dinner)", price: "12.5" },
      { name: "Kuzhi Paniyaram (From 3pm)", price: "11", image: "/Assets/K Cafe Specials/Kuzhi Paniyaram.JPG" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch Varieties (12 PM - 3 PM)",
    timing: "12 PM - 3 PM",
    items: [
      { name: "Combo 1 (4 variety sadham)", price: "19" },
      { name: "Combo 2 (3 variety sadham)", price: "16" },
      { name: "Combo 3 (2 variety sadham)", price: "13" },
      { name: "Mushroom Biriyani (Mon)", price: "16" },
      { name: "Donne Biriyani (Tue)", price: "16" },
      { name: "Soya Biriyani (Wed)", price: "16" },
      { name: "Malabar Biriyani (Thu)", price: "16" },
      { name: "Kashmiri Biriyani (Fri)", price: "16" },
      { name: "Veg Brinji (Sat)", price: "16" },
      { name: "Chettinad Biriyani (Sun)", price: "16" },
      { name: "Lemon Sadham (Mon)", price: "11" },
      { name: "Coriander Sadham (Tue)", price: "11" },
      { name: "Tomato Sadham (Wed)", price: "11" },
      { name: "Arisiparuppu Sadham (Thu)", price: "11" },
      { name: "Vathakuzhambu Sadham (Fri)", price: "11" },
      { name: "Jeera Sadham (Sat)", price: "11" },
      { name: "Rasam Sadham (Sun)", price: "11" },
      { name: "Sambar Sadham", price: "11" },
      { name: "Puliyogre Sadham", price: "11" },
      { name: "Curd Sadham", price: "11" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Evening Tiffin",
    timing: "3 PM Onwards",
    items: [
      { name: "Sambar Vada", price: "7" },
      { name: "Curd Vada", price: "7" },
      { name: "Rasam Vada (Sat/Sun)", price: "7" },
      { name: "Medhu Vada", price: "3" },
      { name: "Dal Vada", price: "3" },
      { name: "Bajji (2 pc)", price: "3" },
      { name: "Pakoda", price: "3" },
      { name: "Onion Samosa", price: "3" },
      { name: "Bonda", price: "3" },
      { name: "Puffs", price: "3.5/5" },
      { name: "Soya Fry (Weekend)", price: "6.5" },
      { name: "Gobi 65 (3 PM)", price: "7.5" },
      { name: "Sambar Dip Vada Pops", price: "12" },
      { name: "Curd Dip Vada Pops", price: "12" },
      { name: "Rasam Dip Vada Pops (Sat/Sun)", price: "12" },
      { name: "Paneer Shawarma", price: "7.5/11" },
    ],
  },
  {
    id: "beverages",
    title: "Hot & Cold Beverages",
    timing: "All Day",
    items: [
      { name: "Kumbakonam Filter Kaapi", price: "5/8", image: "/Assets/Hot Beverages/Kumbakonam-filter-coffee-2-scaled.jpg" },
      { name: "Cold Filter Kaapi", price: "10", image: "/Assets/Cold Beverages/Cold filter coffee (3).JPG" },
      { name: "Nannari Sarbath", price: "8", image: "/Assets/Cold Beverages/nannari-sarbath.bak.png" },
      { name: "Masala Buttermilk", price: "8", image: "/Assets/Cold Beverages/Masala-Buttermilk.jpg" },
      { name: "Rose Milk", price: "8", image: "/Assets/Cold Beverages/rose-milk.bak.png" },
      { name: "Panakam", price: "6", image: "/Assets/Cold Beverages/Panakam.jpg" },
      { name: "Fresh Milk Saffron Tea", price: "4" },
      { name: "Fresh Milk Masala Tea", price: "4", image: "/Assets/Hot Beverages/fresh-milk-masala-tea.png" },
      { name: "Fresh Milk Nannari Tea", price: "4", image: "/Assets/Hot Beverages/fresh-milk-nannari-tea.bak - Copy.png" },
      { name: "Fresh Milk Tea", price: "3", image: "/Assets/Hot Beverages/fresh-milk-tea.bak.png" },
      { name: "Black Kaapi", price: "3", image: "/Assets/Hot Beverages/Black Kappi (1).JPG" },
      { name: "Black Tea", price: "2" },
      { name: "Lemon / Mint Tea", price: "2", image: "/Assets/Hot Beverages/Lemon or Mint tea (3).JPG" },
      { name: "Fresh Milk", price: "2.5", image: "/Assets/Hot Beverages/Fresh-milk.bak.png" },
      { name: "Water Bottle", price: "2", image: "/Assets/Cold Beverages/water-bottle-1.bak.png" },
    ],
  },
  {
    id: "sweets",
    title: "Sweets & Savouries",
    timing: "All Day",
    items: [
      { name: "Ashoka Halwa", price: "3.5/8" },
      { name: "Kesaribath", price: "3.5/8" },
      { name: "Akkara Vadisal (Fri/Sat)", price: "3.5/8" },
      { name: "Sakkara Pongal", price: "3.5/8" },
      { name: "Laddu", price: "3.5" },
      { name: "Ghee Mysore Pak", price: "5" },
      { name: "Kaju Kathli", price: "4.5" },
      { name: "Gulab Jamun", price: "4" },
      { name: "Milk Mysorepak", price: "5" },
      { name: "Special Sweet", price: "4.5" },
      { name: "Coconut/Dal Poli (3pm)", price: "4.5/5" },
      { name: "Special Halwa", price: "5/9" },
      { name: "Authentic Sweet", price: "5" },
      { name: "Halwa - Mixture", price: "7" },
      { name: "Madras Mixture", price: "5/7" },
      { name: "Ompodi", price: "5/7" },
      { name: "Karasev Variety", price: "5/7" },
      { name: "Ribbon Pakoda", price: "5/7" },
      { name: "Chips Variety", price: "5/7" },
      { name: "Special Savoury", price: "5.5/8" },
    ],
  },
  {
    id: "baked",
    title: "Baked Delicacies",
    timing: "All Day",
    items: [
      { name: "Cold Coffee Bun", price: "8", image: "/Assets/Baked Delicacies/cold-coffee-bun-1.bak.png" },
      { name: "Cookies Varieties", price: "7", image: "/Assets/Baked Delicacies/cookies-varieties.bak.png" },
      { name: "Slice Cake Varieties", price: "7", image: "/Assets/Baked Delicacies/slice-cake.bak.png" },
      { name: "Hot Milk Bun", price: "6.5", image: "/Assets/Baked Delicacies/hot-milk-bun.bak.png" },
      { name: "Cream Cake", price: "7", image: "/Assets/Baked Delicacies/cream-cake-1.bak.png" },
      { name: "Cream Bun", price: "5", image: "/Assets/Baked Delicacies/cream-bun.bak.png" },
      { name: "Jam Bun", price: "4", image: "/Assets/Baked Delicacies/jam-bun.bak.png" },
      { name: "Sweet Bun", price: "4", image: "/Assets/Baked Delicacies/sweet-bun.bak.png" },
    ],
  },
  {
    id: "weekend",
    title: "Weekend Specials",
    timing: "Fri - Sun Specials",
    items: [
      { name: "Sweet Kaaram Kaapi", price: "20", image: "/Assets/Weekend Specials/SWEET-KAARAM-KAAPI.png" },
      { name: "Venna Kaara Dosa", price: "19", image: "/Assets/Weekend Specials/Venna kaara dosa.JPG" },
      { name: "Live Snack Basket", price: "18", image: "/Assets/Weekend Specials/Livee snack baket.JPG" },
      { name: "Paniyaram Chat", price: "15", image: "/Assets/Weekend Specials/Paniyaramm chat.JPG" },
      { name: "Idly Nirachadhu", price: "10", image: "/Assets/Weekend Specials/Idly nirachadhu.jpeg" },
    ],
  },
  {
    id: "extras",
    title: "Extras & Accompaniments",
    timing: "All Day",
    items: [
      { name: "Coconut Chutney", price: "1/3" },
      { name: "Peanut Chutney", price: "1/3" },
      { name: "Mint Chutney", price: "1/3" },
      { name: "Tomato Chutney", price: "1/3" },
      { name: "Sambar", price: "2.5/5" },
      { name: "Ghee / Podi", price: "2" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    author: "MATHEW JOHN V J",
    content: "Authentic South Indian Breakfast Spot with a Traditional Touch. Kumbakonam Café truly brings the flavors of Tamil Nadu to Abu Dhabi. I tried their podi thatte idly, medhu vada, and filter coffee- everything tasted authentic, rich in flavor, and full of that homemade touch. The idly was soft and generously coated with ghee and podi, and the vada was crispy yet fluffy inside. The filter coffee is strong and flavorful, just the way it should be. Definitely a place I'd recommend for a quick breakfast or evening tiffin.",
    rating: 5,
    tagline: "Authentic South Indian Spot"
  },
  {
    author: "PRIYA RAMESH",
    content: "The best filter kaapi I've had in the UAE. It reminds me of the coffee back home in Tamil Nadu. The Thatte Idly is a must-try - so soft and delicious with the three types of chutneys and sambar. The service is incredibly warm and makes you feel right at home.",
    rating: 5,
    tagline: "Taste of Home"
  },
  {
    author: "ABDUL RAHMAN",
    content: "Great variety in the lunch menu. The different types of variety rice are all excellent. Very clean place with a live kitchen where you can see the dosas being made. Highly recommend for any vegetarian food lover in Abu Dhabi.",
    rating: 5,
    tagline: "Clean & Authentic"
  }
];

export const BRANCHES = [
  {
    name: "Hamdan (Opposite to Hamdan Center)",
    address: "Al Ghatfah St, Hamdan 5, Al Danah, Abu dhabi",
    phone: "+971 50 168 0792",
    hours: "6:30 am - 11:30 pm",
    lat: 24.489,
    lng: 54.364,
    description: "Our flagship outlet offering the full heritage experience in the heart of the city.",
    qrImage: "/Assets/QR - Shabiya Location.png",
    feedbackQrImage: "/Assets/QR - Shabiya Location.png",
    outletImages: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    name: "Khalidiyah (Khaldiya Mall)",
    address: "Khaldiyah Mall - Food Court, 2nd Floor, Mubarak bin Mohammed Street, Abu dhabi",
    phone: "+971 50 411 8667",
    hours: "8 am - 12 am",
    lat: 24.469,
    lng: 54.344,
    description: "A cozy spot perfect for family dinners and quick traditional snacks.",
    qrImage: "/Assets/QR - Shabiya Location.png",
    feedbackQrImage: "/Assets/QR - Shabiya Location.png",
    outletImages: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    name: "Musaffah (Mazyad Mall)",
    address: "Mazyad Mall - Food Court, Level 2, 28th Street, Musaffah - Abu Dhabi",
    phone: "+971 50 411 7897",
    hours: "7:30 am - 11:30 pm",
    lat: 24.369,
    lng: 54.494,
    description: "Serving authentic flavors to the hard-working community of Musaffah.",
    qrImage: "/Assets/QR - Shabiya Location.png",
    feedbackQrImage: "/Assets/QR - Shabiya Location.png",
    outletImages: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    name: "Shabiya (Shabiya Branch)",
    address: "Musaffah Shabiya, Abu Dhabi, UAE",
    phone: "+971 050 171 5991",
    hours: "6:30 am - 11:30 pm",
    lat: 24.350,
    lng: 54.510,
    description: "Modern South Indian dining with a unique twist exclusively at Shabiya.",
    qrImage: "/Assets/QR - Shabiya Location.png",
    feedbackQrImage: "/Assets/QR - Shabiya Location.png",
    outletImages: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
    ]
  },
];
