import React, { useState, useEffect } from 'react';

export const Detail = (props) => {
  const [details, setDetail] = useState()

  useEffect(() => {
    // please use Axios to fetch the data
    fetch(props.url) // don't pass url as a props, you are more likely to pass id 
      .then(response => response.json())
      .then(json => {
        setDetail(json)
      })
  }, [props])
  
  return (
    <div>
      <h1>{props.name}</h1>
      {details && <img src={details.sprites.front_default} alt="pokemon" />}
    </div>
  )
}

