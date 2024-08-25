import Hero from "./pages/Home/1.Hero"
import Highlights from "./pages/Home/2.5.Highlights"
import Mission from "./pages/Home/2.Mission"
import Package from "./pages/Home/3.Package"
import Services from "./pages/Home/4.Services"
import Portfolio from "./pages/Home/5.5.Portfolio"
import Clients from "./pages/Home/5.Clients"
import Contact from "./pages/Home/6.Contact"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Mission />
      <Highlights />
      <Package />
      <Services />
      <Clients />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
