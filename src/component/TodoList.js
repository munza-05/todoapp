import React from 'react'

const Todolist = (props) => {
  return (
    <div >
      <li className="list-item">
       {props.item}
       <span className="icons">
       <i className="fa-solid fa-trash-can icon-delete" onClick={()=>{
        props.deleteItem(props.index)
       }}></i>
       </span>
      </li>
    </div>
  )
}

export default Todolist
