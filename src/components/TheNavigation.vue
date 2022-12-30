<template>
    <div class="navigation">
        <v-app-bar app elevate-on-scroll extension-height="lg" color="white">
            <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer" />
            <v-app-bar-title class="text-h6 font-weight-bold text-uppercase mx-2">Nfters</v-app-bar-title>
          
            <v-list class="d-md-flex justify-space-evenly mx-5 hidden-sm-and-down ">
                <v-list-item v-for="list in lists" :key="list.id"  class="">
                    <v-list-item-title class="text-body-1 font-weight-bold text-center">{{ list.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-text-field class="mt-6 shrink hidden-sm-and-down"  v-model="value"  append-icon="mdi-magnify" outlined rounded dense />

            <v-btn class=" white--text mx-2 hidden-sm-and-down" rounded color="#6100B8" >
                Upload
            </v-btn>
            <v-btn rounded outlined color="#6100B8" class="hidden-sm-and-down show-sm-and-up">
                connected
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer temporary app v-model="drawer" hide-overlay height="60%" class="mt-12" >
            <v-list class="d-block my-5 w-100 pa-0">
                <v-list-item v-for="list in lists" :key="list.id"  class="d-flex justify-center" >
                    <v-list-item-title class="text-body-1 font-weight-bold text-center">{{ list.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
            <v-btn class="white--text offset-4" rounded color="#6100B8" >
                Upload
            </v-btn>
            <v-btn rounded outlined color="#6100B8" class="offset-3 my-5">
                connected
            </v-btn>
            <v-text-field class="mt-6 mx-4"  v-model="value"  append-icon="mdi-magnify" outlined rounded dense />

        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'navigation',

    data() {
        return {
            drawer:false,
            lists: [
                {
                    id: 1,
                    name: 'Marketplace',
                    url: '',
                },
                {
                    id: 2,
                    name: 'Resources',
                    url: '',
                },
                {
                    id: 3,
                    name: 'About',
                    url: '',
                }
            ],
            value: ''
        }
    }
}
</script>