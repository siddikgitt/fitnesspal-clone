import { Box, Button,  Flex, Text } from '@chakra-ui/react'
import React from 'react'
import AllTimeStatsCard from '../../Components/Reports/Card/AllTimeStatsCard'
import CalorieGraph from '../../Components/Reports/Card/CalorieGraph'
import FoodLoggedCard from '../../Components/Reports/Card/FoodLoggedCard'
import MacronutrientGraph from '../../Components/Reports/Card/MacronutrientGraph'
import PremiumCard from '../../Components/Reports/Card/PremiumCard'
import WeeklyCard from '../../Components/Reports/Card/WeeklyCard'
import WeeklyLogStatus from '../../Components/Reports/Card/WeeklyLogStatus'

const WeeklyDigest = () => {
  return (
    <Box>
    <Box h='150px' bg='blue' color='white'>
      <Flex direction={["column","column","row"]} w='70%' m='auto' h='100px' gap='20px' align='center'>
     <Box><Text fontSize='25px'>October 31 -November 6,2022</Text></Box> 
     <Box><Button variant='solid' borderRadius='20px' color='blue'>View Past Record</Button></Box> 
      </Flex>
    </Box>
    <Box w={["90%","90%","70%"]} m='auto' position='relative' top={["0px","0px","-70px"]}>
      <Flex direction={["column","column","row"]} gap='20px'>
      <WeeklyCard />
      <CalorieGraph />
      </Flex>
    </Box>
    <Box w={["90%","90%","70%"]} m='auto'>
      <Flex direction={["column","column","row"]} gap='20px'>
        <PremiumCard />
       <FoodLoggedCard />
      </Flex>
    </Box>
    <Box>
      <MacronutrientGraph />
    </Box>
    <Box w={["90%","90%","70%"]} m='auto' >
      <Flex direction={["column","column","row"]} gap='20px'>
      <AllTimeStatsCard />
      <WeeklyLogStatus /> 
      </Flex>
    </Box>
    </Box>
  )
}

export default WeeklyDigest