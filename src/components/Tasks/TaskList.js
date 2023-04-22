import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const dummy_data = [
    {
        "id": 1,
        "user_id": 1,
        "task_id": 1,
        "created_at": null,
        "score": 1,
        "due_date": null,
        "status": "InProgress",
        "name": "tester1",
        "gender": "male",
        "role_id": 1,
        "last_active": null,
        "picture": null,
        "task_name": "task1",
        "task_type": "audio",
        "audio_url": "https://assets.mixkit.co/active_storage/sfx/1714/1714-preview.mp3",
        "img_url": null,
        "solution": [
            {
                "value1": 1
            }
        ],
        "created_time": null
    },
    {
        "id": 3,
        "user_id": 1,
        "task_id": 3,
        "created_at": null,
        "score": 5,
        "due_date": null,
        "status": "InProgress",
        "name": "tester1",
        "gender": "male",
        "role_id": 1,
        "last_active": null,
        "picture": null,
        "task_name": "task3",
        "task_type": "audio",
        "audio_url": "/assets/audio/Track4.mp3",
        "img_url": null,
        "solution": [
            {
                "value1": 1
            },
            {
                "value2": 2
            },
            {
                "value3": 3
            }
        ],
        "created_time": null
    },
    {
        "id": 4,
        "user_id": 1,
        "task_id": 4,
        "created_at": null,
        "score": 6,
        "due_date": null,
        "status": "Completed",
        "name": "tester1",
        "gender": "male",
        "role_id": 1,
        "last_active": null,
        "picture": null,
        "task_name": "task4",
        "task_type": "audio",
        "audio_url": "/assets/audio/Track5.mp3",
        "img_url": null,
        "solution": [
            {
                "value1": 1
            },
            {
                "value2": 2
            },
            {
                "value3": 3
            },
            {
                "value4": 4
            }
        ],
        "created_time": null
    }
]

// component DataGrid
function TaskList() {
    const user_id = 1 // hardcode here, change when different user login
    const [rows, setRows] = useState(dummy_data)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'task_name', headerName: 'Title', width: 250,
            renderCell: (params) => {
                // const aa = { "filter_task": rows.filter((row) => { row.id == params.row.id }) }
                // console.log('aa', aa)
                return (
                    <Link
                        to={`${params.row.id}`}
                        state={{ rows }}
                    >
                        {params.value}
                    </Link>
                )
            },
        },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'score', headerName: 'Score', width: 150 },
    ];
    useEffect(() => {
        const fetchData = async () => {
            const f_url = `http://localhost:5000/users/${user_id}/tasks`
            const response = await axios.get(f_url);
            console.log('response.data', response.data);
            setRows(response.data)
        };

        fetchData();
    }, [user_id]);


    return (
        <div style={{ height: 400, width: '80%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5, page: 0 },
                    },
                }}
                pageSizeOptions={[5, 10, 25]}
                sx={{
                    ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel": {
                        "margin-top": "1em",
                        "margin-bottom": "1em"
                    }
                }}
            />
        </div>
    );
}

export default TaskList