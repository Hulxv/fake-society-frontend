import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useContext, createContext } from "react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const Router = useRouter();
	const [user, setUser] = useState(
		JSON.parse(
			typeof sessionStorage !== "undefined" && sessionStorage.getItem("user"),
		)?.data?.user || null,
	);
	const [token, setToken] = useState(
		JSON.parse(
			typeof sessionStorage !== "undefined" && sessionStorage.getItem("user"),
		)?.data?.token || null,
	);
	async function signin(Data) {
		console.log(Data, typeof Data);
		try {
			const req = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}login/`,
				Data,
			);

			sessionStorage.setItem("user", JSON.stringify(req));
			setUser(req.data.user);
			setToken(req.data.token);
		} catch (error) {
			console.err(error);
		}
	}
	async function signup(Data) {
		try {
			const req = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}register/`,
				Data,
			);

			console.log("req ==>", req);
		} catch (error) {
			console.err(error);
		}
	}

	function signout() {
		sessionStorage.removeItem("user"); // Remove user from session storage
		setToken(null); // Remove token
		setUser(null); // Remove user
		Router.push("/auth/sign-in");
	}

	const value = {
		signin,
		signup,
		signout,
		user,
		token,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
