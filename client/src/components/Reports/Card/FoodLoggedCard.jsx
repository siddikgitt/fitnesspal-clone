import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const FoodLoggedCard = () => {
  return (
    <Box
      border="1px solid #F6F6F8"
      color="black"
      borderRadius="10px"
      h="300px"
      w={["100%", "100%", "70%"]}
    >
      <Box bg="#F6F6F8" borderTopLeftRadius="10px" borderTopRightRadius="10px">
        <Text fontSize="22px" p="10px">
          Frequently Logged Foods
        </Text>
      </Box>
      <Box>
        <Flex direction="column" h="250px" justify="center" align="center">
          <Img
            w={"100px"}
            src="https://www.myfitnesspal.com/_next/static/media/chef-hat.e63883d4.svg"
          />
          <Text>You didn't log any foods this week.</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default FoodLoggedCard;
