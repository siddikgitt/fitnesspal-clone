import { Box, Center, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { ExerciseContext } from "../../../Context/ExerciseContext";

const WeightGraph = ({ datakey }) => {
  const [calories, setCalories] = useState([123, 3, 4, 534, 54, 6]);
  const { Exercisedata, setExercisedata } = useContext(ExerciseContext);
  let arr = new Array(7).fill(0);
  const data1 = [];

  const dummydata = [
    {
      date: "11/03",
      Weight: null,
      Calories: null,
    },
    {
      date: "11/04",
      Weight: null,
      Calories: null,
    },
    {
      date: "11/05",
      Weight: null,
      Calories: null,
    },
    {
      date: "11/06",
      Weight: 0,
      Calories: 2,
    },
    {
      date: "11/07",
      Weight: 62,
      Calories: 20,
    },
    {
      date: "11/08",
      Weight: 62,
      Calories: 40,
    },
  ];
  const [data, setdata] = useState(dummydata);

  useEffect(() => {
    let sum = Exercisedata?.exercise?.map((e) => e.calories);
    setCalories(sum);
  }, [Exercisedata]);
  console.log(calories, "cal");

  function getdatatoshow() {
    for (let i = 0; i < calories.length; i++) {
      arr[i] = calories[i];
    }
    for (let i = 0; i < 7; i++) {
      let wt = 60;

      data1.push({
        date: `11/${i + 13}`,
        Weight: 70 + Math.random() * 10 * i + 5,
        Calories: 8,
      });
    }

    setdata(data1);
  }

  useEffect(() => {
    getdatatoshow();
  }, []);

  return (
    <Box m="40px 0" h="500px">
      <Center>
        <Text fontSize="28px">{datakey || "Weight"}</Text>
      </Center>
      <Box>
        <ResponsiveContainer w="100%" aspect={3}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Legend />
            <Line dataKey={datakey || "Weight"} stroke="orange" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default WeightGraph;
