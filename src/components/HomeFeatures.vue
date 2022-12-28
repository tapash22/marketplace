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
                                <v-col cols="12" sm="12" md="8" lg="8" xl="8" class="d-block">
                                    <v-img src="https://picsum.photos/id/11/10/6" class="rounded" height="100%" />
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-block">
                                    <v-img src="https://picsum.photos/id/11/10/6" class="rounded my-2" />
                                    <v-img src="https://picsum.photos/id/11/10/6" class="rounded my-2" />
                                    <v-img src="https://picsum.photos/id/11/10/6" class="rounded my-2" />
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-text class="d-flex justify-center w-100">
                            <v-list class="d-block pa-0" width="500">
                                <v-list-item-title class="my-2">name</v-list-item-title>
                                <v-list-item class="d-flex justify-space-between w-100">

                                    <v-avatar class="pa-0">
                                        <v-img src="https://picsum.photos/id/11/10/6" />
                                    </v-avatar>
                                    <v-list-item-title class="my-2 mx-2">name</v-list-item-title>

                                    <v-list-item-action class="d-flex justify-end">
                                        <v-btn outlined color="blue" rounded>Total 50 items</v-btn>
                                    </v-list-item-action>

                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>

                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'home-features',
}
</script>