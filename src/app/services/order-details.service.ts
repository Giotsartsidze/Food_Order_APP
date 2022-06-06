import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Pasta",
      foodDetails:"Pasta with tomaots",
      foodPrice:20,
      foodImg:"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?cs=srgb&dl=pexels-lisa-fotios-1279330.jpg&fm=jpg"
    },
    {
      id:2,
      foodName:"Pizza",
      foodDetails:"Pizza with Mozarela",
      foodPrice:18,
      foodImg:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?cs=srgb&dl=pexels-pixabay-315755.jpg&fm=jpg"
    },
    {
      id:3,
      foodName:"Salad",
      foodDetails:"Salad of tomatos",
      foodPrice:22,
      foodImg:"https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?cs=srgb&dl=pexels-julie-aagaard-2097090.jpg&fm=jpg"
    },
    {
      id:4,
      foodName:"Cockies",
      foodDetails:"Yammi Cokkies",
      foodPrice:11,
      foodImg:"https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?cs=srgb&dl=pexels-brigitte-tohm-239581.jpg&fm=jpg"
    },
    {
      id:5,
      foodName:"Becon",
      foodDetails:"Tasty Bacon Rolls",
      foodPrice:200,
      foodImg:"https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?cs=srgb&dl=pexels-pixabay-416471.jpg&fm=jpg"
    },
    {
      id:6,
      foodName:"Burger",
      foodDetails:"MMM the King Burger",
      foodPrice:32,
      foodImg:"https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?cs=srgb&dl=pexels-jonathan-borba-2983101.jpg&fm=jpg"
    }

  ]
}
