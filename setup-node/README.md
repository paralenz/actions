# paralenz/setup-node

Setup node and install dependencies

This action checks out the commit, sets up Node and installs deps using yarn.
    
| Name | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| fetch-depth |  | 1 | Number of commits to fetch during checkout. 0 indicates all history for all branches and tags. |
| node-version |  | 12 | The node version that should be used |
| token |  | ${{ github.token }} | Personal access token (PAT) used to fetch the repository. |
| gh-pkg-registry-token |  | ${{ github.token }} | Auth token for the github package registry. This is needed if a private paralenz package is installed |
    