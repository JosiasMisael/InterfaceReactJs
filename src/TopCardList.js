import React from 'react'
import Card from './Card'
const TopCardList = () => {

  const cardList =[
    { 
      id:1,
      card:'card facebook',
      name: '@Josias',
      image: 'images/icon-facebook.svg',
      followNumber: '1483'
    },
    { id:2,
      name: '@Carlos',
      card:'card twitter',
      image: 'images/icon-twitter.svg',
      followNumber: '28k'
      
    },
    {
      id: 3,
      name: '@Moises',
      card:'card instagram',
      image: 'images/icon-instagram.svg',
      followNumber: '6k'
      
    },
    {
      id: 4,
      name: '@HD',
      card:'card card youtube',
      image: 'images/icon-youtube.svg',
      followNumber: '12k'
    }
  ];
    return (
  <>
    <section className="top-cards">
    <div className="wrapper">
      <div className="grid">
      {
         cardList.map(({ id, name, card, image, followNumber }) =><Card key={ id} card={ card} name={ name} image={image} followNumber={ followNumber} />)
      }
      </div>
    </div>
  </section>  
</>
    );
}

export default TopCardList
