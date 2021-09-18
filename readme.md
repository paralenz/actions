# paralenz/actions
This is a mono-repo containing all sorts of github actions that is commonly use by the paralenz development team

For an example of how to create an action check the `./example`-directory

## Publishing
It is fairly easy to publish a new version.

The workflow is setup so when ever a pull request is merged into the `master` -branch it will automaticlly create a new release. For this we will use the `version` in `package.json` to set the correct tag and release name.

## Creating new actions
So you might wonder. But, how do I create a new action.

You can either use the compersom way or the fast way.

#### Fast
```sh
yarn action:new
```

#### Cumpersom
1. Create a new folder with the name of your action.
1. Create an action.yml file.
1. Enter all the data you need



