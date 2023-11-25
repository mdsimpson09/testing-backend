import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/Homepage';

const HomepageRoutes = (
  <Route path="/" element={<Homepage />}>
    {/* Define more routes specific to the homepage if needed */}
  </Route>
);

export default HomepageRoutes;