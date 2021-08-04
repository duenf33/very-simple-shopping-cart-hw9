import "./App.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux-state/redux-store";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	return (
		<Provider store={reduxStore}>
			<div className="App">
				<ShoppingCart />
				<ProductList />
			</div>
		</Provider>
	);
}

export default App;
