exports.getReposByUsername = async (req, res) => {
    const userId = req.params.userId;
    const apiToken = process.env.apiToken;
    const queryUrl = `https://api.github.com/users/${userId}/repos`;

    fetch(queryUrl, {
        method: 'GET',
        headers: {
            'Authorization': `token ${apiToken}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(result => {
        if (!result.ok) {
            throw new Error(`Network response was not ok: ${result.statusText}`);
        }
        return result.json();
    })
    .then(data => {
        if (data.errors) {
            return res.status(400).send(data);
        }
        res.status(200).send(data);
    })
    .catch(err => {
        console.error('Error:', err);
        res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
};
