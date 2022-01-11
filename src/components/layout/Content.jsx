import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/home" element={ <Home /> } />
            <Route path="/param/:id" element={ <Param /> } />
            <Route path="/about" element={ <About /> } />
        </Routes>
    </main>
)

export default Content