<template>
    <div class="home-features">
        <v-container>
            <h2 class="text-h5 font-weight-black text-left text-uppercase">
                collection featured nfts
            </h2>
            <v-row class="d-flex my-5">
                <v-col cols="12" sm="12" md="4" lg="4" xl="4" v-for="intro in introduce" :key="intro.id">
                 <CollectionList :intro="intro" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CollectionList from './CollectionList.vue';

export default {
    name: 'home-features',
    computed:{
        ...mapState({
            introduce:'introduce',
        })
    },

    components:{
        CollectionList
    }
}
</script>