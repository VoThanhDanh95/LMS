import { json, redirect } from 'react-router-dom';
import TaskForm from '../../components/Tasks/TaskForm';


function NewTaskPage() {
    return <TaskForm />;
}

export default NewTaskPage;

export async function action({ request, params }) {
    const data = await request.formData();
    // const trick_data = Object.fromEntries(await request.formData());
    // console.log("trick_data ", trick_data)
    // for (const pair_idx_value of data.entries()) {
    //     console.log('lloooppping')
    //     console.log(pair_idx_value[0], pair_idx_value[1])
    // }

    const eventData = {
        task_name: data.get('task_name'),
        task_type: data.get('task_type'),
        audio_url: data.get('audio_url'),
        audio_url: data.get('audio_url'),
        img_url: data.get('img_url'),
        solution: JSON.stringify(data.get('solution').split("\n")),
        task_detail: data.get('task_detail'),
    };

    console.log('go to new task action', eventData)

    const response = await fetch('http://localhost:5000/tasks/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });

    // if (!response.ok) {
    //     throw json({ message: 'Could not save event.' }, { status: 500 });
    // }

    return redirect('/tasks');
}
