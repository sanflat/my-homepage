# My Homepage

[URL](URL)

## Environment
- Node.js: 14-alpine
- Docker

## Get Started Command
```
$ docker-compose build
// Next.Js(Typescript) Setup
$ docker-compose run --rm next yarn create next-app . --typescript
// Chakra Package & Chakra/React Icons & framer-motion Install
$ docker-compose run --rm next yarn add -D @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6 @chakra-ui/icons react-icons
$ docker-compose up
```

## Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
- [Framer Motion](https://www.framer.com/motion/) - An animation library for React

## Project structure

```
$PROJECT_ROOT
│   # Docker files
├── docker/
│   # React component files
├── components/
│   # Page files
├── pages/
│   # Images file
├── public/
│   # docker-compose 
├── docker-compose.yml
│   # The file you are looking at 
└── README.md
```
