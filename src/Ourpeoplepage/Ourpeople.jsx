import "./ourpeople.css"
import Navbar from "../Frontpage/Navbar"
import Footer from "../Frontpage/Footer"
import Meetteam from "./Meetteam"




export default function Ourpeople() {
    return (
        <div className="ourpeople-background">

            <div className="ourpeople-background-img">
                <div className="ourpeople-navbar">
                    <Navbar />
                </div>
                <div className="ourpeople-banner-text">
                    <div className="ourpeople-text">
                        <h1>Our People</h1>
                    </div>
                    <div className="ourpeople-text-description">
                        <p>
                            Powered by experience,
                            expertise and excellence
                        </p>
                    </div>
                </div>
            </div>
            <div className="meet-team">
                <Meetteam/>
                
            </div>

        </div>
    )
}