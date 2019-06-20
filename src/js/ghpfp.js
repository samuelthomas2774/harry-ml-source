async function removeGithubStorage() {
    localStorage.removeItem('githubUsername');
    localStorage.removeItem('githubProfilePictureURL');
}

async function getGithubPicture(username) {
    let data = await fetch('https://api.github.com/users/' + username);
    let main = await data.json();
    let id = main.id;
    const finale = 'https://avatars1.githubusercontent.com/u/' + id;
    localStorage.githubUsername = username;
    localStorage.githubProfilePictureURL = finale;
    return finale;
}

async function githubProfilePicture(username, id) {
    if (localStorage.githubProfilePictureURL && username === localStorage.githubUsername && localStorage.githubProfilePictureURL !== 'https://avatars1.githubusercontent.com/u/undefined') {
        document.querySelectorAll(id).forEach(el => {
            el.src = localStorage.githubProfilePictureURL;
        });
    } else {
        removeGithubStorage();
        getGithubPicture(username).then(url=> document.querySelectorAll(id).forEach(el => {
            el.src = localStorage.githubProfilePictureURL;
        }));
    }
}

module.exports = {
    removeGithubStorage: removeGithubStorage,
    getGithubPicture: getGithubPicture,
    githubProfilePicture: githubProfilePicture
};