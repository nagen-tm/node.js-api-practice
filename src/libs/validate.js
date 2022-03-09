/*
    Desc: validates the options set for each api
*/

const _validate ={
  // put in options 
  repo: (options) => {
    let error;

    if (!options.repo) {
      error = 'No repo was provided.'
    } else {
      // split the url for owner and repo name
      let splitURL = options.repo.split('/');

      // set owner
      options.owner = splitURL[1];

      // set repoName
      options.repoName = splitURL[2];

      // set the host name
      options.hostname = 'api.github.com/'
    }

    //return any error
    return error;
  },

  githubToken: (options) => {
    let error;

    // github access token provided
    if (!options.token) {
      error = 'No github token provided.';
    }

    // return any error
    return error;
  }
}

const gitHub = (options) => {
  // returned info/error message
  let message = {
    error:[],
    info:[]
  };

  message.error.push(_validate.githubToken(options));
  message.error.push(_validate.repo(options));

  return message;
}