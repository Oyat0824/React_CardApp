import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Line, Image, Desc } from './styledComp'

const Cards = ({ content }) => {
  return <>
    <Item>
      <Line linePath={content.linePath} />
      <Link to={content.path}>
        <Image imagePath={content.imagePath} />
      </Link>
      <Desc color={content.detail.color}>
        <p style={{textAlign:'center', fontSize: 18}}>{content.nick}</p>
        <h1 style={{textAlign:'center'}}>{content.name}</h1>
      </Desc>
    </Item>
  </>
}

export default Cards;