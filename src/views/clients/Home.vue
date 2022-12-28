<template>
    <div class="home">
        <div class="home-header my-5">
            <HomeHeader />
        </div>
        <div class="home-tag my-5" >
            <HomeTag />
        </div>
        <div class="details">
            <HomeDetails />
        </div>
        <div class="home-featchers">
            <HomeFeatures />
        </div>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeTag from '@/components/HomeTag.vue';
import HomeDetails from '@/components/HomeDetails.vue';
import HomeFeatures from '@/components/HomeFeatures.vue';

export default {
    name: 'home',

    components: {
        HomeHeader,
        HomeTag,
        HomeDetails,
        HomeFeatures
    }

}
</script>

<style scoped>
.home-tag{
    background: rgba(255,255,255,0.1);
    height:200px;
}
</style>