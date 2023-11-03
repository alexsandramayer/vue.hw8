<template>
     <header class="header container">
        <div class="header__top">
            <HeaderBlock />
        </div>
    </header> 

    <div class="banner banner__blog">
        <div class="banner__block">
            <h1 class="banner__title">Articles & News</h1>
            <div class="banner__breadcrumbs">
                <router-link class="banner__breadcrumb" v-for="link in links"
                   :key="link.id"
                   :to="link.url">{{ link.text }}
                </router-link>
            </div>
        </div>
    </div>

    <section class="latestpost container">
        <h2 class="latestpost__title">Latest Post</h2>
        <div class="latestpost__article">
            <img class="latestpost__img" :src="imgLatest" alt="article7 img">
            <div class="latestpost__info">
                <h3 class="latestpost__info_title">
                    Low Cost Latest Invented Interior Designing Ideas
                </h3>
                <div class="latestpost__info_descr">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br><br>

                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                </div>
                <div class="latestpost__info_bottom">
                    <div class="latestpost__info_data">26 December,2022 </div>
                        
                        <a href="/blogdetails" class="latestpost__info_btn"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></a>
                </div>
            </div>     
        </div>
            
        
        
    </section>

    <section class="blog__articles container">
        <h2 class="blog__articles_title">Articles & News</h2>

        <div class="articles articles__blog" id="article">
            <article class="article" v-for="(item, index) in articles" :key="index">
                <img class="article__img" :src="item.img" alt="article img">
                <div class="article__tag">{{ item.tag }}</div>
                <div class="article__info">
                    <h3 class="article_title">{{ item.title }}</h3>
                        
                    <div class="article__info_bottom">
                        <div class="article__info_data">{{ item.data }}</div>
                        
                        <a href="/blogdetails" class="article__info_btn"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></a>
                    </div>
                </div>
            </article>
        

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
    </section>


    <footer class="footer  container">
        <FooterBlock />
    </footer>
</template>

<script>
import HeaderBlock from '../components/HeaderBlock.vue';
import FooterBlock from '../components/FooterBlock.vue';

    export default {
        components: {HeaderBlock, FooterBlock},
        data() {
            return {
                imgLatest: require('@/assets/images/article_img/article7__img.png'),
                articles: [
                { 
                    img: require('@/assets/images/article_img/article1__img.png'),
                    tag: 'Kitchan Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    data: '26 December,2022',
                    btn: ''
                },
                { 
                    img: require('@/assets/images/article_img/article2__img.png'),
                    tag: 'Living Design',
                    title: 'Low Cost Latest Invented Interior DesigningIdeas',
                    data: '22 December,2022',
                    btn: ''
                },
                { 
                    img: require('@/assets/images/article_img/article3__img.png'),
                    tag: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    data: '25 December,2022',
                    btn: ''
                },
                { 
                    img: require('@/assets/images/article_img/article4__img.png'),
                    tag: 'Kitchan Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    data: '26 December,2022',
                    btn: ''
                },
                { 
                    img: require('@/assets/images/article_img/article5__img.png'),
                    tag: 'Living Design',
                    title: 'Low Cost Latest Invented Interior DesigningIdeas',
                    data: '22 December,2022',
                    btn: ''
                },
                { 
                    img: require('@/assets/images/article_img/article6__img.png'),
                    tag: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    data: '25 December,2022',
                    btn: ''
                },
                ],
                links: [
                    {id: 0, text: 'Home', url: '/'},
                    {id: 1, text: 'Blog', url: '/blog'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>