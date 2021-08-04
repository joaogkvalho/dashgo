import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function UserList(){
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
                <Sidebar />


                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="pink"
                          leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                            Criar novo
                        </Button>
                    </Flex>
                
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">João Gabriel</Text>
                                        <Text fontSize="sm" color="gray.300">joaogkvalho@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>26 de Março, 2021</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Carvalho</Text>
                                        <Text fontSize="sm" color="gray.300">gabrielkvalho@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>16 de Abril, 2021</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">João Carvalho</Text>
                                        <Text fontSize="sm" color="gray.300">joaokarvalho@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>23 de Setembro, 2021</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}