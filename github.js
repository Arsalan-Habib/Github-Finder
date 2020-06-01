class GitHub {
    constructor() {
        this.client_id = "0190fc3b138e72c2b531";
        this.client_secret = "f55152fb1779696feace5bd7dbb791c564b67ef7";
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const profile = await profileResponse.json();

        return {
            profile,
        };
    }
}
