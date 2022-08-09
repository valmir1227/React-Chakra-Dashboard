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
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: "pink.500",
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
      colorScheme="pink"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
}
