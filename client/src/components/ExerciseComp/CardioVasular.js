import React, { useContext, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  Table,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Thead,
  Tbody,
} from "@chakra-ui/react";

import { AiFillStop } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ExerciseContext } from "../../Context/ExerciseContext";
import { DeleteExercise, getExerciseDairy } from "../../api";


function CardioVasular({currdate,setcurrdate}) {
  const {Exercisedata,setExercisedata}=useContext(ExerciseContext)

 async function handleGetExercise(){
  let response=await getExerciseDairy(currdate);
  setExercisedata(response.data.message[0])
  }
 async function handleDelete(id,date){
    let resp= await DeleteExercise(id,date)
    handleGetExercise()
  }
  useEffect(()=>{
    handleGetExercise()
  },[])

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption textAlign="start" borderBottom="1px solid lightgrey" >
            <Flex gap="1" >
            <Link to="/exercise/myexercise">
              <Text fontSize="15px" 
              fontWeight='bold'
              color="#0072BF">
                Add Task
              </Text>
              </Link>
              <Text fontSize="13px" color="#0072BF">
                |
              </Text>
              <Text fontSize="15px"
              fontWeight='bold'
              color="#0072BF">
                Quick Tools
              </Text>
            </Flex>
          </TableCaption>
          <Thead>
            <Tr borderBottom="1px solid #e6e6e6">
              <Th
                w="60%"
                fontSize="18px"
                fontWeight="bold"
                textTransform="capitalize"
                color="#00548F"
              >
                Cardiovascular
              </Th>
              <Th
                background="#00548f"
                textAlign="center"
                color="#ffffff"
                borderRight="2px solid white"
              >
                Minutes
              </Th>
              <Th background="#00548f" color="#ffffff" isNumeric>
                Calories Burned
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>

            {Exercisedata?.exercise?.map((e)=><Tr key={e._id}
              borderBottom="1px solid #e6e6e6"
              backgroundColor="#f6f6f6"
              color="black"
            >
              <Td borderRight="2px solid white">{e.name}</Td>
              <Td isNumeric borderRight="2px solid white"
              textAlign={"center"}
              >
              {e.min}
              </Td>
              <Td borderRight="2px solid white"
              textAlign={"center"}>{e.calories}</Td>

              <Td>
                <Text fontWeight="extrabold" color="red" borderRadius="50%" 
                onClick={()=>handleDelete(e._id,Exercisedata.date)}
                >
                  <AiFillStop />
                </Text>
              </Td>
            </Tr>)
}


            
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CardioVasular;
