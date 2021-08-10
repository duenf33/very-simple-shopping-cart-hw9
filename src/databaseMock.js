const products = [
	{
		id: "1",
		title: "computer",
		price: 28,
	},
	{
		id: "2",
		title: "monitor",
		price: 25,
	},
	{
		id: "3",
		title: "keyboard",
		price: 5,
	},
];

const users = [
	{
		id: "1",
		userName: "JD",
		name: "John Doe",
		password: "password",
	},
	{
		id: "2",
		userName: "TJ",
		name: "Tom Jared",
		password: "password",
	},
	{
		id: "3",
		userName: "OP",
		name: "Oscar Peters",
		password: "password",
	},
];

export const fetchItems = () => products;

export const fetchUsers = () => users;
