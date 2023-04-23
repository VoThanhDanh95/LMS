// About.js
import React from "react";
import MyForm from "../../components/MyForm";
import { useState } from "react";
import { useSubmit } from 'react-router-dom'


const About = () => {
    console.log('about page?')
    const submit = useSubmit()


    const onSubmit = (e) => {
        e.preventDefault()
        const proceed = window.confirm("sure?")
        console.log('proceed: ', proceed)
        if (proceed) {
            submit(null, { method: "post", action: "/about" })
        } else {
            console.log('stay here')
        }
    }

    return (
        <>
            <MyForm />
            <button form='myform' onClick={onSubmit}>Submit outside</button>
            {/* <button type="submit" form="my-form">
                Submit from About
            </button> */}
        </>
    )
};

export default About;