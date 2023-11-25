import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'
function ViewProductModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>View Product 1</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ViewProductModal