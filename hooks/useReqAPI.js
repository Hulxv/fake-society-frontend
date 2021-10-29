import axios from "axios";
import { useEffect, useState } from "react";
import { token, setToken } from "../Auth";
function useReqAPI(router) {
	const [data, setData] = useState({});
	const [error, setError] = useState({});

	async function GetData() {
		const config = {
			headers: { Authorization: `Bearer ${token.access}` },
		};
		try {
			// Send Request to API
			const res = await axios.get(`${NEXT_PUBLIC_API_URL}${router}`, config);

			setData(res);
		} catch (err) {
			setError(err);
		}
	}

	useEffect(() => {
		GetData();
	}, []);

	return { data, error };
}

export default useReqAPI;
