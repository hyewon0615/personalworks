
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjE4ZWJmN2JiNzk4NWY3ZDQ1ZTgyNTg4NTQ0Zjk4MyIsInN1YiI6IjY1MmZjZDE1ZWE4NGM3MDE0ZTA3NjI2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4qYj1Q4hWNNQuBQBzAVgUKU-KvYuyFjc6MnGzUi7Brc'
  }
};
fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', options)
  .then(response => response.json())
  .then(data => {
    let rows = data['results'];
    const cards = document.querySelector('.cards');
   // cards.innerHTML = '';   // 베껴오긴 했지만 존재의미를 몰랐는데 있을 필요가 없었네..

    rows.forEach((a) => {
      let title = a['title'];
      let overview = a['overview'];
      let poster_path = a['poster_path'];
      let vote_average = a['vote_average'];
      let original_title = a['original_title']
      let id = a['id'];

      let temp_html = `
           <a class="movieCard" id="movieCard" data-id="${id}" type="button">
            <img class="poster_path" src="https://image.tmdb.org/t/p/w500${poster_path}">
            <h3 class="movieTitle">${title} </h3>
            <p class= "movieTitle">${original_title}</p>
            <p>평점: ${vote_average}</p>
           

            </a>
            
          `;

      cards.insertAdjacentHTML('beforeend', temp_html);


    });
    // const movieCards = document.querySelectorAll('.movieCard'); // 요소 선택하고
    // movieCards.forEach((card) => {     //foreach 문법 잘 몰것어..

    //   card.addEventListener('click', function () { //클릭 이벤트 되면

    //     let movieId = this.getAttribute('data-id')  // 요소 안 특정 속성 선택해서

    //     alert(`이 영화의 ID는 '${movieId}'입니다.`); //띄우기
    //   });

    // });
    // //검색은 정말 못하겠다. .머리가 안돌아가.. 

      })    
  
      const handleSearch = (searchKeyword) => {
        const movieCards = document.querySelectorAll(".movieCard");
      
        movieCards.forEach((card) => {
          const title = card.querySelector(".movieTitle").textContent.toLowerCase();
          const searchedValue = searchKeyword.toLowerCase();
      
          if (title.includes(searchedValue)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      };
    

    const searchInput = document.querySelector(".searchInput");
    searchInput.focus();
    
    const form = document.querySelector(".searchBox");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handleSearch(searchInput.value);
    });









