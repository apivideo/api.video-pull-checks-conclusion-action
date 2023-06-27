[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video)
&nbsp; [![badge](https://img.shields.io/github/stars/apivideo/api.video-pull-checks-conclusion-action?style=social)](https://github.com/apivideo/api.video-pull-checks-conclusion-action)
&nbsp; [![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)
![](https://github.com/apivideo/.github/blob/main/assets/apivideo_banner.png)
<h1 align="center">pull-checks-conclusion-action</h1>

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast
video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in
your app.

# Table of contents

- [Table of contents](#table-of-contents)
- [Project description](#project-description)
- [Usage](#usage)
  - [Action inputs](#action-inputs)
- [FAQ](#faq)

# Project description

GitHub action to check the conclusion of a checks run. This action is useful when you want to wait
for a checks run to be completed before continuing the workflow.

# Usage

```yaml
  - name: Check tests results
    uses: apivideo/api.video-pull-checks-conclusion-action@v1
    with:
        token: ${{ secrets.PAT }} # GitHub Token
        repo: ${{ matrix.profile.repository }} # Repository name
        owner: ${{ github.repository_owner }} # Repository owner
        sha: ${{ steps.cpr.outputs.pull-request-head-sha }} # Pull request head sha
```

## Action inputs

| Name | Description | Required | 
| ---- | ----------- | -------- | 
| `token` | GITHUB_TOKEN | **true** |
| `repo` | Repository name | **true** |
| `owner` | Repository owner | **true** |
| `sha` | Pull request head sha | **true** |


# FAQ

If you have any questions, ask us in the [community](https://community.api.video). Or
use [issues](https://github.com/apivideo/api.video-pull-checks-conclusion-action/issues)..
