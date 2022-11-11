import React from "react";
import "./food.css";
import HeadDate from "./HeadDate";

const FoodDiary = () => {
  return (
    <div className="fooddiaryDiv">
      <div className="foodDiaryBox">
        <HeadDate />
        <div className="breakfast">
          <div>
            <h2>Breakfast</h2>
            <p>Add Food | Quick Tools</p>
          </div>
          <div className="chart">
            <div>
              <h5>Calories</h5>
              <p>kcal</p>
            </div>
            <div>
              <h5>Carbs</h5>
              <p>g</p>
            </div>
            <div>
              <h5>Fat</h5>
              <p>g</p>
            </div>
            <div>
              <h5>Protein</h5>
              <p>g</p>
            </div>
            <div>
              <h5>Sodium</h5>
              <p>mg</p>
            </div>
            <div>
              <h5>Sugar</h5>
              <p>g</p>
            </div>
          </div>
        </div>

        <div className="lunch">
          <h2>Lunch</h2>
          <p>Add Food | Quick Tools</p>
        </div>

        <div className="dinner">
          <h2>Dinner</h2>
          <p>Add Food | Quick Tools</p>
        </div>

        <div className="snacks">
          <h2>Snacks</h2>
          <p>Add Food | Quick Tools</p>
        </div>

        <div className="table">
          <table>
            <tr className="total">
              <td>Totals</td>
              <td className="data">0</td>
              <td className="data">0</td>
              <td className="data">0</td>
              <td className="data">0</td>
              <td className="data">0</td>
              <td className="data">0</td>
            </tr>
            <tr className="total">
              <td>Your Daily Goals</td>
              <td className="data">1,370</td>
              <td className="data">171</td>
              <td className="data">46</td>
              <td className="data">69</td>
              <td className="data">2,300</td>
              <td className="data">51</td>
            </tr>
            <tr className="total">
              <td>Remaining</td>
              <td className="data remaining">1,370</td>
              <td className="data remaining">171</td>
              <td className="data remaining">46</td>
              <td className="data remaining">69</td>
              <td className="data remaining">2,300</td>
              <td className="data remaining">51</td>
            </tr>
            <tr>
              <th></th>
              <th className="category">Calories</th>
              <th className="category">Carbs</th>
              <th className="category">Fat</th>
              <th className="category">Protein</th>
              <th className="category">Sodium</th>
              <th className="category">Sugar</th>
            </tr>
          </table>
        </div>

        <h5>When you're finished logging all foods and exercise for this day, click here:</h5>
        <button className="btn">Complete This Entry</button>
      
       
      </div>
      <div className="lastsection">
           <div className="waterBlock">
             <h2>Water Consumption</h2>
             <h4>Today's Water Total</h4>
             <p>Aim to drink at least 8 cups of water today. 
                You can quick add common sizes or enter a custom amount. 
                 <span> Change Units</span>
             </p>

             <h4>Quick Add</h4>
             <div className="cupData"><p> + 1cup </p> <p> +2 cups </p>  <p>+4 cups</p></div>

             <h4>Add Custom</h4>
             <div className="customInfo"><input/> cups <button className="btnAdd">Add</button></div>

           </div>

           <div className="imageinfo">            
                <h3> 5 cups</h3>
                <div className="imageDiv"><img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2k5bFGmN1u6J4qG251iDYrS74dT5SxBIO2A&usqp=CAU' /></div>           
           </div>

           <div className="notesection">
             <h3>Today' Food Notes</h3>
             <input />
           </div> 
        </div>
    </div>
  );
};

export default FoodDiary;
