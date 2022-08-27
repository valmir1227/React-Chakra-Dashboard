import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
  theme,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine, RiRefreshLine } from "react-icons/ri";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  const isWidescreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} fontSize="20"></Icon>}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="green" />
                </Th>
                <Th>Usuário</Th>
                <Th display={["none", "block"]}>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="green" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Valmir Almeida</Text>
                    <Text fontSize="sm" color="gray.300">
                      almeidavalmir76@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td display={["none", "block"]}>
                  06 de Agosto,
                  <br /> 2022
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="teal"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"></Icon>}
                  >
                    {isWidescreen ? "Editar" : ""}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="green" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Valmir Almeida</Text>
                    <Text fontSize="sm" color="gray.300">
                      almeidavalmir76@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td display={["none", "block"]}>
                  06 de Agosto,
                  <br /> 2022
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="teal"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"></Icon>}
                  >
                    {isWidescreen ? "Editar" : ""}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="teal" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Valmir Almeida</Text>
                    <Text fontSize="sm" color="gray.300">
                      almeidavalmir76@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td display={["none", "block"]}>
                  06 de Agosto,
                  <br /> 2022
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="teal"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"></Icon>}
                  >
                    {isWidescreen ? "Editar" : ""}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
