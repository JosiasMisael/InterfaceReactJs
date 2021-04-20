import React from 'react'
import CardSmall from './CardSmall';
//import PropTypes from 'prop-types'

const Overview = () => {
   const listCardSmall = [
        {
            id:1,
            name:'Page Views',
            icon: 'images/icon-facebook.svg',
            number:'87',
            porcent:'3%',
            color: '',
            state: 'up'
        },
        {
            id:2,
            name:'Page Views',
            icon: 'images/icon-facebook.svg',
            number:'52',
            porcent:'2%',
            color: 'is-danger',
            state: 'down'
        },
        {
            id:3,
            name:'Page Views',
            icon: 'images/icon-instagram.svg',
            number:'5462',
            porcent:'2257%',
            color: '',
            state: 'up'
        },
        {
            id:4,
            name:'Profile Views',
            icon: 'images/icon-instagram.svg',
            number:'52k',
            porcent:'1375%',
            color: '',
            state: 'up'
        },
        {
            id:5,
            name:'Retweets',
            icon: 'images/icon-twitter.svg',
            number:'117',
            porcent:'303%',
            color: '',
            state: 'up'
        },
        {
            id:6,
            name:'Likes',
            icon: 'images/icon-twitter.svg',
            number:'507',
            porcent:'553%',
            color: '',
            state: 'up'
        },
        {
            id:7,
            name:'Likes',
            icon: 'images/icon-youtube.svg',
            number:'107',
            porcent:'19%',
            color: 'is-danger',
            state: 'down'
        },
        {
            id:8,
            name:'Total Views',
            icon: 'images/icon-youtube.svg',
            number:'1407',
            porcent:'12%',
            color: 'is-danger',
            state: 'down'
        },
    ];
    return (
<>        
  <section className="overview">
    <div className="wrapper">
      <h2>Overview - Today</h2>
      <div className="grid">
       {
           listCardSmall.map(({id, name, icon, number, porcent, color, state})=><CardSmall key={id} name={name} icon={icon} number={number} porcent={porcent} color={color} state={state} />)
       }
      </div>
    </div>
  </section>
</>
    )
}

export default Overview
