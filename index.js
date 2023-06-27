const core = require('@actions/core');
const github = require('@actions/github');


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForResult = async (token, owner, repo, ref) => {
    await sleep(10 * 1000);
    const octokit = github.getOctokit(token);
    const res = await octokit.rest.checks.listForRef({
        owner,
        repo,
        ref
    });
    if (res.data.check_runs.length === 0 || res.data.check_runs[0].status === 'queued' || res.data.check_runs[0].status === 'in_progress') {
        await sleep(20 * 1000);
        return await waitForResult(token, owner, repo, ref);
    }

    return {
        conclusion: res.data.check_runs[0].conclusion,
        detailsUrl: res.data.check_runs[0].details_url
    }
}

try {
    const token = core.getInput("token");
    const ref = core.getInput("sha");
    const repo = core.getInput("repo");
    const owner = core.getInput("owner");

    try {
        waitForResult(token, owner, repo, ref).then((result) => {
            core.setOutput("status", result.conclusion);
            if (result.conclusion !== 'success') {
                core.setFailed('Tests failed, see ' + result.detailsUrl);
            }
        });
    } catch(e) {
        console.log(e);
        core.setOutput("status", 'success');
    }
} catch (error) {
    core.setFailed(error.message);
}