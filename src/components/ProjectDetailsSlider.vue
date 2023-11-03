<template>
    <swiper
        :zoom="true"
        :pagination="{
        clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="img in sliderPictures" :key="index">
            <div class="swiper-zoom-container">
                <img class="swiper-slide__img" :src="img.src" :alt="img.alt" />
            </div>
            
        </swiper-slide>
        
    </swiper>
   
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/zoom';
import 'swiper/scss/pagination';

// import required modules
import { Zoom, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Pagination],
        };
    },
    props: {
        sliderPictures:{
            type: Array,
            required: true
        }
    }
};
</script>
  