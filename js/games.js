
               
              
              
               
               fetch(url, {
               method: 'POST',
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify({
               query: `
               query MarCarJogos {
               jogos {
               id
               equipe01
               equipe02
               horaDoJogo
               localDoJogo
               }
               }
               `,
               }),
               })
               .then(response => response.json())
               .then(data => {
               console.log('Jogos marked:', data.data.jogos);
               
               const result = data.data.jogos;
               const gamesContainer = document.getElementById('games');
               
               gamesContainer.innerHTML = result.map(plays => `
               <div class="item">
               <div class="widget-body mb-3">
               <div class="widget-vs">
               <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
               <div class="team-1 text-center">
               <img src="images/logo_1.png" alt="Image">
               <h3>${plays.equipe01}</h3>
               </div>
               <div>
               <span class="vs"><span>VS</span></span>
               </div>
               <div class="team-2 text-center">
               <img src="images/logo_2.png" alt="Image">
               <h3>${plays.equipe02}</h3>
               </div>
               </div>
               </div>
               </div>
               
               <div class="text-center widget-vs-contents mb-4">
               <h4>Liga Chinesa</h4>
               <p class="mb-5">
               <span class="d-block">${plays.horaDoJogo}</span>
               <span class="d-block">${plays.localDoJogo}</span>
               <strong class="text-primary">${plays.id}</strong>
               </p>
               </div>
               </div>
               `).join('');
               })
               .catch(error => {
               console.error('Error fetching data:', error);
               });