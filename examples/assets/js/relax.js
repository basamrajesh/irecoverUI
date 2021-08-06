var jokesBaseUrl = 'https://official-joke-api.appspot.com'


fetch(jokesBaseUrl + '/random_ten')
    .then(response => response.json())
    .then(responseData => {
        responseData.forEach(joke => {
            document.getElementById('jokes').innerHTML += ` <div class="accordion accordion-primary">
            <div class="card">
                <div class="card-header collapsed" id="headingOne" data-toggle="collapse"
                    data-target="#collapse${joke.id}" aria-expanded="false" aria-controls="collapse${joke.id}"
                    role="button">
                    <div class="span-icon">
                        <div class="flaticon-box-1"></div>
                    </div>
                    <div class="span-title">
                       <b> ${joke.setup} </b>
                    </div>
                    <div class="span-mode"></div>
                </div>

                <div id="collapse${joke.id}" class="collapse" aria-labelledby="headingOne"
                    data-parent="#accordion" style="">
                    <div class="card-body">
                       <b> ${joke.punchline} </b>
                    </div>
                </div>
            </div>
        </div>`
        })
    });