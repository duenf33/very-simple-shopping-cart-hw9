import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const UserInfo = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	if (user) {
		return <p>Hi, {user.name}</p>;
	}

	return (
		<div
			style={{
				display: "flex",
				height: "100%",
				justifyContent: "center",
			}}>
			{user ? (
				<h5>Hi {user.name}!!</h5>
			) : (
				<Link to={`/login`}>
					<button>Log in</button>
				</Link>
			)}
		</div>
	);
};

const Navigation = () => {
	return (
		<div
			style={{
				display: "flex",
				width: "50%",
				top: 0,
			}}>
			<div style={{ paddingRight: "20px", color: "white" }}>
				<Link to="/">Home</Link>
			</div>
			<div style={{ paddingRight: "20px", color: "white" }}>
				<Link to={"/cart"}>Cart</Link>
			</div>
			<div style={{ paddingRight: "20px", color: "white" }}>
				<Link to={"/user"}>User</Link>
			</div>
		</div>
	);
};

const NavBar = () => {
	return (
		<div
			style={{
				background: "orange",
				// position: "fixed",
				height: "60px",
				width: "100vw",
				top: 0,
				display: "flex",
				alignItems: "center",
			}}>
			<div
				style={{
					display: "flex",
					width: "100%",
					justifyItems: "space-between",
				}}>
				<Navigation />
				<UserInfo />
			</div>
		</div>
	);
};

export default NavBar;
