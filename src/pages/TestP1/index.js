// TestP1.js
import { Outlet } from "react-router-dom";
import React from "react";

const TestP1 = () => {
    console.log('TestP1 page?')
    return (
        <>
        <h1>This is the TestP1 page</h1>
        <Outlet />
        </>
    )
};

export default TestP1;