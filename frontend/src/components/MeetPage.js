
import { Link } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import PlayerCard from './PlayerCard';
import Footer from './Footer';

function MeetPage() {
  return (
    <div>
      <Header />
      <PlayerCard />
      <Footer />
    </div>
  );
}

export default MeetPage;