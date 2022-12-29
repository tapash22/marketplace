<template>
    <div class="single-profile">
        <v-card elevation="0" class="pa-0">
            <v-card-text class="w-100 h-100 pa-0">
                <v-img src="https://picsum.photos/id/11/10/6" height="250" class="rounded-lg" />
                <div class="avatars">
                    <span class="avatar" v-for="avatar in portfolio.avatars" :key="avatar">
                        <img :src="avatar" />
                    </span>
                </div>
            </v-card-text>
            <v-card-text class="w-100 h-25 pa-0">
                <v-card-title class="pa-0 mx-5">{{ portfolio.name }}</v-card-title>
                <div class="sub">
                    <v-card-title class="text-center text-body-1 green--text">
                        <v-icon color="green">
                            mdi-{{ portfolio.icon }}
                        </v-icon>
                        {{ portfolio.rating }}
                    </v-card-title>
                    <v-card-subtitle class="text-center mt-5">{{ portfolio.detail }}</v-card-subtitle>
                </div>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-between">
                <v-chip>
                    {{ portfolio.text1 }}
                </v-chip>
                <v-chip color="white">
                    {{ portfolio.text2 }}
                </v-chip>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'single-profile',
    props:['portfolio'],
}
</script>

<style scoped>
.avatars {
    direction: ltr;
    text-align: left;
    padding-left: 25px;
    margin-top: -20px;
    margin-left: 25px;
}

.avatar img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: relative;
    left: -5px;
    margin-left: -25px;
    /* z-index: 1; */
}
.sub {
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
}
</style>