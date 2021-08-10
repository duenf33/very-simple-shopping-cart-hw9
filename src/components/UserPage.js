import React, { userState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserPage = () => {
	const user = useSelector((state) => state.user);
	// const dispatch = userDispatch();

	if (!user) {
		return <h1>No user</h1>;
	}

	return (
		<div>
			<h1>Hi, {user.name}</h1>
		</div>
	);
};

export default UserPage;
