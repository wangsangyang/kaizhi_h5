import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index'//首页
import welcome from '@/views/welcome'//欢迎页面
import selectRole from '@/views/select-role'//选择职场状态
import problem1 from '@/views/problem1'//问题1
import problem2 from '@/views/problem2'//问题2
import problem3 from '@/views/problem3'//问题3
import problem4 from '@/views/problem4'//问题4
import problem5 from '@/views/problem5'//问题5
import answerResult from '@/views/answer-result'//结果页
import share from '@/views/share'//分享

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/role',
      name: 'selectRole',
      component: selectRole,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/problem/1',
      name: 'problem1',
      component: problem1,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/problem/2',
      name: 'problem2',
      component: problem2,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/problem/3',
      name: 'problem3',
      component: problem3,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/problem/4',
      name: 'problem4',
      component: problem4,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/problem/5',
      name: 'problem5',
      component: problem5,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/result',
      name: 'answerResult',
      component: answerResult,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },
    {
      path: '/share',
      name: 'share',
      component: share,
      meta: { needLogin: false, keepAlive: true, title: '' }
    },

  ],
  saveScrollPosition: true,
  history: true,
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else {
          return { x: 0, y: 0 }
      }
  }
})

export default router

router.beforeEach((to, from, next)=>{
    //console.log(to);
    //document.title = to.meta.title
    next();
});
