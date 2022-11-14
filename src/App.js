import React from "react";
import Feature from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import MenuPage from "./components/Menu";
import { GlobalStyle } from "./globalstyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
  

function App() {
	return ( 
		<BrowserRouter>
		<Routes>
            <Route path="MenuPage" element={<MenuPage/>}/>
			<GlobalStyle />
			<Hero />
			<Products heading="Choose me" data={productData} />
			<Feature />
			<Products heading="Sweet Treats for You" data={productDataTwo} />
			<Footer />
		</Routes> 
		</BrowserRouter >
	);
}

export default App;
