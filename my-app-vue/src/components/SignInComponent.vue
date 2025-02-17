<script>
export default {
    name: "SignInComponent",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            this.$router.push({ name: 'home', query: {username: this.username }})
            this.clearForm();
        },

        clearForm() {
            this.username = '';
            this.password = '';
        }
    }
}
</script>
<template>
    <div class="form-body">
        <h1>Sign In</h1>
        <form @submit.prevent="onSubmit()">
            <p>Username: <input type="text" v-model="username"></p>
            <p>Password: <input type="password" v-model="password"></p>
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>
<style scoped>
    h1 {
        text-align: center;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 30px;
        border-radius: 10px;
    }
    .form-body {
        background-color: white;
        padding: 20px 40px 40px 40px;
        margin: 5px;
        border-radius: 10px;
        border-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>