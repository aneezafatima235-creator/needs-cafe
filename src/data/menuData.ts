import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Famous Shakes
  {
    id: 'shake-oreo',
    name: 'Legendary Oreo Thickshake',
    category: 'shakes',
    price: 450,
    description: 'Fresh dairy ice cream blended with crushed Oreo cookies, topped with rich chocolate drizzle, whipped cream, and an Oreo wafer garnish.',
    popular: true,
    badge: 'Customer Favorite',
    prepTime: '6-8 mins',
    image: '/src/assets/images/signature_oreo_shake_1792825204754.jpg',
    options: [
      { name: 'Thickness', choices: ['Classic Creamy', 'Extra Thick Shake'] },
      { name: 'Whipped Cream', choices: ['Standard Whip', 'Double Whipped Cream', 'No Whip'] }
    ]
  },
  {
    id: 'shake-lotus',
    name: 'Lotus Biscoff Cream Shake',
    category: 'shakes',
    price: 520,
    description: 'Decadent Belgian spiced caramel cookie butter blended with whole milk and vanilla gelato, finished with Biscoff crumb dust.',
    popular: true,
    prepTime: '5-7 mins',
    image: '/src/assets/images/lotus_biscoff_shake_1792825654354.jpg',
    options: [
      { name: 'Extra Topping', choices: ['None', 'Extra Cookie Crunch (+₨ 50)'] }
    ]
  },
  {
    id: 'shake-kitkat',
    name: 'KitKat Choco Blast Shake',
    category: 'shakes',
    price: 480,
    description: 'Crisp wafer chocolate fingers blended with dark cocoa and rich ice cream, crowned with KitKat shards.',
    prepTime: '6 mins',
    image: '/src/assets/images/signature_oreo_shake_1792825204754.jpg',
  },
  {
    id: 'shake-mango',
    name: 'Chaunsa Mango Velvet Shake',
    category: 'shakes',
    price: 420,
    description: 'Thick seasonal mango pulp puree whipped with chilled cream and dairy milk for a silky summer classic.',
    prepTime: '5 mins',
    image: '/src/assets/images/chaunsa_mango_shake_1792825947310.jpg',
  },

  // Coffee & Brews
  {
    id: 'coffee-latte',
    name: 'Artisanal Cafe Latte',
    category: 'coffee',
    price: 440,
    description: 'Double shot of freshly ground Arabica espresso gently married with velvety micro-foamed whole milk and delicate latte art.',
    popular: true,
    badge: 'Signature Brew',
    prepTime: '4-5 mins',
    image: '/src/assets/images/artisanal_coffee_latte_1792825205385.jpg',
    options: [
      { name: 'Temperature', choices: ['Hot Steamed', 'Iced Cold'] },
      { name: 'Sweetness', choices: ['No Sugar', 'Less Sweet', 'Normal'] }
    ]
  },
  {
    id: 'coffee-spanish',
    name: 'Iced Spanish Sweet Latte',
    category: 'coffee',
    price: 490,
    description: 'Chilled espresso poured over sweetened condensed milk and cold fresh milk over crystal ice cubes.',
    popular: true,
    prepTime: '4 mins',
    image: '/src/assets/images/artisanal_coffee_latte_1792825205385.jpg',
  },
  {
    id: 'coffee-caramel-macchiato',
    name: 'Caramel Macchiato',
    category: 'coffee',
    price: 470,
    description: 'Steamed milk stained with espresso and finished with ribbons of homemade salted caramel syrup.',
    prepTime: '5 mins',
    image: '/src/assets/images/artisanal_coffee_latte_1792825205385.jpg',
  },
  {
    id: 'coffee-cappuccino',
    name: 'Italian Dark Roast Cappuccino',
    category: 'coffee',
    price: 420,
    description: 'Equal parts bold espresso, silky steamed milk, and a thick cushion of microfoam dusted with organic cocoa.',
    prepTime: '4 mins',
    image: '/src/assets/images/artisanal_coffee_latte_1792825205385.jpg',
  },
  {
    id: 'coffee-americano',
    name: 'Caffe Americano',
    category: 'coffee',
    price: 360,
    description: 'Robust double espresso pulled directly over hot filtered water, highlighting fruity and nutty single-origin notes.',
    prepTime: '3 mins',
    image: '/src/assets/images/artisanal_coffee_latte_1792825205385.jpg',
  },

  // Karak Chai & Teas
  {
    id: 'tea-karak',
    name: 'Special Doodh Patti Karak Chai',
    category: 'tea',
    price: 190,
    description: 'Slow-simmered rich full-cream buffalo milk infused with aromatic cardamom pods and strong Danedar leaf blend.',
    popular: true,
    badge: 'Evening Essential',
    prepTime: '8-10 mins',
    image: '/src/assets/images/karak_doodh_patti_chai_1792825655548.jpg',
    options: [
      { name: 'Sugar Level', choices: ['Meetha Normal', 'Less Sugar', 'Without Sugar'] }
    ]
  },
  {
    id: 'tea-kashmiri',
    name: 'Pink Kashmiri Chai',
    category: 'tea',
    price: 260,
    description: 'Authentic brewed green tea leaves aerated to an iconic rosy pink, garnished with crushed almonds and pistachios.',
    prepTime: '8 mins',
    image: '/src/assets/images/kashmiri_pink_chai_1792825656356.jpg',
  },
  {
    id: 'tea-cardamom-kahwa',
    name: 'Peshawari Cardamom Kahwa',
    category: 'tea',
    price: 160,
    description: 'Light golden herbal green tea infused with whole green cardamom and saffron threads with rock sugar on the side.',
    prepTime: '5 mins',
    image: '/src/assets/images/karak_doodh_patti_chai_1792825655548.jpg',
  },

  // Gourmet Burgers & Sandwiches
  {
    id: 'burger-smash',
    name: 'Needs Cafe Double Smash Burger',
    category: 'burgers',
    price: 680,
    description: 'Two crispy-edged seared prime beef patties, melted sharp cheddar, caramelized onions, crisp iceberg, and house secret sauce on toasted brioche.',
    popular: true,
    badge: 'Chef Special',
    prepTime: '12-15 mins',
    image: '/src/assets/images/gourmet_burger_fries_1792825205722.jpg',
    options: [
      { name: 'Cheese', choices: ['Double Cheddar', 'Pepper Jack (+₨ 60)'] },
      { name: 'Side', choices: ['Includes Salted Fries', 'Upgrade to Cheesy Fries (+₨ 120)'] }
    ]
  },
  {
    id: 'burger-zinger',
    name: 'Crispy Crunch Zinger Burger',
    category: 'burgers',
    price: 540,
    description: 'Hand-breaded buttermilk chicken breast fried golden crisp, spicy garlic mayo, and garden fresh coleslaw on a sesame bun.',
    popular: true,
    spicy: true,
    prepTime: '10-12 mins',
    image: '/src/assets/images/crispy_zinger_burger_1792825945275.jpg',
  },
  {
    id: 'sandwich-grilled-club',
    name: 'Artisan Grilled Chicken Club',
    category: 'burgers',
    price: 520,
    description: 'Triple-decker toasted sourdough stuffed with roasted herb chicken, farm egg, sliced cheddar, tomato, and honey mustard.',
    prepTime: '10 mins',
    image: '/src/assets/images/crispy_zinger_burger_1792825945275.jpg',
  },
  {
    id: 'burger-mushroom-melt',
    name: 'Truffle & Mushroom Beef Melt',
    category: 'burgers',
    price: 720,
    description: 'Flame-grilled prime patty topped with sauteed garlic mushrooms, Swiss cheese melt, and mild black pepper aioli.',
    prepTime: '14 mins',
    image: '/src/assets/images/gourmet_burger_fries_1792825205722.jpg',
  },

  // Savory Bites & Dinner
  {
    id: 'savory-loaded-fries',
    name: 'Loaded Cheesy Pizza Fries',
    category: 'savory',
    price: 490,
    description: 'Golden skin-on fries smothered in hot mozzarella-cheddar blend, spiced chicken chunks, jalapenos, and oregano herbs.',
    popular: true,
    badge: 'Late Night Hit',
    prepTime: '10 mins',
    image: '/src/assets/images/loaded_cheesy_fries_1792825657093.jpg',
  },
  {
    id: 'savory-strips',
    name: 'Crunchy Chicken Tender Strips',
    category: 'savory',
    price: 460,
    description: 'Five pieces of tender chicken breast strips in a crunchy panko crust, served with smokey BBQ and garlic ranch dips.',
    prepTime: '8 mins',
    image: '/src/assets/images/crispy_zinger_burger_1792825945275.jpg',
  },
  {
    id: 'savory-wings',
    name: 'Peri-Peri Glazed Wings (6 Pcs)',
    category: 'savory',
    price: 480,
    description: 'Crisp fried chicken wings tossed in zesty African birds eye chili glaze with sour cream dip.',
    spicy: true,
    prepTime: '12 mins',
    image: '/src/assets/images/peri_peri_wings_1792825947149.jpg',
  },
  {
    id: 'savory-mozzarella',
    name: 'Golden Mozzarella Sticks (4 Pcs)',
    category: 'savory',
    price: 390,
    description: 'Gooey melted mozzarella herb-crumbed batons served piping hot with spiced marinara dipping sauce.',
    prepTime: '7 mins',
    image: '/src/assets/images/crispy_mozzarella_sticks_1792825947130.jpg',
  },

  // Desserts
  {
    id: 'dessert-lava',
    name: 'Molten Choco Lava Cake',
    category: 'desserts',
    price: 450,
    description: 'Warm dark chocolate sponge oozing with melted Belgian fudge center, served alongside a scoop of cold vanilla bean ice cream.',
    popular: true,
    prepTime: '10 mins',
    image: '/src/assets/images/molten_lava_cake_1792825656834.jpg',
  },
  {
    id: 'dessert-waffle',
    name: 'Nutella & Hazelnut Crunch Waffle',
    category: 'desserts',
    price: 480,
    description: 'Crisp Belgian waffle smothered with warm Nutella spread, toasted crushed hazelnuts, and whipped dairy cream.',
    prepTime: '8 mins',
    image: '/src/assets/images/nutella_hazelnut_waffle_1792825946088.jpg',
  }
];
