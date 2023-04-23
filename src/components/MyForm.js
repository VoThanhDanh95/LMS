import { useNavigate, Form } from 'react-router-dom';
import { json, redirect } from 'react-router-dom';

// import classes from './MyForm.module.css';

function MyForm({ method, event }) {
    const navigate = useNavigate();
    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form id="myform" method='post'>
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={event ? event.title : ''}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    required
                    defaultValue={event ? event.image : ''}
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    defaultValue={event ? event.date : ''}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    defaultValue={event ? event.description : ''}
                />
            </p>
            <div >
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>Save</button>
            </div>
        </Form>
    );
}

export default MyForm;

export async function action({ request, params }) {
    console.log('request ', request)
    const data = await request.formData();

    console.log("action data", data)

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    };
    console.log('eventData ', eventData)
    return redirect('/about')

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