import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { GrFacebook } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const onLogin = async() => {
    const data = {"email": email, "password": password}
    const res = await login(data);
    console.log(res.data.message);
    localStorage.setItem("access_token", res.data.message.token)
    localStorage.setItem("refresh_token", res.data.message.refreshToken)
    navigate("/home");
  }

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
                <Input onChange={(e) => setemail(e.target.value)} marginBottom="2" placeholder="Email Address" />
                <Input onChange={(e) => setpassword(e.target.value)} placeholder="Password" />

                <Text style={{ cursor: "pointer" }} marginBottom="5" textAlign={"left"} color={"blue"}>
                  Forgot Password?
                </Text>
              </Box>
              <Box>
                <Button onClick={onLogin} marginBottom="2" colorScheme={"blue"} w={"100%"}>
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
