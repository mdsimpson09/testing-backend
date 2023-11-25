import React from 'react';
import { Route } from 'react-router-dom';
import MeetPage from './components/MeetPage';

const MeetRoutes = (
  <Route path="/meet" element={<Meet />}>
    {/* Define more routes specific to the page  */}
  </Route>
);

export default MeetRoutes;