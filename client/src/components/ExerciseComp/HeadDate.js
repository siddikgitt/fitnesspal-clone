import {
    Box,
    Flex,
    Input,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  
  
  import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
function HeadDate({setcurrdate}) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let date = today.toDateString();
  
    const handleTomorrowDate = () => {
      let tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      date = tomorrow.toDateString();
    };

    //header date section of exercise page
  return (
    <Flex justifyContent={"flex-start"} alignItems="center" p={"2"} gap="2">
    <Box>
      <Text
        fontSize={{ base: "12px", md: "14px", lg: "18px" }}
        color={"#0B5680"}
        fontWeight="bold"
      >
        Your Excerise Diary For:
      </Text>
    </Box>
    <Box w={{ base: "60%", md: "60%", lg: "70%" }}>
      <Flex
        justifyContent="center"
        fontSize={{ base: "14px", md: "16px", lg: "18px" }}
        w={{lg:'70%',md:'90%',sm:'100%',base:'100%'}}
        gap="2px"
        alignItems={"center"}
      >
        <Box
          p={"2"}
          textAlign={"center"}
          color={"#FFFFFF"}
          backgroundColor={"#00548F"}
          borderTopLeftRadius="5"
          borderBottomLeftRadius={"5"}
        >
          <AiFillCaretLeft fontWeight="extrabold" fontSize={"1.5rem"} />
        </Box>

        {/* //displaying date */}
        <Box
          p={"2"}
          w={"100%"}
          textAlign="center"
          color={"#FFFFFF"}
          backgroundColor={"#00548f"}
          borderRadius="3"
          fontWeight={"bold"}
        >
          {date}
        </Box>

        <Box
          p={"2"}
          textAlign={"center"}
          onClick={handleTomorrowDate}
          color={"white"}
          backgroundColor={"#00548f"}
          borderTopRightRadius={"5"}
          borderBottomRightRadius={"5"}
        >
          <AiFillCaretRight fontWeight="extrabold" fontSize={"1.5rem"} />
        </Box>
        <Box>
          <Input
            type="date"
            w={"2.2rem"}
            p="0"
            fontSize="2rem"
            color="#666666"
            border={"none"}
            onChange={(e)=>setcurrdate(e.target.value)}
            
          />
        </Box>
      </Flex>
    </Box>
  </Flex>
  )
}

export default HeadDate