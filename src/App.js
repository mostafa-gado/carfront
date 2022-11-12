import logo from './logo.svg';
import './App.css';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Carlist from './components/CarList';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist/>
    </div>
  );
}

export default App;
