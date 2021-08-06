fetch('https://www.mohfw.gov.in/covid_vaccination/vaccination/dist/data/faqs.json')
    .then(response => response.json())
    .then(function (data) {
        let l = 0;
        var itemLength = data.items.length;
        for (let j = 0; j < itemLength; j++) {
            var innerItemsLength = data.items[j].content.length
            for (let k = 0; k < innerItemsLength; k++) {
                l += k;
                console.log(data.items[j].content[k].question);
                document.getElementById('qns-area').innerHTML += `
                <div class="accordion accordion-primary">
                                <div class="card">
                                    <div class="card-header collapsed" id="headingOne" data-toggle="collapse"
                                        data-target="#collapse${l}" aria-expanded="false" aria-controls="collapse${l}"
                                        role="button">
                                        <div class="span-icon">
                                            <div class="flaticon-box-1"></div>
                                        </div>
                                        <div class="span-title">
                                           <b> ${data.items[j].content[k].question} </b> | ${data.items[j].category}
                                        </div>
                                        <div class="span-mode"></div>
                                    </div>

                                    <div id="collapse${l}" class="collapse" aria-labelledby="headingOne"
                                        data-parent="#accordion" style="">
                                        <div class="card-body">
                                           <b> ${data.items[j].content[k].answer} </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                `;
            }
        }
    });


// fetch('https://github.com/irecover-in/hackathon/blob/master/examples/demo1/beds.json', { mode: 'cors', credentials: 'include' })
//     .then(response => console.log(response.json()));