const axios = require("axios");

async function test() {
	try {
		const req = await axios({
			url: `https://dfsocial.herokuapp.com/login/`,

			email: "mohnas1311@gmail.com",
			password: "admin",

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
}

test();
