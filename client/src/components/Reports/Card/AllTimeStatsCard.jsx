import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { ExerciseContext } from "../../../Context/ExerciseContext";

const AllTimeStatsCard = () => {
  const { Exercisedata, setExercisedata } = useContext(ExerciseContext);
  console.log(Exercisedata, "data");

  return (
    <Box
      border="1px solid #F6F6F8"
      color="black"
      borderRadius="10px"
      h="400px"
      w={["100%", "100%", "50%"]}
    >
      <Box bg="#F6F6F8" borderTopRadius="8px" p="15px 20px">
        <Text fontSize="22px">All-Time Stats</Text>
        <Text fontSize="15px">
          Member since <b>November 8,2022</b>
        </Text>
      </Box>
      <Box p="20px">
        <Flex justify="space-between" align="center" m="30px 0">
          <Text>Foods Logged</Text>
          <Text>0</Text>
        </Flex>
        <Flex justify="space-between" align="center" m="30px 0">
          <Text>Meals Logged</Text>
          <Text>0</Text>
        </Flex>
        <Flex justify="space-between" align="center" m="30px 0">
          <Text>Exercise Logged</Text>
          <Text>{Math.floor(Math.random() * 100)}</Text>
        </Flex>
        <Flex justify="space-between" align="center" m="30px 0">
          <Text>Steps Logged</Text>
          <Text>0</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default AllTimeStatsCard;
