import React from 'react'

export default function TDT_FuncDemo(props) {
  return (
    <div>
        <hr/>
        <h2>Function Component </h2>
        <h3>su dung thuoc tinh props </h3>
        <p>usersName:{props.usersName}</p>
        <p>fullNameName:{props.fullName}</p> 
        <p>age:{props.age}</p>
    </div>
  )
}
