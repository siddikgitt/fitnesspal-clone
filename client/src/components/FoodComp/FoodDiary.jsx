import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchAllFoodDiary } from "../../api";
import "./food.css";
import FoodTable from "./FoodTable";
import HeadDate from "./HeadDate";

const FoodDiary = () => {
  const [data, setData] = useState([]);
  const searchData = async() => {
    const userID = localStorage.getItem("fitUserID");
    const param = { userID: userID };
    const res = await searchAllFoodDiary(param);
    setData(res.data)
    console.log(res.data);
  };

  useEffect(() => {
    searchData()
  }, [])
  // foor diary component where user can add food to his plan
  return (
    <Box m='auto'   w={{lg:"90%",md:'90%',sm:'100%',base:'140%'}}>
      <Box className="foodDiaryBox" p='2rem 1rem'  border={'1px solid lightgrey'} >
        <HeadDate />
        <div className="breakfast">
          <div>
            <h2>Breakfast</h2>
            <Link to="/food/addfood">
              <p
                onClick={() => {
                  localStorage.setItem("time", "breakfast");
                  searchData();
                }}
              >
                Add Food
              </p>
            </Link>
          </div>
        </div>

        <div className="lunch">
          <h2>Lunch</h2>
          <Link to="/food/addfood">
            <p
              onClick={() => {
                localStorage.setItem("time", "lunch");
              }}
            >
              Add Food
            </p>
          </Link>
        </div>

        <div className="dinner">
          <h2>Dinner</h2>
          <Link to="/food/addfood">
            <p
              onClick={() => {
                localStorage.setItem("time", "dinner");
              }}
            >
              Add Food
            </p>
          </Link>
        </div>

        <div className="snacks">
          <h2>Snacks</h2>
          <Link to="/food/addfood">
            <p
              onClick={() => {
                localStorage.setItem("time", "snacks");
              }}
            >
              Add Food
            </p>
          </Link>
        </div>

        <FoodTable data={data}/>

        <h5>
          When you're finished logging all foods and exercise for this day,
          click here:
        </h5>
        <button className="btn">Complete This Entry</button>
      </Box>
      <div className="lastsection">
        <div className="waterBlock">
          <h2>Water Consumption</h2>
          <h4>Today's Water Total</h4>
          <p>
            Aim to drink at least 8 cups of water today. You can quick add
            common sizes or enter a custom amount.
            <span> Change Units</span>
          </p>

          <h4>Quick Add</h4>
          <div className="cupData">
            <p> + 1cup </p> <p> +2 cups </p> <p>+4 cups</p>
          </div>

          <h4>Add Custom</h4>
          <div className="customInfo">
            <input /> cups <button className="btnAdd">Add</button>
          </div>
        </div>

        <div className="imageinfo">
          <h3> 5 cups</h3>
          <div className="imageDiv">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2k5bFGmN1u6J4qG251iDYrS74dT5SxBIO2A&usqp=CAU"
            />
          </div>
        </div>

        <div className="notesection">
          <h3>Today' Food Notes</h3>
          <input />
        </div>
      </div>
    </Box>
  );
};

export default FoodDiary;
