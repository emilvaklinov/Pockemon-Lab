import React from 'react';

const Detail = (props) => {
  if (!props.pockemon) return null;
  return (
    <React.Fragment>
      <h3>{props.pockemon.name}</h3>
      <p></p>
      <p></p>
    </React.Fragment>
  )
}

export default Detail;
