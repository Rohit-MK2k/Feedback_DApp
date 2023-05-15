import React from 'react'

function Rating({value, isSelect, handleSelect}) {
  return (
    <li>
      <input type="radio" name={value} id={value} value = {value} onChange={(e)=>handleSelect(e.currentTarget.value)} checked = {value === isSelect}/>
      <label htmlFor={value}>{value}</label>    
    </li>
  )
}

export default Rating