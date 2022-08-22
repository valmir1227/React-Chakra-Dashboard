import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text
      as="a"
      href="/dashboard"
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" color="green.400" marginLeft={1}>
        .
      </Text>
    </Text>
  );
}
