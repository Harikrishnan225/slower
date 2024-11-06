import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import Slowerheader from "./pages/slowerheader/slowerheader";
import Navbar from "./pages/navbar/navbar";
import SupplyChain from "./supplychain/supplychain";
import Ecosystem from "./ecosystem/ecosystem";
import Mobility from "./mobility/mobility";
import Script from "next/script";
import Ai_Powered from "./ai-powered/ai_powered";
import Growth from "./growth/growth";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Navbar />
      <Slowerheader />
      <SupplyChain />
      <Ecosystem />
      <Mobility />
      <Ai_Powered/>
      <Growth />
      <Footer />
    </div>
  );
}
