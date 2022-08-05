import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxW={1450} my="6" mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
