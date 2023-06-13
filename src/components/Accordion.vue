<script>
import TextCenter from './TextCenter.vue';
export default {
      name: 'Accordion',
        data(){
            return{
                accordion:[
                    {
                        titleAccordion: "17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORGIA",
                        subtitle: "Untold stories",
                        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        collapseId: "collapseOne",
                        status: false,
                    },
                    {
                        titleAccordion: "24/9/2020 GROOVEFEST DOMINICAL REPUBLIC",
                        subtitle: "Untold stories",
                        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        collapseId: "collapseTwo",
                        status: false,
                    },
                    {
                        titleAccordion: "31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO",
                        subtitle: "Untold stories",
                        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        collapseId: "collapseThree",
                        status: false,
                    },
                    {
                        titleAccordion: "07/11/2020 MOGA FESTIVAL - ESSAOURIA, MOROCCO",
                        subtitle: "Untold stories",
                        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        collapseId: "collapseFour",
                        status: false,
                    },
                    {
                        titleAccordion: "10/12/2020 ENVISION FESTIVAL - UVITA, COSTA RICA",
                        subtitle: "Untold stories",
                        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        collapseId: "collapseFive",
                        status: false,
                    }
                ]
            }
        },
        components: { TextCenter },
        methods: {
            classToggle: function(index) {
                this.accordion[index].status = !this.accordion[index].status;
            }
        } 
    }
</script>

<template>
    <div class="row text-center my-5">
        <div class="col-lg-12">
            <TextCenter title="Live Dates" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus cursus egestas. Cras quis vehicula quam, a tempus velit. Ut feugiat augue in sodales luctus"/>
        </div>
        <div class="col-lg-10 mx-auto">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item my-3" v-for="(item, index) in accordion" :key="index">
                    <h2 class="accordion-header" @click="classToggle(index)">
                    <button class="accordion-button collapsed greyBkg" type="button" data-bs-toggle="collapse" :data-bs-target="`#flush-${item.collapseId}`" aria-expanded="false" :aria-controls="`flush-${item.collapseId}`">
                        <i class="bi fs-2 me-3 px-1" :class="item.status === true ? 'bi-dash' : 'bi-plus'"></i>
                        <h5 class="m-0">{{ item.titleAccordion }}</h5>
                    </button>
                    </h2>
                    <div :id="`flush-${item.collapseId}`" class="accordion-collapse collapse greyBkg" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body greyBkg">
                        <h4 class="text-white">{{ item.subtitle }}</h4>
                        <p class="textGrey">{{ item.copy }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@use './../styles/partials/variable.scss' as *;
.accordion-item, .accordion-button{
    color: $red;
}

.accordion-button i{
    color: $white;
    transition: 0.3s;
}

.accordion-item{
    border: 0px;
}

.accordion-item:hover i{
    background-color: $red;
}

.accordion-button::after {
    content: none;
}

</style>