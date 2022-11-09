
import React, { useState } from "react";
import "./exercise.css";
import CardioVasular from "../../components/ExerciseComp/CardioVasular";
import HeadDate from "../../components/ExerciseComp/HeadDate";
import DwTotal from "../../components/ExerciseComp/DwTotal";
import StrengthTraining from "../../components/ExerciseComp/StrengthTraining";
import Note from "../../components/ExerciseComp/Note";
import { Box } from "@chakra-ui/react";


function ExerciseMain() {
  const [edit,setEdit]=useState(false)

 


  return (
    <Box className="section">
      <Box>
        <HeadDate />
        {/* table content */}
        <Box border="1px solid black"  padding="2rem 1rem">
          <CardioVasular />
          <DwTotal/>
          <StrengthTraining/>
           {/* txt area box */}
           <Note  edit={edit} setEdit={setEdit}   />
       
        </Box>
       
      </Box>
    </Box>
  );
}

export default ExerciseMain;
