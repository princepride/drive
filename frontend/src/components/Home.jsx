import React, { useState, useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { HiMenu } from 'react-icon/hi';
//import { AiFillCloseCircle } from 'react-icon/ai';
import { Link, Route, Routes } from 'react-router-dom';
import { Sidebar, Transport, Messages, Account,} from '.';

const Home = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={(<Transport />)} />
        <Route path="/Transport" element={(<Transport />)} />
        <Route path="/Messages" element={(<Messages />)} />
        <Route path="/Account/*" element={(<Account />)} >
        </Route>
      </Routes>
    </>
  )
}

export default Home