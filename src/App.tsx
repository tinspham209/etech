import { Header } from "./components";
import Footer from "./components/Footer";
import AboutUs from "./containers/AboutUs";
import Hero from "./containers/Hero";
import OurGames from "./containers/OurGames";
import OurPartners from "./containers/OurPartners";

function App() {
	return (
		<main className="main">
			<Header />
			<Hero />
			<AboutUs />
			<OurGames />
			<OurPartners />
			<Footer />
		</main>
	);
}

export default App;
