export default {
    name: "AnimationComponent",

    props: ["work"],

    template: `
        <section class="animation-player">
            <i class="fas fa-film media-icon"></i>
            <h1>{{work.title}}</h1>
            <video :src="'animation/' + work.source" controls></video>
            <h3>{{work.name }}</h3>
            <p>{{work.description }}</p>
        </section>`
}