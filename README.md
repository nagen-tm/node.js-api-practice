# node.js-api-practice
This repo has a github topics api call as practice.

## Actions
I've used this repo to test and learn about github actions. 

### Hello World
The helloWorld.yml tests pulling a written action from this [repo](https://github.com/nagengtm/hello-world-github-action)

It simply takes one input, and returns 'Hello {input}' as well as outputs the time.

Tutorial found [here](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

### KICS
The kics.yml is testing out a third party action that scans infrastructure as code files. Currently set up to scan the test terraform file in this repo.

TODO: get the scan to hit the .serverless folder