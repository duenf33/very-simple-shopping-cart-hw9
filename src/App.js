import "./App.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux-state/redux-store";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<Provider store={reduxStore}>
				<div className="App">
					<NavBar />
					<Switch>
						<Route path="/cart">
							<ShoppingCart />
						</Route>
						<Route path="/user">
							<UserPage />
						</Route>
						<Route path="/">
							<ProductList />
						</Route>
					</Switch>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
