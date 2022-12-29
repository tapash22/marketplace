<template>
    <div class="navigation">
        <v-app-bar elevate-on-scroll color="white">
            <!-- <v-app-bar-nav-icon /> -->
            <v-app-bar-title class="text-h6 font-weight-bold text-uppercase mx-2">Nfters</v-app-bar-title>
          
            <v-list class="d-flex justify-space-evenly mx-5 ">
                <v-list-item v-for="list in lists" :key="list.id"  class="">
                    <v-list-item-title class="text-body-1 font-weight-bold text-center">{{ list.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-text-field class="mt-6" v-model="value"  append-icon="mdi-magnify" outlined rounded dense />

            <v-btn class=" white--text mx-2" rounded color="#6100B8">
                Upload
            </v-btn>
            <v-btn rounded outlined color="#6100B8">
                connected
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'navigation',

    data() {
        return {
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