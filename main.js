async function fetchGameUpdates() {
    const response = await fetch('https://api.github.com/repos/kuyaed-1720/my-pixi-game/commits');
    const commits = await response.json();

    const list = document.getElementById('commit-list');
    commits.slice(0, 10).forEach(commit => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${commit.commit.author.date.split('T')[0]}<b>: ${commit.commit.message}`;
        list.appendChild(li);
    });
}

fetchGameUpdates();
