import { Box, Center, Text } from "@chakra-ui/react";
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

const CalorieGraph = () => {
  const data = [
    {
      day: "Su",
      Calorie: 0,
    },
    {
      day: "Mo",
      Calorie: 200,
    },
    {
      day: "Tu",
      Calorie: 300,
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
    <Box border="1px solid #F6F6F8" color="black" borderRadius="10px" h="500px">
      <Box bg="#F6F6F8" borderTopRadius="8px" p="15px 20px">
        <Text fontSize="22px">Calories</Text>
        <Text fontSize="15px">
          Stick with it! You have a fresh chance to hit your calorie goal this
          upcoming week.
        </Text>
      </Box>
      <Center>
        <Text fontSize="14px" color="grey">
          Weekly Summary
        </Text>
      </Center>
      <Box w="100%" h="300px">
        <ResponsiveContainer width="90%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Legend />
            <Line dataKey="Calorie" stroke="grey" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default CalorieGraph;
