import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { GrFacebook } from "react-icons/gr";

const Login = () => {
  return (
    <div>
      <Center height={"100vh"}>
        <Box
          width={"fit-content"}
          height={"fit-content"}
        >
          <Center>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"40px 40px"}
              alignContent={"center"}
            >
              <Center>
                <Text fontSize={"20px"} fontWeight={"bold"} marginBottom="5">
                  Member Login
                </Text>
              </Center>
              <Box>
                <Input marginBottom="2" placeholder="Email Address" />
                <Input placeholder="Password" />

                <Text style={{ cursor: "pointer" }} marginBottom="5" textAlign={"left"} color={"blue"}>
                  Forgot Password?
                </Text>
              </Box>
              <Box>
                <Button marginBottom="2" colorScheme={"blue"} w={"100%"}>
                  LOG IN
                </Button>
                <Text marginBottom="2" textAlign={"center"}>
                  or
                </Text>
                <Button
                  w={"100%"}
                  colorScheme="facebook"
                  leftIcon={<GrFacebook />}
                >
                  Facebook
                </Button>
              </Box>
            </Box>
          </Center>
          <Text color="#A0A0A0" my="10px" align="center" fontSize="sm">
            Not a member?{" "}
            <span style={{ color: "blue", cursor: "pointer" }}>
              Sign Up now
            </span>
          </Text>
        </Box>
      </Center>
    </div>
  );
};

export default Login;
