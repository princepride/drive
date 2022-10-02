import React from 'react';
import { ContextProvider } from './contexts/ContextProvider';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import { Login, Home } from "./components"
import { Sidebar, Transport, Messages, Account } from './';
const App = () => {
  return (
    <ContextProvider >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />}>
        </Route>
      </Routes>
    </ContextProvider>
  )
}

export default App