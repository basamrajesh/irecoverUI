var jsonObject = JSON.parse(localStorage.getItem('userdata'));

function irLogout() {
    localStorage.clear();
    location.href = "../demo1/ir-login.html";

}

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="main-header">
    <!-- Logo Header -->
    <div class="logo-header" data-background-color="white">

        <a href="#" class="logo">
            <img src="../assets/img/irlogo.png" alt="navbar brand" class="navbar-brand" style="width: 157px;height: 62px;">
        </a>
        
       
    </div>
    <!-- End Logo Header -->

    <!-- Navbar Header -->
    <nav class="navbar navbar-header navbar-expand-lg" data-background-color="blue2">

        <div class="container-fluid">
            <div class="collapse" id="search-nav">
            <form class="navbar-left navbar-form nav-search mr-md-3">
            <div class="input-group" disable>
                <div class="input-group-prepend">
                    <button type="submit" class="btn btn-search pr-1">
                        <i class="fa fa-fire search-icon"></i>
                    </button>
                </div>
                <input type="text" placeholder="Spread Positivity ..." class="form-control" disable>
            </div>
        </form>
            </div>
            <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
                <li class="nav-item toggle-nav-search hidden-caret">
                    <a class="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false"
                        aria-controls="search-nav">
                        <i class="fa fa-search"></i>
                    </a>
                </li>
                
                <li class="nav-item dropdown hidden-caret">
                    <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i class="fas fa-plus"></i>
                    </a>
                    <div class="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                        <div class="quick-actions-header">
                            <span class="title mb-1">Share Experience</span>
                            <span class="subtitle op-8">Via</span>
                        </div>
                        <div class="quick-actions-scroll scrollbar-outer">
                            <div class="quick-actions-items">
                                <div class="row m-0">
                                    <a class="col-6 col-md-12 p-0" href="../demo1/ir-create-post.html">
                                        <div class="quick-actions-item">
                                            <i class="flaticon-pen"></i>
                                            <span class="text">Create New Post</span>
                                        </div>
                                    </a>
                                    <a class="col-6 col-md-12 p-0" href="../demo1/ir-qaform.html">
                                        <div class="quick-actions-item">
                                            <i class="flaticon-interface-1"></i>
                                            <span class="text">QA Form</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown hidden-caret">
                    <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
                        <div class="avatar-sm">
                            <img src="https://images.unsplash.com/photo-1610085927744-7217728267a6" alt="..." class="avatar-img rounded-circle">
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-user animated fadeIn">
                        <div class="dropdown-user-scroll scrollbar-outer">
                            <li>
                                <div class="user-box">
                                    <div class="avatar-lg"><img src="${jsonObject.profileImageUrl}" alt="image profile"
                                            class="avatar-img rounded"></div>
                                    <div class="u-text">
                                        <h4 style="text-transform: uppercase">${jsonObject.name}</h4>
                                        <p class="text-muted">${jsonObject.email}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">My Profile</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" id="ir-logout" onclick="irLogout()">Logout</a>
                            </li>
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <!-- End Navbar -->
</div>

<!-- Sidebar -->
<div class="sidebar sidebar-style-2">
    <div class="sidebar-wrapper scrollbar scrollbar-inner">
        <div class="sidebar-content">
            
            <ul class="nav nav-primary">
                <li class="nav-item dashboard">
                    <a data-toggle="" href="../demo1/ir-dashboard.html" class="collapsed" aria-expanded="false">
                        <i class="fas fa-home"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li class="nav-section">
                    <span class="sidebar-mini-icon">
                        <i class="fa fa-ellipsis-h"></i>
                    </span>
                </li>
                <li class="nav-item stories">
                    <a data-toggle="" href="../demo1/ir-stories.html" class="collapsed" aria-expanded="false">
                        <i class="fas fa-th-list"></i>
                        <p>Recovered Stories</p>
                    </a>
                </li>
                <li class="nav-item qaform">
                    <a data-toggle="" href="../demo1/ir-qaform.html" class="collapsed" aria-expanded="false">
                        <i class="fas fa-microchip"></i>
                        <p>QA Form</p>
                    </a>
                </li>
                <li class="nav-item maps">
                    <a data-toggle="" href="../demo1/ir-resources.html" class="collapsed" aria-expanded="false">
                        <i class="fas fa-map-marked"></i>
                        <p>Resources</p>
                    </a>
                </li>
                <li class="nav-item covideos">
                    <a data-toggle="" href="../demo1/ir-videos.html" class="collapsed" aria-expanded="false">
                        <i class="fas fa-play"></i>
                        <p>CoVideos</p>
                    </a>
                </li>
                <li class="nav-item leads">
                <a data-toggle="" href="../demo1/ir-relax.html" class="collapsed" aria-expanded="false">
                    <i class="fas fa-inbox"></i>
                    <p>Relax</p>
                </a>
            </li>
                <li class="nav-item qa">
                    <a data-toggle="" href="../demo1/ir-qa.html" class="collapsed" aria-expanded="false">
                        <i class="fas fa-info"></i>
                        <p>FAQs</p>
                    </a>
                </li>
                <li class="nav-item analysis">
                    <a data-toggle="" href="../demo1/ir-analysis.html" class="collapsed" aria-expanded="false">
                        <i class="fas fa-hourglass"></i>
                        <p>Analysis</p>
                    </a>
                </li>
                <li class="nav-item home">
                <a data-toggle="" href="../demo1/ir-home.html" class="collapsed" aria-expanded="false">
                    <i class="fas fa-chart-bar"></i>
                    <p>CoviStats</p>
                </a>
            </li>
                <li class="nav-item profiles">
                    <a data-toggle="" href="../demo1/ir-profiles.html" class="collapsed" aria-expanded="false">
                        <i class="fas fa-user"></i>
                        <p>Profiles</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
      `;
    }
}

customElements.define('header-component', Header);



