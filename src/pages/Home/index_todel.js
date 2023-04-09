import React, { useState } from 'react';
import styles from './styles.module.css';
import { TextField, Button } from '@mui/material';

function ContactForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="name"
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                id="email"
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />

            <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="standard"
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}

export default ContactForm;
