let allRepos = [];
        
function loadProfile() {
    const username = document.getElementById('username').value.trim();
    if (!username) return;
    
    document.getElementById('profile').innerHTML = 'Loading...';
    document.getElementById('repos').innerHTML = '';
    
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) throw new Error('User not found');
            return response.json();
        })
        .then(user => {
            document.getElementById('profile').innerHTML = `
                <div class="profile">
                    <img src="${user.avatar_url}" class="avatar">
                    <h2>${user.name || user.login}</h2>
                    <p>${user.bio || ''}</p>
                </div>
            `;
            

            document.getElementById('repo-search').style.display = 'block';
            
            return fetch(user.repos_url);
        })
        .then(response => response.json())
        .then(repos => {
            allRepos = repos;
            showRepos(repos);
        })
        .catch(error => {
            document.getElementById('profile').innerHTML = `
                <div class="error">${error.message}</div>
            `;
        });
}

function showRepos(repos) {
    const reposDiv = document.getElementById('repos');
    
    if (repos.length === 0) {
        reposDiv.innerHTML = '<p>No repositories found</p>';
        return;
    }
    
    reposDiv.innerHTML = '<h3>Repositories:</h3>';
    
    repos.forEach(repo => {
        reposDiv.innerHTML += `
            <div class="repo">
                <h4><a href="${repo.html_url}" target="_blank">${repo.name}</a></h4>
                <p>${repo.description || ''}</p>
                ${repo.language ? `
                    <p class="repo-language">Language: ${repo.language}</p>
                ` : ''}
            </div>
        `;
    });
}

function filterRepos() {
    const skill = document.getElementById('skill').value.toLowerCase();
    if (!skill) {
        showRepos(allRepos);
        return;
    }
    
    const filtered = allRepos.filter(repo => {
        return (repo.language && repo.language.toLowerCase().includes(skill)) ||
               (repo.description && repo.description.toLowerCase().includes(skill));
    });
    
    showRepos(filtered);
}
