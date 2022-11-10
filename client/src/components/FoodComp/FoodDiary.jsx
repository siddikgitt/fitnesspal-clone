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
            <div className="total">
                <h5>Totals</h5>
                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0</div>
            </div>
            <div className="goal">
                <h5>Your Daily Goal</h5>
                <div>1,370</div>
                <div>171</div>
                <div>46</div>
                <div>69</div>
                <div>2,300</div>
                <div>51</div>
            </div>
            <div className="remaining">
                <h5>Remaining</h5>
                <div>1,370</div>
                <div>171</div>
                <div>46</div>
                <div>69</div>
                <div>2,300</div>
                <div>51</div>
            </div>
            <div className="category">
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
                    <p>g</p>
                </div>
                <div>
                    <h5>Sugar</h5>
                    <p>g</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDiary;
