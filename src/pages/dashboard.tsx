import React from "react";
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxW={1450} my="6" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
