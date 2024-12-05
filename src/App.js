import React from "react";

function Food({name, picture}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture}/>
    </div>
  );
}

const foodILike = [
  {
    name:'Kimchi',
    image:'https://cicili.tv/wp-content/uploads/2022/07/Traditional-Kimchi-1-scaled.jpeg',
  },
  {
    name:'Samgyeopsal',
    image:'https://www.wandercooks.com/wp-content/uploads/2024/09/korean-bbq-pork-belly-5-480x270.jpg',
  }
];

function App() {
  return(
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}
export default App;