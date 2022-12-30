<template>
    <div class="home-header">
        <v-container>
            <V-row class="d-flex">
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="w-50">
                    <v-sheet class="d-block w-100">
                        <h2 class="text-h4 font-weight-black text-uppercase my-5">
                            Discover, and collect<br /> digital art nfts
                        </h2>
                        <p class="text-body-1 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia ipsa ipsam, accusamus quas
                            minima placeat accusantium maiores reprehenderit aliquid, vel delectus. Illo fugiat
                            doloribus unde qui repellendus a ratione?
                        </p>
                        <v-btn color="#6100B8" rounded class="my-5 white--text text-body-2" large>
                            Explore Now
                        </v-btn>
                        <v-list class=" d-flex" width="300">
                            <v-list-item class="d-block pa-0" width="100" v-for="list in lists" :key="list.id">
                                <v-list-item-title class="text-h4 font-weight-black">{{ list.numbers}}K+</v-list-item-title>
                                <v-list-item-subtitle class="text-body-2 text-left mx-2">{{ list.name
                                    }}</v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-col>
                
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="w-50">
                    <div class="avatar">
                        <div class="avatarr">
                            <img src="https://cdn.vuetifyjs.com/images/john.png"  />
                        </div>
                      <div class="avatars">
                        <span class="avatar">
                            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                        </span>
                        <span class="avatar">
                            <img src="https://randomuser.me/api/portraits/women/85.jpg" />
                        </span>
                        <span class="avatar">
                            <img src="https://cdn.vuetifyjs.com/images/john.png" />
                        </span>
                      </div>
                    
                
                    </div>
                </v-col>
            </V-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'home-header',
    data() {
        return {
            lists: [
                {
                    id: 1,
                    name: 'Artwork',
                    numbers: 98,
                },
                {
                    id: 2,
                    name: 'Auction',
                    numbers: 12,
                },
                {
                    id: 3,
                    name: 'Artist',
                    numbers: 18,
                },
            ]
        }
    }
}
</script>

<style scoped>
.avatar{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
}
.avatar .avatarr{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.avatar .avatarr img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 150px;
    margin-left:50px;
    z-index: 1;
}
.avatar .avatars {
    width: 80%;
    display: flex;
    direction: rtl;
    text-align: left;
    padding-left: 25px;
    margin-top: 50px;
    margin-left: 200px;
}
.avatar .avatars .avatar img {
    width: 300px;
    height: 300px;
    position: relative;
    left: -10px;
    margin-left: -280px;
    border-radius: 10%;
    /* z-index: 1; */
}
</style>