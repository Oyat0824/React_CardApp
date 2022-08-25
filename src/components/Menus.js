import React from 'react'
import { Link } from "react-router-dom";
import { Menu, ImgBox, TeamImg, LineImg, SearchBox } from './styledComp'

const Menus = ({line, setLine, team, setTeam, text, setText}) => {
  // 누를 경우 모두 리셋
  const resetBtn = () => {
    setLine("ALL")
    setTeam("ALL")
    setText("")
  }

  return <>
    <Menu>
      <Link to={"/"} style={{ textDecoration: "none", color: "#fff", userSelect: "none" }} onClick={() => { resetBtn() }}>
        <h2 style={{ margin: "20px 0" }}>League of Legends Champions Korea</h2>
      </Link>

      <ImgBox>
        <TeamImg LineImg={"./images/Logo/T1.png"} onClick={() => setTeam("T1")} style={{ filter: team === "T1" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/GenG.png"} onClick={() => setTeam("GenG")} style={{ filter: team === "GenG" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/DWG.png"} onClick={() => setTeam("DWG")} style={{ filter: team === "DWG" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/KWANGDONG.png"} onClick={() => setTeam("KWANGDONG")} style={{ filter: team === "KWANGDONG" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/Fredit.png"} onClick={() => setTeam("Fredit")} style={{ filter: team === "Fredit" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/KT.png"} onClick={() => setTeam("KT")} style={{ filter: team === "KT" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/NongShim.png"} onClick={() => setTeam("NongShim")} style={{ filter: team === "NongShim" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/SANDBOX.png"} onClick={() => setTeam("SANDBOX")} style={{ filter: team === "SANDBOX" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/Hanwha.png"} onClick={() => setTeam("Hanwha")} style={{ filter: team === "Hanwha" ? "brightness(1)" : null }} />
        <TeamImg LineImg={"./images/Logo/LCK.png"} onClick={() => setTeam("ALL")} style={{ filter: team === "ALL" ? "brightness(1)" : null }} />
      </ImgBox>

      <ImgBox>
        <LineImg LineImg={"./images/Line/TOP.png"} onClick={() => setLine("TOP")} style={{ filter: line === "TOP" ? "brightness(1)" : null }} />
        <LineImg LineImg={"./images/Line/JGL.png"} onClick={() => setLine("JGL")} style={{ filter: line === "JGL" ? "brightness(1)" : null }} />
        <LineImg LineImg={"./images/Line/MID.png"} onClick={() => setLine("MID")} style={{ filter: line === "MID" ? "brightness(1)" : null }} />
        <LineImg LineImg={"./images/Line/BOT.png"} onClick={() => setLine("BOT")} style={{ filter: line === "BOT" ? "brightness(1)" : null }} />
        <LineImg LineImg={"./images/Line/SPT.png"} onClick={() => setLine("SPT")} style={{ filter: line === "SPT" ? "brightness(1)" : null }} />
        <LineImg LineImg={"./images/Line/ALL.png"} onClick={() => setLine("ALL")} style={{ filter: line === "ALL" ? "brightness(1)" : null }} />
      </ImgBox>

      <SearchBox value={text} onChange={e => setText(e.target.value)} placeholder={"선수 이름"} />
    </Menu>
  </>
}

export default Menus