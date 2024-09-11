
import Expensive from "../assets/expensive.jpg";
import multiple from  "../assets/multiplePizzas.jpeg";
import Pineapple from "../assets/pineapple.jpg";
import PizzaHutSpecial from "../assets/pedrotechspecial.jpg";
import Margherita from "../assets/margherita.jpg";
import  Vegan from "../assets/vegan.jpg";

export const MenuList = [
    {
        name: "Italian Pizza",
        image: multiple,
        price:200 ,
      },
      {
        name: "Margherita Pizza",
        image: Margherita,
        price: 150,
      },
      {
        name: " Special Pizza",
        image: PizzaHutSpecial,
        price: 160  ,
      },
      {
        name: "Vegan Pizza",
        image: Vegan,
        price:  100 ,
      },
      {
        name: "Pineapple Pizza",
        image: Pineapple,
        price:  105 ,
      },
      {
        name: "Very Expensive Pizza",
        image: Expensive,
        price: "210 ",
      },
    ];