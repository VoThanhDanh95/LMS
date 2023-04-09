import React, { useState } from 'react';
import styles from './styles.module.css';
import { TextField, Button } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";


const sample_input = [
    { 'value': 0 },
    { 'value': 1 },
    { 'value': 2 },
    { 'value': 3 },
    { 'value': 4 },
    { 'value': 5 },
]

function AnswerForm(props) {
    const [inputs, setInputs] = useState(props.solution);

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
        <div className='container'>
            <form onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <div key={index}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={(event) => handleClickNumber(index, event)}
                                >
                                    {index + 1000}
                                </Button>
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    id={`${index}`}
                                    label={`Câu  ${index}`}
                                    // helperText="Some important text"
                                    variant="outlined"
                                    onChange={(event) => handleInputChange(index, event)}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>



                        {/* <TextField
                            id={index}
                            label="Helper text"
                            onChange={(event) => handleInputChange(index, event)}
                            helperText="Some important text"
                            variant="standard"
                        /> */}
                        {/* {inputs.length !== 1 && (
                            <button type="button" onClick={() => handleRemoveInput(index)}>
                                Xóa
                            </button>
                        )} */}
                    </div>
                ))}
                <button type="button" onClick={handleAddInput}>
                    Thêm
                </button>
                <button type="submit">Nộp bài</button>
            </form>
        </div>
    );
}

export default AnswerForm;