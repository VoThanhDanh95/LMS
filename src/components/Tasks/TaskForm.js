import { Form } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { TextField, InputLabel, Select, MenuItem, Button, FormControl } from '@mui/material';
import { useSubmit } from 'react-router-dom'
import MUIRichTextEditor from "mui-rte";
import { useState, useRef } from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { convertToRaw } from 'draft-js'
import RichTextEditor from '../RichTextEditor';

const old_rte = '{"blocks":[{"key":"bh4cu","text":"abc","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a2uk3","text":"def","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3cro8","text":"a","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5pse7","text":"a","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c0og3","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'
// const myTheme = createTheme({
//     // Set up your custom MUI theme here
//     // need this to prevent bug
// });


function TaskForm({ method, task }) {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    function cancelHandler() {
        navigate('..');
    }

    // const handleSave = () => {
    //     console.log("editorRef.current ", editorRef.current)
    //     const contentState = editorRef.current.getContentState();
    //     console.log("???")
    //     // const contentState = editorRef.current.getContentState();
    //     // setContent(contentState);
    //     // const contentJson = JSON.stringify(contentState);
    //     // console.log(contentJson); // in ra chuỗi JSON để lưu vào cơ sở dữ liệu
    // };
    // const onSave = (data) => {
    //     console.log('data', data)
    // }
    // const handleLoad = () => {
    //     console.log('loaded?')
    //     // const contentState = JSON.parse(contentJson); // đọc chuỗi JSON từ cơ sở dữ liệu
    //     // editorRef.current.setContentState(contentState);
    // };

    const handleChange = (newValue) => {
        setValue(newValue);
        console.log('new value', newValue)
        // console.log('new value', convertToRaw(newValue));
    }
    const submit = useSubmit()

    const onCreateTask = (event) => {
        event.preventDefault()
        const form = event.target.form;
        const formData = new FormData(form);
        const json_rte = JSON.stringify(convertToRaw(value.getCurrentContent()))
        formData.append("task_detail", json_rte);
        submit(formData, { method: "post", action: `/tasks/new` })
    }


    return (
        <>
            <Container>
                <h2> New Task </h2>
                <Row>
                    <Col md={8}>
                        <RichTextEditor 
                            label="Type something here..."
                            onChange={handleChange}
                            // value={old_rte}
                            inlineToolbar={false}
                        />
                        {/* <ThemeProvider theme={myTheme}>
                            <MUIRichTextEditor
                                label="Type something here..."
                                onChange={handleChange}
                                value={old_rte}
                                inlineToolbar={false}
                                // readOnly={false}
                                // controls={}
                            />
                        </ThemeProvider> */}
                    </Col>
                    <Col md={2}>
                        <Form id="taskForm" method='post' >
                            <TextField
                                style={{ width: "100%", margin: "5px" }}
                                type="text"
                                label="name"
                                variant="outlined"
                                name="task_name"
                            />
                            <br />
                            <FormControl 
                                style={{ width: "100%", margin: "5px" }}
                            >
                                <InputLabel id="select-label">Type</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="demo-simple-select"
                                    label="TaskType"
                                    name="task_type"
                                >
                                    <MenuItem value={"Audio"}>Audio</MenuItem>
                                    <MenuItem value={"Reading"}>Reading</MenuItem>
                                </Select>
                            </FormControl>
                            <br />
                            <TextField
                                style={{ width: "100%", margin: "5px" }}
                                type="text"
                                label="Audio URL"
                                variant="outlined"
                                name="audio_url"
                            />
                            <br />
                            <TextField
                                style={{ width: "100%", margin: "5px" }}
                                // style={{ width: "200px", margin: "5px" }}
                                type="img_url"
                                label="Image URL"
                                name="img_url"
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                style={{ width: "100%", margin: "5px" }}
                                // style={{ width: "200px", margin: "5px" }}
                                type="text"
                                label="Solution Multi Line"
                                name="solution"
                                variant="outlined"
                                maxRows={10}
                                multiline

                            />

                            <div>
                                <button type="button" onClick={cancelHandler}>
                                    Cancel
                                </button>
                                <button type="submit" onClick={onCreateTask}>Save</button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TaskForm