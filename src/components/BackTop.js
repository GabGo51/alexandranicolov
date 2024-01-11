import React from 'react'


const BackTop = () => {
  
  
  return (
    <button className='back-top'
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        retour en haut
      </button>
  )
}

export default BackTop