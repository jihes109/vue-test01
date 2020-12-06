<template>
  <!--// [공통]:body-section, [즐기다]enjoy-section -->
  <div class="body-section enjoy-section">
    <div class="contents-section">
      <!-- section-top 섹션에는 shadow효과를 묶고 location이 포함됩니다. -->
      <div class="section-wrap section-top">
        <!-- 공통 component -->
        <Breadcrumbs
          class="sm-d-none"
          :paths="[['홈', '/'], ['즐기다', '/'], ['이벤트', '/']]"
        />
        <!--// 공통 component -->
        <!--// 공통:padding left,right,border 있는 타입(class="section-box") -->
        <div class="section-box">
          <div class="section-group eventComplete">
            <div class="event-complete">
              <!-- 공통:title-wrap, h2타입:title-type2 -->
              <div class="title-wrap title-type2">
                <h2 class="tit">응모가 정상적으로 완료되었 습니다!</h2>
              </div>
              <!--// 공통:title-wrap, h2타입:title-type2 -->
              <div class="dotted-list-wrap">
                <ul class="dotted-list">
                  <li>
                    <span class="icon-dot"></span>당첨자 발표는 Kixx
                    당첨자발표에서 확인이 가능하며, 입력하신 정보로 개별 연락
                    드립니다.
                  </li>
                  <li>
                    <span class="icon-dot"></span>이벤트 응모쿠폰이 1회가
                    차감됩니다.
                  </li>
                  <li>
                    <span class="icon-dot"></span>응모 후 보유한 응모쿠폰의
                    수량은 00개 입니다.
                  </li>
                </ul>
              </div>
            </div>

            <div class="banner-ad">
              <a href="#none"
                ><img src="~@/assets/images/enjoy/eventComplete.png" alt=""
              /></a>
            </div>

            <div class="event-event">
              <!-- 공통:title-wrap, h2타입:title-type2 -->
              <div class="title-wrap title-type2">
                <h2 class="tit">메가박스 영화예매권 제공이벤트</h2>
              </div>
              <!--// 공통:title-wrap, h2타입:title-type2 -->
              <div class="dotted-list-wrap">
                <ul class="dotted-list">
                  <li>
                    <span class="icon-dot"></span>응모기간 : 2020.02.04 ~
                    2020.03.02
                  </li>
                  <li>
                    <span class="icon-dot"></span>당첨발표 : 2020.03.03 (화)
                  </li>
                  <li>
                    <span class="icon-dot"></span>제공내역 : 메가박스 영화예매권
                    1인 2매
                  </li>
                  <li>
                    <span class="icon-dot"></span>예매처 : 메가박스
                    (www.megabox.co.kr)
                  </li>
                  <li><span class="icon-dot"></span>당첨인원 : 290명</li>
                  <li>
                    <span class="icon-dot"></span>상세정보 : ‘원하는 극장에서
                    원하는 영화’를 ‘원하는 시간’에 무료로 예매할 수 있는 이용권
                    입니다. (2D 영화만 가능)
                  </li>
                </ul>
              </div>
            </div>

            <div class="event-info">
              <!-- 공통:title-wrap, h2타입:title-type2 -->
              <div class="title-wrap title-type2">
                <h2 class="tit">
                  응모한 나의 정보
                </h2>
                <span class="r-cnt s-txt"
                  ><span>이벤트 내역으로 이동</span
                  ><KArrowButton type="outlined"
                /></span>
              </div>
              <!--// 공통:title-wrap, h2타입:title-type2 -->
              <div class="user-info">
                <dl class="item">
                  <dt>- 이름</dt>
                  <dd>정유경</dd>
                </dl>
                <dl class="item">
                  <dt>- 휴대전화</dt>
                  <dd>010-1234-5678</dd>
                </dl>
                <dl class="item">
                  <dt>- 이메일</dt>
                  <dd>kixx@kixx.co.kr</dd>
                </dl>
              </div>
            </div>

            <div class="btns-area btns-foot-area align-c">
              <KButton type="outlined">이벤트 메인 이동하기</KButton>
              <KButton type="filled">한 번 더 응모하기</KButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/organisms/Breadcrumbs';
import KButton from '@/components/atoms/KButton.vue';
import KArrowButton from '@/components/atoms/KArrowButton.vue';

export default {
  components: {
    Breadcrumbs,
    KButton,
    KArrowButton,
  },
};
</script>
