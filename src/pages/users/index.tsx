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
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
export default function UserList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isFetching } = useUsers(page);

  const numberUsersLoading = Array.from(Array(10));

  const isWidescreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const response = await api.get(`user/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, //10min
      }
    );
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="green.400" ml="4" />
              )}
            </Heading>
            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} fontSize="20"></Icon>}
              >
                Criar Novo
              </Button>
            </NextLink>
          </Flex>
          {isLoading ? (
            <Table>
              <Thead>
                {numberUsersLoading.map(() => {
                  return (
                    <>
                      <Tr>
                        <Th border="none">
                          <Progress
                            size="lg"
                            h="32px"
                            bg="whiteAlpha.200"
                            colorScheme="gray"
                            isIndeterminate
                          />
                        </Th>
                        {isWidescreen ? (
                          <>
                            <Th border="none">
                              <Progress
                                size="lg"
                                h="32px"
                                bg="whiteAlpha.200"
                                colorScheme="gray"
                                isIndeterminate
                              />
                            </Th>
                            <Th border="none">
                              <Progress
                                size="lg"
                                h="32px"
                                bg="whiteAlpha.200"
                                colorScheme="gray"
                                isIndeterminate
                              />
                            </Th>
                          </>
                        ) : null}
                      </Tr>
                    </>
                  );
                })}
              </Thead>
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
                      <Checkbox colorScheme="teal" />
                    </Th>
                    <Th>Usuário</Th>
                    <Th display={["none", "block"]}>Data de cadastro</Th>
                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map((user) => {
                    return (
                      <Tr
                        alignItems="center"
                        justifyContent="center"
                        key={user.id}
                      >
                        <Td px="6">
                          <Checkbox colorScheme="teal" />
                        </Td>
                        <Td>
                          <Box>
                            <Link
                              color="green.300"
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>

                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        <Td display={["none", "block"]}>
                          <Flex minH="49px" align="center">
                            <Text>{user.createdAt}</Text>
                          </Flex>
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
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
