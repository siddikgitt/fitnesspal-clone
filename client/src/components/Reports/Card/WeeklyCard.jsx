import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

const WeeklyCard = ({ calories }) => {
  return (
    <Box
      border="1px solid #F6F6F8"
      color="black"
      borderRadius="10px"
      h="500px"
      w={["100%", "100%", "30%"]}
    >
      <Box bg="#F6F6F8" borderTopRadius="8px" p="15px 20px">
        <Text fontSize="22px">Week At A Galance</Text>
        <Text fontSize="15px">
          88% of people who log in for 7 days lose weight
        </Text>
      </Box>
      <Box>
        <Box w="70%" m="auto">
          <Flex align="flex-start" m="5px 0">
            <Img
              m="10px"
              src="https://www.myfitnesspal.com/_next/static/media/targetLabel.14a42cf4.svg"
            />
            <Stack>
              <Text fontSize="40px">
                {548 + Math.floor(Math.random() * 10)}
              </Text>
              <Text>Weekly Calorie Goal</Text>
            </Stack>
          </Flex>
          <Flex align="flex-start" m="5px 0">
            <Img
              m="10px"
              src="https://www.myfitnesspal.com/_next/static/media/foodLabel.c6b1f7cc.svg"
            />
            <Stack>
              <Text fontSize="40px">
                {calories ? calories : 430 + Math.floor(Math.random() * 10)}
              </Text>
              <Text>Calories Logged</Text>
            </Stack>
          </Flex>
          <Flex align="flex-start" m="5px 0">
            <Img
              m="10px"
              src="https://www.myfitnesspal.com/_next/static/media/calsBurnedLabel.00629885.svg"
            />
            <Stack>
              <Text fontSize="40px">
                {calories
                  ? calories
                  : Math.floor(Math.random() * 1000) +
                    Math.floor(Math.random() * 10)}
              </Text>
              <Text>Calories Burned</Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default WeeklyCard;
