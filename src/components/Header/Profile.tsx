import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Valmir ALmeida</Text>
        <Text color="gray.300" fontSize="small">
          almeidavalmir76@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="valmir almeida"
        src="https://avatars.githubusercontent.com/u/68277445?v=4"
      />
    </Flex>
  );
}
