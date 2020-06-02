class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    //display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
                </div>
                <div class="col-md-9">
                    
                        <h5>
                        <span class=" badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class=" badge ml-3 badge-success">Followers: ${user.followers}</span>
                        <span class=" badge ml-3 badge-info">Following: ${user.following}</span>
                        <span class=" badge ml-3 badge-secondary">Public Gists: ${user.gists}</span>
                        </h5>
                    
                
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                        <li class="list-group-item">location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                </div>
            </div>
        </div>
        
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        
        `;
    }

    //show user repos

    showRepos(repos) {
        let output = "";
        repos.forEach(function (repo) {
            output += `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-5">
                        <a href="${repo.html_url}" target="_blank"> ${repo.name}
                    </div>

                    <div class="col-md-7 d-inline">
                     <h5>
                    <span class=" badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class=" badge ml-3 badge-success">Watchers: ${repo.watchers_count}</span>
                    <span class=" badge ml-3 badge-info">forks: : ${repo.forks_count}</span>
                    </h5>

                    </div>
                </div>
            </div>
                
            
            `;
        });

        document.getElementById("repos").innerHTML = output;
    }

    //Show alert message
    showAlert(message, className) {
        //clear any previous alerts
        this.clearAlert();
        //create div
        const div = document.createElement("div");
        //Add classes
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector(".search-container");
        //get search box
        const search = document.querySelector(".search");
        //insert alert
        container.insertBefore(div, search);
        //Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 2500);
    }

    //Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    //clear profile
    clearProfile() {
        this.profile.innerHTML = "";
    }
}
