<template>
    <PageTitle title="精選文章" />
    
    <!-- 篩選類別 -->
    <div class="text-center">
        <button 
            v-for="cat in categories" 
            :key="cat" 
            @click="filterCategory(cat)" 
            class="box1 mx-2 mt-1" 
            :class="{ 'active-category': selectedCategory === cat }">
            {{ cat }}
        </button>
    </div>
    
    <div class="row">
        <div class="col-12 col-sm-4 mt-3" data-aos="fade-up" data-aos-duration="1800" v-for="(article, index) in pagedArticles" :key="index">
            <div class="card border preview-img shadow-lg" @click="openModal(article)">
                <div class="card-body">
                    <img class="img-fluid" :src="article.images[0]" :alt="'圖片 ' + (index + 1)" />
                    <p>{{ article.text }}</p>
                    <div class="row">
                        <div class="col">
                            <small>{{ article.date }}</small>
                        </div>
                        <div class="col text-end">
                            <span class="badge bg-secondary text-white">{{article.category}}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- 分頁控制 -->
    <div class="mt-4">
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{'disabled': currentPage === 1}">
                    <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">&laquo;</a>
                </li>
                <li class="page-item" v-for="page in totalPages" :key="page" :class="{'active': currentPage === page}">
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{'disabled': currentPage === totalPages}">
                    <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">&raquo;</a>
                </li>
            </ul>
        </nav>
    </div>

    <!-- Modal 彈出視窗 -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true" ref="modal" style="background-color: #3535356c;">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content" style="background-color: #353535;">
                <div class="modal-header  border-0">
                    <h4 class="text-white modal-title fs-5 text-start w-100">{{ selectedArticle.text }}</h4>
                    <button type="button" class="border-0 btn text-warning fs-5" data-bs-dismiss="modal" aria-label="Close">X</button>
                </div>
                <div class="modal-body">
                    <div :id="'carousel-' + selectedArticle.id" class="carousel slide carousel-dark" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item" v-for="(image, idx) in selectedArticle.images" :key="idx" :class="{ active: idx === 0 }">
                                <img :src="image" class="d-block w-100" alt="文章圖片">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + selectedArticle.id" data-bs-slide="prev" >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + selectedArticle.id" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <!-- 顯示網站按鈕 (條件：website有內容) -->
                    <div class="mt-3" v-if="selectedArticle.website && selectedArticle.website.length > 0">
                        <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">相關連結</label>
                        <div class="row grid gap-0 row-gap-4 mt-1">
                            <div class="col-12 col-sm-3" v-for="(site, index) in selectedArticle.website" :key="index">
                                <a :href="site.url" target="_blank" class="btn btn-outline-info mx-auto d-block w-100" :title="site.name">{{ site.name }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from './PageTitle.vue';
import { Modal } from 'bootstrap';
import axios from 'axios';
import Carousel from 'bootstrap/js/dist/carousel'; // ✅ 只載入 Carousel

export default {
    name: 'TeachingArticles',
    components: { PageTitle },
    data() {
        return {
            articles: [],
            currentPage: 1,
            itemsPerPage: 6,
            selectedArticle: { images: [] },
            modalInstance: null,
            selectedCategory: "全部",
            categories: ["全部"]
        };
    },
    computed: {
        filteredArticles() {
            if (this.selectedCategory === "全部") {
                return this.articles;
            }
            return this.articles.filter(article => article.category === this.selectedCategory);
        },
        pagedArticles() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredArticles.slice(startIndex, startIndex + this.itemsPerPage);
        },
        totalPages() {
            return Math.ceil(this.filteredArticles.length / this.itemsPerPage);
        }
    },
    async mounted() {
        await this.fetchArticles();
        this.modalInstance = new Modal(this.$refs.modal);
    },
    methods: {
        async fetchArticles() {
            try {
                const response = await axios.get('./json/articles.json');
                this.articles = response.data;
                this.extractCategories();
            } catch (error) {
                console.error('載入文章失敗:', error);
            }
        },
        extractCategories() {
            const uniqueCategories = new Set(this.articles.map(article => article.category));
            this.categories = ["全部", ...uniqueCategories];
        },
        changePage(page) {
            if (page < 1 || page > this.totalPages) return;
            this.currentPage = page;
        },
        openModal(article) {
            this.selectedArticle = article;
            // 確保 Vue 更新完 DOM 後再執行 Bootstrap 初始化
            this.$nextTick(() => {
                this.resetCarousel();
                new Modal(this.$refs.modal).show();
            });
            this.modalInstance.show();
        },
        filterCategory(category) {
            this.selectedCategory = category;
            this.currentPage = 1;
        },
        resetCarousel() {
            const carouselId = `#carousel-${this.selectedArticle.id}`;
            const carouselElement = document.querySelector(carouselId);
            if (carouselElement) {
                const carousel = new Carousel(carouselElement); // ✅ 使用手動導入的 Carousel
                carousel.to(0); // 重置輪播圖到第一張
            }
        },
    }
};
</script>
<style scoped>
.preview-img {
  cursor: pointer;
  transition: transform 0.2s;
}
.preview-img:hover {
  transform: scale(1.1);
}

.box1 {
    height: 50px;
    width: 100px;
    background-color: #ffc107;
    border-radius: 5rem;
    border: 3px solid #af8300;
    cursor: pointer;
    color: black;
}
.box1:hover{
    background-color: black;
    color: white;
}
.box1.active-category {
    background-color: white;
    color: black;
}
</style>
