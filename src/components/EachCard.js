import React from 'react'
import { PersonCard, BackBtn, StyeldLink } from './styledComp'

const EachCard = ({ detail }) =>{
  let src = `https://www.youtube.com/embed/${detail.embed}`
  let border = `2px solid ${detail.color}`

  return <>
    <PersonCard>
      {detail.embed ? <iframe style={{width: "83%", height: "100%", border: border}} src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={detail.imgSrc} alt="선수 이미지"></img>}
      <p style={{margin: "40px 0", color: "#fff", fontWeight: "bold", fontSize: 24}}>대한민국의 리그 오브 레전드 프로게이머 LCK의 {detail.team} 소속 {detail.line} 라이너</p>
    </PersonCard>
    <BackBtn><StyeldLink to={"/"}>HOME</StyeldLink></BackBtn>
  </>
}

export default EachCard