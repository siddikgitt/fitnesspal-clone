import "./App.css";
import CreateNewMyExercise from "./components/ExerciseComp/CreateNewMyExercise";
import FoodDatabase from "./components/ExerciseComp/FoodDatabase";
import My_Food from "./components/ExerciseComp/My_Food";
import Index from "./pages/ExercisePage";
import AddToDairy from "./pages/ExercisePage/AddToDairy";
import Database_calBurn from "./pages/ExercisePage/Database_calBurn";
import ExerciseMain from "./pages/ExercisePage/ExerciseMain";
import MyExercisePage from "./pages/ExercisePage/MyExercisePage";

function App() {
  return (
    <div>
      {/* <Database_calBurn /> */}

      <MyExercisePage />
      {/* <FoodDatabase /> */}
      {/* <My_Food /> */}
      <CreateNewMyExercise />
     
    </div>
  );
}

export default App;
