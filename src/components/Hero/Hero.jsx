import "./Hero.css";
import { Link } from "react-router-dom";
function Hero(){
    return(
        <section className="hero">
            <div className="hero-left">
              <span className="tag">
                Punjab's Fastest Broadband</span>
                <h1>
                    Experience Internet<br/>
                    Without Limits
                    </h1>  
                    <p>
                        Stream, Game, Work and Enjoy 400+ Live TV Channels
          with blazing-fast broadband and IPTV.  
                    </p>
                    <div className="hero-buttons">
                        <button className="primary-btn">
                            <Link to="/plans"> Explore Plans</Link>
                        </button>
                        <button className="secondary-btn">
                           <Link to="/ai-recommendation">AI Recommendation</Link>
                        </button>

                    </div>
                    <div className="hero-features">
                        <div>
                            <span> Up to 1 Gbps
                                </span></div>
                        <div>
                            <span>400+ Channels</span>
                        </div>
                        <div>
                            <span>
                                OTT included
                            </span>
                        </div>
                        

                    </div></div>
                    <div className="hero-right">

    <img
        src="src\assets\images\tv.png"
        alt="TV"
        className="tv-image"
    />

    

    

    

</div>
            
        </section>
    );
}
export default Hero;