import { useEffect, useState } from "react"
import "./teamcard.css"

export default function Teaminfocard({ Name, Role, Description }) {
    const [isOpened, SetisOpened] = useState(false)
    useEffect(()=>{
        SetisOpened(true)
    },[])



    return (
        <div className="card-container">
            <img src="/Teamcardimg.png" alt="" className="card-img" />



            <div className="name-informationbtn-wrapper">
                <div className="team-info">
                    <h1 className="team-mate-name">{Name}</h1>
                    <p className="team-mate-role">{Role}</p>
                </div>
                <div className="extended-description-btn">

                    <button onClick={() => { SetisOpened(!isOpened) }} className={"more-info-btn " + (!isOpened ? "rotate-to-cross" : "")}>
                        <img src="/plussign.svg" alt="" className="img-plus" />
                    </button>

                </div>

            </div>
            <div className={"collapsed-team-info " + (!isOpened ? "uncollapse" :"")}>
                <p>
                {Description}
                </p>
            </div>



        </div>
    )
}