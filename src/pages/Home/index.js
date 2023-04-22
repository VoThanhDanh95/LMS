import { Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyGrid = styled(Grid)({
    flexGrow: 1,
});

const MyPaper = styled(Paper)({
    height: 100,
});
const data = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5', 'Element 6', 'Element 7', 'Element 8', 'Element 9', 'Element 10'];

function MyComponent() {
    return (
        <Grid container spacing={2} wrap="wrap">
            {Array.from({ length: 15 }).map((_, index) => (
                <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
                    <Button variant="contained" color="primary" size="small" shape="circular">
                        {index + 1}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
}
export default MyComponent