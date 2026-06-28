import "./Navbar.css";
function Navbar() {
    return(
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo">
                    <h2 >Netplus</h2>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Broadband</a></li>
                    <li><a href="#">IPTV</a></li>
                    <li><a href="#">Plans</a></li>
                     <li><a href="#">Enterprise</a></li>
                      <li><a href="#">Support</a></li>
                </ul>
            <div className="nav-buttons">
                <button className="pay-btn">
                    Pay Bill</button>
                    <button className="connect-btn">
                        Get Connection
                    </button>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;