<template>
    <div class="collection-list">
        <v-card elevation="0" color="transparent">
            <v-card-text>
                <v-row class="d-flex justify-space-around">
                    <v-col cols="12" sm="12" md="8" lg="8" xl="8" class="d-block">
                        <v-img src="https://picsum.photos/id/11/10/6" class="rounded" height="100%" />
                    </v-col>
                    <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-block h-100">
                        <div v-for="img in intro.images" :key="img">
                            <v-img :src="img" class="rounded my-2" />
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-text class="d-flex justify-center w-100">
                <v-list class="d-block pa-0" width="500" color="transparent">
                    <v-list-item-title class="my-2">{{ intro.title }}</v-list-item-title>
                    <v-list-item class="d-flex justify-space-between w-100">

                        <v-avatar class="pa-0">
                            <v-img :src="intro.profile_img" />
                        </v-avatar>
                        <v-list-item-title class="my-2 mx-2">{{ intro.name }}</v-list-item-title>

                        <v-list-item-action class="d-flex justify-end">
                            <v-btn outlined color="#6100B8" rounded>{{ intro.text }}</v-btn>
                        </v-list-item-action>

                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'collection-list',
    props:['intro'],
}
</script>