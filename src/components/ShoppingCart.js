import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ShoppingCart = () => {
	const shoppingCart = useSelector((state) => state.shoppingCart);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>ShoppingCart</h1>
			{shoppingCart.items.map((item) => {
				return (
					<div>
						{item.title} - ${item.price / 100}
					</div>
				);
			})}
		</div>
	);
};

export default ShoppingCart;
