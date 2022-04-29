import React, { useEffect, useState } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import MeetLogin from '../page/MeetLogin/MeetLogin';
import MeetScreen from '../page/MeetScreen/MeetScreen';
export default function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/meet" element={<MeetScreen />} />
                <Route path="/" element={<MeetLogin />} />
            </Routes>
        </BrowserRouter>
    )
}
