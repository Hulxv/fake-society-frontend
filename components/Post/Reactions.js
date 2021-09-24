import {
	BiShare,
	BiComment,
	BiHeart,
	
} from 'react-icons/bi'

export default function Reactions() {
	
	return (
	<div className={'w-full flex justify-evenly capitalize text-sm sm:text-base border-t pt-2 border-black border-opacity-20'}>
		<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
			<BiHeart size={'1.4em'}/>
			<span className={'outline-none select-none'}> love </span>
		</div>
		<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
			<BiComment size={'1.4em'}/>
			<span className={'outline-none select-none'}> comment </span>
		</div>
		<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
			<BiShare size={'1.4em'}/>
			<span className={'outline-none select-none'}> share </span>
		</div>
	</div>
	)
}