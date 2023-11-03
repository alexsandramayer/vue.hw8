<template>
    <header class="header container">
        <div class="header__top">
            <HeaderBlock />
        </div>
        <div class="header__content">
            <div class="header__content_info">
                <h1 class="header__content_title">Let Your Home 
                    Be Unique</h1>
                <div class="header__content_descr">There are many variations of the passages of lorem Ipsum fromavailable, majority.</div>
                <a href="#" class="header__content_btn">Get Started</a>
            </div>
        </div>
    </header>

    <section class="projects container">
        <h2 class="projects__title">Follow Our Projects</h2>
        <div class="projects__descr">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</div>
        <div class="projects__items">
            <div class="projects__item">
                <img class="projects__item_img" id="img1" :src="project1" alt="image project1">
                <div class="projects__item_info">
                    <div class="projects__item_titles">
                        <h3 class="projects__item_title">Modern Kitchan</h3>
                        <h4 class="projects__item_subtitle">Decor / Artchitecture</h4>
                    </div>
                    <a href="#" class="projects__item_btn"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></a>
                </div>
                
            </div>
            <div class="projects__item">
                <img class="projects__item_img" id="img2" :src="project2" alt="image project2">
                <div class="projects__item_info">
                    <div class="projects__item_titles">
                        <h3 class="projects__item_title">Modern Kitchan</h3>
                        <h4 class="projects__item_subtitle">Decor / Artchitecture</h4>
                    </div>
                    <a href="#" class="projects__item_btn"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></a>
                </div>
            </div>
            <div class="projects__item">
                <img class="projects__item_img" id="img3" :src="project3" alt="image project3">
                <div class="projects__item_info">
                    <div class="projects__item_titles">
                        <h3 class="projects__item_title">Modern Kitchan</h3>
                        <h4 class="projects__item_subtitle">Decor / Artchitecture</h4>
                    </div>
                    <a href="#" class="projects__item_btn"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></a>
                </div>
            </div>
            <div class="projects__item">
                <img class="projects__item_img" id="img4" :src="project4" alt="image project4">
                <div class="projects__item_info">
                    <div class="projects__item_titles">
                        <h3 class="projects__item_title">Modern Kitchan</h3>
                        <h4 class="projects__item_subtitle">Decor / Artchitecture</h4>
                    </div>
                    <a href="#" class="projects__item_btn"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></a>
                </div>
            </div>
        </div>
    </section>

    <div class="counter">
        <div class="container">
            <div class="counter__items">
                <div class="counter__item">
                    <div class="counter__number">12</div>
                    <div class="counter__descr">Years Of Experiance</div>
                </div>
                <div class="counter__line"></div>
                <div class="counter__item">
                    <div class="counter__number">85</div>
                    <div class="counter__descr">Success Project</div>
                </div>
                <div class="counter__line"></div>
                <div class="counter__item">
                    <div class="counter__number">15</div>
                    <div class="counter__descr">Active Project</div>
                </div>
                <div class="counter__line"></div>
                <div class="counter__item">
                    <div class="counter__number">95</div>
                    <div class="counter__descr">Happy CUstomers</div>
                </div>
            </div>
        </div>
        
    </div>

    <section class="blog__main container">
        <h2 class="blog__main_title">Articles & News</h2>
        <div class="blog__main_descr">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</div>

        <div class="articles" id="articles">
            <article class="article" v-for="(item, index) in articles.slice(0, 3)" :key="index">
                <img class="article__img" :src="item.img" alt="article img">
                <div class="article__tag">{{ item.tag }} </div>
                <div class="article__info">
                    <h3 class="article_title">{{ item.title }}</h3>
                        
                    <div class="article__info_bottom">
                        <div class="article__info_data">{{ item.data }}</div>
                        
                        <a href="blog_details.html" class="article__info_btn"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></a>
                    </div>
                </div>
            </article>
           
            

        </div>
    </section>

    <footer class="footer container">
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
            project1: require('@/assets/images/main_project_img/project1__img.png'),
            project2: require('@/assets/images/main_project_img/project2__img.png'),
            project3: require('@/assets/images/main_project_img/project3__img.png'),
            project4: require('@/assets/images/main_project_img/project4__img.png'),
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
            ]
        }
    }
}
</script>

