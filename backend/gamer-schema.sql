CREATE TABLE Players ( 
id SERIAL PRIMARY KEY, 
first_name VARCHAR(50) NOT NULL, 
last_name VARCHAR(50) NOT NULL,
username VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL, 
password VARCHAR(255), 
age INT, 
preferred_pronouns VARCHAR(50), 
zip_code VARCHAR(5), 
photo VARCHAR(500) NOT NULL,
created_at TIMESTAMP DEFAULT 
CURRENT_TIMESTAMP, last_login TIMESTAMP 
); 


CREATE TABLE DislikedProfiles (
  id INT,
  disliked_id INT,
  disliked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id, disliked id),
  FOREIGN KEY (id) REFERENCES Players(id),
  FOREIGN KEY (disliked id) REFERENCES Players(id)
);

CREATE TABLE GamingPreferences (
  id INT PRIMARY KEY,
  genre VARCHAR(50),
  top_games VARCHAR(255),
  preferred_devices VARCHAR(100),
  FOREIGN KEY (id) REFERENCES Players(id)
);

CREATE TABLE LikedProfiles (
  id INT,
  liked id INT,
  liked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id, liked id),
  FOREIGN KEY (id) REFERENCES Players(id),
  FOREIGN KEY (id) REFERENCES Players(id)
);

CREATE TABLE MatchedProfiles (
  id_1 INT,
  id_2 INT,
  matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_1, id_2),
  FOREIGN KEY (id_1) REFERENCES Players(id),
  FOREIGN KEY (id_2) REFERENCES Players(id)
);


-- CREATE TABLE Players ( 
-- id SERIAL PRIMARY KEY, 
-- first_name VARCHAR(50) NOT NULL, 
-- last_name VARCHAR(50) NOT NULL,
-- username VARCHAR(50) UNIQUE NOT NULL,
-- email VARCHAR(255) UNIQUE NOT NULL, 
-- password VARCHAR(255), 
-- age INT, 
-- preferred_pronouns VARCHAR(50), 
-- zip_code VARCHAR(5), 
-- photo VARCHAR(500) NOT NULL,
-- created_at TIMESTAMP DEFAULT 
-- CURRENT_TIMESTAMP, last_login TIMESTAMP 
-- ); 


-- CREATE TABLE DislikedProfiles (
--   id INT,
--   disliked_id INT,
--   disliked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (id, disliked id),
--   FOREIGN KEY (player_id) REFERENCES Players(player_id),
--   FOREIGN KEY (disliked_player_id) REFERENCES Players(player_id)
-- );

-- CREATE TABLE GamingPreferences (
--   player_id INT PRIMARY KEY,
--   genre VARCHAR(50),
--   top_games VARCHAR(255),
--   preferred_devices VARCHAR(100),
--   FOREIGN KEY (player_id) REFERENCES Players(player_id)
-- );

-- CREATE TABLE LikedProfiles (
--   player_id INT,
--   liked_player_id INT,
--   liked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (player_id, liked_player_id),
--   FOREIGN KEY (player_id) REFERENCES Players(player_id),
--   FOREIGN KEY (liked_player_id) REFERENCES Players(player_id)
-- );

-- CREATE TABLE MatchedProfiles (
--   player_id_1 INT,
--   player_id_2 INT,
--   matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (player_id_1, player_id_2),
--   FOREIGN KEY (player_id_1) REFERENCES Players(player_id),
--   FOREIGN KEY (player_id_2) REFERENCES Players(player_id)
-- );