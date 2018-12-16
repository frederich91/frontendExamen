
var templateListarSector = `
<div class="contenedor-form">
    <div v-if="sectores">
    <div v-for="a in sectores">
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

var listarSector = Vue.component('listar-sector',{
    template:templateListarSector,
    data: function(){
        return {
            sectores:null
        }
    },
    created: function() {
        this.listar()
    },
    methods: {
        eliminar(id) {

            var self = this
            var servicio = new SectorService()
            servicio.eliminar(id)
            .then(function(data) {
                console.log("eliminado correctamente")
                self.listar()
            })

        },
        listar() {

            var self = this
            var servicio = new SectorService()
            servicio
            .listar()
            .then(function(json){
                console.log(json)
                self.sectores = json
            })
        },
        redirect(id) {
            this.$router.push({'path':'/agregarSector/' + id})
        }
    }
})