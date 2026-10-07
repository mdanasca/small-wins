/* Original Small Wins recipe collection. Quantities are per stated batch. */
const RECIPES = [
  {
    "id": "adult-01",
    "title": "Tomato shakshuka with white beans",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Eggs",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "whitebeans",
        "name": "cooked no-added-salt white beans, drained",
        "qty": 120.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "coriander",
        "name": "fresh coriander",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Soften chopped onion and pepper in oil for 7 minutes.",
      "Stir in garlic, cumin and paprika, then chopped tomatoes and beans; simmer 10 minutes, adding a splash of water if dry.",
      "Make four wells, add the eggs, cover and cook until whites and yolks are set. Finish with coriander."
    ],
    "allergens": [
      "Egg"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-02",
    "title": "South Indian masala omelette & cabbage",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Eggs",
    "minutes": 20,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cabbage",
        "name": "cabbage",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coriander",
        "name": "fresh coriander",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Finely shred cabbage and sauté with half the cumin until tender, about 8 minutes.",
      "Beat eggs with finely chopped onion, tomato, coriander and remaining spices.",
      "Cook two omelettes over medium-low heat, turning or covering until set. Serve with the warm cabbage."
    ],
    "allergens": [
      "Egg"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-03",
    "title": "Spinach egg bhurji with mushrooms",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Eggs",
    "minutes": 20,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "mushroom",
        "name": "mushrooms",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "garam",
        "name": "garam masala",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Brown sliced mushrooms in a wide pan and set aside.",
      "Soften onion and garlic, then cook tomato and spices until thick.",
      "Wilt spinach, add beaten eggs and gently stir until set. Fold in mushrooms."
    ],
    "allergens": [
      "Egg"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-04",
    "title": "Broccoli cottage-cheese frittata",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Eggs",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cottage",
        "name": "cottage cheese",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Heat the oven to 190°C. Steam chopped broccoli for 5 minutes and drain well.",
      "Soften onion in an ovenproof pan. Whisk eggs with cottage cheese and paprika; add broccoli.",
      "Pour into the pan and bake 15–20 minutes until the centre is fully set."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-05",
    "title": "Menemen with peppers & mushrooms",
    "audience": "adult",
    "cuisine": "Turkish-inspired",
    "protein": "Eggs",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "mushroom",
        "name": "mushrooms",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Sauté onion, peppers and mushrooms until soft and their moisture reduces.",
      "Add chopped tomatoes and spices and simmer for 8 minutes.",
      "Stir beaten eggs through the vegetables over low heat until softly but fully set."
    ],
    "allergens": [
      "Egg"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-06",
    "title": "Warm cumin eggs on garlicky yogurt",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Eggs",
    "minutes": 20,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 1.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Mix yogurt with a little grated garlic.",
      "Sauté spinach and chopped tomatoes until tender; hard-boil the eggs, then peel and halve.",
      "Spoon vegetables and eggs over yogurt. Warm paprika and cumin briefly in oil and drizzle over."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-07",
    "title": "Cabbage-carrot egg skillet",
    "audience": "adult",
    "cuisine": "Southeast Asian-inspired",
    "protein": "Eggs",
    "minutes": 20,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cabbage",
        "name": "cabbage",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "soy",
        "name": "reduced-salt soy sauce",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      },
      {
        "key": "lime",
        "name": "lime",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Finely shred cabbage and carrot. Stir-fry with ginger and garlic until tender.",
      "Add soy sauce and a splash of water. Push vegetables aside and scramble the eggs until set.",
      "Fold everything together and finish with lime. No fish sauce or shrimp paste needed."
    ],
    "allergens": [
      "Egg",
      "Soy",
      "Wheat"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-08",
    "title": "Paneer & spinach breakfast scramble",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Paneer",
    "minutes": 20,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "paneer",
        "name": "paneer",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "egg",
        "name": "eggs",
        "qty": 2.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Soften onion with cumin and turmeric, then add chopped tomato.",
      "Crumble paneer into the pan and cook for 3 minutes; fold in spinach.",
      "Add beaten eggs and stir until completely set. Serve straight from the pan."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-09",
    "title": "Savory courgette cottage-cheese pancakes",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Eggs",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 3.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cottage",
        "name": "cottage cheese",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "besan",
        "name": "chickpea flour",
        "qty": 50.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "coriander",
        "name": "fresh coriander",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Grate courgette and squeeze firmly in a clean cloth.",
      "Mix with eggs, cottage cheese, chickpea flour, coriander and paprika; rest 5 minutes.",
      "Cook small pancakes in a lightly oiled pan for 3–4 minutes per side until firm and cooked through."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-10",
    "title": "Mushroom-spinach egg cups",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Eggs",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 5.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "mushroom",
        "name": "mushrooms",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "cottage",
        "name": "cottage cheese",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Heat the oven to 180°C. Cook chopped mushrooms until dry, then wilt spinach.",
      "Whisk eggs with cottage cheese and paprika. Divide vegetables and egg mixture between six greased muffin wells.",
      "Bake 18–22 minutes until fully set. Makes six cups, three per adult serving."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-11",
    "title": "Chettinad-style pepper eggs & beans",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Eggs",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "beans",
        "name": "green beans",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "curry",
        "name": "curry leaves",
        "qty": 1.0,
        "unit": "sprigs",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "fennel",
        "name": "ground fennel",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "peppercorn",
        "name": "ground black pepper",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Hard-boil eggs, peel and halve. Steam green beans until tender.",
      "Cook onion, curry leaves and spices in oil, then add tomato and reduce to a thick sauce.",
      "Fold in beans and eggs and warm through. Remove curry-leaf stalks before serving."
    ],
    "allergens": [
      "Egg"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-12",
    "title": "Cauliflower egg hash with coriander yogurt",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Eggs",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "breakfast"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "coriander",
        "name": "fresh coriander",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Chop cauliflower small and sauté with diced pepper, cumin and paprika, adding a splash of water until tender.",
      "Make wells and crack in eggs; cover until set.",
      "Mix yogurt with chopped coriander and serve on the side."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-13",
    "title": "Chicken shawarma & roasted cauliflower",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Chicken",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Heat the oven to 210°C. Coat chicken strips and cauliflower with oil, spices, garlic and lemon.",
      "Spread on a tray with onion wedges and roast 22–28 minutes, turning once, until chicken reaches 74°C.",
      "Serve with yogurt; use it as a dip rather than adding rice."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-14",
    "title": "Kerala-style chicken stew & green beans",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Chicken",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "beans",
        "name": "green beans",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "curry",
        "name": "curry leaves",
        "qty": 1.0,
        "unit": "sprigs",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "coconutmilk",
        "name": "unsweetened coconut milk",
        "qty": 150.0,
        "unit": "ml",
        "aisle": "Pantry"
      },
      {
        "key": "peppercorn",
        "name": "ground black pepper",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Soften onion, ginger and curry leaves without browning.",
      "Add chicken pieces, carrot, black pepper and 200 ml water; simmer 15 minutes.",
      "Add beans and coconut milk; gently simmer until vegetables are tender and chicken reaches 74°C. Remove leaf stalks."
    ],
    "allergens": [],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-15",
    "title": "Pepper chicken with cabbage thoran",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Chicken",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "cabbage",
        "name": "cabbage",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "curry",
        "name": "curry leaves",
        "qty": 1.0,
        "unit": "sprigs",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "coconut",
        "name": "unsweetened grated coconut",
        "qty": 20.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "peppercorn",
        "name": "ground black pepper",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "fennel",
        "name": "ground fennel",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Cook shredded cabbage with a splash of water, half the curry leaves and coconut until tender; set aside.",
      "Brown small chicken pieces with onion, ginger, garlic, pepper and fennel.",
      "Add 100 ml water, cover and cook through to 74°C, then uncover to reduce. Serve beside the thoran."
    ],
    "allergens": [],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-16",
    "title": "Chicken kofta & smoky aubergine yogurt",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Chicken",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "aubergine",
        "name": "aubergine",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coriander",
        "name": "fresh coriander",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Finely mince chicken in a processor; mix with half the onion, coriander and cumin. Shape small flat kofta.",
      "Roast diced aubergine, remaining onion, paprika and oil at 210°C for 25 minutes.",
      "Pan-cook kofta about 5–6 minutes per side to 74°C. Serve with aubergine and garlic yogurt."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-17",
    "title": "Lemon-oregano chicken & broccoli tray",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Chicken",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oregano",
        "name": "dried oregano",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Heat oven to 210°C. Toss chicken chunks, broccoli florets and tomatoes with oil, lemon juice, garlic and oregano.",
      "Spread on a tray without crowding. Roast 25–30 minutes, turning once, to 74°C in the chicken.",
      "Rest 5 minutes and spoon the pan juices over the vegetables."
    ],
    "allergens": [],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-18",
    "title": "Ginger-lime chicken & green bean stir-fry",
    "audience": "adult",
    "cuisine": "Southeast Asian-inspired",
    "protein": "Chicken",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "beans",
        "name": "green beans",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "soy",
        "name": "reduced-salt soy sauce",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      },
      {
        "key": "lime",
        "name": "lime",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Slice chicken thinly. Stir-fry in a hot pan, then set aside.",
      "Add chopped green beans and peppers with ginger, garlic and 60 ml water; cover until tender.",
      "Return chicken, add soy and lime, and cook until chicken reaches 74°C and sauce lightly coats it."
    ],
    "allergens": [
      "Soy",
      "Wheat"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-19",
    "title": "Chicken saag with roasted carrots",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Chicken",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "garam",
        "name": "garam masala",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Roast carrot batons with oil at 210°C for 25 minutes.",
      "Soften onion with spices, add tomato and cook down. Add chicken and 100 ml water; simmer to 74°C.",
      "Stir in spinach until wilted; lower heat and stir in yogurt. Serve with the carrots."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-20",
    "title": "Chicken & mushroom coconut skillet",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Chicken",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "mushroom",
        "name": "mushrooms",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "beans",
        "name": "green beans",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coconutmilk",
        "name": "unsweetened coconut milk",
        "qty": 150.0,
        "unit": "ml",
        "aisle": "Pantry"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "curry",
        "name": "curry leaves",
        "qty": 1.0,
        "unit": "sprigs",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Brown sliced mushrooms and set aside. Soften onion, ginger and curry leaves.",
      "Add chicken, turmeric, coconut milk and 100 ml water; simmer 12 minutes.",
      "Add chopped beans and mushrooms; cook until tender and chicken reaches 74°C. Remove leaf stalks."
    ],
    "allergens": [],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-21",
    "title": "Paprika chicken stuffed peppers",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Chicken",
    "minutes": 40,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Heat oven to 200°C and halve the peppers. Finely chop or mince chicken.",
      "Cook onion, garlic and chicken in a pan; add grated cauliflower, tomato and spices.",
      "Fill pepper halves, add a splash of water to the baking dish, cover and bake 25 minutes. Check the filling reaches 74°C."
    ],
    "allergens": [],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-22",
    "title": "Tamarind chicken & roasted broccoli",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Chicken",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tamarind",
        "name": "tamarind paste",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "corianderpowder",
        "name": "ground coriander",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Roast broccoli with oil at 210°C for 20–25 minutes.",
      "Soften onion and ginger; add chicken, coriander powder and cumin and cook for 5 minutes.",
      "Add tomato, tamarind and 150 ml water; simmer to 74°C and reduce to a tangy sauce. Serve with broccoli."
    ],
    "allergens": [],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-23",
    "title": "Kerala fish moilee & cauliflower",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Fish",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "fish",
        "name": "boneless cod or pollock",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coconutmilk",
        "name": "unsweetened coconut milk",
        "qty": 180.0,
        "unit": "ml",
        "aisle": "Pantry"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "curry",
        "name": "curry leaves",
        "qty": 1.0,
        "unit": "sprigs",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Steam cauliflower florets until tender.",
      "Soften onion, ginger and curry leaves. Add turmeric, coconut milk, tomato and 100 ml water; simmer 8 minutes.",
      "Nestle in fish pieces and gently cook to 63°C, usually 6–10 minutes. Finish with lemon and serve with cauliflower."
    ],
    "allergens": [
      "Fish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-24",
    "title": "Coriander fish parcels with broccoli",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Fish",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "fish",
        "name": "boneless cod or pollock",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "coriander",
        "name": "fresh coriander",
        "qty": 20.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Heat oven to 200°C. Mix chopped coriander, garlic, lemon, oil and spices.",
      "Put fish and thinly cut vegetables on two parchment sheets; spoon over marinade and a tablespoon of water.",
      "Fold into sealed parcels on a tray. Bake 20–25 minutes until fish reaches 63°C; open carefully away from steam."
    ],
    "allergens": [
      "Fish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-25",
    "title": "Salmon with cumin cauliflower mash",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Fish",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "salmon",
        "name": "boneless salmon",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 450.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 1.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Steam cauliflower until very soft; mash with yogurt and cumin.",
      "Pan-cook salmon over medium heat, turning once, until it reaches 63°C.",
      "Wilt spinach with garlic and serve beside the mash and fish with lemon."
    ],
    "allergens": [
      "Fish",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-26",
    "title": "Tomato-tamarind fish curry & beans",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Fish",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "fish",
        "name": "boneless cod or pollock",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "beans",
        "name": "green beans",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tamarind",
        "name": "tamarind paste",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "curry",
        "name": "curry leaves",
        "qty": 1.0,
        "unit": "sprigs",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "corianderpowder",
        "name": "ground coriander",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Steam chopped green beans until tender.",
      "Cook onion, garlic and curry leaves, then tomato, tamarind and spices with 150 ml water for 10 minutes.",
      "Add fish and gently simmer to 63°C. Remove leaf stalks and serve with beans."
    ],
    "allergens": [
      "Fish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-27",
    "title": "Fish tikka & warm cabbage slaw",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Fish",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "fish",
        "name": "boneless cod or pollock",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "cabbage",
        "name": "cabbage",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 120.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garam",
        "name": "garam masala",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Coat fish chunks with yogurt, ginger, garam masala and paprika; rest while preparing vegetables.",
      "Roast on a lined tray at 210°C for 12–18 minutes to 63°C.",
      "Sauté shredded cabbage and carrot until tender, finish with lemon, and serve under the fish."
    ],
    "allergens": [
      "Fish",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-28",
    "title": "Ginger salmon & broccoli",
    "audience": "adult",
    "cuisine": "Southeast Asian-inspired",
    "protein": "Fish",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "salmon",
        "name": "boneless salmon",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "soy",
        "name": "reduced-salt soy sauce",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      },
      {
        "key": "lime",
        "name": "lime",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Steam broccoli until tender-crisp.",
      "Mix ginger, garlic, soy and lime. Pan-cook salmon for 4–5 minutes per side, spooning sauce over near the end.",
      "Check fish reaches 63°C. Toss broccoli in the pan juices and serve."
    ],
    "allergens": [
      "Fish",
      "Soy",
      "Wheat"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-29",
    "title": "Fish & courgette tomato bake",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Fish",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "fish",
        "name": "boneless cod or pollock",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oregano",
        "name": "dried oregano",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Heat oven to 200°C. Put sliced courgette, onion, garlic, tomatoes, oregano and oil in a baking dish.",
      "Bake for 15 minutes. Add fish, spoon vegetables over it and bake another 15–20 minutes to 63°C.",
      "Squeeze over lemon and let stand 3 minutes."
    ],
    "allergens": [
      "Fish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-30",
    "title": "Salmon patties & broccoli yogurt dip",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Fish",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "salmon",
        "name": "boneless salmon",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "egg",
        "name": "eggs",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "besan",
        "name": "chickpea flour",
        "qty": 30.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "coriander",
        "name": "fresh coriander",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Bake salmon at 200°C until it reaches 63°C; carefully check for bones and flake.",
      "Mix with egg, chickpea flour and coriander; shape six flat patties and pan-cook until fully set and hot through.",
      "Steam broccoli. Mix yogurt and lemon for a dip and serve together."
    ],
    "allergens": [
      "Egg",
      "Fish",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-31",
    "title": "Prawn coconut curry & green beans",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Prawns",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "prawn",
        "name": "peeled prawns",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "beans",
        "name": "green beans",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coconutmilk",
        "name": "unsweetened coconut milk",
        "qty": 150.0,
        "unit": "ml",
        "aisle": "Pantry"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "corianderpowder",
        "name": "ground coriander",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Soften onion and garlic; add spices and tomato and cook until thick.",
      "Add coconut milk, chopped beans and 100 ml water; simmer until beans are tender.",
      "Add prawns and cook until opaque and firm throughout. Serve immediately."
    ],
    "allergens": [
      "Shellfish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-32",
    "title": "Garlic-lime prawns with courgette ribbons",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Prawns",
    "minutes": 20,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "prawn",
        "name": "peeled prawns",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 3.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "lime",
        "name": "lime",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Peel courgettes into ribbons and briefly sauté until just tender; set aside.",
      "Cook garlic and paprika in oil, add chopped tomatoes and cook 4 minutes.",
      "Add prawns and cook until opaque throughout; toss with courgette and lime."
    ],
    "allergens": [
      "Shellfish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-33",
    "title": "Pepper prawns & cabbage thoran",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Prawns",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "prawn",
        "name": "peeled prawns",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "cabbage",
        "name": "cabbage",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coconut",
        "name": "unsweetened grated coconut",
        "qty": 20.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "curry",
        "name": "curry leaves",
        "qty": 1.0,
        "unit": "sprigs",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "peppercorn",
        "name": "ground black pepper",
        "qty": 0.75,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "fennel",
        "name": "ground fennel",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Cook shredded cabbage with coconut, half the curry leaves and a splash of water until tender.",
      "Soften onion with remaining curry leaves, fennel and pepper.",
      "Add prawns and stir-fry until opaque throughout; serve with cabbage and discard leaf stalks."
    ],
    "allergens": [
      "Shellfish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-34",
    "title": "Ginger prawns & vegetable egg skillet",
    "audience": "adult",
    "cuisine": "Southeast Asian-inspired",
    "protein": "Prawns",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "prawn",
        "name": "peeled prawns",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "egg",
        "name": "eggs",
        "qty": 2.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "cabbage",
        "name": "cabbage",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "soy",
        "name": "reduced-salt soy sauce",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      },
      {
        "key": "lime",
        "name": "lime",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Cut vegetables small and stir-fry with ginger and a splash of water until tender.",
      "Push aside, add beaten eggs and scramble until set.",
      "Add prawns and soy; cook until prawns are opaque, then mix together and finish with lime."
    ],
    "allergens": [
      "Egg",
      "Shellfish",
      "Soy",
      "Wheat"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-35",
    "title": "Smoky prawn & pepper tray",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Prawns",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "prawn",
        "name": "peeled prawns",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Roast sliced peppers, courgette and onion with oil, paprika and cumin at 210°C for 20 minutes.",
      "Add prawns, toss and roast 6–10 minutes until opaque throughout.",
      "Serve with lemony yogurt and the warm vegetables."
    ],
    "allergens": [
      "Milk",
      "Shellfish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-36",
    "title": "Mild lemongrass prawn coconut soup",
    "audience": "adult",
    "cuisine": "Southeast Asian-inspired",
    "protein": "Prawns",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "prawn",
        "name": "peeled prawns",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "mushroom",
        "name": "mushrooms",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coconutmilk",
        "name": "unsweetened coconut milk",
        "qty": 180.0,
        "unit": "ml",
        "aisle": "Pantry"
      },
      {
        "key": "lemongrass",
        "name": "lemongrass stalk",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "lime",
        "name": "lime",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Bruise lemongrass. Simmer with sliced ginger, coconut milk and 350 ml water for 10 minutes.",
      "Add sliced carrot and mushrooms and simmer until tender; remove lemongrass.",
      "Add prawns and spinach; cook until prawns are opaque and finish with lime. No fish sauce or shrimp paste."
    ],
    "allergens": [
      "Shellfish"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-37",
    "title": "Beef keema & cauliflower skillet",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Beef",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "beef",
        "name": "lean beef mince",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "peas",
        "name": "frozen peas",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garam",
        "name": "garam masala",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Soften onion and ginger; add mince and break it up while browning.",
      "Add spices, tomato and 100 ml water; simmer 10 minutes.",
      "Add finely chopped cauliflower and peas, cover and cook until tender and the mince reaches 71°C."
    ],
    "allergens": [],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-38",
    "title": "Lamb kofta & roast aubergine",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Lamb",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "lamb",
        "name": "lean lamb mince",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "aubergine",
        "name": "aubergine",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coriander",
        "name": "fresh coriander",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Roast diced aubergine with paprika and oil at 210°C for 25 minutes.",
      "Mix mince, grated squeezed onion, coriander, garlic and cumin. Shape six flat kofta.",
      "Pan-cook thoroughly to 71°C, turning several times. Serve with roasted aubergine and yogurt."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-39",
    "title": "Pepper beef & broccoli",
    "audience": "adult",
    "cuisine": "Southeast Asian-inspired",
    "protein": "Beef",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "steak",
        "name": "lean beef strips",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 400.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "soy",
        "name": "reduced-salt soy sauce",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      },
      {
        "key": "peppercorn",
        "name": "ground black pepper",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Steam broccoli for 4 minutes. Sear thin beef strips in a hot pan, then set aside.",
      "Cook sliced pepper, ginger and garlic; add broccoli, soy and 60 ml water.",
      "Return beef and cook through; for intact beef check 63°C and rest 3 minutes. Finish with black pepper."
    ],
    "allergens": [
      "Soy",
      "Wheat"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-40",
    "title": "Spiced beef-stuffed courgettes",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Beef",
    "minutes": 40,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "beef",
        "name": "lean beef mince",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 450.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "cinnamon",
        "name": "ground cinnamon",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Halve courgettes lengthways and scoop out some flesh. Bake shells at 200°C for 10 minutes.",
      "Brown mince with onion and garlic; add chopped courgette flesh, tomato, cumin and cinnamon.",
      "Fill shells and bake 20 minutes, checking the mince reaches 71°C."
    ],
    "allergens": [],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-41",
    "title": "Paneer tikka & vegetable tray",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Paneer",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "paneer",
        "name": "paneer",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garam",
        "name": "garam masala",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Heat oven to 210°C. Mix yogurt, spices, lemon and oil.",
      "Coat paneer cubes, cauliflower, peppers and onion in the mixture.",
      "Roast on a lined tray for 25–30 minutes, turning once, until vegetables are tender and paneer is browned."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-42",
    "title": "Palak paneer with roasted cauliflower",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Paneer",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "paneer",
        "name": "paneer",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "garam",
        "name": "garam masala",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Roast cauliflower at 210°C with oil for 25 minutes.",
      "Soften onion and garlic with spices, add tomato and reduce.",
      "Add spinach and a splash of water; wilt and roughly blend if desired. Fold in paneer cubes and simmer 5 minutes."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-43",
    "title": "Tofu & broccoli ginger stir-fry",
    "audience": "adult",
    "cuisine": "Southeast Asian-inspired",
    "protein": "Tofu",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "tofu",
        "name": "firm tofu",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "soy",
        "name": "reduced-salt soy sauce",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      },
      {
        "key": "lime",
        "name": "lime",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Pat tofu dry and cube it. Pan-fry in oil until golden.",
      "Steam broccoli and carrot until tender, then add to tofu with ginger and garlic.",
      "Add soy and a splash of water, toss over high heat and finish with lime."
    ],
    "allergens": [
      "Soy",
      "Wheat"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-44",
    "title": "Egg & lentil tomato curry",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Eggs",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "lentils",
        "name": "dry red lentils",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Rinse lentils and simmer in 300 ml water until soft, adding water if needed. Hard-boil eggs separately.",
      "Cook onion, garlic and spices; add tomatoes and simmer until thick.",
      "Add lentils and spinach, simmer 5 minutes, then nestle in peeled halved eggs. This pulse-based option has more carbohydrate than the other adult curries."
    ],
    "allergens": [
      "Egg"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-45",
    "title": "Paneer-stuffed mushrooms & broccoli",
    "audience": "adult",
    "cuisine": "Mediterranean",
    "protein": "Paneer",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "paneer",
        "name": "paneer",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "mushroom",
        "name": "mushrooms",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "garlic",
        "name": "garlic",
        "qty": 2.0,
        "unit": "cloves",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oregano",
        "name": "dried oregano",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 0.5,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Use large mushrooms, remove stems and finely chop them. Mix stems with crumbled paneer, tomato, garlic and oregano.",
      "Fill mushroom caps; arrange on a tray with broccoli, oil and paprika.",
      "Bake at 200°C for 25 minutes until mushrooms and broccoli are tender."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-46",
    "title": "Cauliflower chickpea egg roast",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Eggs",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 4.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cauli",
        "name": "cauliflower",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "chickpeas",
        "name": "cooked no-added-salt chickpeas, drained",
        "qty": 120.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Roast cauliflower, chickpeas and tomatoes with oil and spices at 210°C for 25 minutes.",
      "Hard-boil eggs, peel and quarter.",
      "Serve roast vegetables with eggs and lemon yogurt. Keep the chickpeas to the stated amount for a modest pulse portion."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-47",
    "title": "Coconut tofu & green bean curry",
    "audience": "adult",
    "cuisine": "South Indian",
    "protein": "Tofu",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "tofu",
        "name": "firm tofu",
        "qty": 350.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "beans",
        "name": "green beans",
        "qty": 300.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "coconutmilk",
        "name": "unsweetened coconut milk",
        "qty": 150.0,
        "unit": "ml",
        "aisle": "Pantry"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "ginger",
        "name": "fresh ginger",
        "qty": 10.0,
        "unit": "g",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "curry",
        "name": "curry leaves",
        "qty": 1.0,
        "unit": "sprigs",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Soften onion, ginger and curry leaves with turmeric.",
      "Add chopped beans, carrot, coconut milk and 150 ml water; simmer until tender.",
      "Add cubed tofu and simmer 5 minutes to heat through. Remove leaf stalks before serving."
    ],
    "allergens": [
      "Soy"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "adult-48",
    "title": "Warm lentil-paneer vegetable bowl",
    "audience": "adult",
    "cuisine": "Middle Eastern",
    "protein": "Paneer",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "lunch",
      "dinner"
    ],
    "ingredients": [
      {
        "key": "paneer",
        "name": "paneer",
        "qty": 220.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "lentils",
        "name": "dry red lentils",
        "qty": 70.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 250.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "pepper",
        "name": "bell peppers",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "paprika",
        "name": "paprika",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "lemon",
        "name": "lemon",
        "qty": 0.5,
        "unit": "each",
        "aisle": "Herbs & aromatics"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 2.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Simmer rinsed lentils in water until tender, then drain excess liquid.",
      "Roast courgette, pepper and paneer cubes with oil and spices at 210°C for 20–25 minutes.",
      "Combine with lentils and lemon yogurt. A moderate-carb, fibre-focused option for variety."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Adult portions: protein-centred and vegetable-heavy. Pulses and chickpea flour add carbohydrate as well as fibre; these are not calculated keto or macro plans. Add chilli or salt to your taste."
  },
  {
    "id": "child-01",
    "title": "Mini vegetable egg rice",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Eggs",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 2.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "rice",
        "name": "dry rice",
        "qty": 70.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "peas",
        "name": "frozen peas",
        "qty": 50.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Cook rice in water according to its packet. Finely grate carrot and courgette; cook until very soft.",
      "Add beaten eggs and stir until fully set. Lightly squash cooked peas.",
      "Combine with rice and a little oil; cool the serving to a comfortable eating temperature."
    ],
    "allergens": [
      "Egg"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-02",
    "title": "Soft chicken-potato vegetable stew",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Chicken",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "potato",
        "name": "potatoes",
        "qty": 180.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "peas",
        "name": "frozen peas",
        "qty": 50.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 30.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Dice potato and carrot small. Simmer with onion and 300 ml water until nearly soft.",
      "Add small chicken pieces and simmer until the chicken reaches 74°C.",
      "Shred chicken finely; lightly mash potato, vegetables and peas together with a teaspoon of oil and enough broth to stay moist."
    ],
    "allergens": [],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-03",
    "title": "Salmon, pea & potato mash",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Fish",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "salmon",
        "name": "boneless salmon",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "potato",
        "name": "potatoes",
        "qty": 200.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "peas",
        "name": "frozen peas",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "milk",
        "name": "whole milk",
        "qty": 50.0,
        "unit": "ml",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Boil potatoes until soft and cook peas until very tender.",
      "Steam or bake salmon to 63°C, remove skin and carefully check every flake for bones.",
      "Mash potato with milk, flatten peas and gently fold in finely flaked salmon. Keep a soft, moist texture."
    ],
    "allergens": [
      "Fish",
      "Milk"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-04",
    "title": "Creamy lentil vegetable pasta",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Lentils",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "lentils",
        "name": "dry red lentils",
        "qty": 40.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "pasta",
        "name": "dry pasta",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "cheese",
        "name": "grated cheese",
        "qty": 20.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Simmer lentils, finely grated carrot and chopped tomato with 250 ml water until soft, adding water as needed.",
      "Cook small pasta shapes until soft and cut larger pieces.",
      "Mix with the lentil sauce and cheese; loosen with cooking water. No extra salt is needed."
    ],
    "allergens": [
      "Milk",
      "Wheat"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-05",
    "title": "Soft egg & spinach potato cakes",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Eggs",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 2.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "potato",
        "name": "potatoes",
        "qty": 180.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "spinach",
        "name": "spinach",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "flour",
        "name": "plain wheat flour",
        "qty": 20.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Boil and mash potato. Cook spinach, squeeze lightly and chop finely.",
      "Mix potato, spinach, eggs and flour. Form small flat cakes.",
      "Pan-cook over low-medium heat until the egg is fully set throughout. Serve broken into soft pieces with yogurt."
    ],
    "allergens": [
      "Egg",
      "Milk",
      "Wheat"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-06",
    "title": "Mild chicken vegetable couscous",
    "audience": "child",
    "cuisine": "Middle Eastern",
    "protein": "Chicken",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "couscous",
        "name": "dry couscous",
        "qty": 70.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Cook small chicken pieces and finely diced vegetables with cumin and a splash of water until soft and chicken reaches 74°C.",
      "Prepare couscous with boiling water according to its packet.",
      "Shred chicken finely and mix with vegetables, couscous and yogurt for moisture."
    ],
    "allergens": [
      "Milk",
      "Wheat"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-07",
    "title": "Carrot-paneer mini adai",
    "audience": "child",
    "cuisine": "South Indian",
    "protein": "Paneer",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "paneer",
        "name": "paneer",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "besan",
        "name": "chickpea flour",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "egg",
        "name": "eggs",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.25,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Finely grate carrot and crumble paneer. Mix with chickpea flour, egg, cumin and enough water for a thick pancake batter.",
      "Rest 5 minutes. Cook small thin pancakes on low-medium heat for 3–4 minutes per side until fully set.",
      "Cut into manageable soft strips and serve with yogurt. These are savory, without added sugar."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-08",
    "title": "Vegetable khichdi with egg",
    "audience": "child",
    "cuisine": "South Indian",
    "protein": "Eggs",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "rice",
        "name": "dry rice",
        "qty": 50.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "lentils",
        "name": "dry red lentils",
        "qty": 40.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "egg",
        "name": "eggs",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.125,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Rinse rice and lentils. Simmer with finely diced vegetables, turmeric and 450 ml water until very soft; add water as needed.",
      "Hard-boil the egg and finely chop or mash it.",
      "Fold egg and a teaspoon of oil into the soft khichdi. Avoid a dry or sticky clump."
    ],
    "allergens": [
      "Egg"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-09",
    "title": "Mild fish tomato pasta",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Fish",
    "minutes": 30,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "fish",
        "name": "boneless cod or pollock",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "pasta",
        "name": "dry pasta",
        "qty": 70.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 180.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "courgette",
        "name": "courgettes",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 30.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Soften finely chopped onion and courgette, add tomato and simmer until soft.",
      "Add boneless fish and gently simmer to 63°C; check carefully for bones and flake finely.",
      "Cook pasta until soft, cut large pieces and mix with the sauce."
    ],
    "allergens": [
      "Fish",
      "Wheat"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-10",
    "title": "Soft beef & vegetable sauce with mash",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Beef",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "beef",
        "name": "lean beef mince",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "potato",
        "name": "potatoes",
        "qty": 180.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "milk",
        "name": "whole milk",
        "qty": 40.0,
        "unit": "ml",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "onion",
        "name": "onions",
        "qty": 30.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Brown mince with finely chopped onion; add grated carrot, tomato and 100 ml water.",
      "Simmer until vegetables are soft and mince reaches 71°C, breaking up all large clumps.",
      "Boil potato, mash with milk and serve with the moist mince sauce."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-11",
    "title": "Broccoli-cheese egg bites & sweet potato",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Eggs",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "egg",
        "name": "eggs",
        "qty": 2.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "broccoli",
        "name": "broccoli",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "cheese",
        "name": "grated cheese",
        "qty": 25.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "sweetpotato",
        "name": "sweet potatoes",
        "qty": 180.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "milk",
        "name": "whole milk",
        "qty": 30.0,
        "unit": "ml",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Steam broccoli and sweet potato until soft. Chop broccoli finely.",
      "Whisk eggs, milk and cheese, fold in broccoli and divide into greased mini muffin wells.",
      "Bake at 180°C for 15–20 minutes until set. Break into soft pieces and serve with mashed sweet potato."
    ],
    "allergens": [
      "Egg",
      "Milk"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-12",
    "title": "Mini idli with vegetable dal",
    "audience": "child",
    "cuisine": "South Indian",
    "protein": "Lentils",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "idlibatter",
        "name": "plain fermented idli batter",
        "qty": 160.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "lentils",
        "name": "dry red lentils",
        "qty": 40.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "turmeric",
        "name": "turmeric",
        "qty": 0.125,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Simmer lentils with finely diced carrot, tomato, turmeric and 250 ml water until soft; mash lightly.",
      "Steam mini idlis from the batter for 10–15 minutes or according to its instructions, until cooked through.",
      "Break idlis into soft pieces and moisten with dal. Check purchased batter for salt and allergens."
    ],
    "allergens": [],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-13",
    "title": "Chicken-carrot soft patties & mash",
    "audience": "child",
    "cuisine": "Kindergarten-style",
    "protein": "Chicken",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "chicken",
        "name": "boneless chicken",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Meat & seafood"
      },
      {
        "key": "potato",
        "name": "potatoes",
        "qty": 180.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "egg",
        "name": "eggs",
        "qty": 1.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "flour",
        "name": "plain wheat flour",
        "qty": 15.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Finely mince chicken and grate carrot. Mix with egg and flour; shape small flat patties.",
      "Pan-cook gently with a splash of water and a lid until the centres reach 74°C.",
      "Boil and mash potato. Cut patties into soft small pieces and serve with mash and cooking juices."
    ],
    "allergens": [
      "Egg",
      "Wheat"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-14",
    "title": "White bean tomato stew & soft pasta",
    "audience": "child",
    "cuisine": "Mediterranean",
    "protein": "Beans",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "whitebeans",
        "name": "cooked no-added-salt white beans, drained",
        "qty": 100.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "pasta",
        "name": "dry pasta",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "tomato",
        "name": "tomatoes",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "cheese",
        "name": "grated cheese",
        "qty": 20.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Simmer grated carrot and chopped tomato with 100 ml water until very soft.",
      "Add drained white beans and squash them gently into the sauce.",
      "Cook pasta until soft, cut larger shapes and mix in with cheese and a teaspoon of oil."
    ],
    "allergens": [
      "Milk",
      "Wheat"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-15",
    "title": "Savory semolina & egg vegetable bowl",
    "audience": "child",
    "cuisine": "South Indian",
    "protein": "Eggs",
    "minutes": 25,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "semolina",
        "name": "semolina",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "egg",
        "name": "eggs",
        "qty": 2.0,
        "unit": "each",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "carrot",
        "name": "carrots",
        "qty": 80.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "peas",
        "name": "frozen peas",
        "qty": 50.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "yogurt",
        "name": "plain Greek yogurt",
        "qty": 60.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Cook finely grated carrot and peas until soft; squash the peas.",
      "Add semolina and 250 ml water gradually, stirring over low heat until soft and cooked; add more water if needed.",
      "Stir in beaten eggs and cook until fully set. Loosen with yogurt off the heat."
    ],
    "allergens": [
      "Egg",
      "Milk",
      "Wheat"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  },
  {
    "id": "child-16",
    "title": "Pumpkin lentil rice with paneer",
    "audience": "child",
    "cuisine": "South Indian",
    "protein": "Paneer",
    "minutes": 35,
    "servings": 2,
    "slots": [
      "child"
    ],
    "ingredients": [
      {
        "key": "pumpkin",
        "name": "pumpkin",
        "qty": 150.0,
        "unit": "g",
        "aisle": "Vegetables"
      },
      {
        "key": "lentils",
        "name": "dry red lentils",
        "qty": 35.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "rice",
        "name": "dry rice",
        "qty": 50.0,
        "unit": "g",
        "aisle": "Pantry"
      },
      {
        "key": "paneer",
        "name": "paneer",
        "qty": 70.0,
        "unit": "g",
        "aisle": "Eggs & dairy"
      },
      {
        "key": "cumin",
        "name": "ground cumin",
        "qty": 0.125,
        "unit": "tsp",
        "aisle": "Spice cupboard"
      },
      {
        "key": "oil",
        "name": "olive or rapeseed oil",
        "qty": 1.0,
        "unit": "tsp",
        "aisle": "Pantry"
      }
    ],
    "steps": [
      "Simmer rinsed rice, lentils, small pumpkin pieces and cumin with 400 ml water until very soft.",
      "Finely crumble paneer into the pot and simmer 3 minutes.",
      "Mash to your child’s familiar texture and add a teaspoon of oil; keep it moist and easy to eat."
    ],
    "allergens": [
      "Milk"
    ],
    "note": "Two small lunch portions; appetite varies. This is a balanced toddler lunch, not a low-carb meal. No added salt, sugar or chilli. Use only ingredients already tolerated; adjust texture to your child and supervise eating."
  }
];
