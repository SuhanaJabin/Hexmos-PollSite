import React from "react";
import "../mystyle.css";
import Heading from "../Heading";
import Mainheading from "../Mainheading";
import Input from "../Input";
function VotePoll() {
  return (
    <div>
      {" "}
      <Mainheading name="Vote on this poll" />
      <div class="main">
        <Heading />
        <div class="">
          <div class="page">
            <div>
              <h3>Will India win ICC Worldcup next time?</h3>
            </div>
            <Input text="Yes" />
            <Input text="No" />
            <button style={{ marginTop: "1rem" }} class="btn3">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotePoll;
