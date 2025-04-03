<template>
    <div class="container TheTableHeader">
        <div class="row ">
            <div class="col-12 text-center" >
                <div class="circle translate-middle" style="position: absolute; top: 40%; left: 50%; ">
                    <img class="img-fluid" :src="require('@/assets/img/Logo.png')" data-aos="zoom-in" data-aos-duration="1000" alt="Report！可魯">
                </div>
                <div class="translate-middle mt-2" style="position: absolute; top: 60%; left: 50%; ">
                    <p class="text-white fw-semibold fs-4 mt-5">Report！可魯</p>
                    <a href="https://www.instagram.com/alara221231/" target="_blank"><i class="bi bi-instagram" style="color:rgb(197, 196, 196);font-size: 50px;"></i></a>
                    <a href="https://discord.gg/v6JtWcWkfm" target="_blank"><i class="bi bi-discord ms-3" style="color:rgb(197, 196, 196);font-size: 50px;"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TheTableHeader', // 組件名稱
  };
</script>

<style scoped>
.circle {
    width: 14.5rem;
    height: 14.5rem;
}
.TheTableHeader{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
</style>