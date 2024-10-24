import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import Slowerheader from "./pages/slowerheader/slowerheader";
import Navbar from "./pages/navbar/navbar";
import SupplyChain from "./supplychain/supplychain";
import Ecosystem from "./ecosystem/ecosystem";
import Mobility from "./mobility/mobility";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slowerheader />
      <SupplyChain />
      <Ecosystem />
      <Mobility />
    </div>
  );
}
