import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const PremiumCard = () => {
  return (
    <Box
      color="black"
      h="300px"
      w={["100%", "100%", "30%"]}
      borderRadius="10px"
      p="10px 30px"
    >
      <Flex
        h="300px"
        direction="column"
        justify="center"
        align="center"
        gap="20px"
      >
        <Img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrown.941ccd42.png&w=128&q=75" />
        <Text align="center">
          Premium members are 65% more likely to reach their weight loss goal.
        </Text>
        <Button
          variant="solid"
          color="blue"
          border="2px solid blue"
          borderRadius="20px"
        >
          Go Premium
        </Button>
      </Flex>
    </Box>
  );
};

export default PremiumCard;
