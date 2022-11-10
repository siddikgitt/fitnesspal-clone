
import './App.css';
import CreateNewMyExercise from './components/ExerciseComp/CreateNewMyExercise';
import AddToDairy from './pages/ExercisePage/AddToDairy';
import Database_calBurn from './pages/ExercisePage/Database_calBurn';
import ExerciseMain from './pages/ExercisePage/ExerciseMain';
import MyExercisePage from './pages/ExercisePage/MyExercisePage';


function App() {
  return (
    <div>
 
    
    <Database_calBurn/>
    
     <MyExercisePage/>
     <CreateNewMyExercise/>
    </div>
  );
}

export default App;
