<script>
    export default {
        name: 'Home',
        data() {
            return {
                username: this.$route.query.username
            }
        },
        computed: {
            usernameDisplay() {
                return this.username ?? 'Anonymous';
            }
        },
        watch: {
            username: {
                handler() {
                    if(['', undefined].includes(this.username)) {
                        this.$router.push('/sign-in')
                    }
                },
                immediate: true
            }
        }
    }
</script>
<template>
    <div>
        <h1>Welcome {{usernameDisplay}}!</h1>
    </div>
</template>
<style scoped>

</style>
