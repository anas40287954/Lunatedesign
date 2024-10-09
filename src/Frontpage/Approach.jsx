import Slider from "react-slick"
import SimpleSlider from "./SImpleSlider"
import Button from "./Button"


export default function Ourapproach() {

    



    return (
        <div className="approach-background">
            <div className="approach-container">
                <div className="approach-text">
                    <hr className="approach-saparator" />
                    <h3>Our Approach</h3>
                    <h1 className="approach-text-sub">Unlocking unparalleled opportunities</h1>
                </div>
                <div className="approach-description-btn">
                    <div className="description-approach-wrapper">
                        <p className="approach-description">Lunate is your trusted investment partner.
                        Our deep partnerships, disciplined approach and customised strategies enable us to deliver superior risk-adjusted returns for our clients. This approach is strengthened by our investment and operations team, who bring a proven track record and unparalleled access to regional and global opportunities.
                        </p>
                    </div>
                    <div className="btn-approach-container"><Button text={"More To Explore"}/></div>
                </div> 
            </div>

           <div>
               
                    <SimpleSlider/>
           </div>
                
            

        </div>
    )
}