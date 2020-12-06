import Web from "./TheWebComponent.js";
import Animation from "./TheAnimationComponent.js";
import Graphic from "./TheImageComponent.js";

export default {
    props: ["item", "mediatype"],

    template: `
    <section class="lightbox">
        <span class="lb-close" @click="closelb">X</span>
        <h2>Type of Work: {{mediatype}}</h2>
        <!-- web,Animation or graphic component (mediatype) gets rendered here -->
        <component :is="currentComponent" :work="item"></component>
    </section>
    `,

    computed: {
        currentComponent: function() {
            return this.mediatype;
        }
    },

    components: {
        Web,
        Animation,
        Graphic
    },

    methods: {
        closelb() {
            document.querySelector('.lightbox').classList.remove('show-lightbox');
        }
    }
}