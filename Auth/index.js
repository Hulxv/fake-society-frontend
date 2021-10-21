import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(
		(typeof window !== "undefined" && window.localStorage.getItem("user")) ||
			null,
	);
	async function signin(Data) {
		console.log(Data, typeof Data);
		try {
			const req = await axios({
				url: `${process.env.NEXT_PUBLIC_API_URL}login/`,
				email: Data.email,
				password: Data.password,
				headers: {
					"Access-Control-Allow-Origin": "*",

					"Content-Type":
						"application/x-www-form-urlencoded; charset=UTF-8;application/json",
				},
				method: "post",
			});

			console.log("req ==>", req);
		} catch (error) {
			console.log("error ==>", error);
		}
		// try {
		// 	const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}login/`, {
		// 		body: { email: Data.email, password: Data.password },
		// 		method: "post",

		// 	});

		// 	console.log("req ==>", req);
		// } catch (error) {
		// 	console.log("error ==>", error);
		// }
	}
	const value = {
		signin,
		user,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
