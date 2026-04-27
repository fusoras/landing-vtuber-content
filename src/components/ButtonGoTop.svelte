<script>
    function handleClick() {
        globalThis.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
</script>
<button class="button-go-top" aria-label="Volver arriba" onclick={handleClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M12 5v14m4-10-4-4M8 9l4-4"/></svg>
</button>
<style>
    .button-go-top {
        --size: 50px;

        position: fixed;
        bottom: 20px;
        right: 20px;
        width: var(--size);
        height: var(--size);
        display: grid;
        place-items: center;
        border-radius: 50%;
        border: none;
        background: linear-gradient(var(--grandient)) no-repeat;
        cursor: pointer;
        padding: 0;
        animation: progress-grow auto both;
        animation-timeline: scroll();
        animation-range: 0 200px;

        & svg {
            --size: 35px;

            width: var(--size);
            height: var(--size);
        }
    }

    @keyframes progress-grow {
        from {
            scale: 0;
        }

        to {
            scale: 1;
        }
    }
</style>