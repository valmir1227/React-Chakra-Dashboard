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
  Spinner,
  Progress,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { useQuery } from "react-query";

export default function UserList() {
  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    return data;
  });

  const isWidescreen = useBreakpointValue({
    base: false,
    lg: true,
  });

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
          {isLoading ? (
            <Table>
              <Thead>
                <Tr>
                  <Th>
                    <Progress
                      size="lg"
                      h="32px"
                      bg="whiteAlpha.200"
                      colorScheme="gray"
                      isIndeterminate
                    />
                  </Th>
                  <Th display={["none", "block"]}>
                    <Progress
                      size="lg"
                      h="32px"
                      bg="whiteAlpha.200"
                      colorScheme="gray"
                      isIndeterminate
                    />
                  </Th>

                  <Th>
                    <Progress
                      size="lg"
                      h="32px"
                      bg="whiteAlpha.200"
                      colorScheme="gray"
                      isIndeterminate
                    />
                  </Th>
                </Tr>

                <Tr>
                  <Th>
                    <Progress
                      size="lg"
                      h="32px"
                      bg="whiteAlpha.200"
                      colorScheme="gray"
                      isIndeterminate
                    />
                  </Th>
                  <Th display={["none", "block"]}>
                    <Progress
                      size="lg"
                      h="32px"
                      bg="whiteAlpha.200"
                      colorScheme="gray"
                      isIndeterminate
                    />
                  </Th>

                  <Th>
                    <Progress
                      size="lg"
                      h="32px"
                      bg="whiteAlpha.200"
                      colorScheme="gray"
                      isIndeterminate
                    />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Box>
                      <Progress
                        size="lg"
                        h="32px"
                        bg="whiteAlpha.200"
                        colorScheme="gray"
                        isIndeterminate
                      />
                    </Box>
                  </Td>

                  <Td>
                    <Box>
                      <Progress
                        size="lg"
                        h="32px"
                        bg="whiteAlpha.200"
                        colorScheme="gray"
                        isIndeterminate
                      />
                    </Box>
                  </Td>

                  <Td display={["none", "block"]}>
                    <Progress
                      size="lg"
                      h="32px"
                      bg="whiteAlpha.200"
                      colorScheme="gray"
                      isIndeterminate
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados do usuários</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px="6">
                          <Checkbox colorScheme="teal" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        <Td display={["none", "block"]}>
                          <Text fontSize="md">
                            {new Date(user.created_at).toLocaleDateString(
                              "pt-br",
                              { day: "numeric", month: "long", year: "numeric" }
                            )}
                          </Text>
                        </Td>
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="teal"
                            leftIcon={
                              <Icon as={RiPencilLine} fontSize="16"></Icon>
                            }
                          >
                            {isWidescreen ? "Editar" : ""}
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
