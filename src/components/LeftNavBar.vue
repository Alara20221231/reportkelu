<template>
    <!-- 讓最外層 div 受影響，這樣按鈕和側邊欄都會變化 -->
    <div :class="{ 'sidebar-open': isSidebarOpen }">
      <!-- 側邊欄 -->
      <div class="sidebar-container">
        <ul class="nav flex-column">
          <li class="nav-item border-bottom"><button class="nav-link text-white" :onClick="navigateToindex">首頁</button></li>
          <li class="nav-item border-bottom"><button class="nav-link text-white" :onClick="navigateToquote">收費參考</button></li>
          <li class="nav-item border-bottom"><button class="nav-link text-white" :onClick="navigateToTeaching_articles">精選文章</button></li>
          <li class="nav-item border-bottom"><button class="nav-link text-white" :onClick="navigatemyquote">我要估價</button></li>
          <li class="nav-item"><button class="nav-link text-white" :onClick="navigateToflowme">聯絡我們</button></li>
        </ul>
      </div>

      <!-- 展開按鈕 -->
      <button 
        v-if="showButton" 
        class="sidebar-btn" 
        @click="toggleSidebar">
        <i :class="isSidebarOpen ? 'bi bi-caret-left-fill' : 'bi bi-caret-right-fill'"></i>

      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LeftNavBar',
    data() {
      return {
        showButton: false,  // 控制按鈕顯示
        isSidebarOpen: false // 控制側邊欄開關
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showButton = window.scrollY > 80;
            if (!this.showButton) {
            this.isSidebarOpen = false; // 滾動回到上方時關閉側邊欄
            }
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        navigateToindex(){
            this.$router.push('/'); // 跳轉首頁
        },
        navigateToquote() {
            this.$router.push('/#FeeQuote'); // 跳轉到收費報價
        },
        navigatemyquote() {
            this.$router.push('/ValuationView'); // 跳轉到估價
        },
        navigateToflowme() {
            this.$router.push('/ContatView'); // 跳轉到聯絡我們
        },
        navigateToTeaching_articles(){
          this.$router.push('/#Teaching')
        }

    }
  };
  </script>
  
  <style>
  /* 側邊欄 */
  .sidebar-container {
    position: fixed;
    top: 50%;
    left: -220px;
    transform: translateY(-50%);
    width: 200px;
    background-color: #212121;
    border: 1px solid #ffc107;
    color: white;
    padding: 15px;
    border-radius: 15px;
    transition: left 0.3s;
  }
  
  /* 展開按鈕 */
  .sidebar-btn {
    position: fixed;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    z-index: 1050;
    background-color: #ffc107;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 0 120px 120px 0;
  }
  
  /* 按鈕箭頭 */
  .sidebar-btn::before {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

  }
  
  /* .sidebar-open .sidebar-btn::before {
  }
   */
  /* 當側邊欄打開時，讓它出現 */
  .sidebar-open .sidebar-container {
    left: 0;
  }
  
  /* 當側邊欄打開時，讓按鈕移到側邊欄的右側 */
  .sidebar-open .sidebar-btn {
    left: 200px; /* 調整位置，使按鈕緊貼側邊欄 */
    transition: left 0.3s ease-in-out;

  }
  </style>
  