<template>
  <div class="container mt-3 mt-sm-5">
      <img class="img-fluid mb-sm-4 mb-3" src="@/assets/img/title_banner.png" alt="Report！可魯-我要估價" srcset="">
      <div class="card border-warning-subtle mb-sm-4 mb-3 border-1"  style="background-color: #353535;">
          <div class="card-body text-white fw-bold text-center">
              貼心提醒：<br>
              以下內容僅供估算，資料僅作內部使用，絕不對外公開。
              一般文件製作時間約為5至7個工作天，如有需要可加急，文件製作時間縮短至1至2個工作天。
              如有其他疑問歡迎洽詢~
          </div>
      </div>
      <div class="row">
          <!-- 左側估價 -->
          <div class="col-lg-8">
              <div class="card border-warning-subtle" style="background-color: #353535;">
                  <div class="card-body">

                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">聯絡方式</label>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="discord" name="contact" value="discord"
                                  v-model="contactMethod">
                              <label class="form-check-label text-white" for="discord">Discord</label>
                          </div>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="instagram" name="contact"
                                  value="instagram" v-model="contactMethod">
                              <label class="form-check-label text-white" for="instagram">Instagram</label>
                          </div>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="line" name="contact" value="line"
                                  v-model="contactMethod">
                              <label class="form-check-label text-white" for="line">Line</label>
                          </div>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="Gmail" name="contact" value="Gmail"
                                  v-model="contactMethod">
                              <label class="form-check-label text-white" for="Gmail">Gmail</label>
                          </div>
                      </div>

                      <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">聯絡方式名字</label>
                      <div class="input-group mb-3">
                          <input name="name" type="text" class="form-control w-50" id="name" value=""
                              placeholder="請填寫您聯絡方式的名字" v-model="form.name">
                          <select class="form-select" id="call" v-model="form.call">
                              <option value="先生">先生</option>
                              <option value="小姐">小姐</option>
                          </select>
                      </div>

                      <!-- 當選擇 聯絡方式 顯示郵件輸入框 -->
                      <div class="mb-3" v-if="contactMethod === 'discord'">
                          <label for="dctext" class="form-label" style="color:#ffc107">Discord</label>
                          <input type="text" class="form-control" id="dctext" v-model="form.contactMethodID"
                              placeholder="請輸入您的 Discord ID">
                      </div>
                      <div class="mb-3" v-if="contactMethod === 'instagram'">
                          <label for="instagramtext" class="form-label" style="color:#ffc107">Instagram</label>
                          <input type="text" class="form-control" id="instagramtext" v-model="form.contactMethodID"
                              placeholder="請輸入您的 Instagram 名稱或 Instagram 連結">
                      </div>
                      <div class="mb-3" v-if="contactMethod === 'Gmail'">
                          <label for="email" class="form-label" style="color:#ffc107">Gmail</label>
                          <input type="email" class="form-control" id="email" v-model="form.contactMethodID"
                              placeholder="請輸入您的 Gmail">
                      </div>
                      <div class="mb-3" v-else-if="contactMethod === 'line'">
                          <label for="line" class="form-label" style="color:#ffc107">LineID</label>
                          <input type="text" class="form-control" id="linetext" v-model="form.contactMethodID"
                              placeholder="請輸入您的 LineID">
                      </div>

                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">付款方式</label>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="pay2-1" name="radio-stacked" v-model="form.pay" value="Line轉帳" required>
                              <label class="form-check-label text-white" for="pay2-1">Line轉帳</label>
                          </div>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="pay2-2" name="radio-stacked" v-model="form.pay" value="台灣Pay" required>
                              <label class="form-check-label text-white" for="pay2-2">台灣Pay</label>
                          </div>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="pay2-3" name="radio-stacked" v-model="form.pay" value="銀行轉帳" required>
                              <label class="form-check-label text-white" for="pay2-3">銀行轉帳</label>
                          </div>
                          <div class="form-check disabled">
                              <input type="radio" class="form-check-input" id="pay2-4" name="radio-stacked" v-model="form.pay" value="藍新金流（申請中）" disabled>
                              <label class="form-check-label text-white" for="pay2-4">藍新金流（申請中）</label>
                          </div>
                      </div>

                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">專案名稱</label>
                          <input name="ProjectName" type="text" class="form-control" id="ProjectName" value=""
                              placeholder="請輸入您的專案名稱" v-model="form.ProjectName">
                      </div>

                      <!-- 專案類型 -->
                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style="color:#ffc107">專案類型</label>
                          <div class="form-check" v-for="(item, index) in form.projectTypes" :key="index">
                              <input type="radio" class="form-check-input" :id="'validationFormCheck3-' + (index + 1)"
                                    :value="item.name" v-model="form.projectType" />
                              <label class="form-check-label text-white" :for="'validationFormCheck3-' + (index + 1)">
                                  {{ item.name }}起
                              </label>
                          </div>
                      </div>

                      <!-- 詳細需求 -->
                      <div class="mb-3" v-if="form.projectType && detailsOptions[form.projectType]">
                          <label class="form-label" style="color:#ffc107">詳細需求</label>
                          <div v-for="(section, sectionIndex) in detailsOptions[form.projectType]" :key="sectionIndex">
                              <div class="text-warning mb-2" v-if="section.title">{{ section.title }}</div>
                              
                              <div v-for="(detail, index) in section.options" :key="index" class="form-check">
                                  <input v-if="detail.detailtype === 'checkbox'"
                                        class="form-check-input"
                                        type="checkbox"
                                        :id="'detail-' + sectionIndex + '-' + index"
                                        v-model="form.selectedDetails"
                                        :value="detail" />
                                  <input v-else-if="detail.detailtype === 'radio'"
                                        class="form-check-input"
                                        type="radio"
                                        :id="'detail-' + sectionIndex + '-' + index"
                                        v-model="form.selectedRadioDetails[sectionIndex]"
                                        :value="detail"
                                        :name="'detail-group-' + sectionIndex" />
                                  
                                  <label class="form-check-label text-white" :for="'detail-' + sectionIndex + '-' + index">
                                      {{ detail.name }}
                                      <span v-if="detail.price"> (+{{ detail.price }}元)</span>
                                  </label>
                              </div>
                          </div>
                      </div>



                      <!-- 其他詳細需求 -->
                      <div class="mb-3" v-if="form.selectedDetails.some(detail => detail.name === '其他')">
                          <label for="detail_text" class="form-label" style="color:#ffc107">其他詳細需求</label>
                          <textarea class="form-control" id="detail_text"  placeholder="請輸入您的其他詳細需求" v-model="form.detailoether" rows="3" cols="50"></textarea>
                      </div>

                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">預算費用</label>
                          <input name="money" type="number" class="form-control" id="money" value=""
                              placeholder="請輸入您的預算費用" v-model="form.money">
                      </div>
                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">急件處理</label>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="validationFormCheck4-1" value="yes"
                                  v-model="form.urgent" />
                              <label class="form-check-label text-white" for="validationFormCheck4-1">是 + $500元</label>
                          </div>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="validationFormCheck4-2" value="no"
                                  v-model="form.urgent" />
                              <label class="form-check-label text-white" for="validationFormCheck4-2">否</label>
                          </div>
                      </div>

                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">交件日期</label>
                          <input name="date" type="date" class="form-control" id="date" value="" v-model="form.datetime" :min="minDate">
                      </div>


                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">推薦人</label>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="recomm_yes" value="yes"
                                  v-model="form.recommended" />
                              <label class="form-check-label text-white" for="recomm_yes">有</label>
                              <div class="mb-3" v-if="form.recommended === 'yes'">
                                  <input type="email" class="form-control" id="email" v-model="form.recommendedname"
                                      placeholder="請輸入推薦人姓名">
                              </div>
                          </div>
                          <div class="form-check">
                              <input type="radio" class="form-check-input" id="recomm_no" value="no"
                                  v-model="form.recommended" />
                              <label class="form-check-label text-white" for="recomm_no">無</label>
                          </div>
                      </div>

                      <!-- <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107"><strong>折扣碼</strong></label>
                          <input name="code" type="text" class="form-control" id="code" v-model="form.code">
                      </div> -->

                      <!-- <div class="col">
                          <button @click="handleSubmit" id="submail" class="btn btn-success rounded w-100" type="submit" name="submail">傳送</button>
                      </div> -->
                  </div>
              </div>
          </div>

          <!-- 右側寄送估價單 -->
          <div class="col-lg-4">
              <div class="card sticky-sidebar mt-xl-0 mt-5">
                  <div class="card-body">
                      <p class="text-center fs-2"><strong>金額估算：</strong> ${{ formattedDiscountedAmount }}</p>
                      <p class="text-danger text-center">（實際金額以正式報價為準）</p>

                      <button @click="ValuationSubmit" class="btn btn-warning w-100">送出</button>
                  </div>
              </div>
          </div>
      </div>

      <!-- 提示彈窗 -->
      <div class="ok modal d-none " tabindex="-1">
          <div class="modal-dialog modal-dialog-centered ">
          <div class="modal-content border border-warning-subtle" style="background-color: #212121;">
              <div class="modal-body" >
              <p class="thank text-center mt-3 text-white"></p>
              <button id="close" type="button" class="btn btn-success mx-auto d-flex mt-4" data-bs-dismiss="modal">返回</button>
              </div>
          </div>
          </div>
      </div>
      <div class="viewback modal-backdrop fade d-none"></div>

  </div>
  <RKfooter />
  <LeftNavBar />
  <TopButton />
</template>

<script>
import RKfooter from '../components/RKfooter.vue'
import LeftNavBar from '../components/LeftNavBar.vue';
import TopButton from '../components/TopButton.vue';
import axios from 'axios';

export default {
  name: "ValuationView",
  components: {
      RKfooter,
      LeftNavBar,
      TopButton
  },

  data() {
      return {
        contactMethod: '',  // 聯絡方式
        form: {
            name: '',                // 姓名
            call: '先生',            // 稱呼
            contactMethodID: '',    // 聯絡方式ID
            pay: '',                // 付款方式
            ProjectName: '',         // 專案名稱
            projectType: '',        // 專案類型
            money: '',              // 預算
            datetime: '',           // 交件時間
            urgent: '',             // 急件
            selectedDetails: [],    // 用來存 checkbox
            selectedRadioDetails: [], // 存 radio 單選
            detailoether: '',         // 其他需求
            recommended: '',        // 推薦人
            recommendedname: '',    // 推薦人姓名
            projectTypes: [],       // 儲存專案類型
        },
        detailsOptions: {},  // 儲存詳細需求選項

      };
  },
  async mounted(){
      await this.loadConfig();
      this.updateMinDate(); // 初始化最小日期

  },
  methods:{
      async loadConfig() {
          try {
              const response = await axios.get('/json/DetailsOptions.json'); // 載入設定檔案
              this.form.projectTypes = response.data.projectTypes; // 設定專案類型
              this.detailsOptions = response.data.detailsOptions; // 設定詳細需求選項
          } catch (error) {
              console.error("載入設定檔時發生錯誤：", error);
          }
      },

      //處理時間問題
      updateMinDate() {
          const today = new Date();
          if (this.form.urgent === "yes") {
              today.setDate(today.getDate() + 2); // 非急件最早可選日期為 5 天後
              this.minDate = this.formatDate(today);
          } else {
              today.setDate(today.getDate() + 6); // 非急件最早可選日期為 5 天後
              this.minDate = this.formatDate(today);
          }

          // 若目前選擇的日期小於最小日期，則重設
          if (this.form.datetime && this.form.datetime < this.minDate) {
              this.form.datetime = this.minDate;
          }
          },
      formatDate(date) {
          return date.toISOString().split("T")[0]; // 轉換為 YYYY-MM-DD 格式
      },

  }


}
</script>