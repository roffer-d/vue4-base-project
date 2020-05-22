<template>
    <div>
        <h1>首页</h1>
    </div>
</template>

<script>
    import {mapActions,mapMutations,mapGetters} from 'vuex'

    export default {
        name: "index",
        computed:{
            // 使用对象展开运算符将 getter 混入 computed 对象中
            ...mapGetters([
                'data',
                // ...
            ]),
            // ...mapGetters({
            //     // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
            //     // 将一个 doneCount 属性另取一个名字 doneTodosCount
            //     doneCount: 'doneTodosCount',
            //     //如果使用带名字空间
            //     doneCount: 'namespace/doneTodosCount',
            // })
        },
        data(){
            return{

            }
        },
        methods:{
            // ...mapMutations([
            //     'updateData', // 将 `this.updateData()` 映射为 `this.$store.commit('updateData')`
            // ]),
            // ...mapMutations({
            //     update: 'updateData' // 将 `this.update()` 映射为 `this.$store.commit('updateData')`
            //
            //     // `mapMutations` 也支持载荷：
            //     'updateData' // 将 `this.updateData(amount)` 映射为 `this.$store.commit('updateData', amount)`
            // }),
            // ...mapActions([
            //     'updateData', // 将 `this.updateData()` 映射为 `this.$store.dispatch('updateData')`
            //
            //     // `mapActions` 也支持载荷：
            //     'updateData' // 将 `this.updateData(amount)` 映射为 `this.$store.dispatch('updateData', amount)`
            // ]),
            // ...mapActions({
            //     update: 'updateData' // 将 `this.update()` 映射为 `this.$store.dispatch('updateData')`
            // })
        }
    }
</script>

<style scoped>

</style>