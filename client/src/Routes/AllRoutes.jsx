import React from 'react'
import {Box} from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import Reports from '../pages/Reports/Reports'
import Exports from '../pages/Reports/Exports'
import WeeklyDigest from '../pages/Reports/WeeklyDigest'
const AllRoutes = () => {
  return (
    <Box>
    <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/reports/export' element={<Exports />} />
        <Route path='/reports/weekly-digest' element={<WeeklyDigest />} />
    </Routes>
    </Box>
  )
}

export default AllRoutes