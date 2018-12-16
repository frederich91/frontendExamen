
//declararemos las rutas de nuestra aplicacion
const routes = [
    // {
    //     'path':'/',
    //     'redirect':'/tipo/listar'
    // },
    {
        path:'/listarTipo',
        component:listarTipo
    },
    {
        path:'/agregarTipo/:id?',
        component:agregarTipo
    },
    {
        path:'/listarSector',
        component:listarSector
    },
    {
        path:'/agregarSector/:id?',
        component:agregarSector
    }
]
//instanciamos el enrutador
const router = new VueRouter({
    routes
})


//le entregaremos el router a la app
var app = new Vue({
    router
}).$mount('#app')
