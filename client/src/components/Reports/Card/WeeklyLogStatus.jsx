import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const WeeklyLogStatus = () => {
  return (
    <Box
      border="1px solid #F6F6F8"
      color="black"
      borderRadius="10px"
      h="400px"
      w={["100%", "100%", "50%"]}
    >
      <Box bg="#F6F6F8" borderTopRadius="8px" p="15px 20px">
        <Text fontSize="22px">Keep it Up</Text>
      </Box>
      <Box p="20px">
        <Text>
          Continue to log in every day this week to take your streak to...
        </Text>
      </Box>
    </Box>
  );
};

export default WeeklyLogStatus;
