import axios from "axios";
import { useRouter } from "next/router";
import { GetNewToken } from "../../Auth";

import Zoom from "react-medium-image-zoom";
import { Avatar, Img } from "@chakra-ui/react";
import Posts from "../../components/Posts";

export default function Profile({ data }) {
	console.log(data);
	return (
		<div className='flex flex-col items-center space-y-5'>
			<div className='relative w-full bg-white items-center flex flex-col py-8 px-4 rounded-lg shadow-md'>
				<div className='w-full'>
					<Zoom wrapStyle={{ width: "100%" }}>
						<Img
							src={`${process.env.NEXT_PUBLIC_API_URL}${data.cover}`}
							alt=''
							className={" rounded-xl w-full   "}
						/>
					</Zoom>
				</div>
				<div className='flex items-center space-x-3 self-start m-1'>
					<Avatar
						size='md'
						src={`${process.env.NEXT_PUBLIC_API_URL}${data.avatar}`}
						alt=''
					/>
					<div className='text-xl'>{data.name}</div>
				</div>
				<div>{data.bio}</div>
			</div>
			<Posts posts={data.posts} />
		</div>
	);
}

export async function getServerSideProps({ req, res, query }) {
	const tokens = JSON.parse(req.cookies.token);
	await GetNewToken(tokens.refresh, tokens, res); // Set New Token

	const config = {
		headers: {
			Authorization: `Bearer ${tokens.access}`,
		},
	};

	const allProfiles = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/profile/`,
		config,
	);
	const data = allProfiles.data.find((e) => e.id == query.id);

	if (!data)
		return {
			notFound: true,
		};

	return {
		props: {
			data: data,
		},
	};
}
