import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import { json, redirect } from 'react-router-dom';
import { Form } from 'react-router-dom'

function AnswerForm(props) {
    let {
        inputs,
        setInputs,
        task_id
    } = props
    // const [inputs, setInputs] = useState(props.solution);

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };

    const handleClickNumber = (index, event) => {
        console.log('index', index)
        console.log('event', event)
        event.preventDefault()
    }

    return (
        <div className='container'>
            <Form id="answerForm" method='post' action={`/tasks/${task_id}`}>
                {inputs.map((input, index) => (
                    <div key={index}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        backgroundColor: props.colors[index]
                                    }}
                                    onClick={(event) => {
                                        console.log('hihi')
                                        props.onClick(index, "red")
                                    }}
                                >
                                    {index + 1000}
                                </Button>
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    id={`${index}`}
                                    label={`Câu  ${index}`}
                                    name={`${index}`}
                                    // helperText="Some important text"
                                    variant="outlined"
                                    onChange={(event) => handleInputChange(index, event)}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>

                    </div>
                ))}
                {/* <button type="submit">Nộp bài</button> */}
            </Form>
        </div>
    );
}

export default AnswerForm;


export async function action({ request, params }) {
    const {task_id} = params
    const user_id = 1 // todo fix hardcode here


    const data = await request.formData();

    console.log('params')
    const submissionData = {}
    for (const pair_idx_value of data.entries()) {
        submissionData[pair_idx_value[0]] = pair_idx_value[1]
    }
    const response = await fetch(`http://localhost:5000/users/${user_id}/submission/${task_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
    });
    return redirect('/tasks')
    // return ''
    // return redirect('')

    // const response = await fetch('http://localhost:8080/events', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(eventData),
    // });

    // if (!response.ok) {
    //     throw json({ message: 'Could not save event.' }, { status: 500 });
    // }

    // return redirect('/events');
}