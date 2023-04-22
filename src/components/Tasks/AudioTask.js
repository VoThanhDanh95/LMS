import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnswerForm from '../AnswerForm';
import AudioPlayer from '../AudioPlayer';

import { Button } from '@mui/material';

import React, { useState, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
// import ImageResize from 'quill-image-resize-module';
import 'react-quill/dist/quill.snow.css';
import Delta from "quill-delta";
import AnswerTrack from '../AnswerTrack';
// import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
// import ImageResize from 'quill-image-resize-module--fix-imports-error';
// Quill.register('modules/imageResize', ImageResize);




function AudioTask(props) {


    const [colors, setColors] = useState(props.solution.map(e => 'blue'));

    console.log('colors', colors)
    const handleButtonClick = (index, newColor) => {
        const newColors = [...colors]
        newColors[index] = 'red'
        console.log("newColors ", newColors)
        setColors(newColors)
    }

    const quillRef = useRef(null)
    const [content, setContent] = useState(new Delta());
    const [jsonStr, setJsonStr] = useState("")
    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'align': [] }],
                [{ 'header': 1 }, { 'header': 2 }, { 'header': 3 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link', 'image'],
                ['clean']
            ],
            handlers: {
                'image': () => {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.onchange = () => {
                        const file = input.files[0];
                        const formData = new FormData();
                        formData.append('image', file);
                        // Upload image to server and get url
                    };
                    input.click();
                }
            }
        },
        // imageResize: {}
    };
    const handleContentChange = (value) => {
        console.log('value: ', value)
        setContent(value);
    };

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
                    />
                </Col>
                <Col md={2}>
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
