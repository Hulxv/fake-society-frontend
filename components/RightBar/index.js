
import NewPost from '../AddNewPost'
import FriendsList from '../FriendsList'

export default function RightBar() {
	return(
		<div className={'w-full overflow-hidden md:w-52'}>

			<div className={'overflow-hidden md:fixed right-1 overflow-x-auto  md:w-52 bg-white rounded-xl py-4 flex flex-col items-center'}>

				<div className={'p-4 md:p-0'}>
					<NewPost />
					
				</div>
					
				<h1 className={'self-center text-xl'}>Friends</h1>	
				<div className={'w-full'}>
					<FriendsList/>							
				</div>
				
			</div>
		</div>
	)
}