import React from 'react'
//import PropTypes from 'prop-types'

const Card = ({card, image, followNumber, name}) => {
    return (
        <>
           <article className={card}>
          <p className="card-title">
            <img src={image} alt=""/>
            {name}
          </p>
          <p className="card-followers">
            <span className="card-followers-number">{followNumber}</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article> 
        </>
    )
}

Card.propTypes = {

}

export default Card
