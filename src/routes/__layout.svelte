<div class="flex flex-row justify-center">
    <a href="/home">Home</a> |
    <a href="/">Index</a> |
    <a href="/todo-lists">Todo lists</a> 
</div>

<slot />

<style lang="postcss">
    a {
        @apply ml-0.5 mr-0.5;
    }
</style>
