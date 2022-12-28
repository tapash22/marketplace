<template>
    <div class="home-details">
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="4" sm="12" lg="4" xl="4" class="d-block">
                    <v-card class="border-none pa-2 bg-white">

                        <v-img class="rounded-lg w-100 w-100 h-100 background-position-center background-size-cover" height="300" src="https://picsum.photos/id/11/10/6" />

                        <v-card-text class="pa-0">
                            <v-list class="d-flex justify-space-between">
                                <v-list-item class="d-flex">
                                    <v-avatar class="mx-2">
                                        <v-img src="https://picsum.photos/id/11/10/6"></v-img>
                                    </v-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>name</v-list-item-title>
                                        <v-list-item-subtitle>title</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item class="d-flex justify-end">
                                    <v-list-item-content>
                                        <v-list-item-title class="text-center">no</v-list-item-title>
                                        <v-list-item-subtitle class="text-center">yes</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>



                </v-col>

                <v-col cols="12" md="4" sm="12" lg="4" xl="4">
                    <v-list class="d-flex justify-space-between w-100">
                        <v-list-item class="w-50 d-flex justify-center">
                            <v-img src="https://picsum.photos/id/11/10/6" />
                        </v-list-item>
                        <v-list-item class="w-50 d-block">
                            <v-list-item-title>
                                name
                            </v-list-item-title>
                            <v-list-item-group class="d-flex pa-0"> 
                                <v-avatar size="lg" width="30" height="30">
                                    <v-img src="https://picsum.photos/id/11/10/6"  class="w-100 h-100 background-position-center background-size-cover" />
                                </v-avatar>
                                <v-btn small outlined  color="green" class="mx-2">save</v-btn>
                                1 to 8
                            </v-list-item-group>
                   
                                <v-list-item-action>
                                    <v-btn rounded  color="primary" >sahhve</v-btn>
                                </v-list-item-action>
                        </v-list-item>
                            
                    </v-list>
                </v-col>

                <v-col cols="12" md="4" sm="12" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="text-h6 font-weight-bold">
                            name
                        </v-card-title>
                        <v-card-subtitle>date</v-card-subtitle>
                        <v-card-text class="d-block">
                            <v-list class="d-flex">
                                1
                                <v-avatar size="lg" width="150" height="50" class="mx-2">
                                    <v-img src="https://picsum.photos/id/11/10/6" />
                                </v-avatar>
                                <v-list-item class="d-block">
                                    <v-list-item-title>name</v-list-item-title>
                                    <v-list-item-subtitle>date</v-list-item-subtitle>
                                </v-list-item>
                                <v-list-item>
                                    <p>444</p>
                                </v-list-item>
                            </v-list>
                            <v-divider></v-divider>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'home-details',
}
</script>