<p align="center">
  <img src="https://res.cloudinary.com/dxyu6elli/image/upload/v1702290838/meta_ab07nt.png" alt="KBM Meta image" />
</p>

# itskbm.com

> Welcome to my personal website portfolio. I am an experienced Front-End Software Engineer from Rwanda 🇷🇼, dedicated to crafting accessible web and mobile solutions.

## Table of Contents

- [Read](#Read)
- [Setup](#setup)
- [Usage](#usage)
- [Scripts](#Scripts)
- [Contributors](#contributors)

## Read

Some people have contacted me asking me if they can use this code for their own website, and the answer to that question is usually yes, with attribution.

I value keeping my site open source, but as you all know, plagiarism is bad. So All I ask is to not claim this effort as your own.

Please also note that I did not build this site with the intention of it being a starter theme, so if you have questions about implementation, please refer to the Official <a href="https://nextjs.org/" target="_blank">NextJs</a> docs.

## Setup

- Node.js Latest version ( Required )
- Yarn ( Required )

1. Clone the repository.

```bash
git clone https://github.com/KundwaBruno/portfolioV4
```

2. For the feedback section you will need to create a <a href='https://console.firebase.google.com/' target="_blank">firebase</a> firestore instance add the necessary below environment keys. Check `/env.example` file.

3. Install dependencies

```
yarn install
```

## Usage

1. Run the development server

```
yarn dev
```

2. Open your browser and navigate to `http://localhost:3000` if port 3000 is in use check out the terminal to know which port that the project is running on.

## Technologies Used

- <a href="https://react.dev/" target="_blank">React Js</a>
- <a href="https://nextjs.org/" target="_blank">NextJs</a>
- <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
- <a href="https://ant.design/" target="_blank">Firebase</a>

## Scripts

- `yarn dev` : Start development server.
- `yarn build` : Create an optimized production build.
- `yarn start` : Start the production server.
- `lint` : Run ESLint to check for code style issues.
- `yarn type:check` : Check for code typescript issues.
- `husky:fix`: Fix husky git hooks commands.
