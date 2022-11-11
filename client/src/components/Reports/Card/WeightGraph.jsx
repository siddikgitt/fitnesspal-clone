import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend} from "recharts";

const WeightGraph = ({datakey}) => {
    const data=[{
        date:"11/03",
        Weight:null
      },{
        date:"11/04",
        Weight:null
      },{
        date:"11/05",
        Weight:null
      },{
        date:"11/06",
        Weight:0
      },{
        date:"11/07",
        Weight:62
      },{
        date:"11/08",
        Weight:62
      }]
  return (
    <Box m='40px 0' h='500px'>
          <Center>
          <Text fontSize='28px'>{datakey || "Weight"}</Text>
          </Center>   
          <Box>
          <ResponsiveContainer w='100%' aspect={3}>
            <LineChart data={data}>
            <XAxis dataKey='date' />
            <YAxis />
            <Legend />
           <Line dataKey={datakey || "Weight"} stroke='orange'  />
            </LineChart>
          </ResponsiveContainer>
          </Box>
    </Box>
  )
}

export default WeightGraph




