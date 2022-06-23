# Prettier pre-commit Test

This is a small test of how Prettier works with a pre-commit hook.

## Installation

Install prettier-hook-test with npm

```bash
  cd prettier-hook-test
  npm install
```

## Documentation

Here is the link to Prettier pre-commit docs. This repository utilizes the first approach listed in the docs, but there are also other approaches that may be more suitable for our needs. If you would like to learn more about it here is the link:

[Prettier Pre Commit Hook Docs](https://prettier.io/docs/en/precommit.html)

Here is also a link to Prettier format options:

[Prettier Options List](https://prettier.io/docs/en/options)

## Usage/Examples

If you check the `src/App.tsx` file, you will notice that it is not following any proper code formatting best practices.

If you make any type of change to the `src/App.tsx` , or any other file, and then commit those changes. The Prettier pre-commit hook will be responsible for formatting those files based on the rules set in the `.prettierrc.json` config file.
