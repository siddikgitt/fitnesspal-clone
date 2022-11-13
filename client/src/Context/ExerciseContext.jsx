import React, { createContext, useEffect, useState } from 'react'
export const  ExerciseContext = createContext()



function ExerciseContextProvider({children}) {
const [Exercisedata,setExercisedata]=useState({})

 
useEffect(()=>{
console.log(Exercisedata);
},[Exercisedata])

  return (
   <ExerciseContext.Provider value={{Exercisedata,setExercisedata}}>
    {children}
   </ExerciseContext.Provider>
  )
}

export default ExerciseContextProvider