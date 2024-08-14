const menu = [
    {
      id: 301,
      name: "Pasta",
      category: "Main Course",
      price: 12.99,
      ingredients: ["Penne", "Tomato Sauce", "Parmesan", "Basil"],
    },
    {
      id: 302,
      name: "Caesar Salad",
      category: "Salad",
      price: 8.99,
      ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
    },
    {
      id: 303,
      name: "Burger",
      category: "Main Course",
      price: 10.99,
      ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun"],
    },
    {
      id: 304,
      name: "French Fries",
      category: "Side Dish",
      price: 4.99,
      ingredients: ["Potatoes", "Salt", "Oil"],
    },
    {
      id: 305,
      name: "Cheesecake",
      category: "Dessert",
      price: 6.99,
      ingredients: ["Cream Cheese", "Graham Cracker Crust", "Strawberries"],
    },
  ];
  
  console.log("question 1");
  /**********
        Question 1:
        You have a function getMenuItemName(menuItem) that:
        - receives a menu item object
        - returns the name of the menu item
        Don't forget to uncomment the console.log
        ===
        ANSWER: Pasta
  **********/
  
  function getMenuItemName(menuItem) {
    // Your code here
    return menuItem.name;
  };
  console.log(getMenuItemName(menu[0]));
  
  console.log("question 2");
  /**********
        Question 2:
        You have a function isMenuItemInCategory(menuItem, category) that:
        - receives a menu item object
        - receives a category name
        - returns true if the menu item's category matches the provided category name, otherwise returns false
        ===
        ANSWER: true
  **********/
  
  function isMenuItemInCategory(menuItem, category) {
    // Your code here
    if (menuItem.category == category) { 
        return (true);       
    } else {
        return (false);
    }
    
  };
  console.log(isMenuItemInCategory(menu[1], "Salad"));



  console.log("question 3");
  /**********
        Question 3:
        addMenuItem(menu, menuItem):
        - receives an array of menu item objects
        - receives a new menu item object (with id, name, category, price, and ingredients)
        - adds the new menu item to the array
        - returns the updated array
        ===
        ANSWER: 
        [
          {
              id: 301,
              name: 'Pasta',
              category: 'Main Course',
              price: 12.99,
              ingredients: [ 'Penne', 'Tomato Sauce', 'Parmesan', 'Basil' ]
          },
          {
              id: 302,
              name: 'Caesar Salad',
              category: 'Salad',
              price: 8.99,
              ingredients: [ 'Lettuce', 'Croutons', 'Caesar Dressing', 'Parmesan' ]
          },
          {
              id: 303,
              name: 'Burger',
              category: 'Main Course',
              price: 10.99,
              ingredients: [ 'Beef Patty', 'Lettuce', 'Tomato', 'Cheese', 'Bun' ]
          },
          {
              id: 304,
              name: 'French Fries',
              category: 'Side Dish',
              price: 4.99,
              ingredients: [ 'Potatoes', 'Salt', 'Oil' ]
          },
          {
              id: 305,
              name: 'Cheesecake',
              category: 'Dessert',
              price: 6.99,
              ingredients: [ 'Cream Cheese', 'Graham Cracker Crust', 'Strawberries' ]
          },
          {
              id: 306,
              name: 'Pizza',
              category: 'Main Course',
              price: 14.99,
              ingredients: [ 'Dough', 'Tomato Sauce', 'Mozzarella', 'Pepperoni' ]
          }
        ]
  **********/
  
  function addMenuItem(menu, menuItem) {
    // Your code here
    menu.push(menuItem);
    return menu
  }
  
  const newMenuItem = {
    id: 306,
    name: "Pizza",
    category: "Main Course",
    price: 14.99,
    ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
  };
  
  console.log(addMenuItem(menu, newMenuItem));

  
  console.log("question 4");
  /**********
        Question 4:
        countMainCourseItems(menu):
        - receives an array of menu item objects
        - returns the number of items in the "Main Course" category
        ===
        ANSWER: 3
  **********/
  
  function countMainCourseItems(menu) {
    // Your code here
    let count = 0
    menu.forEach( (x)=> {
        if(x.category == "Main Course") {
            count = count +1;
        }
    });
    return count;
    
  }
  console.log(countMainCourseItems(menu));

  console.log("question 5");
  /**********
        Question 5: 🌶️
        listMenuItemNamesByCategory(menu, category):
        - receives an array of menu item objects
        - receives a category name
        - returns an array of menu item names that belong to the specified category
        ===
        ANSWER: ["Pasta", "Burger", "Pizza"]
  **********/
  
  function listMenuItemNamesByCategory(menu, category) {
    // Your code here
    let count = []
    menu.forEach( (x)=> {
        if(x.category == category) {
            count.push(x.name);
            
        }
    });
    return count;

  }
  console.log(listMenuItemNamesByCategory(menu, "Main Course"));





  console.log("question 6");
  /**********
      Question 6: 🌶️🌶️
      You have a function getCheapestMenuItem(menu) that:
      - receives an array of menu item objects
      - returns the menu item object with the lowest price
      ===
      ANSWER: 
      {
        "id": 304,
        "name": "French Fries",
        "category": "Side Dish",
        "price": 4.99,
        "ingredients": ["Potatoes", "Salt", "Oil"]
      }
  **********/
  
  function getCheapestMenuItem(menu) {
    // Your code here
    let min = menu[0];
    
    menu.forEach( (menu)=>{
    if (min.price > menu.price) {
        min = menu;
    }
    });
    return min
  }
  console.log(getCheapestMenuItem(menu));


  

  console.log("question 7");
  /**********
        Question 7: 🌶️🌶️🌶️
        getMenuItemsByIngredient(menu, ingredient):
        - receives an array of menu item objects
        - receives an ingredient name (string)
        - returns an array of menu item objects that contain the provided ingredient
        ===
        ANSWER: 
        [
          {
            "id": 301,
            "name": "Pasta",
            "category": "Main Course",
            "price": 12.99,
            "ingredients": ["Penne", "Tomato Sauce", "Parmesan", "Basil"]
          },
          {
            "id": 302,
            "name": "Caesar Salad",
            "category": "Salad",
            "price": 8.99,
            "ingredients": ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"]
          }
        ]
    **********/
  
  function getMenuItemsByIngredient(menu, ingredient) {
    // Your code here
    return menu.filter((item)=>{
        return item.ingredients.some( (ingr) => {
            if (ingr == ingredient ) {
                return true;
            } else {
                return false;
            }
    
        });
     });
  }
  console.log(getMenuItemsByIngredient(menu, "Parmesan"));

  

console.log("question 8");
  /**********
        Question 8:
        You have a function removeMenuItemById(menu, menuItemId) that:
        - receives an array of menu objects
        - receives a menu item id (number)
        - removes the product with the matching id from the array
        - returns the updated array
        ===
        ANSWER: 
        [
      {
        id: 301,
        name: 'Pasta',
        category: 'Main Course',
        price: 12.99,
        ingredients: [ 'Penne', 'Tomato Sauce', 'Parmesan', 'Basil' ]
      },
      {
        id: 303,
        name: 'Burger',
        category: 'Main Course',
        price: 10.99,
        ingredients: [ 'Beef Patty', 'Lettuce', 'Tomato', 'Cheese', 'Bun' ]
      },
      {
        id: 304,
        name: 'French Fries',
        category: 'Side Dish',
        price: 4.99,
        ingredients: [ 'Potatoes', 'Salt', 'Oil' ]
      },
      {
        id: 305,
        name: 'Cheesecake',
        category: 'Dessert',
        price: 6.99,
        ingredients: [ 'Cream Cheese', 'Graham Cracker Crust', 'Strawberries' ]
      },
      {
        id: 306,
        name: 'Pizza',
        category: 'Main Course',
        price: 14.99,
        ingredients: [ 'Dough', 'Tomato Sauce', 'Mozzarella', 'Pepperoni' ]
      }
    ]
   **********/
  
  function removeMenuItemById(menu, menuItemId) {
    // Your code here
    let res = menu.filter((menu)=>{
        if (menu.id == menuItemId){
            return false;
        } else {
            return true;
        }
    });
    return res;
  }
    console.log(removeMenuItemById(menu, 302));
