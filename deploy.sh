# Give admin permissions to the script:
# chmod +x deploy.sh

git update-index --skip-worktree config.json # prevents config.json from being commited.
node deploy-commands.js
node index.js