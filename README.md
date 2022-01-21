# ToDo List

Todo list using Svelte with TypeScript and Tailwind. Todo list includes two lists with uncompleted and completed tasks. While task is in progress it can be moved to completed tasks list. There is a button that clears all tasks and uncompleted tasks counter. Buttons for deleting each of the tasks and moving to another list appear with hover animation. To indicate that a task is in progress, you need to click on it. 

![This is an image](https://github.com/BDaniil/Todo-list/blob/master/Todo%20list%20preview/Todo%20list%20preview%201.jpg?raw=true)

## Creating a project

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
