import { Routes , Route} from "react-router-dom";


import Home from "./Pages/Home/Home";
import Broadband from "./Pages/Broadband/Broadband";
import IPTV from "./Pages/IPTV/IPTV";
import Enterprise from "./Pages/Enterprise/Enterprise";
import PlansPage from "./Pages/Plans/PlansPage";
import Support from "./Pages/Support/Support";
import GetConnection from "./Pages/GetConnection/GetConnection";
import PayBill from "./Pages/PayBill/PayBill";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
<Route path="/broadband" element={<Broadband />} />
<Route path="/iptv" element={<IPTV />} />
<Route path="/enterprise" element={<Enterprise />} />
<Route path="/plans" element={<PlansPage />} />
<Route path="/support" element={<Support />} />
<Route path="/get-connection" element={<GetConnection />} />
<Route path="/pay-bill" element={<PayBill />} />
    </Routes>
  );
}

export default App;