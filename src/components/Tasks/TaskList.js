import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

// columns của bảng dữ liệu


// rows của bảng dữ liệu
// const rows = [
//     { id: 1, task_name: 'Task 1', status: 'In Progress', score: '1' },
//     { id: 2, task_name: 'Task 2', status: 'Completed', score: '1' },
//     { id: 3, task_name: 'Task 3', status: 'In Progress', score: '2' },
//     { id: 4, task_name: 'Task 4', status: 'In Progress', score: '2' },
//     { id: 5, task_name: 'Task 5', status: 'In Progress', score: '2' },
//     { id: 6, task_name: 'Task 6', status: 'In Progress', score: '2' },
//     { id: 7, task_name: 'Task 7', status: 'In Progress', score: '2' },
//     { id: 8, task_name: 'Task 8', status: 'In Progress', score: '2' },
//     { id: 9, task_name: 'Task 9', status: 'In Progress', score: '2' },
//     { id: 10, task_name: 'Task 10', status: 'In Progress', score: '2' },
//     { id: 11, task_name: 'Task 11', status: 'In Progress', score: '2' },
//     { id: 12, task_name: 'Task 12', status: 'In Progress', score: '2' },
//     { id: 13, task_name: 'Task 13', status: 'In Progress', score: '2' },
//     { id: 14, task_name: 'Task 14', status: 'In Progress', score: '2' },
// ];

// component DataGrid
function TaskList() {
    const user_id = 1 // hardcode here, change when different user login
    const [rows, setRows] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'task_name', headerName: 'Title', width: 250,
            renderCell: (params) => {
                // const aa = { "filter_task": rows.filter((row) => { row.id == params.row.id }) }
                // console.log('aa', aa)
                return (
                    <Link
                        to={`/task/${params.row.id}`}
                        state={{rows}}
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