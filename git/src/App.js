import logo from "./logo.svg";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import coin from './bit.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs="auto">
          <h3>DIGITAL INVEST LAB</h3>
        </Grid>
        
      </Grid>
      <br />
      <Grid item xs="auto" spacing>
          <h5>Institutional-level crypto platform </h5>
        </Grid>
    </Box>
    </div>
  )
}

export default App;
