const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
let users;
app.get('/api/user', async (req, res) => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=3');
      const users = response.data.results;
      // const data = users.map(user => ({
      //   name: `${user.name.first} ${user.name.last}`,
      //   email: user.email,
      //   location: `${user.location.city}, ${user.location.country}`,
      //   picture: user.picture.medium
      // }));
  
      res.json(users);
      console.log(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  });
 

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });