import React from 'react';

function Food({ name, picture }) {
  // console.log(props.fav);
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} style={{width: 300, height: 300}}/>
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    name: "Samgyeopsal",
    image: "https://koreana.or.kr/resource/image/sub/2017_spring/life6-1.png"
  },
  {
    name: "Bibimbap",
    image: "http://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg"
  },
  {
    name: "Donkatsu",
    image: "https://www.koreatripguide.com/wp-content/uploads/2018/01/korean_donkatsu_with_salad-e1515117505943.jpg"
  },
  {
    name: "Kimbap",
    image: "https://www.thespruceeats.com/thmb/aPsmbaRgCtFLUTUFGXZBIAW93H8=/3797x2848/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
