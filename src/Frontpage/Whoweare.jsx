import Button from "./Button";

export default function Whoweare() { 
    return (

        <div className="who-background">
           
               
               <div className="who-container">
                   <div className="who-text">
                       <hr className="saparator" />
                       <h3>Who We Are</h3>
                       <h1 className="who-text-sub">World-class capabilities, deep global networks</h1>
                   </div>
                   <div className="who-description-btn">
                       <div className="description-who-wrapper">
                           <p className="who-description">Lunate is your trusted investment partner.
                               Driven by discipline,
                               powered by expertise and defined by excellence –
                               we enable our partners to invest at scale, building customised
                               portfolios across strategies, asset classes and products.
                           </p>
                       </div>
                       <div className="btn-who-container"><Button text={"Explore Lunate"}/></div>
                   </div>
               </div>
               <div className="stats-container">
               
                       <div className="commercial stats">
                           <h1>Partner-Led</h1>
                           <p>Commercial and <br />independant</p>
                       </div>
               
                       <div className="investments stats">
                           <h1>150+</h1>
                           <p>Investments and operating <br />professionals</p>
                       </div>
               
                       <div className="strategies stats">
                           <h1>3</h1>
                           <p>Core investments<br />strategies</p>
                       </div>
               
               </div>
          
        </div>
        
    )
}