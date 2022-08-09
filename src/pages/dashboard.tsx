import React from "react";
import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray["500"],
  },

  grid: { show: false },
  dataLabels: {
    enabled: false,
  },

  tooltip: { enabled: false },

  xaxis: {
    axisBorder: {
      color: theme.colors.gray["600"],
    },
    axisTicks: { color: theme.colors.gray["600"] },

    categories: [
      new Date("2022,01,08").toLocaleDateString(),
      new Date("2022,02,08").toLocaleDateString(),
      new Date("2022,03,08").toLocaleDateString(),
      new Date("2022,04,08").toLocaleDateString(),
      new Date("2022,05,08").toLocaleDateString(),
      new Date("2022,06,08").toLocaleDateString(),
    ],
  },

  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "series1",
    data: [200, 150, 78, 92, 44, 66],
  },
];

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
            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
            ></Chart>
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
