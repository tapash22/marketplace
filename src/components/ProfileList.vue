<template>
    <div class="profile-list">
        <v-list class="d-flex justify-space-between w-100" v-for="profile in profiles" :key="profile.id">
            <v-list-item class=" d-flex justify-center pa-2">
                <v-img :src="profile.image" width="100" height="120" class="rounded-lg" />
            </v-list-item>
            <v-list-item class="w-50 d-block">
                <v-list-item-title>
                    {{ profile.name }}
                </v-list-item-title>
                <v-list-item-group class="d-flex justify-space-between pa-0">
                    <v-avatar size="42">
                        <v-img :src="profile.profile" />
                    </v-avatar>
                    <v-btn outlined color="success" class="pa-0 ml-2">
                        <v-icon left>
                            mdi-{{ profile.icon }}
                        </v-icon>
                        {{ profile.rating }}
                    </v-btn>
                    <v-list-item-title>{{ profile.text }}</v-list-item-title>

                </v-list-item-group>

                <v-list-item-action>
                    <v-btn  rounded color="#6100B8" @click="changeColor" :outlined="outline">place a bid</v-btn>
                </v-list-item-action>
            </v-list-item>

        </v-list>
    </div>
</template>

<script>
export default {
    name: 'profile-list',
    props: ['profiles'],
    data() {
        return {
            outline:true
        }
    },
    methods: {
        changeColor() {
            this.outline = !this.outline;

        }
    }
}
</script>

<style>
.aa {
    background: green !important;
}

.is-blue {
    background: blue;
}
</style>