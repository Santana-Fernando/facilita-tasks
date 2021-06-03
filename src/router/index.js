import Vue from "vue";
import Router from "vue-router";

import AddTasks from '../components/FolderAdd/AddTasks'
import DeleteTasks from '../components/FolderDelete/DeleteTasks'
import UpdateTasks from '../components/FolderUpdateTasks/UpdateTasks'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import Tasks from '../components/Tasks/Tasks'

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/AddTasks",
    component: AddTasks
  },
  {
    path: "/DeleteTasks",
    component: DeleteTasks
  },
  {
    path: "/UpdateTasks",
    component: UpdateTasks
  },
  {
    path: "/Login",
    component: Login
  },
  {
    path: "/Tasks",
    component: Tasks
  }
];

const router = new Router({ routes });
export default router;