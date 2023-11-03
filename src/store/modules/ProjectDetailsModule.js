export default {
    state: {
        projectDetContent: [
            {
                title: 'Minimal Look Bedrooms',
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                text2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
            }
        ],
        sliderPictures: [
            { src: require('@/assets/images/project_details_slider_img/img1.png'), alt: 'slider pic' },
            { src: require('@/assets/images/project_details_slider_img/img2.jpg'), alt: 'slider pic' },
            { src: require('@/assets/images/project_details_slider_img/img3.jpeg'), alt: 'slider pic' },
            { src: require('@/assets/images/project_details_slider_img/img4.jpg'), alt: 'slider pic' }, 
        ],
        
    },
    getters: {
        getProjectDetContent(state) {
            return state.projectDetContent;
        },
        getSliderPictures(state){
            return state.sliderPictures;
        },
        
    }
}