class GitHub {
    constructor() {
        this.client_id = "0190fc3b138e72c2b531";
        this.client_secret = "f55152fb1779696feace5bd7dbb791c564b67ef7";
        this.repos_count = 5;
        this.repos_sort = "created asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos,
        };
    }
}
