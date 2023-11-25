import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button
} from '@chakra-ui/react'
import React from 'react'

export default function DeleteProductAlert({ isOpen, onClose }) {
    return (
        <AlertDialog
            motionPreset='slideInBottom'
            onClose={onClose}
            isOpen={isOpen}
            isCentered
            colorScheme='red'
        >
            <AlertDialogOverlay/>

            <AlertDialogContent>
                <AlertDialogHeader>Delete Product</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button mr={3} onClick={onClose}>
                        No
                    </Button>
                    <Button colorScheme='red'>
                        Yes
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
