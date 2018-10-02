import React from 'react'

const Selector = (props) => {
  const options = props.pockemons.map((pockemon, index)=>{
    return <option value={index} key={index}>{pockemon.name}</option>
  })

  function handleChange(event) {
    props.onPockemonSelected(event.target.value);
  }

  return (
    <select id="pockemon-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Tacke a pockemon..</option>
      {options}
    </select>
  )
}



export default Selector;
