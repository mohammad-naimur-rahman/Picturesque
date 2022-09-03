# Picturesque Photograhy theme

#### This is a photograhy fully dynamic website.

This is a monorepo application done by _Yarn Workspaces_. For the frontend I've used _Next JS, Tailwind CSS and many other interactive library_ and for the backend, I've used _Strapi CMS_. For database I've chosen _PostgreSql_ and for aseet library _Cloudinary_. So, we can say it's a **_JAM Stack_** product.

### Features:

- Monorepo for managing frontend and backend together
- _Next JS_ frontend website ready for _SEO Optimization_
- 7 fully dynamic pages
- Best styles optimation with _Tailwind CSS JIT compliler_
- Dynamic contact section with _Email service_
- Dynamic content upload system
- Easy content management system with _Strapi_

### To run locally

Install `yarn` if it's not installed already

```
npm i --global yarn
```

Clone the repository

```
git clone https://github.com/mohammad-naimur-rahman/Picturesque.git
```

Install all the dependencies

```
yarn install-all
```

Configure database and other configuration followed by the `.env.example` in both frontend and the backend.

To run both of the application together

```
yarn dev
```

To run the frontend only

```
yarn start-frontend
```

To run the backend only

```
yarn start-backend
```

Now let's talk about how you can manage both the frontend and backend from the root directory. To give a command to a specific folder, `yarn --cwd` and then the folder name and then the command. For example, if you want to install Bootstrap in the frontend, the command will be

```
yarn --cwd frontend add bootstrap
```

To learn more about yarn workspaces: https://classic.yarnpkg.com/lang/en/docs/workspaces/

Please, give a star ⭐ if you like the project 😊

It's a open source project, so if you want to contribute to it, you're welcome 😍

To get updates such amazing projects, follow me on github, Thanks 🙏
