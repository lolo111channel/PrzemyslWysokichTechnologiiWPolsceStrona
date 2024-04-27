<script>
    import { RouterLink } from 'vue-router';

    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            sources: {
                type: [String,String],
                default: []
            },
            images: {
                type:[String,String,String,String],
                default: []
            },
            buttons_name: {
                type:[String,String,String,String],
                default: []
            },
            buttons_link: {
                type:[String,String,String,String],
                default: []
            }
        }
    }
</script>


<template>
    <div class="content-view-container">
      <div class="buttons">

        <RouterLink class="button-router-link" :to=buttons_link[0]>
            {{buttons_name[0]}}
        </RouterLink>

        <RouterLink class="button-router-link" :to=buttons_link[1]>
            {{buttons_name[1]}}
        </RouterLink>

        <RouterLink class="button-router-link" :to=buttons_link[2]>
            {{buttons_name[2]}}
        </RouterLink>

        <RouterLink class="button-router-link" :to=buttons_link[3]>
            {{buttons_name[3]}}
        </RouterLink>
      </div>

      <div class="two-columns">

        <div class="content-container">
            <h1>{{ title }}</h1>
            <div class="content">
                <slot></slot>

            </div>
        </div>

        <div class="column-container">
            <div class="images">

                <div>
                    <div class="image">
                        <img :src=images[0]>
                    </div>
                    <div class="image">
                        <img :src=images[1]>
                    </div>
                </div>
                <div>
                    <div class="image">
                        <img :src=images[2]>
                    </div>
                    <div class="image">
                        <img :src=images[3]>
                    </div>
                </div>

            </div>

            <div class="sources">
                <p>Źródła:</p>
                <a :href=sources[0]>{{ sources[1] }}</a>
            </div>
        </div>

      </div>


    </div>
</template>
  
<style scoped>

.column-container {
    width: 50%;
    height: 80%;

    margin: 1vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-flow: column nowrap;
}

.images {
    width: 100%;
    height: 80%;
    
    margin-bottom: 1vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

}


.image {
    border: 1px solid white;

    width: 25vh;
    height: 25vh;

    margin: 1vh;
}

.image img {
    width: 100%;
    height: 100%;
}

.sources {
    width: 100%;
    height: 10%;

    margin-top: 1vh;
    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
}


.content-container { 
    width: 70%;
    height: 80%;

    margin:1vh;

    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-flow: column nowrap;

    color: white;
}

.content-container h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    font-weight: bolder;
    letter-spacing: 0.24vh;
    text-align: center
}

.content {
    height: 80%;
    width: 75%;
    font-size: 1.2em;
}

.two-columns {

    width: 100%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-flow: row nowrap;
}

.button-router-link {
    border: 1px solid white;
    color: white;    
    padding: 1vh;

    width: 15vh;
    text-align: center;
    margin: 1vh;
}




.content-view-container {
    height: 90vh;
    width: 150vh;

    display: flex;
    
    align-items: center;
    
    flex-flow: column;
}

.buttons {
    width: 100%;
    height: 5vh;
    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1vh;
    padding: 3vh;
}


</style>
  