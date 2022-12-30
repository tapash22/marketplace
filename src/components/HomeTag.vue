<template>
    <div class="home-tag">
        <v-row class=" h-100">
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="w-100 d-flex justify-center">
                <h2 class="text-h4 font-weight-black text-center text-uppercase mt-15 mx-5">
                    The amazing nft art<br /> of the world here
                </h2>
            </v-col>

            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-space-evenly "  >
                <v-sheet  width="280" class="d-flex flex-column flex-md-row bg-transparent mx-2 pa-5 my-5" color="transparent"  v-for="list in lists" :key="list.id">
                    <v-icon size="lg" class="mx-1   text-h3" color="black">
                        mdi-{{ list.icon }}
                    </v-icon>
                    <div class="d-block">
                        <h6 class="text-body-1 font-weight-bold my-2 text-black">{{ list.name }}</h6>
                        <p class="text-body-2 text-justify">
                            {{ list.text }}
                        </p>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'home-tag',
    data() {
        return {
            lists: [
                {
                    id: 1,
                    name: 'Fast Transaction',
                    icon: 'calendar-edit',
                    text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus animi et cumque commodi'
                },
                {
                    id: 2,
                    name: 'Growth Transaction',
                    icon: 'chart-box-outline',
                    text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus animi et cumque commodi'
                },
            ]
        }
    }
}
</script>