<template>
    <header class="header container">
        <div class="header__top">
            <HeaderBlock />
        </div>
    </header> 

    <div class="banner banner__project">
        <div class="banner__block">
            <h1 class="banner__title">Our Project</h1>
            <div class="banner__breadcrumbs">
                <router-link class="banner__breadcrumb" v-for="link in links"
                   :key="link.id"
                   :to="link.url">{{ link.text }}
                </router-link>
            </div>
        </div>
    </div>

    <div class="categories container">
        <div class="categories__btns">
            <button :class="[tag.isActive ? 'btn-active' : ''] + ' ' + 'categories__btn' "
                v-for="tag in tags" @click="clickTag(tag.id)"> {{tag.name}}
            </button>
        </div>
        <div class="categories__block">
            <ProjectComp v-for="article in currenTagArticles" :article="article"
        :clickFav="clickFav" />
        </div>

        <div class="pagination">
                <ul class="pagination__ul">
                    <li>01</li>
                    <li>02</li>
                    <li>03</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg></li>
                </ul>
            </div>
    </div>

    <footer class="footer  container">
        <FooterBlock />
    </footer>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import HeaderBlock from '../components/HeaderBlock.vue';
import FooterBlock from '../components/FooterBlock.vue';
import ProjectComp from '../components/ProjectComp.vue';

    export default {
        name: 'ProjectPage',
        components: {
            HeaderBlock,
            FooterBlock,
            ProjectComp
        },
        
        data() {
            return {
                tags: [
                    {
                        id: 1,
                        name: 'Bathroom',
                        isActive: false,
                    },
                    {
                        id: 2,
                        name: 'Bedroom',
                        isActive: false,
                    },
                    {
                        id: 3,
                        name: 'Kitchen',
                        isActive: false,
                    },
                    {
                        id: 4,
                        name: 'Living Area',
                        isActive: false,
                    }
                ],
                articles: [
                    {
                        id: uuidv4(),
                        tag: 'Bedroom',
                        img: require('@/assets/images/project_page_img/project__bedroom1.png'),
                        title: 'Minimal Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        favorite: true,
                    },
                    {
                        id: uuidv4(),
                        tag: 'Bedroom',
                        img: require('@/assets/images/project_page_img/project__bedroom2.png'),
                        title: 'Minimal Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        favorite: false,
                    },
                    {
                        id: uuidv4(),
                        tag: 'Bedroom',
                        img: require('@/assets/images/project_page_img/project__bedroom3.png'),
                        title: 'Classic Minimal Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        favorite: false,
                    },
                    {
                        id: uuidv4(),
                        tag: 'Bedroom',
                        img: require('@/assets/images/project_page_img/project__bedroom4.png'),
                        title: 'Modern Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        favorite: true,
                    },
                    {
                        id: uuidv4(),
                        tag: 'Bedroom',
                        img: require('@/assets/images/project_page_img/project__bedroom5.png'),
                        title: 'Minimal Bedroom table',
                        subtitle: 'Decor / Artchitecture',
                        favorite: false,
                    },
                    {
                        id: uuidv4(),
                        tag: 'Bedroom',
                        img: require('@/assets/images/project_page_img/project__bedroom6.png'),
                        title: 'System Table',
                        subtitle: 'Decor / Artchitecture',
                        favorite: false,
                    },
                    {
                        id: uuidv4(),
                        tag: 'Bedroom',
                        img: require('@/assets/images/project_page_img/project__bedroom7.png'),
                        title: 'Modern Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        favorite: false,
                    },
                    {
                        id: uuidv4(),
                        tag: 'Bedroom',
                        img: require('@/assets/images/project_page_img/project__bedroom8.png'),
                        title: 'Modern Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        favorite: false,
                    },
                ],
                currenTagArticles: [],
                favoriteArticles: [],
                links: [
                    {id: 0, text: 'Home', url: '/'},
                    {id: 1, text: 'Project', url: '/project'},
                ]
            }
        },
        methods: {
            clickTag(id) {
                const tags = this.tags
                for (let i = 0; i < tags.length; i++) {
                    tags[i].isActive = tags[i].id === id;
                    if(tags[i].id === id) {this.filterTagArticles(tags[i].name)};
                }
            },
            clickFav(id) {
                const articles = this.articles;
                for (let i = 0; i < articles.length; i++) {
                    if(articles[i].id === id) {
                        articles[i].favorite = !articles[i].favorite;
                    }
                }
                this.filterFavArticles()
            },
            filterFavArticles() {
                return this.favoriteArticles = this.articles.filter((art) => art.favorite === true);
            },
            filterTagArticles(tag) {
                return this.currenTagArticles = this.articles.filter((art) => art.tag === tag);
            }
        },
        created() {
            this.currenTagArticles = this.articles;
        } 
    }
</script>

<style lang="scss" scoped>

</style>