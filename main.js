const endPoint = 'https://flynn.boolean.careers/exercises/api/array/music';

axios
    .get(endPoint)
    .then((response) => {
        addSongs(response);
    })
    .catch((error) => {
      console.log(error);
    });

function addSongs(response) {
    const music = response.data.response;

    for(let i = 0; i < 10; i++){

        const imgUrl = music[i].poster;
        console.log(imgUrl);

        const div = document.createElement('div');
        div.classList.add('card', 'col-3', 'm-3', 'pt-3', 'pe-3', 'ps-3', 'border-dark', 'text-center');

        const img = document.createElement('img');
        img.src = imgUrl;
        img.className = 'img-fluid', 'p-3';
        div.appendChild(img);
        document.getElementById('card').appendChild(div);

        const title = music[i].title;
        titleAdd = document.createElement('h4');
        titleAdd.innerText = title;
        titleAdd.className = 'p-3';
        div.appendChild(titleAdd);

        const author = music[i].author;
        authorAdd = document.createElement('p');
        authorAdd.innerText = author;
        div.appendChild(authorAdd);

        const genre = music[i].genre;
        genreAdd = document.createElement('p');
        genreAdd.innerText = genre;
        div.appendChild(genreAdd);

        const year = music[i].year;
        yearAdd = document.createElement('p');
        yearAdd.innerText = year;
        yearAdd.className = 'mb-3';
        div.appendChild(yearAdd);
    }
}
