import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";

const MacronutrientGraph = () => {
  const data = [
    {
      day: "Su",
      FatGoal: 0,
      CarbsGoal: 300,
      FatGoal: 100,
      ProteinGoal: 50,
    },
    {
      day: "Mo",
      CarbsGoal: 65,
      FatGoal: 300,
      ProteinGoal: 200,
    },
    {
      day: "Tu",
      ProteinGoal: 300,
    },
    {
      day: "W",
      Calorie: 500,
    },
    {
      day: "Th",
      Calorie: null,
    },
    {
      day: "F",
      Calorie: null,
    },
    {
      day: "Sa",
      Calorie: null,
    },
  ];
  return (
    <Box
      border="1px solid #F6F6F8"
      color="black"
      borderRadius="10px"
      h="500px"
      w={["90%", "90%", "70%"]}
      m="20px auto"
    >
      <Box bg="#F6F6F8" borderTopRadius="8px" p="15px 20px">
        <Text fontSize="22px">Macronutrients</Text>
        <Text fontSize="15px">
          Our receipe importer calculates the macronutrient breakdown of your
          favourite recipes.
        </Text>
      </Box>
      <Box w="100%" h="400px">
        <ResponsiveContainer width="90%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Legend />
            <Line dataKey="FatGoal" stroke="purple" />
            <Line dataKey="CarbsGoal" stroke="pink" />
            <Line dataKey="ProteinGoal" stroke="orange" />
            <Line dataKey="FatConsumed" stroke="violet" />
            <Line dataKey="CarbsConsumed" stroke="teal" />
            <Line dataKey="ProteinConsumed" stroke="yellow" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default MacronutrientGraph;
