<template>
    <div class="clients">
        <TheNavigation />

            <router-view />

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