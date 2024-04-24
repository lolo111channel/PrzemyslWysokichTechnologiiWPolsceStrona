<script>
import { RouterLink } from 'vue-router';

    export default {
        props: {
            title: {
                type:String,
                default: ''
            },
            class: {
                type:String,
                default:''
            },
            grid_area_id: {
                type:String,
                default:''
            },

            background_color: {
                type:String,
                default: 'blue'
            },

            to_page: {
                type:String,
                default:"/"
            }
        }
    }

</script>

<template>
    <div class="main-link-button" :style="{gridArea: grid_area_id,backgroundColor: background_color}">
        <RouterLink class="router-link" :to = to_page>
            <h1>{{title}}</h1>
        </RouterLink>
    </div>
</template>

<style scoped>
.main-link-button {
    color: white;

    border: 3px solid white;
    text-align: center;

    margin: 0.5vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

.router-link {
    border: 5px solid black;
    width:100%;
    height: 100%;
    padding: 2vh;

    color: white;
}  


</style>