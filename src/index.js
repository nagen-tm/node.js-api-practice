/*

*/

const githubTopic = async (options) => {
  // import libraries
  const { getTopics } = require('./libs/getTopics');
  const { gitHub : validateGetTopics } = require('./libs/validate');

  let message = validateGetTopics(options);

  if (!message.error) {
    const info = message.info;
    message = await getTopics(options);
    message.info = info ? info + message.info : message.info;
  }
   return message;
};

exports.githubTopic = githubTopic;

// local running of APIs
/* istanbul ignore next */
if (typeof require !== 'undefined' && require.main === module && !require.main.webpackPolyfill) {
  let message;

  let env

  const mock = {
    getTopics: {
      event: async (options) => {
        message = await getTopics(options);

        if (message.error){
          console.log(message.error);
        }
        if (message.data) {
          console.log(message.data);
        }
      },
      options: {
        repo: 'https://github.com/nagengtm/node.js-api-practice',
        token: process.env.GITHUB_TOKEN
      }
    }
  };

  const method = process.argv[2];

  if (method) {
    mock[method].event(mock[method].options);
  } else {
    console.log('Pass the githubTopic method to test locally.')
  }
}