import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

// columns của bảng dữ liệu
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'title', headerName: 'Title', width: 250,
        renderCell: (params) => (
            <Link to={`/tasks/${params.row.id}`}>{params.value}</Link>
        ),
    },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'dueDate', headerName: 'Due Date', width: 150 },
];

// rows của bảng dữ liệu
const rows = [
    { id: 1, title: 'Task 1', status: 'In Progress', dueDate: '2023-04-15' },
    { id: 2, title: 'Task 2', status: 'Completed', dueDate: '2023-04-17' },
    { id: 3, title: 'Task 3', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 4, title: 'Task 4', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 5, title: 'Task 5', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 6, title: 'Task 6', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 7, title: 'Task 7', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 8, title: 'Task 8', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 9, title: 'Task 9', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 10, title: 'Task 10', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 11, title: 'Task 11', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 12, title: 'Task 12', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 13, title: 'Task 13', status: 'In Progress', dueDate: '2023-04-20' },
    { id: 14, title: 'Task 14', status: 'In Progress', dueDate: '2023-04-20' },
];

// component DataGrid
function TaskList() {
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