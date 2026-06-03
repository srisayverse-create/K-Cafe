export interface MenuItem {
  name: string;
  description?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  timing?: string;
  items: MenuItem[];
  coverImage?: string;
  coverStyle?: 'cover' | 'contain';
}

export const MENU_DATA: MenuCategory[] = [
  {
    id: "all-day",
    title: "Thatte Idly & Dosa (All Day)",
    timing: "8 AM - 11 PM",
    coverStyle: "contain",
    items: [
      { name: "Signature (Mini Tiffin)", image: "/Assets/Thatte Idly and Dosa/Signature(Mini Tiffin).JPG" },
      { name: "K Special Dosa", description: "Ghee garlic podi masala served with butter", image: "/Assets/K Cafe Specials/K Special dosa.JPG.jpeg" },
      { name: "Ghee Podi Masala Dosa", image: "/Assets/Thatte Idly and Dosa/ghee-podi-masal-dosa.png" },
      { name: "Ghee Garlic Masala Dosa", image: "/Assets/Thatte Idly and Dosa/ghee-garlic-masal-dosa.png" },
      { name: "Ghee Garlic Podi Dosa", image: "/Assets/Thatte Idly and Dosa/Ghee Garlic podi dosa (2).JPG" },
      { name: "Ghee Masala Dosa", image: "/Assets/Thatte Idly and Dosa/ghee-masala-dosa.bak.png" },
      { name: "Ghee Podi Dosa", image: "/Assets/Thatte Idly and Dosa/ghee-podi-dosa.png" },
      { name: "Ghee Garlic Dosa", image: "/Assets/Thatte Idly and Dosa/ghee-gralic-dosa.png" },
      { name: "Ghee Dosa", image: "/Assets/Thatte Idly and Dosa/ghee-dosa.png" },
      { name: "Ghee Sambar Button Idly", image: "/Assets/Thatte Idly and Dosa/Ghee sambar button idly.JPG" },
      { name: "Garlic Podi Thatte Idly", image: "/Assets/Thatte Idly and Dosa/Garlic-podi-thatte-idly.png" },
      { name: "Thayir Thatte Idly", image: "/Assets/Thatte Idly and Dosa/Thayir-thatte-idly-i-1.bak.png" },
      { name: "Ghee Podi Thatte Idly", image: "/Assets/Thatte Idly and Dosa/Ghee podi thatte idly (3) (3).jpg" },
      { name: "Ghee Sambar Thatte Idly", image: "/Assets/Thatte Idly and Dosa/ghee-sambar-thatte-idly-i-e1756646482282-300x244.png" },
      { name: "Podi Thatte Idly", image: "/Assets/Thatte Idly and Dosa/podi thatte idly (3) (3) - Copy.jpg" },
      { name: "Ghee Thatte Idly", image: "/Assets/Thatte Idly and Dosa/ghee-thatte-idly.bak.png" },
      { name: "Thatte Idly", image: "/Assets/Thatte Idly and Dosa/Thate idly (1).JPG" },
      { name: "Vada Set (2pc)", image: "/Assets/Thatte Idly and Dosa/Vada Set.jpg" },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast Specials (8 AM - 11 AM)",
    timing: "8 AM - 11 AM",
    coverStyle: "contain",
    items: [
      { name: "Ghee Pongal", image: "/Assets/Breakfast/Ghee pongal (1).PNG" },
      { name: "Mini Tiffin Combo", image: "/Assets/Thatte Idly and Dosa/mini-tiffin-combo-1509x2048.jpg" },
      { name: "Kichidi (Tue/Fri)", image: "/Assets/Breakfast/kichidi-e1758644845534.png" },
      { name: "Semiya Upma (Wed/Sat)", image: "/Assets/Breakfast/semiya-upma-150x150.png" },
      { name: "Rava Upma (Sun)", image: "/Assets/Breakfast/rava-upma-300x300.png" },
      { name: "Sevai Variety", image: "/Assets/Breakfast/Sevaii Variety.jpeg" },
    ],
  },
  {
    id: "specials",
    title: "K Cafe Specialties",
    timing: "From 3 PM / Dinner",
    coverStyle: "contain",
    items: [
      { name: "Halwa Poori Set", description: "Exclusively at Shabiya11 branch", image: "/Assets/K Cafe Specials/Halwa Poori set.JPG" },
      { name: "Kaara Poori Set", description: "Exclusively at Shabiya11 branch", image: "/Assets/K Cafe Specials/Kaara Poori Set.JPG" },
      { name: "Paneer Shawarma", description: "Exclusively at Musaffah (Mazyad Mall) branch", image: "/Assets/Snacks/Paneer-shawarma.png" },
      { name: "Bun Shawarma", description: "Exclusively at Musaffah (Mazyad Mall) branch", image: "/Assets/K Cafe Specials/Bun shawarma (1).jpg.jpeg" },
      { name: "Chef's Special (Dinner)", image: "/Assets/K Cafe Specials/chefs-special-dinner.bak.png" },
      { name: "Mini Perattal Idly (From 3pm)", image: "/Assets/K Cafe Specials/mini-perttal-idly.bak.png" },
      { name: "Rava Pongal (Dinner)", image: "/Assets/K Cafe Specials/rava-pongal(dinner).png" },
      { name: "Kuzhi Paniyaram (From 3pm)", image: "/Assets/K Cafe Specials/Kuzhi Paniyaram.JPG" },
      { name: "Veg Meals", description: "Exclusively at Shabiya11 branch", image: "/Assets/Lunch Varieties/Veg Meals.jpeg" },
      { name: "Pazhaya soru (Seasonal)", description: "Authentic fermented rice served with traditional accompaniments", image: "/Assets/K Cafe Specials/Pazhaya soru (Seasonal).jpeg" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch Varieties (12 PM - 3 PM)",
    timing: "12 PM - 3 PM",
    coverImage: "/Assets/Lunch Varieties/Combo-1-4-variety-sadham-.png",
    coverStyle: "contain",
    items: [
      { name: "Combo 1 (4 variety sadham)", image: "/Assets/Lunch Varieties/Combo-1-4-variety-sadham-.png" },
      { name: "Combo 2 (3 variety sadham)", image: "/Assets/Lunch Varieties/Combo-2-3-variety-sadham.png" },
      { name: "Combo 3 (2 variety sadham)", image: "/Assets/Lunch Varieties/Combo-3-2-variety-sadham-.png" },
      { name: "Chatti Choru (Seasonal)", image: "/Assets/Lunch Varieties/Chatti-choru(seasonal).png" },
      { name: "Mushroom Biriyani (Mon)", image: "/Assets/Lunch Varieties/Mushroom-biriyani(Mon).png" },
      { name: "Donne Biriyani (Tue)", image: "/Assets/Lunch Varieties/donne biryani (tue).png" },
      { name: "Soya Biriyani (Wed)", image: "/Assets/Lunch Varieties/soya-biriyani(wed).png" },
      { name: "Malabar Biriyani (Thu)", image: "/Assets/Lunch Varieties/Malabar-Biriyani(thu).png" },
      { name: "Kashmiri Biriyani (Fri)", image: "/Assets/Lunch Varieties/Kashmiri-Biriyani(fri).png" },
      { name: "Veg Brinji (Sat)", image: "/Assets/Lunch Varieties/Veg-Brinji(sat).png" },
      { name: "Chettinad Biriyani (Sun)", image: "/Assets/Lunch Varieties/chettinad-biriyani-(sun).png" },
      { name: "Lemon Sadham (Mon)", image: "/Assets/Lunch Varieties/lemon-sadham(mon).png" },
      { name: "Nalla Kaara Podi Sadham (Tue)", image: "/Assets/Lunch Varieties/Nalla kaara podi sadham.JPG.jpeg" },
      { name: "Tomato Sadham (Wed)", image: "/Assets/Lunch Varieties/Tomato-sadham(wed).png" },
      { name: "Arisiparuppu Sadham (Thu)", image: "/Assets/Lunch Varieties/arisiparuppu-sadham-(thu).png" },
      { name: "Vathakuzhambu Sadham (Fri)", image: "/Assets/Lunch Varieties/Vathakuzhambu-sadham(fri).png" },
      { name: "POONDU MILAGU SADHAM (Sat)", image: "/Assets/Lunch Varieties/poondu milagu.jpg.jpeg" },
      { name: "Rasam Sadham (Sun)", image: "/Assets/Lunch Varieties/rasam-sadham-(sun).png" },
      { name: "Sambar Sadham", image: "/Assets/Lunch Varieties/Sambar-sadham.png" },
      { name: "Puliyogre Sadham", image: "/Assets/Lunch Varieties/puliyagare-sadham.png" },
      { name: "Curd Sadham", image: "/Assets/Lunch Varieties/curd-sadham.png" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Evening Tiffin",
    timing: "3 PM Onwards",
    coverImage: "/Assets/Snacks/Medhu-Vada.png",
    coverStyle: "contain",
    items: [
      { name: "Sambar Vada", image: "/Assets/Snacks/sambar-vada.png" },
      { name: "Curd Vada", image: "/Assets/Snacks/curd-vada.png" },
      { name: "Rasam Vada (Sat/Sun)", image: "/Assets/Snacks/Rasam-Vada-mini-rasam-Vada(Sat or Sun).png" },
      { name: "Medhu Vada", image: "/Assets/Snacks/Medhu-Vada.png" },
      { name: "Dal Vada", image: "/Assets/Snacks/Dal-Vada.png" },
      { name: "Bajji (2 pc)", image: "/Assets/Snacks/Bajji.png" },
      { name: "Pakoda", image: "/Assets/Snacks/pakoda.png" },
      { name: "Onion Samosa", image: "/Assets/Snacks/onioin samosa.png" },
      { name: "Bonda", image: "/Assets/Snacks/bonda.png" },
      { name: "Puffs", image: "/Assets/Snacks/puffs.png" },
      { name: "Soya Fry (Weekend)", image: "/Assets/Snacks/soya fry (weekend).png" },
      { name: "Gobi 65 (3 PM)", image: "/Assets/Snacks/gobi-65(weekend).png" },
      { name: "Sambar Dip Vada Pops", image: "/Assets/Snacks/sambar-dip-vada-pops.png" },
      { name: "Curd Dip Vada Pops", image: "/Assets/Snacks/curd-dip-vada-pops.png" },
      { name: "Rasam Dip Vada Pops (Sat/Sun)", image: "/Assets/Snacks/Rasam-dip-Vada-pops.png" },
      { name: "Boiled Peanuts / Channa", image: "/Assets/Snacks/boiled-(channa or peanuts).png" },
      { name: "Sweet Kaaram Kaapi", image: "/Assets/Weekend Specials/SWEET-KAARAM-KAAPI.png" },
      { name: "Live Snack Basket", image: "/Assets/Weekend Specials/Livee snack baket.JPG" },
      { name: "Paniyaram Chat (Sat/Sun)", image: "/Assets/Weekend Specials/Paniyaramm chat.JPG" },
    ],
  },
  {
    id: "hot-beverages",
    title: "Hot Beverages",
    timing: "All Day",
    coverStyle: "contain",
    items: [
      { name: "Kumbakonam Filter Coffee", image: "/Assets/Hot Beverages/Kumbakonam-filter-coffee-2-scaled.jpg" },
      { name: "Fresh Milk Saffron Tea", image: "/Assets/Hot Beverages/fresh milk saffron tea.png" },
      { name: "Fresh Milk Masala Tea", image: "/Assets/Hot Beverages/fresh-milk-masala-tea.png" },
      { name: "Fresh Milk Nannari Tea", image: "/Assets/Hot Beverages/fresh-milk-nannari-tea.bak - Copy.png" },
      { name: "Fresh Milk Tea", image: "/Assets/Hot Beverages/fresh-milk-tea.bak.png" },
      { name: "Black Kaapi", image: "/Assets/Hot Beverages/Black Kappi (1).JPG" },
      { name: "Black Tea", image: "/Assets/Hot Beverages/black-tea.png" },
      { name: "Lemon / Mint Tea", image: "/Assets/Hot Beverages/Lemon or Mint tea (3).JPG" },
      { name: "Fresh Milk", image: "/Assets/Hot Beverages/Fresh-milk.bak.png" },
    ],
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages",
    timing: "All Day",
    coverStyle: "contain",
    items: [
      { name: "Cold Filter Kaapi", image: "/Assets/Cold Beverages/Cold filter coffee (3).JPG" },
      { name: "Nannari Sarbath", image: "/Assets/Cold Beverages/nannari-sarbath.bak.png" },
      { name: "Masala Buttermilk", image: "/Assets/Cold Beverages/Masala-Buttermilk.jpg" },
      { name: "Rose Milk", image: "/Assets/Cold Beverages/rose-milk.bak.png" },
      { name: "Badam Milk", description: "Rich and creamy milk flavored with almonds and saffron", image: "/Assets/Cold Beverages/Badam Milk.jpeg" },
      { name: "Panakam", image: "/Assets/Cold Beverages/Panakam.jpg" },
      { name: "Water Bottle", image: "/Assets/Cold Beverages/water-bottle-1.bak.png" },
    ],
  },
  {
    id: "sweets",
    title: "Sweets & Savouries",
    timing: "All Day",
    coverStyle: "contain",
    items: [
      { name: "Ashoka Halwa", image: "/Assets/Sweets/ashoka-halwa.png" },
      { name: "Kesaribath", image: "/Assets/Sweets/Pineapple-KESARI.png" },
      { name: "Akkara Vadisal (Fri/Sat)", image: "/Assets/Sweets/Akaravadisal.png" },
      { name: "Sakkara Pongal", image: "/Assets/Sweets/Sakkara-pongal.png" },
      { name: "Laddu", image: "/Assets/Sweets/LADDU.png" },
      { name: "Ghee Mysore Pak", image: "/Assets/Sweets/GHEE-MYSOREPAK.png" },
      { name: "Kaju Kathli", image: "/Assets/Sweets/Kaju-kathli.png" },
      { name: "Gulab Jamun", image: "/Assets/Sweets/Gulab-jamun.png" },
      { name: "Milk Mysorepak", image: "/Assets/Sweets/milk-mysorepak.png" },
      { name: "Special Sweet", image: "/Assets/Sweets/SPECIAL-SWEET.png" },
      { name: "Coconut/Dal Poli (3pm)", image: "/Assets/Sweets/Coconut or Dal poli.png" },
      { name: "Special Halwa", image: "/Assets/Sweets/special halwa.png" },
      { name: "Authentic Sweet", image: "/Assets/Sweets/authentic-sweet.png" },
      { name: "Halwa - Mixture", image: "/Assets/Sweets/Halwa-Mixture.jpeg" },
      { name: "Madras Mixture", image: "/Assets/Savouries/Madras-mixture-1024x682.png" },
      { name: "Ompodi", image: "/Assets/Savouries/Ompodi-1-1024x683.png" },
      { name: "Karasev Variety", image: "/Assets/Savouries/karasev-varieties-1024x683.png" },
      { name: "Ribbon Pakoda", image: "/Assets/Savouries/RIBBON-PAKODA-2.png" },
      { name: "Chips Variety", image: "/Assets/Savouries/chips-variety-1024x683.png" },
      { name: "Special Savoury", image: "/Assets/Savouries/SPECIAL-SAVOURY-3.png" },
    ],
  },
  {
    id: "baked",
    title: "Baked Delicacies",
    timing: "All Day",
    coverStyle: "contain",
    items: [
      { name: "Cold Coffee Bun", image: "/Assets/Baked Delicacies/cold-coffee-bun-1.bak.png" },
      { name: "Cookies Varieties", image: "/Assets/Baked Delicacies/cookies-varieties.bak.png" },
      { name: "Slice Cake Varieties", image: "/Assets/Baked Delicacies/slice-cake.bak.png" },
      { name: "Hot Milk Bun", image: "/Assets/Baked Delicacies/hot-milk-bun.bak.png" },
      { name: "Cream Cake", image: "/Assets/Baked Delicacies/cream-cake-1.bak.png" },
      { name: "Cream Bun", image: "/Assets/Baked Delicacies/Creamm bun.JPG.jpeg" },
      { name: "Maska Bun", image: "/Assets/Baked Delicacies/coconut-bun.bak.png" },
      { name: "Jam Bun", image: "/Assets/Baked Delicacies/jam-bun.bak.png" },
      { name: "Sweet Bun", image: "/Assets/Baked Delicacies/sweet-bun.bak.png" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    author: "Foodiefam Stories",
    content: "We found the ultimate spot for authentic South Indian food right here in Abu Dhabi – Kumbakonam Café 😍 ✨ The podi dosa was perfectly crispy and so delicious (still dreaming about it 🤤) ✨ The podi thatte idly was soft, fluffy, and just amazing ✨ The variety rice combo was packed with flavor – our fave was the puliyogre sadham ✨ And the vada? Honestly on another level – the BEST we’ve ever had! If you’re heading to Abu Dhabi, this place is a must-visit 🙌 We’re already planning more trips back… and fingers crossed they open in Dubai soon 🤞",
    rating: 5,
    tagline: "Ultimate Spot for Authentic Food"
  },
  {
    author: "mojojojo yaktu",
    content: "Absolutely Delicious South Indian Food! One of the best places I’ve visited for authentic South Indian food! I’ve tried many items on the menu, but the dosa and vada are truly addictive. The flavors are rich, the ghee is generous, and the quality is outstanding. Every bite is full of authentic South Indian taste. The place is small but very clean, and the service is excellent. The staff are super friendly and make you feel right at home. If you love South Indian food — especially crispy, buttery dosa — this place is a must-visit. Highly recommended!",
    rating: 5,
    tagline: "Absolutely Delicious!"
  },
  {
    author: "Anoop Whabi",
    content: "I recently visited Kumbakonam café, and it was an absolute delight! It serves variety of classic South Indian favorites and is very inviting, with a warm, authentic touch that makes you feel right at home. The food was exceptional – every dish bursting with flavor and prepared to perfection. From the crispy dosas to the spicy sambhar, each bite was a taste of South India’s rich culinary heritage. The medhu wada is a must try and not to be missed, the best I ever had. The filter coffee was simply divine – rich, smooth, and perfectly brewed, it’s a must-try for any coffee lover. And the saffron tea was equally impressive, offering a fragrant, soothing experience with every sip. The subtle hint of saffron added a luxurious touch to the tea, making it a unique and memorable drink. Overall, this café is a hidden gem for anyone looking to enjoy authentic South Indian cuisine paired with excellent coffee and tea. I can't wait to return!",
    rating: 5,
    tagline: "Exceptional & Inviting"
  },
  {
    author: "MM",
    content: "This veg eatery is a hidden gem! 😊 The quality is top-notch, and it's definitely one of the best authentic options out there. I stumbled upon it while exploring the city, and I'm so glad I did. The service is warm and welcoming, with a self-service setup that's convenient and efficient. I tried the Ghee Podi Thatte Idly for breakfast, and it was TO DIE FOR 🍴. The idly was perfectly cooked, with a soft and fluffy texture that just melted in my mouth. The ghee podi added a rich, nutty flavor that complemented the dish perfectly. Paired it with a cup of Fresh Milk Saffron Tea, and I was in heaven ☕. The tea was creamy and aromatic, with just the right amount of saffron flavor. If you're looking for a delicious and authentic veg breakfast spot, look no further! Do try the Ghee Podi Thatte Idly and Fresh Milk Saffron Tea – you won't regret it 😊. Just be prepared for a slight wait during peak hours, but trust me, it's worth it. The food is made with love. Overall, a great experience, and I'd definitely come back for more!",
    rating: 5,
    tagline: "A Hidden Gem"
  },
  {
    author: "Abdul Rahman Noor",
    content: "Hands down the best Tamil food I've ever had outside India! This unassuming, low-key cafe serves to the needs of anyone looking for authentic, homely Tamil food as evidenced by the huge crowds outside. The classic Kumbakonam coffee is a must-try, also their unique take on favourites like the ghee dosa, thatta idly (lit. \"flattened idly\"), podi (lit. \"powder\") dosa and so on. What stands out is their good quality at single-digit prices making them super affordable for everyone. The best part I liked is their sign that for anyone who couldn't afford their already reasonable prices, the food was a gift, may Allah bless them and reward their efforts! Only minor gripe is that it's located in a very busy area so parking is difficult and tends to get crowded. All in all, absolute must-visit!",
    rating: 5,
    tagline: "Best Tamil Food"
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
    locationUrl: "https://www.google.com/maps/place/KUMBAKONAM+CAFE+-+Hamdan+(Opposite+to+Hamdan+Center)+-+Hamdan+5+Al+Ghatfah+St+-+Al+Danah+-+Zone+1+-+Abu+Dhabi+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5e67b639d8f90f:0xadada0b089b67995!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjIwLjEYACCenQoqnwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsMTAwNzk2NDk4LDEwMDgxNTAzNCw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MTU2MzUsMTAwNzkyNTY4QklO&skid=f1d37264-012a-4697-8f6a-4d9f67d4d8d1&g_st=aw",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJD_nYObZnXj4RlXm2ibCgra0&source=g.page.m.nr._&laa=nmx-review-solicitation-recommendation-card",
    qrImage: "/Branches/Hamdan/QR-Hamdan-location.png",
    feedbackQrImage: "/Branches/Hamdan/QR-Hamdan-Review.png",
    outletImages: [
      "/Branches/Hamdan/Hamdan Img 01.jpg",
      "/Branches/Hamdan/Hamdan Img 02.jpg",
      "/Branches/Hamdan/Hamdan Img 03.jpg"
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
    locationUrl: "https://www.google.com/maps/place/KUMBAKONAM+CAFE+-+Khalidiyah+(Khaldiya+Mall),+Mall+-+Food+Court,+2nd+Floor+-+Mubarak+Bin+Mohammed+St+-+Al+Khalidiyah+-+Abu+Dhabi+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5e67c396c915ed:0xe82c4038a13a04dc!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjIwLjEYACCenQoqnwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsMTAwNzk2NDk4LDEwMDgxNTAzNCw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MTU2MzUsMTAwNzkyNTY4QklO&skid=688f75d4-283b-4d74-a19b-956e00bc409d&g_st=aw",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ7RXJlsNnXj4R3AQ6oThALOg&source=g.page.m.np._&laa=nmx-review-solicitation-promoted-recommendation-card",
    qrImage: "/Branches/Khalidiya/QR-Google-Map-Khaldiyah.png",
    feedbackQrImage: "/Branches/Khalidiya/QR-Khaldiyah-Review.png",
    outletImages: [
      "/Branches/Khalidiya/Khalidiya Img 01.jpg",
      "/Branches/Khalidiya/Khalidiya Img 02.jpg",
      "/Branches/Khalidiya/Khalidiya Img 03.jpg"
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
    locationUrl: "https://www.google.com/maps/place/KUMBAKONAM+CAFE+-+Musaffah+(Mazyad+Mall),+Mazyad+Mall+-+Food+Court+-+Level+2+-+28th+Street+-+Musaffah+-+Abu+Dhabi+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5e470d406a6d57:0x7d1c43c1b72e082e!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjIwLjEYACCenQoqnwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsMTAwNzk2NDk4LDEwMDgxNTAzNCw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MTU2MzUsMTAwNzkyNTY4QklO&skid=3e3c3eb9-f085-4f55-bf7e-b39b15cffd0a&g_st=aw",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJV21qQA1HXj4RLggut8FDHH0&source=g.page.m.np._&laa=nmx-review-solicitation-promoted-recommendation-card",
    qrImage: "/Branches/Musaffa/QR-Musaffa-Location.png",
    feedbackQrImage: "/Branches/Musaffa/Qr-Musaffa-Review.png",
    outletImages: [
      "/Branches/Musaffa/Musaffa Img 01.jpg",
      "/Branches/Musaffa/Musaffa Img 02.jpg",
      "/Branches/Musaffa/Musaffa Img 03.jpg"
    ]
  },
  {
    name: "Shabiya11 (Shabiya Branch)",
    address: "Musaffah Shabiya11, Abu Dhabi, UAE",
    phone: "+971504114379",
    hours: "6:30 am - 11:30 pm",
    lat: 24.350,
    lng: 54.510,
    description: "Modern South Indian dining with a unique twist exclusively at Shabiya11.",
    locationUrl: "https://www.google.com/maps/place/KUMBAKONAM+CAFE+-+Shabiya+-+Musaffah+-+ME11+-+Abu+Dhabi+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5e3931578bbd23:0xebfd581810b0f605!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjIwLjEYACCenQoqnwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsMTAwNzk2NDk4LDEwMDgxNTAzNCw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MTU2MzUsMTAwNzkyNTY4QklO&skid=2fba1f84-fe71-43eb-a6bf-b87b845cbcae&g_st=aw",
    reviewUrl: "https://g.page/r/CQX2sBAYWP3rEBM/review",
    qrImage: "/Branches/Shabiya/QR - Shabiya Location.png",
    feedbackQrImage: "/Branches/Shabiya/QR - Shabiya Feedback.png",
    coverImage: "/Branches/Shabiya/Shabiya-cover-img.JPG",
    outletImages: [
      "/Branches/Shabiya/Shabiya-img-01.JPG",
      "/Branches/Shabiya/Shabiya-img-02.JPG",
      "/Branches/Shabiya/Shabiya-img-03.JPG"
    ]
  },
];
