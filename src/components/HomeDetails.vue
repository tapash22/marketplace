<template>
    <div class="home-details">
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="4" sm="12" lg="4" xl="4" class="d-block">
                    <v-card class=" pa-2 bg-white mt-5" elevation="0">
                        <v-img class="rounded-lg w-100 w-100 h-100 background-position-center background-size-cover"
                            height="350" src="https://picsum.photos/id/11/10/6" />

                        <v-card-text class="pa-0">
                            <v-list class="d-flex justify-space-between">
                                <v-list-item class="d-flex">
                                    <v-avatar class="mx-2">
                                        <v-img src="https://picsum.photos/id/11/10/6"></v-img>
                                    </v-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>name</v-list-item-title>
                                        <v-list-item-subtitle>title</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item class="d-flex justify-end">
                                    <v-list-item-content>
                                        <v-list-item-title class="text-center">no</v-list-item-title>
                                        <v-list-item-subtitle class="text-center">yes</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>



                </v-col>

                <v-col cols="12" md="4" sm="12" lg="4" xl="4">
                   <ProfileList :profiles="profiles" />
                </v-col>

                <v-col cols="12" md="4" sm="12" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="text-h6 font-weight-bold">
                            Top collection over
                        </v-card-title>
                        <v-card-subtitle>Last 7 days</v-card-subtitle>
                        <v-card-text class="d-block pa-0" v-for="list in lists" :key="list.id">
                            <HomeDetailsCollectionList :list="list" />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
// decagram
<script>
import { mapState } from 'vuex';
import HomeDetailsCollectionList from './HomeDetailsCollectionList.vue';
import ProfileList from './ProfileList.vue';

export default {
    name: 'home-details',
    data() {
        return {

        }
    },
    computed:{
        lists(){
            return this.$store.state.lists;
        },
        profiles(){
            return this.$store.state.profiles;
        }
        // ...mapState({
        //     lists: 'lists',
        //     profiles:'profiles',
        // })
    },
    components: {
        HomeDetailsCollectionList,
        ProfileList,
    }

}
</script>