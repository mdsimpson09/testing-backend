import React from 'react'
import './PlayerCard.css'
import TinderCard from 'react-tinder-card'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PlayerCard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch player data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('/api/players'); // Replace with your API endpoint
        const data = await response.json();
        setCards(data.players);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='cardContainer'>
      {cards.map((player) => (
        <TinderCard
          className='swipe'
          key={player.player_id}
          preventSwipe={['up', 'down']}
        >
          <Link to={`/players/${player.player_id}`}>
            <div
              style={{ backgroundImage: `url(${player.photo})` }}
              className='card'
            >
              <h3 className='card-name'>{`${player.first_name} ${player.last_name}`}</h3>
            </div>
          </Link>
        </TinderCard>
      ))}
    </div>
  );
}

export default PlayerCard;


// import React from 'react'
// import './PlayerCard.css'
// import TinderCard from 'react-tinder-card'
// import { Link } from 'react-router-dom';




// function PlayerCard() {

// // hooks are functions that can be used in react componenets. variables can be hooks. if variables get changed, then they are updated in all places. if you want to render something again if something was changed, then the component will render again. they are similar to state and props 

//   const [cards, setCards] = React.useState([
//     {
//       name: 'Homelander',
//       url: 'https://m.media-amazon.com/images/M/MV5BZmU1NmFkYTYtMTE2MC00MGFkLWE4MDUtMDg3NTAyOWE5ZDQ2XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UY281_CR31,0,500,281_.jpg'
//     },

//     {
//       name: 'Butcher',
//       url: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Billy_Butcher.jpg'
//     },
//     {
//       name: 'Kimiko',
//       url: 'https://i.insider.com/5f763f1a0ab50d00184adb01?width=1000&format=jpeg&auto=webp'
//     }, 
    
//     {
//       name: 'Frenchi',
//       url: 'https://hips.hearstapps.com/hmg-prod/images/tomer-capone-frenchie-the-boys-jpg-1657210446.jpg?crop=0.342xw:0.257xh;0.265xw,0.0811xh&resize=980:*'
//     }
//   ])

//   return (
//     <div className='cardContainer'>
//      {
//       cards.map( card => (
//         <TinderCard className='swipe'
//           key={card.name}
//           preventSwipe={['up','down']}
//         >
//           <div style={ {backgroundImage: `url(${card.url})`} }
//           className='card'>
//             <h3 className="card-name">{card.name}</h3>
//           </div>
//         </TinderCard>

//         ))
//       }
//     </div>
//   )
// }

// export default PlayerCard;
