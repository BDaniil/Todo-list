<script context="module" lang="ts">
    import '../app.css'
</script>

<script lang="ts">
    import TestSfc from '@src/components/TestSFC.svelte'
    import { counter$ } from '@src/stores/counter.store'
    import { useSnapshot } from '@useSnapshot'

    const counterSn$ = useSnapshot(counter$)
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
    <h1>
        <div class="welcome relative w-full h-0 pt-0 pr-0 pl-0">
            <picture>
                <source srcset="svelte-welcome.webp" type="image/webp" />
                <img src="svelte-welcome.png" alt="Welcome" />
            </picture>
        </div>
        <div>test</div>

        to your new<br />SvelteKit app
    </h1>
    <TestSfc />
    <h2>
        try editing <strong>src/routes/index.svelte</strong>
        {$counterSn$.count}
    </h2>
    <h1 class="bg-orange-600">
        <button
            class="bg-purple-600 text-yellow-200 text-sm rounded-sm p-2 content-center align-middle"
            on:click={() => $counterSn$.addCount()}
        >
            <div class="content-center">click me</div>
        </button>
    </h1>
</section>

<style lang="postcss">
    h1 {
        @apply w-full;
    }

    .welcome {
        padding-bottom: calc(100% * 495 / 2048);
    }

    .welcome img {
        @apply absolute w-full h-full top-0 block;
    }
</style>
