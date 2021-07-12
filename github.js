class Github {
    constructor() {
        this.client_id = 'ce60f3ca74a5e2e2ab9c';
        this.client_secret = 'f4a0e929961c663501b841c4acb0a759ff2054cd';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return profile;
    }
}