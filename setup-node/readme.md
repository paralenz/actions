## paralenz/actions/setup-node

### Options
**fetch-depth**

Number of commits to fetch during checkout. 0 indicates all history for all branches and tags.

Required: false

Default: 1

**node-version**

The node version that should be used

Required: false

Default: 12

**token**

Personal access token (PAT) used to fetch the repository.

Required: false

Default: `${{ github.token }}`

**gh-pkg-registry-token**

Auth token for the github package registry

Required: false



### Example workflow
```yml
name: Example workflow
on:  
  pull_request:
    types: [opened, synchronize, edited]

  setup:
    name: Setup
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: paralenz/setup-node@v1
        with:
          gh-pkg-registry-token: ${{ secrets.NPM_AUTH_TOKEN }}
          node-version: 16

  lint:
    name: Linting
    runs-on: ubuntu-latest
    needs: [setup]
    steps:
      - uses: actions/checkout@v2
      - uses: paralenz/setup-node@v1
      - name: Run linting
        run: yarn lint
```