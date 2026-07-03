import "./Comparison.css";
function Comparison(){
    return(
        <section className="compare">
            <div className="section-title">
                <h2>Compare & <span>Choose  </span></h2>
                <p>
                    See which Netplus service is perfect for your needs. Compare our broadband and IPTV plans to find the best fit for your home or office.
                </p>
            </div>
            <div className="compare-scroll">
                <div className="mobile-note">
                    Swipe left to view the full comparison table on mobile devices.
                </div>
            
            <div className="compare-table">
                <div className="table-header feature">
                    Features
                </div>
                <div className="table-header broadband">
                    Broadband
                </div>
                <div className="table-header iptv">
                    IPTV
                </div>
                <div className="table-header combo">
                    Combo Pack <small>Best Value </small>
                </div>
                <div className="feature-name">Best For </div>
                <div >Gaming, Work From Home, Browsing</div>
                <div> Live TV + OTT Lovers</div>
                <div>Complete Entertainment</div>
                <div className="feature-name">Speed</div>

        <div>100 Mbps - 1000 Mbps</div>

        <div>30 Mbps - 300 Mbps</div>

        <div>100 Mbps - 300 Mbps</div>

        <div className="feature-name">Unlimited Data</div>

        <div>✅ Included</div>

        <div>✅ Included</div>
        <div>✅ Included</div>

        <div className="feature-name">Live TV</div>

        <div>❌</div>

        <div>400+ Channels</div>

        <div>400+ Channels</div>

        <div className="feature-name">OTT Apps</div>

        <div>❌</div>
         <div>17 OTT Apps</div>

        <div>17 OTT Apps</div>

        <div className="feature-name">Router</div>

        <div>WiFi Router</div>

        <div>Set-top Box</div>

        <div>Router + Set-top Box</div>
        <div className="feature-name">Starting Price</div>

        <div>₹499/month</div>

        <div>₹399/month</div>

        <div>₹498/month</div>
            </div>
            </div>
        </section>
    );
}
export default Comparison;  