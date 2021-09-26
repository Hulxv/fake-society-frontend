
import NewPost from '../AddNewPost'
import FriendsList from '../FriendsList'

export default function RightBar() {
	return(
		<div className={'w-full md:w-52 '}>

			<div className={'md:fixed md:right-2 pt-2 md:p-8 md:pt-6 rounded-xl space-y-3 md:space-x-3 bg-white flex md:items-cente md:h-126 md:overflow-hidden md:overflow-y-auto flex-col'}>

				<div className={'p-4 md:p-0'}>
					<NewPost />
					
				</div>
					
				<h1 className={'self-center text-xl'}>Friends</h1>
				<FriendsList />
									

			</div>
		</div>
	)
}