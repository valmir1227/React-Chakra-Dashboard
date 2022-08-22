import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export default function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="green"
        disabled
        _disabled={{
          bgColor: "green.400",
          cursor: "defaltt",
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="green"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
}
