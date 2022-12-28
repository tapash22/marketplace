<template>
    <div class="home-discover">
        <v-container>
            <h2 class="text-h5 font-weight-black text-left text-uppercase">
                Discover more nfts
            </h2>
            <v-row>
                <v-col class="d-flex my-5 pa-2">
                    <v-chip class="mx-2" v-for="list in lists" :key="list">
                    {{list}}
                </v-chip>
                </v-col>
                
            </v-row>
              
          
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'home-discover',

    data() {
        return {
            lists: ['All category', 'Art', 'Celebrities', 'Gaming', 'Sport', 'Music', 'Crypto']
        }
    }
}
</script>