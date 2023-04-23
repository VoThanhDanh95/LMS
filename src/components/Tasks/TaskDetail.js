import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import AudioTask from './AudioTask';
import axios from 'axios';

export default function TaskDetail(props) {
    const { task_id } = useParams()
    const [task, setTask] = useState(null);
    const location = useLocation();
    const { rows } = location.state
    const task_detail = rows.filter((row) => row.id == task_id)[0]
    console.log('props in task dettail ', props)
    console.log("task_detail ", task_detail)


    // // console.log("useParams() ", useParams())
    // // console.log('location.state' , location.state);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const f_url = `http://localhost:5000/tasks/${task_id}`
    //         const response = await axios.get(f_url);
    //         console.log('response.data' , response.data);
    //     };

    //     fetchData();
    // }, [task_id]);


    // console.log("task_id ", task_id)
    return (
        <AudioTask
            task_id={task_detail.task_id}
            audio_url={task_detail.audio_url}
            solution={task_detail.solution}
        />
    )
}