import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
        width: '450px',  // Increased width
        margin: '1px',
    },
    expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
        width: '450px',  // Increased width
        margin: '50px',
    },
    chartContainer: {
        width: '100%',
        height: '300px',  // Adjust height as needed
    },
}));



