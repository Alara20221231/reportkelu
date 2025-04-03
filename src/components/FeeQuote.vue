<template>
    <PageTitle title="收費參考"/>
    <div class="col-12 col-sm-4" data-aos="fade-up" data-aos-duration="1800"  v-for="(image, index) in images" :key="index">
        <div class="card border mt-5">
            <img
            :src="image.img"
            class="img-thumbnail preview-img"
            @click="openModal(image.img)"
            style="background-color: #353535;"
            :alt="image.alt"
            />
        </div>
    </div>

    <!-- Modal 彈出視窗 -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true" ref="modal" style="background-color: #3535356c;">
        <div class="modal-dialog modal-dialog-centered " >
            <div class="modal-content border" style="background-color: #353535;">
                <div class="modal-body text-center">
                    <img :src="selectedImage" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
    <h5 class="text-white text-end mt-3">最後更新時間：2025/03/29</h5>
</template>
<script>
    import PageTitle from './PageTitle.vue';
    import { Modal } from "bootstrap";

    export default {
        name: 'FeeQuote',
        components: {
            PageTitle,
        },
        data() {
            return {
                images: [
                    { img: require('@/assets/img/Money1.png'),alt:'報價單' },
                    { img: require('@/assets/img/Money3.png'),alt:'現有程式報價單' },
                    { img: require('@/assets/img/process.png'),alt:'服務流程' },

                ],
                selectedImage: "", 
                modalInstance: null,
            };
        },
        mounted() {
            this.modalInstance = new Modal(this.$refs.modal);
        },
        methods: {
            openModal(image) {
                this.selectedImage = image; // 直接設置選中的圖片
                this.modalInstance.show();
            },
        },
    };
</script>
<style scoped>
.preview-img {
  cursor: pointer;
  transition: transform 0.2s;
}
.preview-img:hover{
  transform: scale(1.1);
}

</style>