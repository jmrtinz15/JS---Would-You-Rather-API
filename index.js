const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });


app.get('/question', async (request, response) => {
	const fetchApi = await fetch(
		'https://would-you-rather.p.rapidapi.com/wyr/random',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-key': '957d317981mshf936fea560f28f1p11ba35jsn8405c07c48b7',
				'x-rapidapi-host': 'would-you-rather.p.rapidapi.com',
			},
		}
	);
	const questions = await fetchApi.json();
	console.log(questions);
	response.json(questions);
});

