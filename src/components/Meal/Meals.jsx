import mealsData from "./MealsList";
import "./Meals.css";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import CardContext from "../../store/CardContext";
import React from "react";

const Meals = () => {
  let { cartItems, addToCart, updateQuantity } = useContext(CardContext);

  return (
    <div className="meals-container">
      {mealsData.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <div className="description">
              <div>
                <h3>{data.name}</h3>
                <i>{data.description}</i>
                <p className="price">
                  <b>${data.price}</b>
                </p>
              </div>
              <div className="amount">
                <div className="amount-div">
                  <h3>Amount</h3>
                  <input
                    type="number"
                    value={cartItems[data.id]?.quantity || 1}
                    onChange={(e) =>
                      updateQuantity(data.id, Number(e.target.value))
                    }
                    className="input"
                  />
                </div>
                <button
                  onClick={() => addToCart(data)}
                  className="add-btn"
                >
                  <FaPlus /> Add
                </button>
              </div>
            </div>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Meals;
