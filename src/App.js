import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Collection from './components/Collection'

const App = () => {
  return <>
    <BrowserRouter>
      <Collection />
    </BrowserRouter>
  </>
}

export default App