import axios from 'axios'
import Friend from '../../components/Friend'

export default function Friends({data}) {
	
	return (

		<div className={'w-full flex flex-col space-y-4 items-center mb-4'}>
			<div className={'w-full flex flex-col space-y-4'} >
				{
					data.data.map((friend) => (
						<Friend {...friend} key={friend.id}/>
					))
				}
			</div>
		</div>
	)

}


export async function getStaticProps() {
	const options = {
		headers: {
			"app-id":"615ced57d5200555c182eabb"
		}
	}
	const response = await axios.get("https://dummyapi.io/data/v1/user", options)
	return{
		props: {
			data: response.data
		}
	}
}