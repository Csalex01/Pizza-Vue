<template>
  <div v-if="status" v-bind:class="status" class="alert">
    <p class="alertText">{{ setMessage() }}</p>
  </div>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      feedback: null
    }
  },
  props: {
    status,
    message: null
  },
  methods: {
    setMessage() {
      this.message = this.message.replace("Error:", "").replace("Warning:", "")

      switch (this.status) {
        case "warning":
          this.feedback = "Warning: " + this.message
          break;
        case "failure":
          this.feedback = "Error: " + this.message
          break;
        default:
          this.feedback = this.message
      }

      return this.feedback
    }
  }
}
</script>

<style>
.alert {
  background: #acece6;
  color: #155724;
  border-radius: 5px;
  padding: 5;
  padding-left: 20px;
  padding-right: 20px;
  height: auto;
}

.success {
  background: #d4edda;
  border: 1px solid #1557245b;
  color: #155724;
}

.failure {
  background: #f8d7da;
  border: 1px solid #721c245b;
  color: #721c24;
}

.warning {
  background: #fff3cd;
  border: 1px solid #8564045b;
  color: #856404;
}
</style>