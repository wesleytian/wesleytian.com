---
title: "Hosting Hugo Using GitHub"
date: "2018-07-15"
---

In this short tutorial, you will be creating two repositories, one that will store your Hugo source files, and one that will store the files neccessary to view your website. The website repo is called `public` and will be inside of your source repository. This will be done by using a `git submodule`.

This guide requires you to have git installed, a Hugo website that you can easily clone from it's github repo, and a GitHub account.

1. Create a GitHub repository for your website. Name it `<USERNAME>.github.io`. All your files neccessary for your website will be stored here.
	Ex: wesleytian.github.io

2. Create a Github repository for all of your Hugo source code. Name it anything you like _except_ for `<USERNAME>.github.io`.
	Ex: blog

3. Navigate to a directory where you want your source files to be stored. `cd <DIRECTORY>` `git clone <SOURCE_REPO_URL>`
	Ex: `cd webdev`
	`git clone https://github.com/wesleytian/blog.git`

4. Change directory to the repository you just cloned. `cd <SOURCE>`
Ex: `cd blog`


5. `git submodule add -b master <WEBSITE_REPO_URL> public`
Ex: `git submodule add -b master https://github.com/wesleytian/wesleytian.github.io.git public`

6. Copy all of your Hugo source files into the source folder except the public folder.

7. Create a script based on https://gohugo.io/hosting-and-deployment/hosting-on-github/#put-it-into-a-script
and run `./deploy.sh "Optional commit message"`. Do both of these steps in your source folder.

8. You are now done! You should now be able to access your website through https://USERNAME.github.io/ It make take a few minutes for your DNS to refresh.

9. Note that your website is now up to date in the <USERNAME>.github.io repo, but your source files have not yet been added, committed, and pushed to GitHub. To do so, simply type `git add . && git commit -m "commit message" && git push origin master`

Note: This guide is based off of https://gohugo.io/hosting-and-deployment/hosting-on-github/#step-by-step-instructions
but is more detailed, and includes steps that were missing from the original documentation.

Note: You also have to clone a theme into the themes/ folder or else you will get a "missing layouts" error.

