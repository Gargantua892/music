<script>
import PageHeader from "./PageHeader.vue";
import TextCenter from "./TextCenter.vue";
import Card from "./Card.vue";
import Cta from "./Cta.vue";
import Accordion from "./Accordion.vue";
import PageFooter from "./PageFooter.vue";
import Buttons from "./Buttons.vue";
    export default {
      name: 'PageMain',
        data(){
            return{

            }
        },
        components: { PageHeader, TextCenter, Card, Cta, Accordion, PageFooter, Buttons }
       
    }
</script>

<template>
    <section class="main h-100">

        <!-- Hero section -->
        <PageHeader class="text-white fixed-top"/>
        <section class="hero text-white container-fluid h-100 d-flex align-items-center">
            <div class="row px-4 pb-4 pt-5 text-center text-white w-100">
                <h1 class="display-1 fw-bold">Untold stories</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">There is an untold story behind every favourite song</p>
                    <Buttons primaryButtonTxt="Latest album" secondaryButtonTxt="Live dates" />
                </div>
            </div>
        </section>

        <section class="container-fluid below-hero text-white p-4">
            <TextCenter title="Music Is LIfe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus cursus egestas. Cras quis vehicula quam, a tempus velit. Ut feugiat augue in sodales luctus" />
        </section>

        <!-- Latest news section -->
        <section class="container-fluid latest-news text-white p-4">
            <TextCenter class="my-5" title="Latest Band News" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus cursus egestas. Cras quis vehicula quam, a tempus velit. Ut feugiat augue in sodales luctus" />
            <div class="articles container mb-5">
                <div class="row">
                    <div class="col-lg-8 d-flex flex-column justify-content-between">
                        <div class="row">
                            <Card class="short-image" shortImg="short-image" image="blog_music_techo-800x400.jpg" cardTitle="Technology and music" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                        <div class="row row-cols-2">
                            <Card image="blog-post3.jpg" cardTitle="While my guitar gently weeps" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card image="blog-post4.jpg" cardTitle="It just sounds better" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                        <div class="row">
                            <Card shortImg="short-image" image="blog_flavor_rock-800x400.jpg" cardTitle="The flavor of rock" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                    </div>
                    <div class="col-lg-4 d-flex flex-column gap-3">
                        <Card image="blog-post1.jpg" cardTitle="Taking it back to the old school" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        <Card image="blog-post2.jpg" cardTitle="Sharing the stage with a legend" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    </div>
                </div>
                <!-- <div class="row mb-5">
                    <div class="col-lg-8">
                        <div class="row">
                            <Card shortImg="short-image" image="blog_music_techo.jpg" cardTitle="Technology and music" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                        <div class="row row-cols-2">
                            <Card image="blog-post3.jpg" cardTitle="While my guitar gently weeps" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card image="blog-post4.jpg" cardTitle="It just sounds better" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                        <div class="row">
                            <Card shortImg="short-image" image="blog_flavor_rock.jpg" cardTitle="The flavor of rock" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row g-3">
                            <Card image="blog-post1.jpg" cardTitle="Taking it back to the old school" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card image="blog-post2.jpg" cardTitle="Sharing the stage with a legend" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                    </div>
                </div> -->
            </div>
        </section>

        <Cta text="View all latest news"/>

        <!-- Quote section -->
        <section class="container-fluid testimonial text-white p-5">

                <div class="col-lg-6 mx-auto">
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus cursus egestas. Cras quis vehicula quam, a tempus velit. Ut feugiat augue in sodales luctus</p>
                    <i class="bi bi-play-circle-fill fs-2"></i>
                </div>
        </section>

        <!-- accordion section -->
        <section class="container-fluid accordion text-white p-4">
            <Accordion />
        </section>
        <Cta text="View all latest dates"/>
        <PageFooter />

    </section>

</template>

<style lang="scss">
@use './../styles/partials/variable.scss' as *;

.hero{
    background-image: url('./../assets/images/home_slider.jpg');
    background-size: cover;
    min-height: 600px;
    max-height: 800px;
}

.below-hero{
    background-color: $grey;
}

.latest-news, .accordion{
    background-color: $darkGrey;
}

.cta{
    background-color: $red;
}

.short-image{
    height: 250px;
    width: 100%;
    object-fit: cover;
}

// .img-card-container{
//     height: 200px;

//     &.img{
//         height: 100%;
//         width: 100%;
//         object-fit: cover;
//     }

// }

.testimonial{
    background-image: url('./../assets/images/home-testimonial-parallax.jpg');
}


</style>