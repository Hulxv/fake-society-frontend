import axios from 'axios'
import {
    Avatar,
    Button,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react'
import Post from '../../components/Post'
import Search from '../../components/Search'

import {
    HiPlus
} from 'react-icons/hi'
export default function Groups({groups, posts}) {
    
    return (

        <div className={'w-full flex flex-col space-y-4 items-center overflow-y-hidden'}>
            <div className={'w-full overflow-hidden md:w2'}>

            <div className={'shadow space-y-2 scrollbar-thin  w-full bg-white rounded-xl py-4 flex flex-col items-center justify-center'}>
                    <div className={'flex items-center justify-center px-2 w-full'}>
                        <Search 
                            Component={
                              <Button colorScheme={'blue'}>Join Group</Button>
                            }
                            taps={['groups']}
                        />
                        
                    </div>
                    <div className={'w-full space-x-6 flex overflow-x-auto py-4 pr-4 items-center ScrollBar'}>
                        <div className={''}>
                            
                            <div className="flex w-20 flex-col px-4 box-content space-y-2 justify-center items-center" >
                                <IconButton colorScheme={'blue'} icon={<HiPlus size='2.3em'/>} />
                                    
                                <div className={'self-center text-sm capitalize text-center'} >
                                    Create new group
                                </div>
                            </div>        
                            
                        </div>
                        {
                            groups.map((group,index) =>(
                                <div className={''} key={index}>
                                    <div className="flex flex-col space-y-1 items-center">
                                        <Avatar src={group.photo} alt=""/>
                                        <div className={'flex-col items-center flex'}>
                                            <h1>{group.name}</h1>
                                            <h6 className="opacity-40" style={{fontSize:'10px'}}>{group.members} Members</h6>
                                            
                                        </div>
                                    </div>
                                    
                                </div>

                            ))
                        }                         
                    </div>
                    
                </div>
            </div>

            <div className={'w-full flex flex-col space-y-4'} >
                {
                    posts.map((post, index) =>{

                        // For Testing
                        const groups = [
                            'Developers', 
                            'Memes Society',
                            'Science Society'
                        ]
                        const I = Math.floor(Math.random()* groups.length)


                        return (
                            <Post 
                                kety={index}
                                id={post.id}
                                AvatarImage={'https://via.placeholder.com/600/54176f'} 
                                Username={post.title.substr(0,15)}
                                Content={post.body} 
                                ShareDate={new Date().toLocaleString()}
                                group={groups.filter((e, index) => index === I)} // For Testing
                                
                            />
                        )
                    })
                }
            </div>

            <Button 
                colorScheme={'blue'} 
                onClick={() => window.scroll({
                      top: 100,
                      left: 100,
                      behavior: 'smooth'
                    })}>
                Back To Top
            </Button>

        </div>
    )

}


export async function getStaticProps() {
    const groups = [
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
        {
            name: "Developers",
            members: 239,
            photo: "https://via.placeholder.com/600/d32776",
        
        },
    ]

    
       
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    

    return{
        props: {
            groups,
            posts: response.data
        }
    }
}