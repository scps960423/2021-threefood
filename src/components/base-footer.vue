<template>
  <div class="group base-footer">
    <div class="in">
 
      <div class="ct">
        <div class="in">
          <!-- group-info 資訊群組 -->
          <div class="group info" data-index="4" data-type="3" data-child="3">
            <div class="in">
              <div class="ct">
                <div class="in">
                  <!-- group-msg-tool 資訊與工具群組 -->
                  <div
                    class="group msg-tool"
                    data-index="4"
                    data-type="3"
                    data-child="3"
                  >
                    <div class="in">
                      <div class="hd">
                        <div class="in">
                          <div class="headH3">
                            <span><a href="#"></a></span>
                          </div>
                        </div>
                      </div>
                      <div class="ct">
                        <div class="in">
                          <!-- address 聯絡資訊編輯 -->
                          <div class="area-editor address">
                            <div class="in">
                              <div class="hd">
                                <div class="in">
                                  <div>
                                    <span><a href="#">聯絡資訊</a></span>
                                  </div>
                                </div>
                              </div>

                              <div class="ct">
                                <div class="in">
                                  高雄總公司地址：<span class="map"
                                    ><a
                                      class="is-map"
                                      target="_blank"
                                      href="http://maps.google.com/maps?q=806%E9%AB%98%E9%9B%84%E5%B8%82%E5%89%8D%E9%8E%AE%E5%8D%80%E6%B0%91%E6%AC%8A%E4%BA%8C%E8%B7%AF8%E8%99%9F18%E6%A8%93"
                                      >806高雄市前鎮區民權二路8號18樓</a
                                    ></span
                                  ><br />
                                  高雄總公司電話：FAX：+886-7-5364899<br />
                                  台北辦事處地址：<span class="map"
                                    ><a
                                      class="is-map"
                                      target="_blank"
                                      href="http://maps.google.com/maps?q=100%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E6%AD%A3%E5%8D%80%E5%8C%97%E5%B9%B3%E8%A5%BF%E8%B7%AF3%E8%99%9F3%E6%A8%933004%E5%AE%A4"
                                      >100台北市中正區北平西路3號3樓3004室</a
                                    ></span
                                  ><br />
                                  台北辦事處電話：FAX: +886-2-2388917<br />
                                  Copyright © 2014 HAMASTAR Technology Co., Ltd.
                                  All rights reserved. 建議瀏覽解析度1024x 768
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- address 結束 -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- group-msg-tool 結束 -->
                </div>
              </div>
            </div>
          </div>
          <!-- group-info 結束 -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped  lang="scss">
.base-footer {
  background-color: $white;

  > .in {
  border-top: 3px solid $major-color;
  padding: 10px 0;
    > .ct {
      > .in {
          @extend %center;
          text-align: left;
      }
    }
  }
}
</style>