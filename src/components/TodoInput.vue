<template>
  <div class="inputBox shadow">
    <input
      class="input-left"
      type="text"
      v-model="newTodoItem"
      placeholder="Type what you have to do"
      v-on:keyup.enter="addTodo"
    />
    <span class="addContainer" v-on:click="addTodo">
      <!-- <i class="addBtn fa fa-plus" aria-hidden="true"></i> -->
      <button class="addBtn" aria-hidden="true">입력</button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // console.log(this.newTodoItem); 콘솔에 찍어서 확인
        const value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit("addTodo", value);
        // localStorage.setItem(this.newTodoItem, this.newTodoItem); //로컬스토리지에 데이터 추가 application-storage-local storage
        // this.$emit("addTodo", value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.input-left {
  width: 100%;
  padding-left: 0.9rem;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  /* float: right; */
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
  background: none;
  border: none;
}
</style>
