import { ADD_TO_CART_ACTION } from "./actions";

export const reducer = (state, action) => {
	if (action.type === ADD_TO_CART_ACTION) {
		const newItem = action.payload.newItem;

		return {
			...state,
			shoppingCart: {
				...state.shoppingCart,
				items: [...state.shoppingCart.items, newItem],
			},
		};
	}

	return state;
};
