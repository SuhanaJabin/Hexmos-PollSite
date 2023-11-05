import React from 'react'
import "./mystyle.css";
import Table from "./Table"

function Maincomp() {
  return (
    <div style={{padding:"1rem"}}>
    
    <div className='table'>
    {/* <table style={{padding:"1rem"}}>
          <tr >
            <th>Number</th>
            <th>Poll Question</th>
            <th>Total votes</th>
            <th>Tags</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Will India win ICC World Cup next time?</td>
            <td>22</td>
            <td>Sports,Games</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              What will be the total corona casualities by the next year
              globally?
            </td>
            <td>10</td>
            <td>Health,Politics</td>
          </tr>
        </table> */}
        <Table />
    </div>
    
    </div>
  )
}

export default Maincomp