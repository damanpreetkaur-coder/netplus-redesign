import "./Plans.css";
import PlanCard from "./PlanCard";
function Plans(){
    const plans=[
        {
            id:1,
            name:"Silver",
            speed:"100 mbps",
            price:"499 Rs",
            ott:"No OTT",
            popular:false
        },
        {
            id:2,
            name:"Silver Plus",
            speed:"150 mbps",
            price:"599 Rs",
            ott:" Chaupal,Hungama ",
            popular:true
        },
        {
            id:3,
            name:"Gold",
            speed:"200 Mbps",
            price:"₹699",
            ott:"Netflix + Hotstar",
            popular:false
        },
        {
            id:4,
            name:"Diamond",
            speed:"500 Mbps",
            price:"₹999",
            ott:"All OTT Apps",
            popular:false
        }
    ];
    return(
        <section className="plans">
            <div className="section-title">
                <h2> Popular Broadband Plans</h2>
                <p>
                    Find the perfect broadband plan for your home and business
                </p>
            </div>
            <div className="plans-container">
                {plans.map((plan)=>(
                    <PlanCard 
                     key={plan.id}
                        name={plan.name}
                        speed={plan.speed}
                        price={plan.price}
                        ott={plan.ott}
                        popular={plan.popular}
                        />
                ))}
            </div>
        </section>
    );
}
export default Plans;