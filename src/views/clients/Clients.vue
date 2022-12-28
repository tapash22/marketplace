<template>
    <div class="clients">
        <TheNavigation />
        <v-main>
            <router-view />
        </v-main>
    </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';

export default {
    name:'clients',
    components:{
        TheNavigation
    }
}
</script>