import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Signup3 = () => {
  const {signup,signupHandler,setSignup}=useContext(AuthContext);
  const [value, setValue] = useState("");
  const weightHandler=(e)=>{
    setValue(e.target.innerText)
  }
  const submitHandler=()=>{
    signupHandler({key:"daily_activity",data:value})
    console.log(signup.daily_activity)
    
  }

  return (
    <div>
      <Center height={"100vh"}>
        <Box width={"40%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"50px 70px"}
              alignContent={"center"}
            >
              <Text
                noOfLines={4}
                overflow={"auto"}
                fontSize={"25px"}
                fontWeight={"bold"}
                marginBottom="10"
              >
                What is your baseline activity level?
              </Text>

              <VStack spacing={4}>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={"1.5px solid gray"}
                  w="100%"
                  textAlign={"center"}
                  padding={"15px 0px"}
                  onClick={(e)=>{
                    
                    setSignup({...signup,daily_activity:e.target.innerText})}}
                >
                  Not very Active
                </Text>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={"1.5px solid gray"}
                  w="100%"
                  textAlign={"center"}
                  padding={"15px 0px"}
                  onClick={(e)=>setSignup({...signup,daily_activity:e.target.innerText})}
                >
                  Lightly Weight Active
                </Text>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={"1.5px solid gray"}
                  w="100%"
                  textAlign={"center"}
                  padding={"15px 0px"}
                  onClick={(e)=>setSignup({...signup,daily_activity:e.target.innerText})}
                >
                  Active
                </Text>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={"1.5px solid gray"}
                  w="100%"
                  textAlign={"center"}
                  padding={"15px 0px"}
                  onClick={(e)=>setSignup({...signup,daily_activity:e.target.innerText})}
                >
                  Very Active
                </Text>
              </VStack>

              <Flex marginTop={7} gap={5}>
              <Box w={"50%"}>

                <Link to={"/signup2"}>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  marginBottom="2"
                  w={"100%"}
                >
                  BACK
                </Button>
                </Link>
                </Box>
                <Box w={"50%"}>

                <Link to={"/signup4"}>
                <Button marginBottom="2" colorScheme={"blue"} w={"100%"} onClick={submitHandler}>
                  
                  NEXT
                </Button>
                  </Link>
                  </Box>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Signup3;
