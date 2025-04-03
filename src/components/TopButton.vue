<template>
    <div>
      <!-- 返回頂端按鈕 -->
      <button 
        v-show="isVisible"
        class="scrollToTopBtn"
        @click="scrollToTop">
        ↑
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false, // 控制按鈕顯示或隱藏
      };
    },
    methods: {
      // 滾動到頁面頂部
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      // 滾動時顯示按鈕
      handleScroll() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      },
    },
    mounted() {
      // 監聽滾動事件，顯示或隱藏按鈕
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      // 清除事件監聽
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  /* 按鈕的樣式 */
  .scrollToTopBtn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #ffc107;
    color: white;
    border: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
  }
  </style>
  