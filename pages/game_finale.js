import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function finale() {

 /* useEffect()
  {
    axios
      .get(data.api+"/api/status")
      .then((response) => {
        if(!(localStorage.getItem('day')==3 || response.data.error))
              {
                
                Router.push('/game_finale')
              }
      })
  }*/
  return (
    <div>
      <Navbar />

      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontFamily: "'Russo One', sans-serif",
            margin: "190px auto",
          }}
        >
          <span className="flicker">Game is over!</span>
          <br />
          <span className="flicker">Thanks for participating !</span>
          <br />
          <span className="flicker">Results will be up soon !</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default finale;
