import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import reportWebVitals from './reportWebVitals';
import VotePoll from './pages/VotePoll';
import Home from './pages/Home';
// import  PollDetail  from './pages/CreatePoll';
// import CreatePoll from './pages/PollDetail';
import NPollDetail from './pages/NPollDetail';
import NCreatePoll from './pages/NCreatePoll';
import First from './First';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="Home" element={<Home />} />
        <Route index element={<Home />} />
        {/* <Route path="PollDetail" element={<PollDetail />} /> */}
        <Route path="PollDetail" element={<NPollDetail />} />
        {/* <Route path="CreatePoll" element={<CreatePoll />} /> */}
        <Route path="CreatePoll" element={<NCreatePoll />} />
        <Route path="/poll/:id" element={<NPollDetail />} />
        <Route path="/VotePoll/:id" element={<VotePoll />} />
        <Route path="First" element={<First />} />
        <Route path="/VotePoll" element={<VotePoll />} />
     
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
