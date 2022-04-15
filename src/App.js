import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='dialogs/*' element={<DialogsContainer

                           /* store={props.store}*/
                        /> }/>
                        <Route path="/profile" element={ <Profile

                                /*store={props.store}
                                dispatch = {props.dispatch}*//>}
                        />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
};

export default App