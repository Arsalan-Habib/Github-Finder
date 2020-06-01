class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

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
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                </div>
            </div>
        </div>
        
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        
        `;
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }
}
