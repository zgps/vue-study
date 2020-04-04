import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const Login = () => import('@/views/login')
const Father = () => import('@/views/father')
const Department = () => import('@/views/vuex/department')
const Person = () => import('@/views/vuex/person')

const routes = [
    {path: '/', component: Login},
    {path: '/login', component: Login},
    {path: '/father', component: Father},
    {path: '/department', component: Department},
    {path: '/person', component: Person}
]

const router = new vueRouter({
    mode: 'history',
    routes
})

export default router