# AMA - Anytime

## Prerequisites

AMA is powered by Redwood, a popular open source full stack framework.

> - Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow [Redwood's Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

## Handy Endpoints

| Endpoint         | Start Up Command      | Local URL             |
| :--------------- | :-------------------- | :-------------------- |
| Main Application | yarn rw dev           | http://localhost:8910 |
| Storybook        | yarn rw storybook     | http://localhost:7910 |
| Prisma Studio    | yarn rw prisma studio | http://localhost:5555 |

## Build Your Local Environment

### Install Dependencies

After you've cloned this GitHub repository, head over to the `ama-anytime` directory and install its dependencies:

```
cd ama-anytime
yarn install
```

### Set Up Your Database

We use a Postgres database to persist data in this app. Our `schema.prisma` file grabs the database path from your `.env` file. Go ahead and create that file!

```
touch .env
```

Then add this line to your `.env` file:

```
DATABASE_URL="postgresql://postgres@localhost:5432/ama_dev?connection_limit=1"
```

_You can learn more about the Postgres path in [Redwood's Postgres setup docs](https://redwoodjs.com/docs/local-postgres-setup)._

Now create a Redwood session secret to allow you to login to the application.

```
yarn rw g secret
```

That terminal command will print a string. Place the string in your `.env` file like so:

```
SESSION_SECRET=your-string
```

Awesome! Now run the latest migration to update your database schema.

```
yarn rw prisma migrate dev
```

### Create a User

After you've installed dependencies and set up your database, fire up your fancy server:

```
yarn redwood dev
```

Your browser should automatically open to http://localhost:8910 where you'll see the login in page. Now navigate to http://localhost:8910/signup to create your user account.

## All Things Redwood

During development, you'll find yourself using Redwood patterns and the Redwood CLI quite a bit. Refer to the [Redwood docs](https://redwoodjs.com/docs) for all things Redwood!
