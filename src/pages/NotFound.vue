<template>
   <header class="header container">
        <div class="header__top">
            <HeaderBlock />
        </div>
    </header>

    <div class="notfound__block">
        <div class="notfound__info">
            <span class="notfound__title">404</span>
            <div class="notfound__descr">We are sorry, but the page
you requested was not found</div>
            <a class="notfound__btn" href="/">Back To Home</a>
        </div>
        <img class="notfound__img" src="../assets/images/notfound__img.png" alt="not found image">
    </div>
</template>

<script>
import HeaderBlock from '../components/HeaderBlock.vue';
    export default {
        components: {
            HeaderBlock,
        },
    }
</script>

<style lang="scss" scoped>

</style>