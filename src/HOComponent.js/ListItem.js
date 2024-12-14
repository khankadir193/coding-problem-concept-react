import React from 'react'

function ListItem({item}) {
  return (
    <div>
      <h1>{`My ID: ${item.id} and my name is ${item.Name}`}</h1>
    </div>
  )
}

export default ListItem