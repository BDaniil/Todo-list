<script lang="ts">
    import { v4 as uuid } from 'uuid'

    import type { ITodo } from '../interfaces/ITodo'
    import ListStructure from '../components/ListStructure.svelte'

    let data = ''

    let todos: ITodo[] = []
    todos.push({ id: uuid(), completed: false, content: 'To do todo app', chosen: false })

    function addTodo() {
        if (data != '' && data != ' ') {
            todos = [...todos, { id: uuid(), completed: false, content: data, chosen: false }]
            data = ''
        }
    }

    function removeFromList(todo: ITodo) {
        todos.splice(todos.indexOf(todo), 1)
        todos = todos
    }

    function setCompleted(todo: ITodo) {
        todo.completed = !todo.completed
        todos = todos
    }

    function setChosen(todo: ITodo) {
        todo.chosen = !todo.chosen
        todos = todos
    }

    const resetList = () => (todos = [])

    $: getResult = !todos.length ? 0 : todos.length - checkedNum
    $: console.log(todos)

    $: checkedNum = todos.filter((t) => t.chosen).length
</script>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>
<div class="wrapper">
    <header>Todo App</header>
    <div class="inputField">
        <input type="text" maxlength="35" placeholder="Add your new todo" bind:value={data} />
        <button on:click={addTodo}><i class="fas fa-plus" /></button>
    </div>
    <h1>In progress Tasks</h1>
    <ul class="todoList">
        {#each todos as todo}
            {#if !todo.completed}
                <ListStructure {todo} {removeFromList} {setCompleted} {setChosen} />
            {/if}
        {/each}
    </ul>
    <h1>Completed Tasks</h1>
    <ul class="todoList">
        {#each todos as todo}
            {#if todo.completed}
                <ListStructure {todo} {removeFromList} {setCompleted} {setChosen} />
            {/if}
        {/each}
    </ul>

    <div class="footer">
        <span>You have <span class="pendingTasks">{getResult}</span> pending tasks</span>
        <button on:click={resetList}>Clear All</button>
    </div>
</div>

<style lang="postcss">
    .wrapper {
        @apply w-full p-6 rounded bg-white max-w-sm mt-32 mr-auto mb-auto ml-auto shadow-2xl;
    }
    .wrapper header {
        @apply text-3xl font-semibold justify-center flex mb-5;
    }
    .wrapper .inputField {
        @apply w-full flex h-12 mt-5 mr-auto mb-auto ml-auto;
    }
    .inputField input {
        @apply h-full rounded-sm text-base pl-4 w-11/12 outline-none border border-solid border-slate-300 ease-in duration-200;
    }
    .inputField input:focus {
        @apply border-emerald-500;
    }
    .inputField button {
        @apply w-12 h-full text-white ml-1 text-xl cursor-pointer rounded-sm bg-emerald-500 border-none ease-in duration-300;
    }
    .inputField button:hover {
        @apply bg-emerald-400;
    }
    .wrapper .todoList {
        @apply overflow-y-auto max-h-64;
    }

    .wrapper h1 {
        @apply block mt-2 mr-auto mb-5 ml-auto text-2xl;
    }

    .wrapper .todoList::-webkit-scrollbar {
        @apply w-5;
    }
    .wrapper .todoList::-webkit-scrollbar-thumb {
        @apply bg-gray-200 border-solid border-transparent rounded-lg bg-clip-content;
        border: 5px solid transparent;
    }

    .wrapper .footer {
        @apply flex w-full mt-5 items-center justify-between;
    }

    .footer button {
        @apply rounded-sm border-none text-white font-normal text-base ml-1 cursor-pointer select-none z-20 bg-emerald-500 ease-in duration-300;
        padding: 6px 10px;
    }

    .footer button:hover {
        @apply bg-emerald-400;
    }
</style>
