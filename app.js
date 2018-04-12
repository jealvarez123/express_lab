const express = require('express');
const app = express();

const videos = [
    {id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/title/80208273"},
    {id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/title/80049871"},
    {id: 3, title: "Baby Cobra", url: "https://www.netflix.com/title/80101493"}
  ];

const comedians = [
  {id: 1, name: 'Dave Chappelle', url: 'https://en.wikipedia.org/wiki/Dave_Chappelle'},
  {id: 2, name: 'Mike Epps', url: 'https://en.wikipedia.org/wiki/Mike_Epps'},
  {id: 3, name: 'Gabriel Iglesias', url: 'https://www.fluffyguy.com/'}
];

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



app.get('/videos', (request, response) => {

    response.send(videos);
});
// app.get('/videos', (req, res) =>
// res.send('all videos'))

app.get('/videos/:id', (request, response) => {
    let id = request.params.id;
    let video = videos[id-1];

    response.send(video);
});

app.get('/comedians', (request, response) => {
    response.send(comedians);
});

app.get('/comedians/:id', (request, response) => {
    let id = request.params.id;
    let comedian = comedians[id-1];
    response.send(comedian);
});


app.get('/videos/comedian/:id', (req, res) => res.send('videos by comedian'))

app.get('/videos/:id/comedian/:id', (req, res) => res.send('video by comedian'))


// $.ajax({
//   method: 'GET',
//   url:
//    'http://localhost:3000/videos/comedian/1',
//   dataType: 'json',
//   success: onSuccess
// });
// function onSuccess(responseData) {
//   console.log('hello');
//     // $('ul').append('Title: ' + responseData.features[0].properties.title);
//     // console.log(responseData.features[0].properties.title);
//
// };

app.listen(3000, () => console.log('The system is ALIVE!'))
