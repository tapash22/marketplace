<template>
    <div class="home-create">
        <v-container>
            <v-row class="d-flex my-5 pa-0">
                <v-col cols="12" sm="12" lg="3" md="3" xl="3" class="d-block ">
                    <div v-for="list in lists" :key="list.id" style="display:flex;justify-content:center">
                        <v-badge bottom color="transparent" offset-x="50" offset-y="50" class="my-5 mx-5">
                            <template v-slot:badge>
                                <v-avatar size="62">
                                    <v-img :src="list.image1"></v-img>
                                </v-avatar>
                            </template>
                            <v-img :src="list.image2" width="250" height="200"></v-img>
                        </v-badge>
                    </div>


                </v-col>
                <v-col cols="12" sm="12" lg="3" md="3" xl="3" class="d-flex justify-center pa-10">
                   
                    <v-badge bottom color="transparent" offset-x="50" offset-y="50" class=" mx-5">
                            <template v-slot:badge>
                                <v-avatar size="62">
                                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                                </v-avatar>
                            </template>
                            <v-img src="https://picsum.photos/id/11/10/6" width="250" height="200"></v-img>
                        </v-badge>

                </v-col>

                <v-col cols="12" sm="12" lg="6" md="6" xl="6">
                    <v-sheet class="d-block w-100">
                        <h2 class="text-h4 font-weight-black text-uppercase my-5 mt-10">
                            create and <br />sell your nfts
                        </h2>
                        <p class="text-body-1 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia ipsa ipsam, accusamus quas
                            minima placeat accusantium maiores reprehenderit aliquid, vel delectus. Illo fugiat
                            doloribus unde qui repellendus a ratione?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia ipsa ipsam, accusamus quas
                            minima placeat accusantium maiores
                        </p>
                        <v-btn color="#6100B8" rounded class="my-5 white--text text-body-2" x-large>
                            Explore Now
                        </v-btn>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'home-create',
    data() {
        return {
            lists: [
                {
                    id: 1,
                    image1: 'https://cdn.vuetifyjs.com/images/john.png',
                    image2: 'https://picsum.photos/id/11/10/6'
                },
                {
                    id: 2,
                    image1: 'https://cdn.vuetifyjs.com/images/john.png',
                    image2: 'https://picsum.photos/id/11/10/6'
                },

            ]
        }
    }
}
</script>