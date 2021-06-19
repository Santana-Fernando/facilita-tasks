import Vue from "vue";
import Router from "vue-router";

import AddTasks from '../components/FolderAdd/AddTasks'
import DeleteTasks from '../components/FolderDelete/DeleteTasks'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/ListTasks",
    component: Home
  },
  {
    path: "/AddTasks",
    component: AddTasks
  },
  {
    path: "/DeleteTasks",
    component: DeleteTasks
  }
];

const router = new Router({ routes });
export default router;