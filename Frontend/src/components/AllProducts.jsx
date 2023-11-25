import { ViewIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import AddProductModal from "./AddProductModal";
import DeleteProductAlert from './DeleteProductAlert';
import EditProductModal from './EditProductModal';
import ViewProductModal from './ViewProductModal';
export default function AllProducts() {
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
    const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] = useState(false);
    const [isViewProductModalOpen, setIsViewProductModalOpen] = useState(false);
    const Product = () => {
        return (
            <Card>
                <CardHeader>
                    <Heading size='md'>Product Title</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Product Details</Text>
                </CardBody>
                <CardFooter justify='space-between'>
                    <ButtonGroup>
                        <Button leftIcon={<ViewIcon />} colorScheme='blue' variant="outline" onClick={() => setIsViewProductModalOpen(true)}>View</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button colorScheme='gray' variant='ghost' onClick={() => setIsEditProductModalOpen(true)}>Edit</Button>
                        <Button colorScheme='red' variant='ghost' onClick={() => setIsDeleteProductModalOpen(true)}>Delete</Button>
                    </ButtonGroup>

                </CardFooter>
            </Card>
        )
    }
    return (
        <React.Fragment>
            <Container maxW='container.xl'>
                <Flex alignItems='center' gap='2' mt={5}>
                    <Heading size='md'>All Products</Heading>
                    <Spacer />
                    <Button colorScheme='blue' onClick={() => setIsAddProductModalOpen(true)}>Add New</Button>
                </Flex>
                <SimpleGrid columns={{ lg: 3, sm: 1, md: 2 }} spacing={5} mt={5}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </SimpleGrid>
            </Container>
            <AddProductModal isOpen={isAddProductModalOpen} onClose={() => setIsAddProductModalOpen(false)} />
            <EditProductModal isOpen={isEditProductModalOpen} onClose={() => setIsEditProductModalOpen(false)} />
            <DeleteProductAlert isOpen={isDeleteProductModalOpen} onClose={() => setIsDeleteProductModalOpen(false)} />
            <ViewProductModal isOpen={isViewProductModalOpen} onClose={() => setIsViewProductModalOpen(false)}/>
        </React.Fragment>
    )
}
