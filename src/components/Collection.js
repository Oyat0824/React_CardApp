import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Menus from './Menus'
import Cards from './Cards'
import EachCard from './EachCard'
import { Items } from './styledComp'
import { contents } from '../utils/contents'

const Collection = () => {
  // 팀, 라인, 텍스트 상태 관리
  const [team, setTeam] = useState("ALL")
  const [line, setLine] = useState("ALL")
  const [text, setText] = useState("")

  // 필터를 통해 해당 팀 상태에 따른 새로운 배열 출력
  const filter_01 = contents.filter((item) => {
    if (team === "T1") {
      return item.detail.team === "T1"
    } else if (team === "GenG") {
      return item.detail.team === "GenG"
    } else if (team === "DWG") {
      return item.detail.team === "DWG"
    } else if (team === "KWANGDONG") {
      return item.detail.team === "KWANGDONG"
    } else if (team === "Fredit") {
      return item.detail.team === "Fredit"
    } else if (team === "KT") {
      return item.detail.team === "KT"
    } else if (team === "NongShim") {
      return item.detail.team === "NongShim"
    } else if (team === "SANDBOX") {
      return item.detail.team === "SANDBOX"
    } else if (team === "Hanwha") {
      return item.detail.team === "Hanwha"
    } else {
      return item
    }
  })

  // 필터를 통해 해당 라인 상태에 따른 새로운 배열 출력
  // 팀 필터에서 걸러진것을 토대로 다시 필터링
  const filter_02 = filter_01.filter((item) => {
    if (line === "TOP") {
      return item.detail.line === "탑"
    } else if (line === "JGL") {
      return item.detail.line === "정글"
    } else if (line === "MID") {
      return item.detail.line === "미드"
    } else if (line === "BOT") {
      return item.detail.line === "원딜"
    } else if (line === "SPT") {
      return item.detail.line === "서폿"
    } else {
      return item
    }
  })

  // 필터를 통해 해당 인풋 상태에 따른 새로운 배열 출력
  // 팀 필터, 라인 필터에서 걸러진것을 토대로 인풋에 적힌 벨류에 따라 다시 필터링
  const filter_03 = filter_02.filter(item => {
    if (item.name.toUpperCase().includes(text.toUpperCase())) {
      return item.name.toUpperCase().includes(text.toUpperCase())
    } else {
      return item.nick.toUpperCase().includes(text.toUpperCase())
    }
  })

  return <>
    <Routes>
      <Route index element={<><Menus line={line} setLine={setLine} team={team} setTeam={setTeam} text={text} setText={setText} /><Items>{filter_03.map((content, index) => <Cards content={content} key={index} />)}</Items></>}></Route>
      {contents.map((content, index) => <Route path={content.path} element={<EachCard detail={content.detail} />} key={index} />)}
    </Routes>
  </>
}

export default Collection