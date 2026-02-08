async function fetchGameUpdates() {
    const response = await fetch('https://api.github.com/repos/kuyaed-1720/my-pixi-game/commits');
    const commits = await response.json();

    let lastDate = '';

    const list = document.getElementById('commit-list');
    commits.slice(0, 10).forEach(commit => {
        const currentDate = commit.commit.author.date.split('T')[0];
        const message = commit.commit.message;

        const li = document.createElement('li');
        li.style.listStyle = 'none';

        if (currentDate !== lastDate) {
            li.innerHTML = `
                <div style="margin-top: 20px; font-weight: bold;">${currentDate}</div>
                <div style="margin-bottom: 10px;">${"-".repeat(40)} ${message}</div>
            `;
            lastDate = currentDate;
        } else {
            li.innerHTML = `
                <div style="margin-bottom: 10px;">${"-".repeat(40)} ${message}</div>
            `;
        }

        list.appendChild(li);
    });
}

fetchGameUpdates();
