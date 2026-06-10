import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
    // Daily Grind (Featured on homepage)
    { 
        id: "dg1", 
        name: "Nitro Velvet", 
        price: 6.50, 
        description: "12-hour cold extraction infused with nitrogen for a creamy, stout-like finish.", 
        category: "iced", 
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=500" 
    },
    { 
        id: "dg2", 
        name: "Oat Silk Latte", 
        price: 5.75, 
        description: "Double ristretto shot paired with micro-foamed premium oat milk.", 
        category: "hot", 
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=500" 
    },
    { 
        id: "dg3", 
        name: "Citrus Ember", 
        price: 7.00, 
        description: "A warming blend of spiced espresso and blood orange reduction.", 
        category: "hot", 
        image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=500" 
    },
    
    // Hot Drinks (from homepage)
    { 
        id: "h1", 
        name: "Classic Flat White", 
        price: 4.50, 
        description: "Smooth ristretto espresso with silky steamed milk.", 
        category: "hot", 
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=500" 
    },
    { 
        id: "h2", 
        name: "Caramel Macchiato", 
        price: 5.20, 
        description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso.", 
        category: "hot", 
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=500" 
    },
    { 
        id: "h3", 
        name: "Cortado", 
        price: 4.00, 
        description: "Equal parts espresso and warm milk to reduce the acidity.", 
        category: "hot", 
        image: "https://images.unsplash.com/photo-151097252790b-af4f90267300?auto=format&fit=crop&q=80&w=500" 
    },
    
    // Iced (from homepage)
    { 
        id: "i1", 
        name: "Swirled Iced Latte", 
        price: 4.75, 
        description: "Rich espresso over ice, swirled with organic whole milk and honey.", 
        category: "iced", 
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=500" 
    },
    { 
        id: "i2", 
        name: "Cold Brew Tonic", 
        price: 5.50, 
        description: "Slow-steeped cold brew coffee topped with premium tonic and lime.", 
        category: "iced", 
        image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=500" 
    },
    { 
        id: "i3", 
        name: "Shakerato", 
        price: 4.80, 
        description: "Espresso shaken violently with ice and simple syrup, served frothy.", 
        category: "iced", 
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=500" 
    },
    
    // Blended (from homepage)
    { 
        id: "b1", 
        name: "Hazelnut Frappe", 
        price: 5.75, 
        description: "Blended coffee, milk, and hazelnut syrup, finished with whipped cream.", 
        category: "blended", 
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=500" 
    },
    { 
        id: "b2", 
        name: "Matcha Mint Blend", 
        price: 5.90, 
        description: "Creamy Japanese matcha blended with fresh mint and ice.", 
        category: "blended", 
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500" 
    },

    // Espresso Classics (from menu catalog)
    { 
        id: "e1", 
        name: "Double Espresso", 
        price: 3.50, 
        description: "Two shots of our signature house blend with notes of dark chocolate and roasted nuts.", 
        category: "espresso", 
        image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?auto=format&fit=crop&w=500&q=80" 
    },
    { 
        id: "e2", 
        name: "Oat Milk Latte", 
        price: 5.25, 
        description: "Silky steamed oat milk poured over a rich double shot of espresso.", 
        category: "espresso", 
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80" 
    },
    { 
        id: "e3", 
        name: "Flat White", 
        price: 4.75, 
        description: "Micro-foam milk poured over ristretto shots for a velvety, intense flavor.", 
        category: "espresso", 
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=500&q=80" 
    },
    
    // Cold Brew (from menu catalog)
    { 
        id: "c1", 
        name: "Nitro Cold Brew", 
        price: 5.50, 
        description: "Infused with nitrogen for a smooth, creamy finish and a natural sweetness.", 
        category: "coldbrew", 
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" 
    },
    { 
        id: "c2", 
        name: "Vanilla Sweet Cream", 
        price: 6.00, 
        description: "House-made cold brew topped with a float of vanilla-infused sweet cream.", 
        category: "coldbrew", 
        image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=500&q=80" 
    },
    { 
        id: "c3", 
        name: "Nitro Velvet", 
        price: 6.50, 
        description: "Steeped for 24 hours and nitrogen-infused for a creamy, silk-like finish that defines perfection.", 
        category: "coldbrew", 
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80" 
    },
    
    // Seasonal Specials (from menu catalog)
    { 
        id: "s1", 
        name: "Citrus Ember", 
        price: 7.00, 
        description: "A warming blend of spiced espresso and blood orange reduction.", 
        category: "seasonal", 
        image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=500&q=80" 
    },
    { 
        id: "s2", 
        name: "Spiced Honey Cold Brew", 
        price: 6.50, 
        description: "Signature cold brew infused with organic local honey, cinnamon, and a dash of nutmeg.", 
        category: "seasonal", 
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80" 
    },
    
    // Bakery (shared)
    { 
        id: "k1", 
        name: "Butter Croissant", 
        price: 3.75, 
        description: "Flaky, golden-brown puff pastry baked fresh daily.", 
        category: "bakery", 
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80" 
    },
    { 
        id: "k2", 
        name: "Pistachio Almond Tart", 
        price: 4.50, 
        description: "Sweet crust filled with almond cream and chopped roasted pistachios.", 
        category: "bakery", 
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80" 
    }
];
