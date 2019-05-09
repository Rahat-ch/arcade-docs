---
title: Introduction
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
  Introduction
</h1>

# Rahat Codes Arcade Docs

This is an Open Source Project aimed at helping those newer to web development a chance to work with others in developing a real project. We will be building an arcade site that will go through the following versions:

V1. A simple site built with HTML, CSS, and JavaScript containing several small games that users can play.

V2. We will refactor V1 into a React application, otherwise the same functionality of V1 will remain in place. 

V3. We will build a backend for the React application (tech stack TBD). Features to be added: User Authentication, Saving and Displaying Scores or Win Counts. 

# Getting started

Make sure you are a member of the Slack Channel. You can join here:

If you are having trouble joining slack you can contact Rahat on Twitter @rahatcodes or by email at rahat@rahatcodes.com

```
npm install gatsby -g
gatsby new my-docs https://github.com/jannikbuschke/gatsby-antd-docs
cd my-docs
npm run start
```

Visit http://localhost:8000.

Edit files in `/content/docs` and see live updates.

# Features

- [x] Ant Design
- [x] Typescript
- [x] Markdown
- [x] MDX
- [x] Syntax highlighting

# Roadmap

- [x] Add typescript
- [x] Remove Redux
- [x] General simplifications
- [x] Add mdx
- [x] Add syntax highlighting with prismjs
- [x] Improve Header UI
- [ ] Fix menu item links not showing active state
- [ ] Blog feature / second content type
- [ ] Improved typings
- [ ] Improved responsiveness
- [ ] Add Search

# Hosting

In order to host the site the **sites path** needs to be put into gatsby-config.js export object on to the property _pathPrefix_. Then run

```
npm run build
```

and copy the content of the public folder to the webspace.

# License

MIT
