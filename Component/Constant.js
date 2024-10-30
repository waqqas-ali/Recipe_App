export const colors = {
    COLOR_PRIMARY: "#f96163",
    COLOR_LIGHT: "#fff",
    COLOR_DARK: "#000",
    COLOR_DARK_ALT: "#262626"
};
export const data = [
    {
        id: 1,
        categories: "Breakfast"
    },
    {
        id: 2,
        categories: "Lunch"
    },
    {
        id: 3,
        categories: "Dinner"
    },
    {
        id: 4,
        categories: "Asian"
    },
    {
        id: 5,
        categories: "Italian"
    },
    {
        id: 6,
        categories: "Desserts"
    },
    {
        id: 7,
        categories: "Vegetarian"
    },
    {
        id: 8,
        categories: "Seafood"
    }
];
export const food = [
    {
        id: 1,
        name: "Oatmeal",
        image: require("../assets/images/Oatmeal.png"),
        rating: "4.5",
        description: "Oatmeal is made by stewing oats in a heated liquid such as milk or water, and it may be sweetened, most commonly with brown sugar, and garnished with cream, fresh or dried fruits, nuts or nut butters, seeds, and spices, including cinnamon.",
        ingredients: [
            "3 ½ cups plain or vanilla soy milk",
            "¼ teaspoon salt",
            "2 cups rolled oats",
            "¼ cup pure maple syrup",
            "⅓ cup raisins",
            "⅓ cup dried cranberries",
            "⅓ cup sweetened flaked coconut",
            "⅓ cup chopped walnuts⅓ cup chopped walnuts",
            "1 (8 ounce) container plain yogurt (Optional)",
            "3 tablespoons honey (Optional)"
        ],
        directions : [
            "Pour the milk and salt into a saucepan, and bring to a boil. Stir in the oats, maple syrup, raisins, and cranberries. Return to a boil, then reduce heat to medium. Cook for 5 minutes. Stir in walnuts and coconut, and let stand until it reaches your desired thickness. Spoon into serving bowls, and top with yogurt and honey, if desired."
        ],
        time: "10 mins",
        difficulty: "Easy",
        calories: "68"
    },
    {
        id: 2,
        name: "Soup",
        image: require("../assets/images/Soup.png"),
        rating: "3.6",
        description: "This hearty split pea soup with ham has a slightly sweet, somewhat salty, and subtle smoky flavor. An ideal fall or winter soup — great for lunch or dinner.",
        ingredients: [
            "2 tablespoons butter",
            "2 ribs celery, diced",
            "½ onion, diced",
            "3 cloves garlic, sliced",
            "1 pound dried split peas, rinsed",
            "1 pound ham, diced",
            "1 bay leaf",
            "1 quart chicken stock",
            "2 ½ cups water",
            "salt and ground black pepper to taste"
        ],
        directions : [
            "Melt butter in a large soup pot over medium-low heat. Stir in celery, onion, and sliced garlic; cook and stir until onions are translucent but not brown, 5 to 8 minutes",
            "Stir in split peas, ham, and bay leaf. Pour in chicken stock and water; stir to combine and simmer until peas are tender and soup has thickened, about 1 hour and 15 minutes. Stir occasionally. Season with salt and black pepper to serve."
        ],
        time: "20 mins",
        difficulty: "Medium",
        calories: "159"
    },
    {
        id: 3,
        name: "Briyani",
        image: require("../assets/images/Briyani.png"),
        rating: "9.5",
        description : "Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat (chicken, goat, lamb, beef, prawn, or fish) and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables or paneer for the meat. Sometimes eggs or potatoes are also added.",
        ingredients: [
            "Rice: Long-grain rice like basmati is commonly used.",
            "Meat or vegetables: Chicken, beef, or lamb are common meats, while vegetables can also be used.",
            "Spices: Common spices include cloves, bay leaves, cardamom, cinnamon, coriander, fennel seeds, ginger, nutmeg, mace, pepper, star anise, turmeric, and cloves.",
            "Aromatics: Onions and garlic are common aromatics.",
            "Other ingredients: Mint leaves, ghee (clarified butter), saffron (kesar), fried onions, Kewra water, and rose water can also be added to improve the flavor, texture, and smell.",
            "Water: The amount of water used is important, as too little can be added later while cooking, but too much can make the dish mushy.",
        ],
        directions : [
            "Put the boiling water in a saucepan, add the washed rice, boil for 5 minutes and drain. Layer the chicken mixture with the rice starting with the rice then the chicken mixture and repeat this twice. Garnish with cumin seeds, and ginger. Lower the heat and simmer for a further 10 minutes."
        ],
        time: "45 mins",
        difficulty: "Hard",
        calories: "271"
    },
    {
        id: 4,
        name: "Sushi",
        image: require("../assets/images/Sushi.png"),
        rating: "9.4",
        description : "Sushi is a popular Japanese dish made from seasoned rice with fish, egg, or vegetables. A sushi roll is shaped inside a thin sheet of seaweed. Sushi comes from a Japanese word meaning sour rice, and it's the rice that's at the heart of sushi, even though most Americans think of it as raw fish.",
        ingredients: [
            "2 cups Japanese sushi rice",
            "6 tablespoons rice wine vinegar",
            "6 sheets nori (dry seaweed)", 
            "2 tablespoons wasabi paste",
            "8 ounces smoked salmon, cut into long strips",
            "1 cucumber, peeled and sliced",
            "1 avocado - peeled, pitted and sliced"
        ],
        directions : [
            "Soak rice for 4 hours. Drain rice and cook in a rice cooker with 2 cups of water. Rice must be slightly dry as vinegar will be added later.",
            "Immediately after rice is cooked, mix in rice wine vinegar; spread rice on a plate until completely cool",
            "Place 1 sheet of seaweed on a bamboo mat; press a thin layer of cool rice on seaweed, leaving at least a 1/2 inch top and bottom edge of the seaweed uncovered. This is for easier sealing later. Dot some wasabi on rice; arrange smoked salmon, cucumber, and avocado on rice about 1 inch away from the bottom edge of seaweed.",
            "Slightly wet the top edge of seaweed; roll up tightly from the bottom to the top edge with the help of the bamboo mat. Cut salmon roll into 8 equal pieces and serve. Repeat for other rolls."
        ],
        time: "10 mins",
        difficulty: "Hard",
        calories: "190"
    },
    {
        id: 5,
        name: "Lasagna",
        image: require("../assets/images/Lasagna.png"),
        rating: "9.3",
        description : 'When John Chandler submitted this lasagna recipe to Allrecipes more than 20 years ago, he had no idea how successful it would become. One of our top-performing recipes of all time, World,s Best Lasagna racks up more than 7 million views per year and has ranked among the most popular lasagna recipes on the internet for two decades. Unfortunately, John unexpectedly passed away at 53 years old — read all about his life and legacy here.Make our most popular lasagna today to find out what all the fuss is about!',
        ingredients: [
            "1 pound sweet Italian sausage",
            "¾ pound lean ground beef",
            "½ cup minced onion",
            "2 cloves garlic, crushed",
            "1 (28 ounce) can crushed tomatoes",
            "2 (6.5 ounce) cans canned tomato sauce",
            "2 (6 ounce) cans tomato paste",
            "½ cup water",
            "2 tablespoons white sugar",
            "4 tablespoons chopped fresh parsley, divided",
            "1 ½ teaspoons dried basil leaves",
            "1 ½ teaspoons salt, divided, or to taste",
            "1 teaspoon Italian seasoning",
            "½ teaspoon fennel seeds",
            "¼ teaspoon ground black pepper",
            "12 lasagna noodles",
            "16 ounces ricotta cheese",
            "1 egg",
            "¾ pound mozzarella cheese, sliced",
            "¾ cup grated Parmesan cheese"
        ],
        directions : [
            "Gather all your ingredients.",
            "Cook sausage, ground beef, onion, and garlic in a Dutch oven over medium heat until well browned.",
            "Stir in crushed tomatoes, tomato sauce, tomato paste, and water. Season with sugar, 2 tablespoons parsley, basil, 1 teaspoon salt, Italian seasoning, fennel seeds, and pepper. Simmer, covered, for about 1 ½ hours, stirring occasionally.",
            'Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water.',
            "In a mixing bowl, combine ricotta cheese with egg, remaining 2 tablespoons parsley, and 1/2 teaspoon salt.",
            "Preheat the oven to 375 degrees F (190 degrees C).",
            "To assemble, spread 1 ½ cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce, overlapping slightly. Spread with 1/2 of the ricotta cheese mixture. Top with 1/3 of the mozzarella cheese slices. Spoon 1 ½ cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese.",
            "Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray or make sure the foil does not touch the cheese.",
            "Bake in the preheated oven for 25 minutes. Remove the foil and bake for an additional 25 minutes.",
            "Rest lasagna for 15 minutes before serving.",
        ],
        time: "50 mins",
        difficulty: "Hard",
        calories: "135"
    },
    {
        id: 6,
        name: "Brownies",
        image: require("../assets/images/Brownies.png"),
        rating: "9.7",
        description : 'This brownie recipe makes rich, fudgy brownies that always turn out well. They re topped with homemade chocolate frosting to make the best brownies ever!',
        ingredients: [
            "½ cup butter",
            "1 cup white sugar",
            "2 eggs",
            "1 teaspoon vanilla extract",
            "⅓ cup unsweetened cocoa powder",
            "½ cup all-purpose flour",
            "¼ teaspoon salt",
            "¼ teaspoon baking powder",
            "3 tablespoons butter, softened",
            "3 tablespoons unsweetened cocoa powder",
            "1 tablespoon honey",
            "1 teaspoon vanilla extract",
            "1 cup confectioners' sugar"
        ],
        directions : [
            "Preheat the oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan.",
            "Melt 1/2 cup butter in a large saucepan. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, flour, salt, and baking powder. Spread batter into prepared pan.",
            "Bake in the preheated oven until top is dry and edges have started to pull away from the sides of the pan, about 25 to 30 minutes. Let cool briefly before frosting.",
            "To make the frosting: Combine softened butter, confectioners' sugar, 3 tablespoons cocoa, honey, and 1 teaspoon vanilla extract in a bowl. Stir until smooth. Frost brownies while they are still warm.",
        ],
        time: "50 mins",
        difficulty: "Hard",
        calories: "135"
    },
    {
        id: 7,
        name: "Samosa",
        image: require("../assets/images/Samosa.png"),
        rating: "9.8",
        description : "A samosa from the Persian word Sambosag is a fried South Asian and West Asian snack. It is a pastry with a savory filling, mostly vegetables, spiced potatoes, onions, peas, also meat, or fish. It is made into different shapes, including triangular, cone, or crescent, depending on the region.",
        ingredients: [
            "2 cup all purpose flour",
            "1 teaspoon cumin seeds",
            "1 teaspoon crushed ginger",
            "1 teaspoon raisins",
            "5 boiled potato",
            "1 teaspoon coriander powder",
            "1 teaspoon red chilli powder",
            "1 teaspoon kasoori methi leaves",
            "1 teaspoon carom seeds",
            "1/4 cup water",
            "2 cup virgin olive oil",
            "1/2 teaspoon coriander seeds",
            "1 teaspoon green chilli",
            "1 teaspoon cashews",
            "1 teaspoon cumin powder",
            "1/2 teaspoon garam masala powder salt as required",
            "1 teaspoon coriander leaves",
            "2 tablespoon ghee",
            "1 handful raw peanuts"
        ],
        directions : [
            "To make delicious samosas at home, first, make the filling. Put a pan on medium flame and add 2 tsp olive oil in it. Once the oil is hot enough, add cumin seeds and allow them to crackle.",
            "Add spices and boiled potatoes and cook for a while Now, add whole coriander seeds, ginger and green chilli. Saute for a minute and then add chopped cashews and raisins, peanuts if you like them, boiled and mashed potatoes, cumin powder, coriander powder, garam masala powder, red chilli powder, salt to taste, kasoori methi leaves, coriander leaves. Mix well and saute for 2 minutes. Your stuffing is ready!",
            "Prepare the dough for the Samosa Now, to prepare the dough, take a mixing bowl and combine all-purpose flour along with carom seeds and salt. Mix and then add ghee and start kneading by adding a little water at a time. Ensure that you add water gradually and make a firm dough. A soft dough will not make your samosas crispy. Cover the dough with a damp muslin cloth and keep aside for about half an hour.",
            "Roll the dough in small puris and cut into half Once done, roll out few small-sized balls from the dough. Flatten them further with the help of your palms and then with a rolling pin. Give them a round shape and cut in half. Now dip your hands in water, fold the edges of the semi-circle in order to give it a cone shape.",
            "Fill the semi-circle with potato filling and deep fry Take the filling with the help of a spoon and stuff it in the cone. Seal the ends properly by pressing the edges lightly with your fingers. Then, heat olive oil in a pan and deep fry the samosas on low heat until they turn golden brown and crispy. Serve with tomato ketchup and green chutney. Enjoy it as a tea-time snack!",
        ],
        time: "12 mins",
        difficulty: "Hard",
        calories: "130"
    },
    // {
    //     id : 8,
    //     name : "Cajun Seafood Pasta",
    //     image : require()

    // }
]