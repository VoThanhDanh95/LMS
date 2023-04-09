import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import AudioPlayer from '../../components/AudioPlayer';
import TaskList from '../../components/TaskList';

const sample_input = [
    { 'value': 0 },
    { 'value': 1 },
    { 'value': 2 },
    { 'value': 3 },
    { 'value': 4 },
    { 'value': 5 },
]

function Form() {
    const [inputs, setInputs] = useState(sample_input);

    const handleAddInput = () => {
        setInputs([...inputs, { value: '' }]);
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index].value = event.target.value;
        setInputs(newInputs);
    };

    const handleClickNumber = (index, event) => {
        console.log('index', index)
        console.log('event', event)
        event.preventDefault()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        // submit form data
    };

    return (
        <TaskList />
        // <AudioPlayer src={"https://assets.mixkit.co/active_storage/sfx/1714/1714-preview.mp3"}> 
        // </AudioPlayer>
    );
}



export default Form;