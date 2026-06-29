import "./Services.css";
import {FaWifi}from "react-icons/fa";
import {MdLiveTv} from "react-icons/md";
import {BsStars} from "react-icons/bs";
function Services(){
    return (
        <section className="services">
            <div className="section-title">
                <h2>Choose What Suits You Best </h2>
                <p> Pick the services that matches your lifestyle

                    
                </p>
            </div>
            <div className="services-container">
                <div className="service-card">
                    <FaWifi className="icon"/>
                        <h3> Broadband</h3>
                        <p>Experience unlimited and high speed internet </p>
                        <button >Explore</button>

                </div>
                <div className="service-card">
                    <MdLiveTv className="icon"/>
                        <h3> IPTV</h3>
                        <p>Stream 400+ Live TV Channels and OTT Apps</p>
                        <button >Explore</button>
                </div>
                <div className="service-card">
                    <BsStars className="icon"/>
                        <h3> OTT</h3>
                        <p>Enjoy your favorite OTT Apps with our IPTV</p>
                        <button >Explore</button>
                </div>
            </div>
        </section>
    );
}
export default Services;
