import React from 'react';
import axios from 'axios';

function Posts(){
  axios.get('http://localhost:3000/api/user')
  .then(function (response) {
    console.log(response);

    Object.values(response.data.users).forEach(val => {
      console.log(val.email);
    });
})
}

export default Posts;

 