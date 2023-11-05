import React from "react";
import { Pie } from "../Pie";
import Heading from "../Heading";
import Mainheading from "../Mainheading";
import STable from "../SecondData";

function PollDetail() {
  return (
    <div>
      <Mainheading name="Poll Details" />
      <div class="main">
        {/* <div class="first-box">
    <h2>FlyWeight Polls</h2>
  </div> */}
        <Heading />

        <div class="main-div" style={{ padding: "1rem" }}>
          <div class="box">
            <div class="box1">
              <div>
                <Mainheading name="Will India win the ICC Worldcup this time?" />
              </div>
              <button style={{ marginBottom: "1rem" }} class="btn2">
                <h4>Vote on this Poll</h4>
              </button>
              <STable />

              <p>Tags:Sports,Games</p>
            </div>
            <div class="box2">
              <Pie />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollDetail;
