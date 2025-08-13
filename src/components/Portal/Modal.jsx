import React, { useContext } from "react";
import Portal from "./Portal";
import CardContext from "../../store/CardContext";

const Modal = ({ onclose }) => {
  const { cartItems, updateQuantity } = useContext(CardContext);

  const itemsArray = Object.values(cartItems);
  const totalAmount = itemsArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    position: "relative",
    width: "400px",
    textAlign: "center",
  },
  closeBtn: {
     position: "absolute",
      top: "10px",
      right: "10px",
      background: "red",
      color: "#fff",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      borderRadius: "4px",
    },
  btn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius:"5px"
  }
};

    


  return (
    <Portal>
      <div style={styles.overlay}>
        <div style={styles.modal}>
          {itemsArray.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {itemsArray.map((item) => (
                <div key={item.id} style={{ marginBottom: "10px",display:"flex",  justifyContent:"space-around",borderBottom:"2px solid red"}}>
                  <div ><h4>{item.name}</h4>
                  <p>
                    ${item.price} × {item.quantity} = $
                    {item.price * item.quantity}
                  </p></div>
                  <div style={{marginTop:"20px"}}>
                    <button style={styles.btn} onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    –
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button  style={styles.btn} onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                    </button>
                  </div>
                </div>
              ))}
              <h3>Total: {totalAmount.toFixed(2)}</h3>
            </>
          )}
          <button onClick={onclose} style={styles.closeBtn}>
            Close
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;



   