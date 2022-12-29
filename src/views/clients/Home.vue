<template>
    <div class="home">
        <div class="home-header">
            <HomeHeader />
        </div>
        <div class="home-tag " style="background:rgba(0,255,0,0.1); height:100%" >
            <HomeTag />
        </div>
        <div class="details">
            <HomeDetails />
        </div>
        <div class="home-featchers" style="background:rgba(0,255,0,0.1);">
            <HomeFeatures />
        </div>
        <div class="home-create">
            <HomeCreate />
        </div>
        <div class="home-discover">
            <HomeDiscover />
        </div>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeTag from '@/components/HomeTag.vue';
import HomeDetails from '@/components/HomeDetails.vue';
import HomeFeatures from '@/components/HomeFeatures.vue';
import HomeCreate from '@/components/HomeCreate.vue';
import HomeDiscover from '@/components/HomeDiscover.vue';

export default {
    name: 'home',

    components: {
        HomeHeader,
        HomeTag,
        HomeDetails,
        HomeFeatures,
        HomeCreate,
        HomeDiscover
    }

}
</script>

<style scoped>
.home-tag{
    background: rgba(255,255,255,0.1);
}
div{
    padding-top: 20px;
    padding-bottom:20px;
}
</style>