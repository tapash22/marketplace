<template>
    <div class="home-features">
        <v-container>
            <h2 class="text-h5 font-weight-black text-left text-uppercase">
                collection featured nfts
            </h2>
            <v-row class="d-flex my-5">
                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-text>
                            <v-row class="d-flex justify-space-around">
                                <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-block">
                                    <v-img src="https://picsum.photos/id/11/10/6"/>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-block">
                                    <v-img src="https://picsum.photos/id/11/10/6"/>
                                    <v-img src="https://picsum.photos/id/11/10/6"/>
                                    <v-img src="https://picsum.photos/id/11/10/6"/>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-text class="d-flex justify-space-around">

                        </v-card-text>
                    </v-card>

                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name:'home-features',
}
</script>