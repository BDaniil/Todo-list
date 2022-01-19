<script lang="ts">
    import type { ITodo } from '../interfaces/ITodo'

    export let todo: ITodo
    export let removeFromList: (todo: ITodo) => void
    export let setCompleted: (todo: ITodo) => void
    export let setChosen: (todo: ITodo) => void | undefined
    
    
    
</script>

<li >{todo.content}
    {#if !todo.completed}
    <div class="todoCheck" class:chosen={todo.chosen} on:mouseup="{ () => setChosen(todo)}"></div>
    {:else}
    <div class="todoCheck"></div>
    {/if}
    
    
    <button class="delete" on:click={() => removeFromList(todo)}>
      <span>
        <i class="fas fa-trash"></i>
      </span>
    </button>
    {#if todo.chosen}
    <button class="completed"  on:click={() => setCompleted(todo)}>
      <span>
          {#if !todo.completed}
          <i class="far fa-calendar-check"></i>
          {:else}
          <i class="far fa-calendar-times"></i>
          {/if}
      </span>
    </button>
    {/if}
</li>

<style lang="postcss">
    .todoCheck.chosen{
      @apply bg-yellow-300/40;
    }
   
    .todoCheck{
      @apply absolute top-0 left-0 h-full w-full;
    }

    li{
      @apply relative h-11 mb-2 bg-gray-200 rounded-sm cursor-default overflow-hidden list-none;
      padding: 10px 15px;
      word-wrap: break-word;
    }
    li .delete span{
      @apply absolute h-12 top-0 bg-rose-600 w-11 text-center text-white cursor-pointer -right-12 ease-in-out duration-200;
      padding: 10px 15px;
      
    }
    
    li:hover .delete span{
      right: -1px;
    }

    li .completed span{
      @apply absolute h-12 top-0 w-11 text-center text-white cursor-pointer bg-emerald-500 ease-in-out duration-200;
      right: -50px;
      padding: 10px 15px;
    }
    
    li:hover .completed span{
      right: 43px;
    }
</style>