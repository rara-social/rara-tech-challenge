# RARA Social Wallet

## Setup

1. Clone Repo
2. Create .env file
    1. Copy `blank_copy.env` to a new file called `.env`
    2. Set all values
4. Install Dependancies `$ yarn install`
5. Open two terminal windows:
    1. Start Server `$ yarn dev`
    2. Start Frontend `$ yarn start`

## Git Strategy

### `master`

- All commits on master will trigger CI workflow (configured in `.github/workflows`). Currently:
  1. Build Docker container
  2. Push to Docker Hub (`rarasocial/mm-bot-github:latest`)
- No direct commits on `master` – all commits should be 'Squash and Merge' pull-requests from `staging` branch

### `staging`

- Staging should always be "Ready to Demo" (mostly error-free, functionaly complete)
- No direct commits on `staging` – all commits should be 'Squash and Merge' pull-requests from `<feature-branch>` branch

### `<feature-branch>`

1. Create a new feature branch from `staging` branch – `git checkout -b new_feature`
   1. Use "WIP" for commit messages while the branch is still being developed on, eg, `git commit -m 'WIP - still working...'`
   2. If a new commit lands in `staging`, switch to `staging` & pull new changes. Switch back to `<feature-branch>` and rebase from `staging` – `git rebase staging`
2. When all of the functionality of `<feature-branch>` complete, push `<feature-branch>` to github
3. Open a pull request against `staging`
   1. Should merge cleanly (if not, repeat step #1.2)
   2. Use the 'Squash and Merge' option to complete the pull request
   3. Edit the commit message as needed
   4. Delete the branch on github after pull request is complete
4. Switch to `staging`, pull `staging` from github (should be clean)
5. Delete your local branch

