#Now, you can run the script like this:

# sh git.sh "Your commit message here"

echo "\ngit pull..."  # Removed -e
git pull

git add .

echo "\ngit status..."  # Removed -e
git status

# Check if a commit message is provided as a command-line argument
if [ -n "$1" ]; then
  commitMessage="$1"
else
  echo "\nEnter a commit message:"
  read commitMessage
fi

git commit -m "$commitMessage"

echo "\ngit push..."  # Removed -e
git push
echo "\n"
echo "Finished!"
echo "\n"
