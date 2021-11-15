import { useWindowSize } from "rooks";

// Components
import Apperance from "./Apperance";
import Account from "./Account";
import Infos from "./Infos";

// Chakra ui components
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
	Tooltip,
} from "@chakra-ui/react";

import { HiAdjustments } from "react-icons/hi";

export default function Settings({ IsSideBarOpen, color }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { innerWidth } = useWindowSize();

	return (
		<>
			<Tooltip
				label={!IsSideBarOpen ? "Settings" : ""}
				placement='right'
				hasArrow>
				<div
					className='flex flex-row sm:flex-col w-full items-center capitalize'
					onClick={onOpen}>
					<div
						className={`flex flex-row space-x-2 justify-center transition duration-200 cursor-pointer ${
							color === "black" ? "text-black" : "text-white"
						} text-opacity-80 hover:text-opacity-100 items-center`}>
						<HiAdjustments size={"2em"} />
						{(IsSideBarOpen || innerWidth < 640) && (
							<span className={"text-xs sm:text-base"}>settings</span>
						)}
					</div>
				</div>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Settings</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Tabs mt={4} variant={"enclosed"}>
							<TabList>
								<Tab>Apperance</Tab>
								<Tab>Account</Tab>
								<Tab>Infos</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<Apperance />
								</TabPanel>
								<TabPanel>
									<Account />
								</TabPanel>
								<TabPanel>
									<Infos />
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue'>Save Changes</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
