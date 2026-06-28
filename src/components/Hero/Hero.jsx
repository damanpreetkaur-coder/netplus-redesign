import "./Hero.css";
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
                            Explore Plans
                        </button>
                        <button className="secondary-btn">
                            AI Recommendation
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
                        

                    </div>
                    <div className="hero-right">
                        <div className="hero-cards">
                            <h2> Unlimited Broadband</h2>
                            <h1>599 Rs</h1>
                            <p>Starting Price</p>
                            <button>Book Now</button>
                        </div>
                    </div>
            </div>
        </section>
    );
}
export default Hero;