import "./ourpeople.css"
import Button from "../Frontpage/Button"
import Teaminfocard from "./Teaminfocard"

export default function Meetteam(){

var cardDescription="Welcome to Your Company Name! We are dedicated to providing the best services to our customers. Our team of experts works tirelessly to ensure that you receive top-quality products and exceptional support. Our mission is to innovate and inspire, making your experience seamless and enjoyable. We believe in creating lasting relationships with our clients and partners. Whether you need tailored consulting solutions, cutting-edge technology for your projects, or 24/7 support, we are here to help. Have questions? Feel free to reach out to us through our contact page or follow us on social media. Thank you for choosing us!"



    return(
        <div className="meet-the-team-container">
           <div className="meet-team-text-container">
                <div className="meet-team-text">
                    <hr className="saparator-meet-team" />
                    <h3>Leadership Team</h3>
                    <h1 className="meet-team-text-sub">Meet the Team</h1>
                </div>
                <div className="meet-team-description-btn">
                  <p>At Lunate, our success is enabled through the calibre of our people and our commitment to unlocking value for our shareholders and stakeholders. </p>
                </div>

            </div>
            <div className="team-information-cards">
                <div className="">
                    <Teaminfocard Name={"Sebastian Greve"} Role={"Founder & Managing Partner"} Description={cardDescription}/>
                </div>
                <div className="">
                    <Teaminfocard Name={"Sebastian Greve"} Role={"Founder & Managing Partner"}  Description={cardDescription}/>
                </div>
                <div className="">
                    <Teaminfocard Name={"Sebastian Greve"} Role={"Founder & Managing Partner"}  Description={cardDescription}/>
                </div>
            </div>
        </div>
    )
}