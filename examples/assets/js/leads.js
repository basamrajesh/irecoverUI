bedsUrl = 'https://api.rootnet.in/covid19-in/hospitals/beds';
contactsUrl = 'https://api.rootnet.in/covid19-in/contacts';
linksUrl = 'https://api.rootnet.in/covid19-in/notifications';
// https://api.rootnet.in/


fetch(contactsUrl)
    .then(response => response.json())
    .then(responseData => {
        responseData.data.contacts.regional.forEach(contactsData => {
            document.getElementById('contact-info').innerHTML += ` <div class="col-sm-6 col-md-3">
            <div class="card card-stats card-info card-round">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-stats">
                            <div class="numbers">
                                <p class="card-category">${contactsData.loc}</p>
                                <h4 class="card-title">${contactsData.number}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        })
    });

fetch(bedsUrl)
    .then(response => response.json())
    .then(responseData => {
        responseData.data.regional.forEach(bedsData => {
            document.getElementById('beds-available').innerHTML += ` <div class="col-12 col-sm-6 col-md-3">
            <div class="card" style="background-color: #e4f4e8;">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5><b>${bedsData.state}</b></h5>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <h5 class="text-muted mb-0">Total Hospitals</h5>
                        <p class="text-muted mb-0"><b>${bedsData.totalHospitals}</b></p>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <p class="text-muted mb-0">Beds Available</p>
                        <p class="text-muted mb-0"><b>${bedsData.totalBeds}</b></p>
                    </div>
                </div>
            </div>
        </div>`
        })
    });

fetch(linksUrl)
    .then(response => response.json())
    .then(responseData => {
        responseData.data.notifications.forEach(contactsData => {
            document.getElementById('links-data').innerHTML += `   <div class="col-md-4 h-100">
            <div class="card card-info card-annoucement" style="background: #e2799b !important;">
                <div class="card-body text-center" style="padding: 25px;">
                    <div class="card-opening">${contactsData.title}</div>
                    <hr>
                    <div class="card-detail mt-2">
                        <a href="${contactsData.link}" class="btn btn-light" style="color: #000000 !important">Goto Link</a>
                    </div>
                </div>
            </div>

        </div>`
        })
    });