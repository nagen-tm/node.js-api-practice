/* 
  Desc:
*/

// global dependencies 
const got = require('got');

const getTopics = async (options) => {
  // message placeholder
  let message = {
    error: false,
    data: false
  };

  // http request options
  const gotRequest = {
    prefixUrl: `https://${options.hostname}`,
    headers: {
      Authorization: `token ${options.token}`,
      Accept: 'application/vnd.github.mercy-preview+json'
    },
    responseType: 'json'
  };

  // http response data
  let response = await got.get(`repos/${options.owner}/${options.repoName}/topics`, gotOptions).catch((error) => {
    // grab any errors
    message.error = 'githubTopics: Get Request:', error;
  });

  // check for no error
  if (!message.error) {

  }

  return message;
};