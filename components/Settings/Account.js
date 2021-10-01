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

import {
	FiEdit,
	FiCheck
} from 'react-icons/fi'

import {
	HiOutlineIdentification,
	HiOutlineMail,
	HiOutlineAtSymbol,
	HiFingerPrint,
	HiTrash,
	HiOutlineBan
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
		<div title='UID' className={'self-center p-2 flex flex-nowrap space-x-2 items-center '}>
			<HiOutlineIdentification size={'1.5em'}/> 
			<span>3952305739</span>
		</div>
		<div className={'flex items-center space-x-2'}>
			<Avatar size="lg" name="Oshigaki Kisame" src="https://pbs.twimg.com/profile_images/776714243173474304/ByDDFCvI_400x400.jpg" />
			<Editable defaultValue={"Oshigaki Kisame" }>
			  <Flex nowrap>
			  		<EditablePreview />
					<EditableInput />
					<EditableUsername />
			  </Flex>
			</Editable>		
		</div>
		<div className={'flex flex-col w-full '}>
			<Button 
				colorScheme='blue'
				leftIcon={<HiOutlineMail size='1.4em'/>}
				width={200}
			>
				Change Email
			</Button>
			<Button 
				colorScheme='blue'
				mt={2}
				leftIcon={<HiFingerPrint size='1.4em'/>}
				width={200}
			>
				Change Password
			</Button>
			<Button 
				colorScheme='red' 
				mt={5}
				alignSelf={'end'}
				leftIcon={<HiTrash size='1.4em'/>}		
			>
				Delete Account
			</Button>
		</div>
	</div>
 	)
 }