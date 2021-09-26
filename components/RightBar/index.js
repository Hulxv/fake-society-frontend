
import NewPost from '../AddNewPost'
import FriendsList from '../FriendsList'

export default function RightBar() {
	return(
		<div className={'w-full overflow-hidden md:w-52'}>

			<div className={'overflow-hidden space-y-2 md:fixed right-1 overflow-x-auto  md:w-52 bg-white rounded-xl py-4 flex flex-col items-center justify-center'}>

				<div className={'p-4 md:p-0 w-full md:w-auto'}>
					<NewPost />
				</div>
					
				<h1 className={'self-center text-xl'}>Friends</h1>	
				<div className={'w-full justify-center flex'}>
					<FriendsList/>							
				</div>
				
			</div>
		</div>
	)
}