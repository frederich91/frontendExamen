
var templateListarTipo = `
<div class="contenedor-form">
    <div v-if="tipos">
    <div v-for="a in tipos">
        <div class="card-lista">
            <div class="row">
                <div class="col-card-1">
                    <label for="txtNmbre">Nombre</label>
                    <p id="txtNmbre">
                        {{ a.nombre }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-card-1">
                    <label for="txtDesc">Descripcion</label>
                    <p id="txtDesc">
                        {{ a.descripcion }}
                    </p>
                </div>
            </div>
            <div class="row">
                <a href="#" @click.prevent="redirect(a.id)">Modificar</a> 
                <a href="#" @click.prevent="eliminar(a.id)">Eliminar</a>
            </div>
        </div>
    </div>
    </div>
    <div v-else>
            cargando...
    </div>
</div>
`

var listarTipo = Vue.component('listar-tipo',{
    template:templateListarTipo,
    data: function(){
        return {
            tipos:null
        }
    },
    created: function() {
        this.listar()
    },
    methods: {
        eliminar(id) {

            var self = this
            var servicio = new TipoService()
            servicio.eliminar(id)
            .then(function(data) {
                console.log("eliminado correctamente")
                self.listar()
            })

        },
        listar() {

            var self = this
            var servicio = new TipoService()
            servicio
            .listar()
            .then(function(json){
                console.log(json)
                self.tipos = json
            })
        },
        redirect(id) {
            this.$router.push({'path':'/agregarTipo/' + id})
        }
    }
})