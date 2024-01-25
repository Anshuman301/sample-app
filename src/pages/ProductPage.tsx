import { Box, Button, HStack, Input, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";
import { useEffect } from "react";

const fetchProduct = async() => {
    const resp  = await fetch('http://localhost:9001/products')
    const data = await resp.json()
    return data;
}

type Input = {
    title: string
    price: string
    currency: string
}

const addProductAPI = async({title, price, currency}: Input) => {
    const resp = await fetch('http://localhost:9001/products', {
        method: 'POST',
        body: JSON.stringify({
            title, price,currency
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    const data = await resp.json()
    console.log(data);
}
export default function ProductPage() {
    const [products, setProducts] = React.useState<Input[]>([])
    const [input, setInput] = React.useState<Input>({
        title: '',
        price: '',
        currency: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setInput(prev => ({...prev, [name]: value}))
    }
    useEffect(() => {
        (async function fetchData() {
            const {data} = await fetchProduct()
            setProducts(data)
        })()
    }, [])

    const addProduct = async() => {
        await addProductAPI(input)
        const {data} = await fetchProduct()
        setProducts(data)
    }
    return (
        <VStack>
            <Text>
                Product Page
            </Text>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Products Data</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th isNumeric>Price</Th>
                            <Th>Currency</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {
                                products.map(ele => {
                                    return (
                                        <Tr>
                                            <Td>{ele.title}</Td>
                                            <Td isNumeric>{ele.price}</Td>
                                            <Td>{ele.currency}</Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <VStack>
                    <Text>Add a New Product</Text>
                    <HStack flexWrap={'wrap'}>
                        <Box>
                            <Text>Title</Text>
                            <Input name='title' onChange={handleChange}/>
                        </Box>
                        <Box>
                            <Text>Price</Text>
                            <Input type="number" name='price' onChange={handleChange}/>
                        </Box>
                        <Box>
                            <Text>Currency</Text>
                            <Input name='currency' onChange={handleChange}/>
                        </Box>
                    </HStack>
                    <Button onClick={addProduct}>Add</Button>
                </VStack>
        </VStack>
    )
}