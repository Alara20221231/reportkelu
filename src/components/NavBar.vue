<template>
  <nav class="navbar navbar-expand-lg border-bottom border-warning mt-2 pb-3" style="background-color: #212121; z-index: 999;" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white d-sm-none">Report！可魯</a>
      <!-- 漢堡按鈕，靠右顯示 -->
      <button 
        class="navbar-toggler ms-auto" 
        type="button" 
        id="navbarNavbt"
        @click="toggleNavbar"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="切換導覽列"
        style="border-color: #ffc107;"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 使用 JS 控制的選單 -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="nav-link active text-white" @click="navigateToindex">首頁</button>
          </li>
          <li class="nav-item">
            <button class="nav-link active text-white" @click="navigateToquote">收費參考</button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white" @click="navigateToTeaching_articles">精選文章</button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white" @click="navigatemyquote">我要估價</button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white" @click="navigateToflowme">聯絡我們</button>
          </li>
          <!-- <li class="nav-item">
            <button class="nav-link text-white" @click="navigateTotest">測試</button>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    // 使用 JavaScript 來控制 navbar 展開
    toggleNavbar() {
      const navbar = document.getElementById("navbarNav");
      // 如果 navbar 已經有 show 類別就移除，否則新增
      if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
      } else {
        navbar.classList.add("show");
      }
    },
    navigateToquote() {
      this.$router.push("/#FeeQuote");
    },
    navigatemyquote() {
      this.$router.push("/ValuationView");
    },
    navigateToflowme() {
      this.$router.push("/ContatView");
    },
    navigateToTeaching_articles(){
      this.$router.push('/#Teaching')
    },
    navigateToindex(){
      this.$router.push('/'); // 跳轉首頁
    },
    // navigateTotest(){
    //   this.$router.push('/NrView');
    // }
  }
};
</script>

<style src="@/assets/css/fonts.css"></style>
