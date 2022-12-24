import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { addFoodByName, searchByName } from "../../api";

function AddFood() {
  const [data, setData] = useState([]);
  const [foodId, setFoodId] = useState("");
  const [value, setValue] = useState("");
  const time = localStorage.getItem("time");

  const onAllSearch = async () => {
    const res = await searchByName(value);
    console.log(res.data.FoodDescription);
    setData(res.data);
    setFoodId(res.data._id);
  };

  const addToDairy = async (foodID, time) => {
    // date, time, userID, foodID
    const currdate = new Date();

    let day = currdate.getDate();
    let month = currdate.getMonth() + 1;
    let year = currdate.getFullYear();
    let date = `${day}-${month}-${year}`;
    
    const userID = localStorage.getItem("fitUserID");
    const param = {date, time, userID, foodID}
    const res = await addFoodByName(param);

  };

  return (
    <Flex w="60%" m="auto" flexFlow="column" height="500px">
      <Text mt={7} fontSize="1.5rem " fontWeight="bold" color="#00548f">
        Add Food To Breakfast
      </Text>
      <Box>
        <Text>Search our food database by name:</Text>
        <Input
          borderRadius="5px"
          border={"1px solid black"}
          borderTop={"2px solid black"}
          borderLeft={"2px solid black"}
          placeholder="search"
          w="50%"
          mr="1rem"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onAllSearch} colorScheme="green" className="reportBtn">
          Search
        </Button>
      </Box>

      <Box>
        <Box>
          <Text color="#00548f" fontSize="18px" fontWeight="bold">
            Matching Foods:
          </Text>

          <Stack
            direction="row"
            h="250px"
            m="1rem 0"
          >
            <Box
              border="1px solid black"
              w="50%"
              borderRadius="0.1rem"
              overflowY="scroll"
            >
              {data.map((el) => (
                  <Box borderBottom={"1px solid gray"}>
                <Flex justifyContent={"space-between"}>
                    
                  <Text                    
                    p="5px"
                    color="blue.500"
                  >
                    {el.FoodDescription}
                  </Text>

                  <Button onClick={() => addToDairy(el._id, time)}>ADD</Button>
                </Flex>
                  </Box>
              ))}
            </Box>
            <Stack
              direction="column"
              w="50%"
              background="#f6f6f6"
              justifyContent="center"
              alignItems="center"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            ></Stack>
          </Stack>
        </Box>
        <HStack fontSize="17px" fontWeight="bold" justifyContent="center">
          <Text color="black">Can't find what you're looking for? </Text>
          <Text color="#00548f" _hover={{ color: "orange" }}>
            Add a food to the database
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default AddFood;
