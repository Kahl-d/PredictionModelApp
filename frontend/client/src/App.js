import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import FarePrediction from './Components/FarePrediction';
import SeatPrediction from './Components/SeatPrediction';
import PriceTrend from './Components/PriceTrend';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <AppBar position="static" color="primary" sx={{ margin: '24px 0' }}>
          <Toolbar>
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
              Flight Fare Prediction System
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/fare-prediction">Fare Prediction</Button>
            <Button color="inherit" component={Link} to="/seat-prediction">Seat Availability</Button>
            <Button color="inherit" component={Link} to="/price-trend">Price Trend</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Typography variant="h4" gutterBottom>Welcome to the Flight Fare Prediction System</Typography>} />
          <Route path="/fare-prediction" element={<FarePrediction />} />
          <Route path="/seat-prediction" element={<SeatPrediction />} />
          <Route path="/price-trend" element={<PriceTrend />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
