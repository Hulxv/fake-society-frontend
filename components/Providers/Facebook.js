import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Google() {
	return (
		<div className={' ring-2 my-4 ring-indigo-700 rounded-md'}>
			<Button 
				fullWidth={true}
				color={'primary'}
			>	
			<div className={'w-full  flex justify-start space-x-2 items-center'}>
				<FontAwesomeIcon icon={faFacebook}  className={'w-6 text-black'}/>
				<div className={'justify-self-center text-center text-xs'}>
					Continue with Facebook
				</div>
			</div>
			</Button>
		</div>
	)
}