<template>
    <a href="/" class="logo"><img :src="logo" alt="logo"></a>
    <nav class="nav">
        <ul class="nav__list"> 
            <router-link class="link" v-for="link in links"
                   :key="link.id"
                   :to="link.url">{{ link.text }}
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                logo: require('@/assets/images/logo__img.svg'),
                links: [
                    {id: 0, text: 'Home', url: '/'},
                    {id: 1, text: 'Project', url: '/project'},
                    {id: 2, text: 'Blog', url: '/blog'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>