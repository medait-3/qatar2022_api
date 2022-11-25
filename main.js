
    const token = "1f03d446703e470ba3bc872d47f6787c";
    let baseUrl = "https://api.football-data.org/v4"



    function getbest()
    {
        const url = `${baseUrl}/competitions/2000/scorers`

        console.log(url, token)
        axios.get(url, {
            headers: {
                "X-Auth-Token": `${token}`
            }
        })
        .then((response) => {
            const scorers = response.data.scorers
            
            document.getElementById("scorers").innerHTML = ""

            for(scorer of scorers)
            {
                

                
                const content = `
                <div class="col-lg-12" style="margin-top: 20px">
                    <div class="card shadow border-none">
                      
          <div class=" card shadow  ">
                <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">team</th>
      <th scope="col">name</th>
      <th scope="col">assistes</th>
      <th scope="col">penalties</th>
      <th scope="col">goals</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img class="rounded-circle border border-2" src="${scorer.team.crest}"  alt=""  style="width: 30px; height: 30px; object-fit: cover"> ${scorer.team.tla}</td>
      <td>${scorer.player.name}</td>
      <td>${scorer.assists ?? '0'}</td>
      <td>${scorer.penalties ?? '0'}</td>
      <td>${scorer.goals}</td>
     
    </tr>
  </tbody>
</table>
</div>
                </div>
                    
                `
                document.getElementById("scorers").innerHTML += content
            }
        })
    }



    function getStandings()
    {
        const url = `${baseUrl}/competitions/2000/standings`
        axios.get(url, {
            headers: {
                "X-Auth-Token": `${token}`
            }
        })
        .then((response) => {
            
            const standings = response.data.standings

            document.getElementById("standings").innerHTML = ""
            for(standing of standings)
            {
                let tableContent = ` `

                const content = `
                <div class="col-lg-6" style="margin-top: 20px">
                    <div class="card shadow border-none">
                        <div class="card-header bg-primary" style="text-align: center">
                            <b>${standing.group}</b>
                        </div>
                
                     <table class="table">
                           <thead>
                              <tr>
                                  <th >  </th>
                                  <th>W </th>
                                  <th>L</th>
                                  <th>D </th>
                                  <th>GF</th>
                                  <th>GA</th>
                                  <th>GD</th>
                                  <th>Pts  </th>  
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                              <th> <img class="rounded-circle border border-2" src="${standing.table[0].team.crest}"  alt=""  style="width: 30px; height: 30px; object-fit: cover"> ${standing.table[0].team.tla} </th>
                              
                              <th> ${standing.table[0].won} </th>
                              <th> ${standing.table[0].lost} </th>
                              <th> ${standing.table[0].draw} </th>
                              <th> ${standing.table[0].goalsFor} </th>
                              <th> ${standing.table[0].goalsAgainst} </th>
                              <th> ${standing.table[0].goalDifference} </th>
                              <th> ${standing.table[0].points} </th>
                                </tr>
                                <tr>
                              <th> <img class="rounded-circle border border-2" src="${standing.table[1].team.crest}"  alt=""  style="width: 30px; height: 30px; object-fit: cover"> ${standing.table[1].team.tla} </th>
                              
                              <th> ${standing.table[1].won} </th>
                              <th> ${standing.table[1].lost} </th>
                              <th> ${standing.table[1].draw} </th>
                              <th> ${standing.table[1].goalsFor} </th>
                              <th> ${standing.table[1].goalsAgainst} </th>
                              <th> ${standing.table[1].goalDifference} </th>
                              <th> ${standing.table[1].points} </th>
                                </tr>
                                <tr>
                              <th> <img class="rounded-circle border border-2" src="${standing.table[2].team.crest}"  alt=""  style="width: 30px; height: 30px; object-fit: cover"> ${standing.table[2].team.tla} </th>
                              
                              <th> ${standing.table[2].won} </th>
                              <th> ${standing.table[2].lost} </th>
                              <th> ${standing.table[2].draw} </th>
                              <th> ${standing.table[2].goalsFor} </th>
                              <th> ${standing.table[2].goalsAgainst} </th>
                              <th> ${standing.table[2].goalDifference} </th>
                              <th> ${standing.table[2].points} </th>
                                </tr>
                                <tr>
                              <th> <img class="rounded-circle border border-2" src="${standing.table[3].team.crest}"  alt=""  style="width: 30px; height: 30px; object-fit: cover"> ${standing.table[3].team.tla} </th>
                              
                              <th> ${standing.table[3].won} </th>
                              <th> ${standing.table[3].lost} </th>
                              <th> ${standing.table[3].draw} </th>
                              <th> ${standing.table[3].goalsFor} </th>
                              <th> ${standing.table[3].goalsAgainst} </th>
                              <th> ${standing.table[3].goalDifference} </th>
                              <th> ${standing.table[3].points} </th>
                                </tr>
                            </tbody>
                </table>
                   </div>
                </div>
                `
                document.getElementById("standings").innerHTML += content
            }
        })
    }

    function getMatches()
    {
        const url = `${baseUrl}/competitions/2000/matches`

        console.log(url, token)
        axios.get(url, {
            headers: {
                "X-Auth-Token": `${token}`
            }
        })
        .then((response) => {
            const matches = response.data.matches
            
            document.getElementById("matches").innerHTML = ""

            for(match of matches)
            {
                const homeTeam = match.homeTeam
                const awayTeam = match.awayTeam

                if(homeTeam.name == null)
                {
                    continue
                }

                const comp = match.competition
                const dateUtc = match.utcDate
                const matchTime = new Date(dateUtc)
                const dateString = matchTime.getUTCFullYear() +"/"+ (matchTime.getUTCMonth()+1) +"/"+ matchTime.getUTCDate() + " " + matchTime.getUTCHours() + ":" + matchTime.getUTCMinutes() + ":" + matchTime.getUTCSeconds()
                

                
                const content = `
    
          <div class="col-lg-3 " style="margin-top: 20px" >
            <div class=" card shadow  widget-next-match">
              
                <div  class="text-center  card-header bg-primary widget-vs-contents  mb-4">
                   <h4>${match.group}</h4>    
                </div>

              <div class="widget-body mb-3">
                <div class="widget-vs">
                  <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                    <div class="team-1 text-center">
                      <img  style="width: 40px; height: 40px; object-fit: cover"  class="rounded-circle border border-2"  src="${homeTeam.crest}" alt="">
                      <h3>${homeTeam.tla}</h3>
                      <h5> ${match.score.fullTime.home ?? '-'}</h5>
                    </div>
                    <div>
                      <span class="rounded-circle bg-primary" style="padding:12px"><span>VS</span></span>
                    </div>
                    <div class="team-2 text-center">
                      <img  style="width: 40px; height: 40px; object-fit: cover" class="rounded-circle border border-2" src="${awayTeam.crest}" alt="Image">
                      <h3>${awayTeam.tla}</h3>
                      <h5> ${match.score.fullTime.away ?? '-'}</h5>
                    </div>
                  </div>
                </div>
              </div>
                <div  class="text-center   widget-vs-contents  mb-4">
                   <p>
                    <span class="d-block">${dateString } GMT</span>
                   </p>       
                </div>
                <div class="card-footer bg-primary">
                    ${ match.status} 
                </div>

            </div>
          </div>
                    
                `
                document.getElementById("matches").innerHTML += content
            }
        })
    }
    getbest()
    getStandings()
    getMatches()
    etchJsonp('http://localhost:3000')
    .then(res => res.json())
    .then(json => console.log(json))