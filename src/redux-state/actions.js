export const ADD_TO_CART_ACTION = "shop/addToCart";

export const addToCartActionCreator = (item) => {
	return {
		type: ADD_TO_CART_ACTION,
		payload: {
			newItem: item,
		},
	};
};
