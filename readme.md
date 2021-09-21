# paralenz/actions
This is a mono-repo containing all sorts of github actions that is commonly use by the paralenz development team

For an example of how to create an action check the [`./example`-directory](https://github.com/paralenz/actions/tree/master/example)

To learn more about how to write a workflow you can read more in the [github documentation](https://docs.github.com/en/actions)

## Creating new actions
So you might wonder. But, how do I create a new action.

You can either use the fast way or the cumbersome.

#### The Fast way
```sh
yarn action:new
```

#### the Cumbersome way
1. Create a new folder with the name of your action.
1. Create an action.yml file.
1. Enter all the data you need

## Publishing a new version
It is fairly easy to publish a new version.

The workflow is setup so when ever a pull request is merged into the `master` -branch it will automaticlly create a new release. For this we will use the `version` in `package.json` to set the correct tag and release name.

### So what happens in the `release`-workflow?
1. First we will lint the ts code using `@paralenz/eslint-config-typescript-react`.
1. Documentation will be generated based on all `**/action.yml` files in this project. The newly generated documentation will be pushed to this repository.
1. We will use the `version` from `package.json` to create a new tag and a new release with the specific version. The tag and release will be prefixed with `v` (v1.0.0) - You do not have to lock your workflow to a specific version of the paralenz/actions, you can use the `@master` to use whatever is located in the master branch.
1. 💰 Profit!

