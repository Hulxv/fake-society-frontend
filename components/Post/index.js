
// Chakra ui
import {
	Avatar,
} from '@chakra-ui/react'

// Icons
import {
	BiShare,
	BiComment,
	BiHeart,
	BiDotsHorizontalRounded
} from 'react-icons/bi'
import Zoom from 'react-medium-image-zoom'

export default function Post(props) {
	const {AvatarImage, Username, Content, ShareDate, Images=[]} = props
	return (
		<div className={'w-full sm:w-104 flex space-y-2 flex-col items-center bg-white  p-3 rounded-xl'}>
			<div className={'flex justify-between w-full'}>
				<div className="flex space-x-2 self-start justify-start items-center ">
					<div>
						<Avatar name={Username} src={AvatarImage} loading={"lazy"}/>
					</div>
					<div className="flex flex-col items-start">
						<span>{Username}</span>
						<span className={'text-black text-opacity-40 text-xs'}>{ShareDate}</span>
					</div>
				</div>

				<div className={' cursor-pointer transition duration-200 p-px h-8 w-8 flex justify-center items-center rounded-full bg-opacity-0 bg-black hover:bg-opacity-10'}>
					<BiDotsHorizontalRounded size={'1.3em'}/>
				</div>
			</div>

			<div className={'whitespace-pre-line self-start border-l-2 border-black border-opacity-20 pl-4 py-3 flex justify-start items-center'}>
				{Content.split('\n').map((line) =>(
					<>
						{line}
						<br/>
					</>
				))}
			</div>
			{Images !== null && <div className=" w-full justify-center flex flex-wrap ">
			
				{
					Images.map((img) => (
						<Zoom>
							<img src={img} alt="" className={'p-1 rounded-lg h-40'}/>
						</Zoom>

					))
				}
			</div>}

			<div className={'w-full flex justify-evenly capitalize text-sm sm:text-base'}>
				<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
					<BiHeart size={'1.4em'}/>
					<span> love </span>
				</div>
				<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
					<BiComment size={'1.4em'}/>
					<span> comment </span>
				</div>
				<div className={'flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10'}>
					<BiShare size={'1.4em'}/>
					<span> share </span>
				</div>
			</div>

		</div>
	)
}