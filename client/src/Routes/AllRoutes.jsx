import React from "react";
import { Routes, Route } from "react-router-dom";
import CardioVasular from "../components/ExerciseComp/CardioVasular";
import CreateNewMyExercise from "../components/ExerciseComp/CreateNewMyExercise";
import StrengthTraining from "../components/ExerciseComp/StrengthTraining";
import Login from "../components/Login";
import Signup1 from "../components/signup/Signup1";
import Signup2 from "../components/signup/Signup2";
import Signup3 from "../components/signup/Signup3";
import Signup4 from "../components/signup/Signup4";
import Signup5 from "../components/signup/Signup5";
import Signup6 from "../components/signup/Signup6";
import Signup7 from "../components/signup/Signup7";
import Signup8 from "../components/signup/Signup8";
import AddToDairy from "../pages/ExercisePage/AddToDairy";
import Database_calBurn from "../pages/ExercisePage/Database_calBurn";
import ExerciseMain from "../pages/ExercisePage/ExerciseMain";
import MyExercisePage from "../pages/ExercisePage/MyExercisePage";
import Exports from "../pages/Reports/Exports";
import Reports from "../pages/Reports/Reports";
import WeeklyDigest from "../pages/Reports/WeeklyDigest";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/signup4" element={<Signup4 />} />
        <Route path="/signup5" element={<Signup5 />} />
        <Route path="/signup6" element={<Signup6 />} />
        <Route path="/signup7" element={<Signup7 />} />
        <Route path="/signup8" element={<Signup8 />} />

        
          <Route path="/reports" element={<PrivateRoutes><Reports/></PrivateRoutes>}/>
        
          <Route path="/reports/export" element={<PrivateRoutes><Exports/></PrivateRoutes>}/>
          <Route path="/reports/weekly-digest" element={<PrivateRoutes><WeeklyDigest/></PrivateRoutes>}/>
          <Route path="/exercise/diary" element={<PrivateRoutes><ExerciseMain/></PrivateRoutes>}/>
          <Route path="/exercise/database" element={<PrivateRoutes><Database_calBurn/></PrivateRoutes>}/>
          <Route path="/exercise/myexercise" element={<PrivateRoutes><MyExercisePage/></PrivateRoutes>}/>
          <Route path="/exercise/diary/add_to_diary" element={<PrivateRoutes><AddToDairy/></PrivateRoutes>}/>
          <Route path="/exercise/create-exercise" element={<PrivateRoutes><CreateNewMyExercise/></PrivateRoutes>}/>
          <Route path="/exercise/diary/add-cardio" element={<PrivateRoutes><CardioVasular/></PrivateRoutes>}/>
          <Route path="/exercise/diary/add-strength" element={<PrivateRoutes><StrengthTraining/></PrivateRoutes>}/>
         

      </Routes>
    </div>
  );
};

export default AllRoutes;
