import "./Plans.css";
function PlanCard({name, speed, price, ott, popular}){
return(
    <div className={`plan-card ${popular ? "popular" : ""}`}>
        {popular && <div className="badge">Most Popular</div>}
        <h3>{name}</h3>
        <h2>{price}<span>/month</span></h2>
        <p className="speed">{speed} Mbps</p>
        <ul>
            <li> Unlimited Data </li>
            <li> Unlimited Calls</li>
            <li>{ott}    </li>
            <li >Free installation</li>
        </ul>
        <button >Book Now   </button>

    </div>
);
}
export default PlanCard;
