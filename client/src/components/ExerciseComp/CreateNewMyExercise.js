import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getExerciseDairy, postExercise, postExerciseDairy } from "../../api";
import { ExerciseContext } from "../../Context/ExerciseContext";
const exdata = {
  name: "",
  type: "",
  min: "",
  calories: "",
  sets: "",
  reps: "",
  wtsets: "",
};
let perEx = JSON.parse(localStorage.getItem("PersonalExercise")) || [];
function CreateNewMyExercise() {
  const [flag, setflag] = useState(false);
  const [data, setdata] = useState(exdata);
  const [findata, setfin] = useState(perEx);
  const [type, setType] = useState(data.type);
  const toast = useToast();
  const navigate = useNavigate();
  // change inputs according to type
  useEffect(() => {
    setType(data.type);
  }, [data.type]);
  console.log(type, "type");

  // use context
  const { Exercisedata, setExercisedata } = useContext(ExerciseContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  }

  const postExerciseHandler = async () => {
    let res = await postExercise(data);
    let obj = {
      date: new Date().toISOString().slice(0, 10),
      id: res.data.message._id,
      newobj: data,
    };

    let exd = await postExerciseDairy(obj);
    let response = await getExerciseDairy(exd.data.message.date);
    setExercisedata(response.data.message[0]);
    toast({
      title: "Welcome to Myfitnesspal",
      description: "Exercise Added",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
    navigate("/exercise");
  };
  useEffect(() => {
    localStorage.setItem("PersonalExercise", JSON.stringify([...findata]));
    setdata(exdata);
  }, [flag]);

  return (
    <Flex flexDir={"column"} width={"57%"} m="3rem auto ">
      <Text
        textAlign={"start"}
        fontSize="1.3rem "
        fontWeight="bold"
        color="#00548f"
      >
        Your Personal Exercises
      </Text>
      <hr />
      <HStack bg="#f6f6f6" justifyContent={"space-between"} p="1.5rem">
        <Box
          fontSize={"13px"}
          fontWeight="semibold"
          textAlign="start"
          mb={"5rem"}
        >
          <Box mb={"0.5rem"}>
            <Text>Exercise Description: </Text>
            <Input
              placeholder="(e.g abdominal abs)"
              onChange={(e) => handleChange(e)}
              name="name"
              focusBorderColor="none"
              type="text"
              w="170px"
              h="26px"
              borderRadius="none"
              boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
              background="white"
            />
          </Box>
          {/* type */}
          <Box mb={"0.5rem"}>
            <Text>Exercise type:</Text>
            <Select
              onChange={(e) => handleChange(e)}
              name="type"
              fontSize={"13px"}
              h="26px"
              bg="white"
              boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
              borderRadius="2px"
              placeholder="Select option"
            >
              <option value="Cardiovascular">Cardiovascular</option>
              <option value="strength">strength type</option>
            </Select>
          </Box>
          {/* Long */}

          {type == "Cardiovascular" || type == "" ? (
            <>
              <Box mb={"0.5rem"}>
                <Text>How long?:</Text>
                <Input
                  required
                  onChange={(e) => handleChange(e)}
                  name="min"
                  mr="0.5rem"
                  focusBorderColor="none"
                  type="text"
                  w="60px"
                  h="23px"
                  borderRadius="none"
                  boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  background="white"
                />
                Minutes
              </Box>
              {/* calories burned */}
              <Box mb="1.5rem">
                <Text>Calories Burned:</Text>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="calories"
                  focusBorderColor="none"
                  type="text"
                  w="60px"
                  h="23px"
                  borderRadius="none"
                  boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  background="white"
                />
              </Box>
            </>
          ) : (
            <>
              {/* for strength training */}
              <Box mb={"0.5rem"}>
                <Text>sets:</Text>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="sets"
                  mr="0.5rem"
                  focusBorderColor="none"
                  type="text"
                  w="60px"
                  h="23px"
                  borderRadius="none"
                  boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  background="white"
                />
              </Box>
              {/* calories burned */}
              <Box mb="1rem">
                <Text>Repetitions/Set:</Text>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="reps"
                  focusBorderColor="none"
                  type="text"
                  w="60px"
                  h="23px"
                  borderRadius="none"
                  boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  background="white"
                />
              </Box>
              <Box mb={"0.5rem"}>
                <Text>Weight/Set:</Text>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="wtsets"
                  mr="0.5rem"
                  focusBorderColor="none"
                  type="text"
                  w="60px"
                  h="23px"
                  borderRadius="none"
                  boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  background="white"
                />
              </Box>
            </>
          )}

          <Box>
            <Link to="/exercise/create-exercise">
              <Button
                colorScheme="green"
                className="reportBtn"
                h="35px"
                padding={"0 1.5rem"}
                onClick={postExerciseHandler}
              >
                Add
              </Button>
            </Link>
          </Box>
        </Box>
        <Box w="50%" pb="5rem">
          <Text color="#00548f" fontWeight={"bold"}>
            Creating a New Exercise
          </Text>
          <Box fontSize={"13px"} p="0 1.5rem 0  0" color="blackAlpha.900">
            <Text>
              If you can't find an exercise in our database, you can easily add
              it yourself.
            </Text>
            <br />
            <Text>
              For cardio exercises, if you do not know how many calories you
              burned, instead of creating a new exercise, it's better to enter
              an existing exercise in our database that is close to the one you
              performed. This will at least provide you with a rough estimate of
              how many calories you burned.
            </Text>
            <br />
            <Text>
              Once you've created an exercise, you will be able to search for it
              and add it to your exercise log at any time
            </Text>
          </Box>
        </Box>
      </HStack>
    </Flex>
  );
}

export default CreateNewMyExercise;
