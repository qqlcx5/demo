import ShowBlog from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import Edit from './components/Edit'

export default [

  { path: '/', component: ShowBlog },
  { path: '/addblog', component: AddBlog },
  { path: '/blog/:id', component: SingleBlog },
  { path: '/edit/:id', component: Edit }

]
