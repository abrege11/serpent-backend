const { submissionDataQuery, envInfoQuery, profileDataQuery, userLanguageStats, userSolutionsQuery } = require("../../models/leetcode.model.js");

// retrieve all recent leetcode data by username 
exports.getDataByUsername = async (req, res) => {
  const user = req.params.userId;
  const dataByUserName = profileDataQuery();
  // establish connection and parse body given username
  fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: dataByUserName, variables: { username: user} }),
  })
    .then(result => {
      if (!result.ok) {
        throw new Error(`Network response was not ok: ${result.statusText}`);
      }
      return result.json();
    })
    .then(data => {
      // send errors if they exist
      if (data.errors) {
        return res.status(400).send(data);
      }
      // send desired response
      res.status(200).send(data.data);
    })
    // error catch
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
}


exports.envInfo = async (req, res) => {
  const insertQuery = envInfoQuery();

  fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: insertQuery, variables: {} }),
  })
    .then(result => {
      if (!result.ok) {
        throw new Error(`Network response was not ok: ${result.statusText}`);
      }
      return result.json();
    })
    .then(data => {
      // send errors if they exist
      if (data.errors) {
        return res.status(400).send(data);
      }
      // send desired response
      res.status(200).send(data.data);
    })
    // error catch
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
}

// retrieve all recent leetcode data by username 
exports.getPublicUserInfo = async (req, res) => {
  const user = req.params.userId;
  const publicInfo = submissionDataQuery();
  // establish connection and parse body given username
  fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: publicInfo, variables: { username: user } }),
  })
    .then(result => {
      if (!result.ok) {
        throw new Error(`Network response was not ok: ${result.statusText}`);
      }
      return result.json();
    })
    .then(data => {
      // send errors if they exist
      if (data.errors) {
        return res.status(400).send(data);
      }
      // send desired response
      res.status(200).send(data.data);
    })
    // error catch
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
}

exports.getLanguageStats = async (req, res) => {
  const user = req.params.userId;
  const languageInfo = userLanguageStats();
  // establish connection and parse body given username
  fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: languageInfo, variables: { username: user } }),
  })
    .then(result => {
      if (!result.ok) {
        throw new Error(`Network response was not ok: ${result.statusText}`);
      }
      return result.json();
    })
    .then(data => {
      // send errors if they exist
      if (data.errors) {
        return res.status(400).send(data);
      }
      // send desired response
      res.status(200).send(data.data);
    })
    // error catch
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
}

// retrieve all recent solutions by username 
exports.getUserSolutions = async (req, res) => {
  const user = req.params.userId;
  const orderBy = req.params.orderBy;
  const skip = parseInt(req.params.skip);
  const first = parseInt(req.params.first);
  const userSolutions = userSolutionsQuery(user, orderBy, skip, first);
  // establish connection and parse body given username
  fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: userSolutions, variables: { username: user, orderBy: orderBy, skip: skip, first: first} }),
  })
    .then(result => {
      if (!result.ok) {
        throw new Error(`Network response was not ok: ${result.statusText}`);
      }
      return result.json();
    })
    .then(data => {
      // send errors if they exist
      if (data.errors) {
        return res.status(400).send(data);
      }
      // send desired response
      res.status(200).send(data.data);
    })
    // error catch
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
}