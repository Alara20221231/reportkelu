<template>
    <div class="ReportKeluView">
        <TheTableHeader />

        <!-- 報價 -->
        <section class="section FeeQuote" id="FeeQuote">
            <div class="container">
                <div class="row">
                    <FeeQuote />
                </div>
            </div>
        </section>

        <!-- 教學文章 -->
        <section class="Teaching" id="Teaching">
            <div class="container">
                <Teaching_articles />
            </div>
        </section>

        <RKfooter />
    </div>
    <LeftNavBar />
    <TopButton />
</template>

<script>
import TheTableHeader from '../components/TheTableHeader.vue';
import FeeQuote from '../components/FeeQuote.vue';
import RKfooter from '../components/RKfooter.vue';
import LeftNavBar from '../components/LeftNavBar.vue';
import Teaching_articles from '../components/Teaching_articles.vue';
import TopButton from '../components/TopButton.vue';
import AOS from 'aos';

export default{
  name:'ReportKeluView',
  components:{
    TheTableHeader,
    FeeQuote,
    RKfooter,
    LeftNavBar,
    Teaching_articles,
    TopButton
  },


};
AOS.init();

</script>

<style src="@/assets/css/index.css"></style>
