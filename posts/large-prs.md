---
title: "🛠️ How To Quickly Split up a Large GitHub Pull Request "
date: "2020-12-19"
draft: true
---

If you're a software engineer, it's inevitable that you'll be working on large programming projects at some point during your career. As hard as we try to keep changes as small as possible, large projects _will_ come up–though it does seem to happen more frequently at early-stage startups. However, according to [Plaid](https://plaid.com) Employee #1, [Michael Kelly](http://michaelckelly.com/), _"PR size / feature scope will trend down over time"_. 

__In this post, I break down how I split up large GitHub pull requests into smaller ones very quickly using nothing but the command line.__

Instead of forcing reviewers to review a behemoth of a PR like this on GitHub, ![img](/posts/large-pr.png) we will get something like this, ![img](/posts/smaller-pr.png) and ![img](/posts/split-prs-end-result.png) where #445 is based on #444, and #444 is based on #443, etc., making it much easier for reviewers to review and thus increasing the chances of outputting higher quality code with fewer bugs as a team.

A few strategies are detailed by Bartosz Krajka [here](https://www.thedroidsonroids.com/blog/splitting-pull-request), but the problems that I have with his strategies are that they assume you code in perfect commit chunks (which has never been the case for me) and they don't take advantage of newer tools such as the GitHub CLI and aliases which are crucial to creating multiple PRs in rapid succession.

Instead of having to manually create new PRs, set the base branch, etc. by clicking around on [GitHub.com](https://github.com), you can just run a few commands in the command line.

---
### Requirements:
- Install the [GitHub CLI](https://cli.github.com/) by running `brew install gh`. It's that easy!  
I highly recommend the GitHub CLI even if you don't need to create multiple PRs in rapid succession. It's super useful for merging code, branch cuts/releases, etc. What used to take minutes can now take seconds. In the long run, its hours and days of time saved.
- Familiarity with `.bashrc` or `.zshrc` for storing CLI aliases.

### Part 1

1. First, you want to make sure that you've done all the testing and have fixed up all style issues, ran your linter, etc. It's much easier to start this process once everything is __completely__ done. You've been working on a large project and have maybe 20 commits in the PR. 
2. `git rebase -i staging`  
My alias for this command is `grs`.  
Fixup all of those commits into one commit. I find this approach to be much more practical than a few of Bartosz's strategies because when you're working on a large project, you don't always write code in perfect chunks. You'll likely work on a file, work on another file for a while, and then come back to the first file in a later commit. Thus, combining your commits at the get-go will make it easier for you to rearrange into smaller chunks.
3. `git push --force`  
My alias: `gpf`.  
Don't forget to force push because you are rewriting the commit history when you rebase and are creating new commit hashes.
4. `git reset --soft HEAD^`  
Now that you have just one commit in your PR, run git reset on the most recent commit, to put all of the code in your project into your staging area.
5. `git reset`  
  Unstage all of those changes.
6. `git checkout staging && git pull`  
  My alias: `s`.  
  Always keep your branches up to date!

Now, you should have all of your changes from your project unstaged in your working directory. We can start splitting up the PR now.

---
### Part 2
__Repeat this part (steps 7-10) until you are out of unstaged files in your working directory.__

7. `git checkout -b part-1`  
Create your first part of your PR.

8. `git add file-1 file-2`  
Add the files that you want to add to this PR. I like to group files by functionality. This part is up to you.

9. `git commit -m "commit message here"`

10. `git push --set-upstream origin HEAD && gh pr create --base staging`  
My alias: `gpuoh && grs` or `gpuoh && gh pr create --base branch_name`.  
When you get here, I like to keep the PR name the same as our commit message (automatically prepopulated). So you can just press `enter` three times to create your PR!
In subsequent iterations of part 2, you only need to change the base to whichever branch you just checked out from. e.g. `--base part-2`, `--base part-3`, etc.

![img](/posts/gh-cli.png)

### Part 3

11. After your reviewers have reviewed a PR, you should rebase your other PRs (PRs you created later) on top of it. e.g. After #441 is finished being reviewed, rebase #442 on top of #441 and #443 on top of #442, etc.

12. When all of your PRs have been reviewed and approved, you can merge your PRs using the GH CLI as well, starting from the most recent PR. e.g.  
`gh pr merge 445`, `gh pr merge 444`, etc., where the number is the commit #. Choose `Rebase and merge` and `y`.
![img](/posts/merge-pr-gh-cli.png)

Note: You can add aliases easily by running something like:  
> `echo alias gpuoh=\"git push --set-upstream origin HEAD\" >> ~/.zshrc`


As you can see, what seemed like a hairy task that used to take an hour can now be broken down into just a few commands taking a few minutes.