import { useState } from 'react'

// Components
import Providers from '../../../components/Providers'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faFingerprint } from '@fortawesome/free-solid-svg-icons'
// Material UI
import { Typography, TextField, Box, Button} from '@material-ui/core';

export default function Signin() {
	const [ seePassword, setSeePassword] = useState(false)
	const [ seeConfirmPassword, setSeeConfirmPassword] = useState(false)
	return (
		<div className={' h-screen items-center flex justify-center'}>
			<form className={'w-96 shadow-xl flex flex-col items-center py-4 justify-center p-6 space-y-8 rounded-3xl'}>
					<div className={'w-12 p-2 rounded-2xl text-white bg-indigo-700'}>
						<FontAwesomeIcon icon={faFingerprint}/>
					</div>
					<Typography variant={'h5'} fontSize={'xl'} align={'center'}>
						Login
					</Typography>
					
					<div>
						<Providers/>
					</div>
					<div className={'flex flex-col items-center space-y-8'}>
						<div className={''}>
							<TextField
							    label="Username"
							    type="text"
							    fullWidth={true}
							/>
						</div>
						<div className={''}>
							<TextField
							    label="Email"
							    type="email"
							    fullWidth={true}
							/>
						</div>
						<div className={'flex items-center relative '}>
							<TextField
							    label="Password"
							    type={`${seePassword ? 'text' : 'password'}`}
							    fullWidth={true}
							/>						

						  	<FontAwesomeIcon 
						  		icon={seePassword ? faEyeSlash : faEye}
						  		className={'absolute right-1 w-5'}
						  		onClick={() => setSeePassword(!seePassword)}
						  	/>	
						</div>
						<div className={'flex items-center relative '}>
							<TextField
							    label="Confirm Password"
							    type={`${seeConfirmPassword ? 'text' : 'password'}`}
							    fullWidth={true}
							/>						

						  	<FontAwesomeIcon 
						  		icon={seeConfirmPassword ? faEyeSlash : faEye}
						  		className={'absolute right-1 w-5'}
						  		onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
						  	/>	
						</div>
					</div>
					<div className={'w-52 '}>
						
						<Button 
							type={'submit'} 
							variant="contained" 
							color="primary"
							fullWidth={true}
							>

							Login
						</Button>
					</div>
					<p className={'text-xs text-left cursor-pointer hover:text-indigo-800'}>
						Already have an account ?
					</p>
			</form>
			
		</div>

	)
}