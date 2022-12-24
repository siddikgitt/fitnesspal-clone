import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CardioVasular from "../components/ExerciseComp/CardioVasular";
import CreateNewMyExercise from "../components/ExerciseComp/CreateNewMyExercise";
import StrengthTraining from "../components/ExerciseComp/StrengthTraining";
import Login from "../components/Login";
import CheckIn from "../components/MY_Home/CheckIn";
import MyHome from "../components/MY_Home/MyHome";
import Profile from "../components/MY_Home/Profile";
import Signup2 from "../components/signup/Signup2_WeightGoal";
import HomePage from "../Home/Home";
import Navbar2 from "../Home/afternavbar";
import AddToDairy from "../pages/ExercisePage/AddToDairy";
import Database_calBurn from "../pages/ExercisePage/Database_calBurn";
import ExerciseMain from "../pages/ExercisePage/ExerciseMain";
import MyExercisePage from "../pages/ExercisePage/MyExercisePage";
import Exports from "../pages/Reports/Exports";
import Reports from "../pages/Reports/Reports";
import WeeklyDigest from "../pages/Reports/WeeklyDigest";
import PrivateRoutes from "./PrivateRoutes";
import BeforeNavbar from "../Home/BeforeNavbar";
import Goals from "../components/MY_Home/Goals";
import AddFood from "../components/FoodComp/AddFood";

import FoodDiary from "../components/FoodComp/FoodDiary";
import Signup1 from "../components/signup/Signup_Introduction";
import Signup3 from "../components/signup/Signup3_ActivityLevel";
import Signup4 from "../components/signup/Signup4_Basic_Details";
import Signup5 from "../components/signup/Signup5_height_weightForm";
import Signup6 from "../components/signup/Signup6_CreateAccount";
import Signup7 from "../components/signup/Signup7_UsernameForm";
import Signup8 from "../components/signup/Signup8_calorieGoal";
import { Box } from "@chakra-ui/react";
import Footer from "../Home/footer";

const AllRoutes = () => {
  const [login, setlogin] = useState(false);
  const navigate = useNavigate();
  const userID = localStorage.getItem("fitUserID");
  useEffect(() => {
    if (userID) {
      navigate("/home");
      setlogin(true);
    }
  }, [userID]);
  return (
    <Box w={"100%"}>
      {!login ? <BeforeNavbar /> : <Navbar2 />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/signup4" element={<Signup4 />} />
        <Route path="/signup5" element={<Signup5 />} />
        <Route path="/signup6" element={<Signup6 />} />
        <Route path="/signup7" element={<Signup7 />} />
        <Route path="/signup8" element={<Signup8 />} />

        <Route
          path="/home"
          element={
            <PrivateRoutes>
              <MyHome />
            </PrivateRoutes>
          }
        />

        <Route
          path="/home/profile"
          le
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />

        <Route
          path="/home/goal"
          element={
            <PrivateRoutes>
              <Goals />
            </PrivateRoutes>
          }
        />

        <Route
          path="/home/checkin"
          element={
            <PrivateRoutes>
              <CheckIn />
            </PrivateRoutes>
          }
        />

        <Route
          path="/food/addfood"
          element={
            <PrivateRoutes>
              <AddFood />
            </PrivateRoutes>
          }
        />

        <Route
          path="/food/dairy"
          element={
            <PrivateRoutes>
              <FoodDiary />
            </PrivateRoutes>
          }
        />

        <Route
          path="/reports"
          element={
            <PrivateRoutes>
              <Reports />
            </PrivateRoutes>
          }
        />

        <Route
          path="/reports/export"
          element={
            <PrivateRoutes>
              <Exports />
            </PrivateRoutes>
          }
        />
        <Route
          path="/reports/weekly-digest"
          element={
            <PrivateRoutes>
              <WeeklyDigest />
            </PrivateRoutes>
          }
        />
        <Route
          path="/exercise"
          element={
            <PrivateRoutes>
              <ExerciseMain />
            </PrivateRoutes>
          }
        />
        <Route
          path="/exercise/database"
          element={
            <PrivateRoutes>
              <Database_calBurn />
            </PrivateRoutes>
          }
        />
        <Route
          path="/exercise/myexercise"
          element={
            <PrivateRoutes>
              <MyExercisePage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/exercise/add_to_diary"
          element={
            <PrivateRoutes>
              <AddToDairy />
            </PrivateRoutes>
          }
        />
        <Route
          path="/exercise/create-exercise"
          element={
            <PrivateRoutes>
              <CreateNewMyExercise />
            </PrivateRoutes>
          }
        />
        <Route
          path="/exercise/add-cardio"
          element={
            <PrivateRoutes>
              <CardioVasular />
            </PrivateRoutes>
          }
        />
        <Route
          path="/exercise/add-strength"
          element={
            <PrivateRoutes>
              <StrengthTraining />
            </PrivateRoutes>
          }
        />
      </Routes>
      <Footer />
    </Box>
  );
};

export default AllRoutes;
