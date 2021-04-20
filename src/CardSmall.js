import React from 'react'
//import PropTypes from 'prop-types'

const CardSmall = ({name, icon, number, porcent, color, state }) => {
  const colorFull = `card-small-percentage ${color}`
  const stateFull = `images/icon-${state}.svg`
    return (
        <>
        <div className="card-small">
          <p className="card-small-views">{name}</p>
          <p className="card-small-icon">
            <img src={icon} alt=""/>
          </p>
          <p className="card-small-number">{number}</p>
          <p className={colorFull}>
            <span>
              <img src={stateFull} alt=""/>
              {porcent}
            </span>
          </p>
        </div>  
        </>
    )
}

CardSmall.propTypes = {

}

export default CardSmall
