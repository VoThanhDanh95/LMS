import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";

const myTheme = createTheme({
});

const RichTextEditor = (props) => {
    return (
        <ThemeProvider theme={myTheme}>
            <MUIRichTextEditor
                {...props}
                // label="Type something here..."
                // onChange={props.handleChange}
                // value={props.value}
                // inlineToolbar={false}
                // readOnly={false}
                // controls={}
            />
        </ThemeProvider>
    )
}

export default RichTextEditor