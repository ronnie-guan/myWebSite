import Vue from 'vue'
import Router from 'vue-router'
import home from "@/views/home/Home"
import about from "@/views/about/About"
import course from "@/views/course/Course"
import teacher from "@/views/teacher/Teacher"
import news from "@/views/news/News"
import contact from "@/views/contact/Contact"
import products from "@/views/products/Products"
import projects from "@/views/projects/projects"
import notFind from "@/components/404/NotFind"

Vue.use(Router)

// const home = () => import('@/views/home/Home')
// const about = () => import('@/views/about/About')
// const course = () => import('@/views/course/Course')
// const teacher = () => import('@/views/teacher/Teacher')
// const news = () => import('@/views/news/News')
// const contact = () => import('@/views/contact/Contact')

const routes = [
  { path: '', redirect: "/home" },
  { path: '/home', component: home, meta: { title: 'home' } },
  { path: '/about', component: about, meta: { title: 'about' } },
  { path: '/course', component: course, meta: { title: '课程分类' } },
  { path: '/teacher', component: teacher, meta: { title: '教师团队' } },
  { path: '/news', component: news, meta: { title: '新闻动态' } },
  { path: '/contact', component: contact, meta: { title: 'contact' } },
  { path: '/products', component: products, meta: { title: 'products' } },
  { path: '/projects', component: projects, meta: { title: 'projects' } },
  { path: '*', component: notFind, meta: { title: '404' } },
]

const router = new Router({
  routes,
  // mode: 'history'
})

export default router
