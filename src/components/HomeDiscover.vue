<template>
    <div class="home-discover">
        <v-container>
            <h2 class="text-h5 font-weight-black text-left text-uppercase">
                Discover more nfts
            </h2>
            <v-row>
                <v-col cols="12" sm="12" lg="10" md="10" xl="10" class="d-flex my-5 pa-2">
                    <v-chip class="mx-2 w-100" v-for="category in categorys" :key="category">
                        {{ category }}
                    </v-chip>
                </v-col>
                <v-col cols="12" sm="12" md="2" lg="2" xl="2">
                   
                    <v-menu offset-y >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon  v-bind="attrs" v-on="on"
                                class="d-flex  black--text ml-smAndUp-5">
                                <v-icon >
                                    mdi-filter-variant
                                </v-icon>
                                all filters
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in items" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>

            <v-row class="d-flex">
                <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="portfolio in portfolios" :key="portfolio.id">
                  <SingleProfile :portfolio="portfolio" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import SingleProfile from './SingleProfile.vue';

export default {
    name: 'home-discover',

    data() {
        return {         
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
    },

    computed:{
        ...mapState({
            portfolios:'portfolios',
            categorys: 'categorys'
        })
    },

    components:{
        SingleProfile,
    }
}
</script>

