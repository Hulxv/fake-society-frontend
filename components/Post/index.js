import {
	Avatar
} from '@chakra-ui/react'
import {
	BiShare,
	BiComment,
	BiHeart,
	BiDotsHorizontalRounded
} from 'react-icons/bi'
export default function Post(props) {
	const {Avatar, Username, Content} = props
	return (
		<div className={'w-full md:w-8/12 flex space-y-2 flex-col items-center bg-white my-8 p-3 rounded-xl'}>
			<div className={'flex justify-between w-full'}>
				<div className="flex space-x-2 self-start justify-start items-center ">
					<div>
						<img 
							src={Avatar } 
							alt={Username}
							className={'w-16 h-16 align-middle rounded-full cursor-pointer'}
						/>
					</div>
					<span>{Username}</span>
				</div>

				<div className={' cursor-pointer transition duration-200 p-px h-8 w-8 flex justify-center items-center rounded-full bg-opacity-0 bg-black hover:bg-opacity-10'}>
					<BiDotsHorizontalRounded size={'1.3em'}/>
				</div>
			</div>

			<div className={'whitespace-pre-line self-start border-l-2 border-black border-opacity-10 pl-4 py-3 flex justify-start items-center'}>
				{Content.split('\n').map((line) =>(
					<>
						{line}
						<br/>
					</>
				))}
			</div>

			<div className={'w-full flex justify-around  capitalize'}>
				<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-2xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
					<span> react </span>
					<BiHeart size={'1.4em'}/>
				</div>
				<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-2xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
					<span> comment </span>
					<BiComment size={'1.4em'}/>
				</div>
				<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-2xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
					<span> share </span>
					<BiShare size={'1.4em'}/>
				</div>
			</div>
		</div>
	)
}