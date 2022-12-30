<template>
    <div class="clients">
        <TheNavigation />
        <div>
            <router-view />
        </div>


    </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';

export default {
    name: 'clients',
    components: {
        TheNavigation
    }
}
</script>