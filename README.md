# lireddit

A recreation of Ben Awad's [14 hour Tutorial][1], but with my own subtle
improvements in code quality and developer experience.

<img src="https://user-images.githubusercontent.com/43412083/122988795-bbecba80-d3bf-11eb-8f20-ab1b0c451588.png" width="250" hspace="5" vspace="20"> <img src="https://user-images.githubusercontent.com/43412083/122988809-bee7ab00-d3bf-11eb-9f29-fd46f3b99c23.png" width="250" hspace="5" vspace="20"> <img src="https://user-images.githubusercontent.com/43412083/122988820-c14a0500-d3bf-11eb-9a3a-64276f5641e5.png" width="250" hspace="5" vspace="20">

## [Demo here](https://lireddit.ml)

Improvements include:

- Test coverage of both the backend and frontend
- Much better UI
- Dark mode
- Image support
- Comments on posts

Original Repository [here](https://github.com/benawad/lireddit).

---

## How to deploy

### Server

Setup postgresql: here's guides for [Ubuntu][2] and [Manjaro/Arch][3].

Create a database called `lireddit`:

```console
createdb -U postgres lireddit
```

Then, in the root project directory, run the following:

```console
cd server
cp .env.EXAMPLE .env
```

Edit `CORS_ORIGIN` and `DOMAIN` as needed, and then run

```console
yarn
yarn build
yarn start
```

### Web

```console
cd web
cp .env.production.local.EXAMPLE .env.production.local
```

Edit the variables as needed, and then run

```console
yarn
yarn build
yarn start
```

---

## Development setup

### Backend

Setup postgresql: here's guides for [Ubuntu][2] and [Manjaro/Arch][3].

Create a database called `lireddit`, and another called `lireddit-test`:


```console
createdb -U postgres lireddit
createdb -U postgres lireddit-test
```

Run `yarn watch` in one terminal window, and `yarn dev` in the other.

You get hot reload and database auto-synchronization enabled by default.

Testing: run `yarn test`

### Frontend

Run `yarn dev` to start the next server in development mode.

Testing: run `yarn test:frontend` in the `server` folder and `yarn test` in the
`web` folder.

[1]: https://www.youtube.com/watch?v=I6ypD7qv3Z8
[2]: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04
[3]: https://dev.to/tusharsadhwani/how-to-setup-postgresql-on-manjaro-linux-arch-412l
https://codesandbox.io/s/react-drag-and-drop-react-beautiful-dnd-forked-qxgggy?file=/src/index.js:1085-1568
