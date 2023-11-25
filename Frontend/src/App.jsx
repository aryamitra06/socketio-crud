import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import AllProducts from './components/AllProducts'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <AllProducts/>
    </ChakraProvider>
  )
}