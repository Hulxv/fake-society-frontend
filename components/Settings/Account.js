import ChangeAvatar from './ChangeAvatar'
import DeleteAccount from './DeleteAccountDialogAlert'

import {
	useEditableControls,
	Button,
	Input,
	Avatar,
	Editable, 
	EditableInput, 
	EditablePreview, 
	Flex,
	IconButton
} from '@chakra-ui/react'


// Icons
import {
	FiEdit,
	FiCheck
} from 'react-icons/fi'
import {
	HiOutlineMail,
	HiOutlineAtSymbol,
	HiFingerPrint,
	HiTrash,
	HiOutlineBan,
	HiIdentification
} from 'react-icons/hi'
export default function Account() {

	const EditableUsername = () => {
		const {
	      isEditing,
	      getSubmitButtonProps,
	      getCancelButtonProps,
	      getEditButtonProps,
	    } = useEditableControls()

	    return isEditing ?(
	    	<IconButton size="sm" ml={2} icon={<FiCheck />} {...getSubmitButtonProps()} />
	    ) : (
	      
	        <IconButton size="sm" ml={2} icon={<FiEdit />} {...getEditButtonProps()} />
	      
	    )

	}

 	return (
	<div className={'flex flex-col items-start space-y-6'}>
		
		<div className={'flex items-center space-x-5'}>

			<ChangeAvatar />
			
			<Editable defaultValue={"Oshigaki Kisame" }>
			  <Flex nowrap>
			  		<EditablePreview />
					<EditableInput />
					<EditableUsername />
			  </Flex>
			</Editable>		
		</div>
		
			
		<Button 
			width={'100%'} 
			
			leftIcon={<HiIdentification size='1.4em'/>}		
		>
			Personal Informations
		</Button>
		<DeleteAccount/>
		
	</div>
 	)
 }