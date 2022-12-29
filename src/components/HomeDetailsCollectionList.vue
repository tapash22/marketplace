<template>
    <div class="collection-list">
        <v-list class="d-flex">
            <v-list-item-title class="text-center pa-0"> {{ list.id }}</v-list-item-title>
         
            <v-avatar size="44" class="mx-2">
                <v-img :src="list.image" />
            </v-avatar>
            <v-list-item class="d-block">
                <v-list-item-title>{{ list.name }}</v-list-item-title>
                <v-list-item-subtitle>
                    <v-icon color="black">mdi-{{ list.icon }}</v-icon>
                    {{ list.count }}
                </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <p class="text-h6 font-weight-bold text-black"> +{{ list.rating }}%</p>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
    </div>
</template>

<script>
export default {
    name: 'home-details-collectionlis-list',
    props:['list'],
}
</script>