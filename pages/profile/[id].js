import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "../../Auth";

export default function Profile() {
	const router = useRouter();

	return <div>Profile {router.query.id}</div>;
}

export async function getInitialProps() {}
