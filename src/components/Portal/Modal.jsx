import React from 'react'
import Portal from './Portal'

const Modal = ({ onclose, children }) => {
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
    textAlign: "center"
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
  }
};

  return (
      <Portal>
            <div style={styles.overlay}>
              <div style={styles.modal}>
                  {children}
                  <button onClick={onclose} style={styles.closeBtn}>Close</button>
                 <h1> This is  a portal </h1>
              </div>
            </div>
      
      </Portal>
  )
}

export default Modal