import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react'
import React from 'react'
function EditProductModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl isRequired>
                        <FormLabel>Title</FormLabel>
                        <Input placeholder='Title' />
                    </FormControl>
                    <FormControl isRequired mt={5}>
                        <FormLabel>Details</FormLabel>
                        <Input placeholder='Details' />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='solid' colorScheme="blue">Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EditProductModal