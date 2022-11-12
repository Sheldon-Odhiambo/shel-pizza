import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./globalstyles";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Hero />
			<Products heading="Choose me" data={productData} />
			<Feature />
			<Products heading="Sweet Treats for You" data={productDataTwo} />
			<Footer />
		</Router>
	);
}

export default App;
