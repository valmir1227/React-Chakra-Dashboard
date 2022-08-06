import React from "react";
import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
//import { ApexOptions } from "apexcharts";

import { Header } from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: { show: false },
    zoom: { enable: false },
    foreColor: theme.colors.gray["500"],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: "datatime",
    axisBorder: {
      color: theme.colors.gray["600"],
    },
    axisTicks: { colors: theme.colors.gray["600"] },
    categories: [
      "2022-04-02T00:00:00:00.000Z",
      "2022-04-03T00:00:00:00.000Z",
      "2022-04-04T00:00:00:00.000Z",
      "2022-04-05T00:00:00:00.000Z",
      "2022-04-06T00:00:00:00.000Z",
      "2022-04-07T00:00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
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
    data: [122, 45, 78, 92, 12, 45],
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
