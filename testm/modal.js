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
        const modals = document.querySelector('.modals');
        rows.forEach((a) => {
            let modalTitle = a['title'];
            let modalOverview = a['overview'];
            let modalOriginal_title = a['original_title']
            let modalPoster_path = a['poster_path'];
            let modalVote_average = a['vote_average'];
            let modalPopularity = a['popularity']
            let modalRelease_date = a['release_date']
            let modalId = a['id'];


            let temp_html = `
        <div class="modal hidden"data-id="${modalId}">
            <div class="modalOverlay"></div>
            <div class="modalContent">
                <div class="leftSideModal">
                    <h3 class="modalMovieTitle">${modalTitle}</h3>
                    <img class="modal-poster-path" src="https://image.tmdb.org/t/p/w500${modalPoster_path}">
                </div>
                <div>
                    <p class= "movieOriginTitle"> 원제 : ${modalOriginal_title}</p>
                    <p>평점 : ${modalVote_average}</p>
                    <p>개봉일 : ${modalRelease_date}</p>
                    <p>인지도 : ${modalPopularity}</p>
                    <p>${modalOverview}</p>
                </div>
              <button class="modalClose"style="cursor:pointer">X</button>
                 </div>
              </div>
            `;

            modals.insertAdjacentHTML('beforebegin', temp_html);
            


            const modalOpenBtn = document.getElementById("cards");
            const modal = document.querySelector(".modal");
            const overlay = document.querySelector(".modalOverlay");
            const modalContent = document.querySelector(".modalContent");
            const modalCloseBtn = document.querySelector(".modalClose");
     
          

            const openModal = () => {
                modal.classList.remove("hidden");
            }
            const closeModal = () => {
                modal.classList.add("hidden")
            }
            overlay.addEventListener("click", closeModal);
            modalCloseBtn.addEventListener("click", closeModal);
            modalOpenBtn.addEventListener("click", openModal);


          
        
                    })
                });
                

   