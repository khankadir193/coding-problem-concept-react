import React from 'react'
import ListItem from './ListItem'

function HOC({data}) {

    return (
        <>
        {
            data.map((item) => {
                return <ListItem key={item.id} item={item}/>
            })

        }
        </>
    )
}
export default HOC