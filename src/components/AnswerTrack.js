import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    roundButton: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '14px',
        textTransform: 'none',
    },
});


const AnswerTrack = (props) => {
    const classes = useStyles();
    const colors = props.colors
    console.log('colors ', colors)
    return (
        <>
            <div>Part 1</div>
            <Grid container spacing={1} alignItems="left">
                {colors.map((color, index) => {
                    return (
                        <Grid item key={index} md={12/5}>
                            <button
                                className={classes.roundButton}
                                onClick={() => props.onClick(index, "red")}
                                style={{
                                    backgroundColor: colors[index],
                                }}
                                >
                                
                                {index}
                            </button>
                            {/* <Button
                                className={`${classes.roundButton} circular-button`}
                                variant="contained"
                                color="primary"
                                size="small"
                                style={{
                                    backgroundColor: colors[index],
                                }}
                                onClick={() => props.onClick(index, "red")}
                            >
                                {index}
                            </Button> */}
                        </Grid>
                    )
                })}


            </Grid>

            {/* {colors.map((color, index ) => {
                return (
                    <Button
                        key={index}
                        variant="contained"
                        color="primary"
                        style={{
                            backgroundColor: colors[index]
                        }}
                        onClick={() => props.onClick(index, "red")}
                    >
                        {index + 1000}
                    </Button>
                )
            })} */}
        </>

    )


}

export default AnswerTrack