const express = require('express');
const app = express();

const bears = [
  {id: 1, name: 'Giant Panda', url: 'https://en.wikipedia.org/wiki/Giant_panda' },
  {id: 2, name: 'American black bear', url: 'https://en.wikipedia.org/wiki/American_black_bear' },
  {id: 3, name: 'Brown bear', url: 'https://en.wikipedia.org/wiki/Brown_bear'},
  {id: 4, name: 'Polar bear' , url: 'https://en.wikipedia.org/wiki/Polar_bear' },
  {id: 5, name: 'Asian black bear' , url: 'https://en.wikipedia.org/wiki/Asian_black_bear' }
];



app.get('/bears', (request, response) => {
    response.send(bears);

});

app.get('/bears/:id', (request, response) =>{
    let id = request.params.id;
    let bear = bears [id-1];

    response.send(bear)

});


app.listen(3000, () => console.log('The system is ALIVE!'))
