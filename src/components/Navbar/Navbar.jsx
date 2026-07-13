import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
    return(
        <nav className="navbar">
            <div className="container navbar-container">
                <span className="logo">
                    <img src="src\assets\images\logo.png" alt="Logo" />
                </span>
                <ul className="nav-links">

    <li><Link to="/">Home</Link></li>

    <li><Link to="/broadband">Broadband</Link></li>

    <li><Link to="/iptv">IPTV</Link></li>

    <li><Link to="/plans">Plans</Link></li>

    <li><Link to="/enterprise">Enterprise</Link></li>

    <li><Link to="/support">Support</Link></li>

</ul>
            <Link to="/pay-bill">
  <button className="pay-btn">PayBill</button>
</Link>

<Link to="/get-connection">
  <button className="connect-btn">GetConnection</button>
</Link>
            </div>
        </nav>
    );
}

export default Navbar;