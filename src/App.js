import "./App.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux-state/redux-store";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	return (
		<Provider store={reduxStore}>
			<div className="App">
				<ShoppingCart />
			</div>
		</Provider>
	);
}

export default App;
