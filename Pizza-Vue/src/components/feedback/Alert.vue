<template>
    <div v-if="status" v-bind:class="status" class="alert">
        <p class="alertText">{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "Alert",
    data() {
        return {
        }
    },
    props: {
        status,
        message: null
    },
    methods: {
        failure() {
            return "An error occured while logging you in."
        },
        setMessage(status) {
            switch(status) {
                case "success":
                    return "Successful login!"
                case "failure":
                    return "An error occured while logging you in."
                case "warning":
                    return "Something happened while logging you in."
                default:
                    return "Uncaught error."
            }
        }
    }
}
</script>

<style>

.alert {
    background: #ACECE6;
    color: #155724;
    border-radius: 5px;
    padding: 5;
    padding-left: 20px;
    padding-right: 20px;
    height: auto    ;
}

.success {
    background: #D4EDDA;
    border: 1px solid #1557245b;
    color: #155724;
}

.failure {
    background: #F8D7DA;
    border: 1px solid #721C245b;
    color: #721C24;
}   

.warning {
    background: #FFF3CD;
    border: 1px solid #8564045b;
    color: #856404;
} 
</style>