import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnswerForm from '../AnswerForm';
import AudioPlayer from '../AudioPlayer';
import { Button } from '@mui/material';
import React, { useState, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Delta from "quill-delta";
import AnswerTrack from '../AnswerTrack';
import { useSubmit } from 'react-router-dom'




function AudioTask(props) {
    const [colors, setColors] = useState(props.solution.map(e => 'blue'));
    const [inputs, setInputs] = useState(props.solution);
    const handleButtonClick = (index, newColor) => {
        const newColors = [...colors]
        newColors[index] = 'red'
        console.log("newColors ", newColors)
        setColors(newColors)
    }
    const quillRef = useRef(null)
    const [content, setContent] = useState(new Delta());
    const [jsonStr, setJsonStr] = useState("")

    const handleSave = () => {
        // const temp = quillRef.current.getEditor().getContents();
        // console.log(temp);

        console.log('content ', content)
        const quillData = quillRef.current.getEditor().getContents();
        const json = JSON.stringify(quillData);
        setJsonStr(json)
        console.log('json saved:', json)
        // const htmlContent = QuillDeltaToHtmlConverter(content);
        // console.log(htmlContent);
    }

    const handleClear = () => {
        setContent("");
    }

    const handleLoad = () => {
        console.log('json loaded: ', jsonStr)
        // quillRef.current.setContents(JSON.parse(jsonStr))
        setContent(JSON.parse(jsonStr))
    }

    const submit = useSubmit()

    const onAnswerSubmit = (event) => {
        event.preventDefault()
        const proceed = window.confirm("sure?")
        if (proceed) {
            submit(inputs, { method: "post", action: `/tasks/${props.task_id}` })
        } else {
            console.log('stay here')
        }
        console.log('submited', inputs)
    }

    console.log("props audio tasks ", props)
    return (

        <Container>
            <Row>
                <AudioPlayer {...props}></AudioPlayer>
            </Row>
            <Row>
                <Col md={5}>
                    <ReactQuill
                        ref={quillRef}
                        value={content}
                        onChange={setContent}
                        modules={{ toolbar: true }}
                        placeholder="Write something amazing..."
                    />
                    <button onClick={handleSave}>Lưu nội dung</button>
                    <button onClick={handleClear}>Xóa</button>
                    <button onClick={handleLoad}>Load</button>

                </Col>
                <Col md={5}>
                    <AnswerForm
                        {...props}
                        colors={colors}
                        onClick={handleButtonClick}
                        inputs={inputs}
                        setInputs={setInputs}
                    />
                </Col>
                <Col md={2}>
                    <button form='answerForm' onClick={onAnswerSubmit}>Nộp bài</button>
                    <AnswerTrack
                        colors={colors}
                        onClick={handleButtonClick}
                    />


                    {/* {props.solution.map((sol, index) => {
                        return (
                            <Button
                                key={index}
                                variant="contained"
                                color="primary"
                                style={{
                                    backgroundColor: colors[index]
                                }}
                                onClick={handleButtonClick}
                            >
                                {index + 1000}
                            </Button>
                        )
                    })} */}
                </Col>
            </Row>
        </Container>
    );
}

export default AudioTask;
