---
title: Edit these Docs
root: '/docs'
parents: ['Update Docs']
---

# Clone the documentation Repo 

The Repo for documentation is available at: https://github.com/Rahat-ch/arcade-docs. You can follow the getting started guide instructions to clone this into your machine. 

# Running the docs locally

You must have Node and NPM installed to continue! Once cloned run the following commands:

```
cd arcade-docs
npm install

```

All the dependencies for the project will be installed in the directory

To run a local server in development mode:

```
npm -g gatsby-cli
gatsby develop

```
In your browser navigate to http://localhost:8000. Any changes you make to the code will cause this page to automatically refresh with your update after you save. 

# Assign yourself an issue

Just like the regular repo make sure you create an issue on this repo and explain what you are doing. 

# Edit Existing articles

All articles are listed as .md files in contents - docs - section you are editing - name of page. These are markdown files (simlar to githube ReadMe's)

# Add a New Article

Add a folder in docs if you are creating a new section or just add newpagename.md into the folder of the secion you are adding to. 

Add the front matter to the top of your page:

```
---
title: Edit these Docs
root: '/docs'
parents: ['Update Docs']
---
```

Replace the above values with the values that make sense for you. The parents is the name of the Section you are adding to. 

#Deploying

These are the same steps as the regullar repo procudure, once you make a pull request this will only be reviewed by Rahat. 


