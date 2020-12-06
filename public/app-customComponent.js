// 지역컴포넌트
var cmp = {
  template: "<div>지역 컴포넌트가 등록되었습니다</div>",
};

// 전체컴포넌트
const myComponent = Vue.component("my-component", {
  template: "<div>전역 컴포넌트가 등록되었습니다{{cmp1Data}}</div>",
  data: function() {
    return {
      cmp1Data: 100,
    };
  },
});

// 자식 컴포넌트에 상위 데이터 넣기
const childComponent = Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{ propsdata }}</p>",
});

//뷰 이벤트
const childConponentEvent = Vue.component("child-component-event", {
  template: '<button v-on:click="showLog">event-consol</button>', //1버튼추가
  methods: {
    showLog: function() {
      //2메서드 추가
      this.$emit("show-log"); //3이벤트 발생 로직
    },
  },
});

new Vue({
  el: "#vue-btntest",
  components: {
    "my-local-component": cmp,
    "my-component": myComponent,
    "child-component": childComponent,
    "child-component-event": childConponentEvent,
  },
  data: {
    message: "상위 컴포넌트 데이터",
  },
  //event발생시키는 함수
  methods: {
    printText: function() {
      console.log("hi jihye");
    },
  },
});

// new Vue({
//   el: "#vue-btntest",
// });

// <!-- 지역 컴포넌트 -->

// new Vue({
//   el: "#vue-btntest",
//   data: {
//     message: "상위 컴포넌트 데이터",
//   },
// });

// Vue.component("child-component-event", {
//   template: '<button v-on:click="showLog">show</button>',
//   methods: {
//     showLog: function() {
//       this.$emit("show-log");
//     },
//   },
// });

// var app = new Vue({
//   el: "#vue-btntest",
//   data: {
//     message: "hellow push test",
//   },
//   methods: {
//     printText: function() {
//       console.log("recived event");
//     },
//   },
// });
