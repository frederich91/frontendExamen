
var templateAgregarSector = `
<div>
    <div class="contenedor-form">
    <div class="card-lista-report">
        <h4>Agregar Sector</h4>
        <form @submit="checkForm">
        <p v-if="errors.length">
            <b>Favor completar los siguientes campos(s):</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
            <div class="form-group">
            <label for="txtNombre">Nombre</label> <input type="text" class="form-control" id="txtNombre" name="txtNombre"
                placeholder="Ingrese nombre" required v-model="nombre">
            </div>
            <div class="form-group">
                <label for="txtDesc">Descripcion</label> <input type="text" class="form-control" id="txtDesc" name="txtDesc"
                    placeholder="Ingrese descripcion" required v-model="descripcion">
            </div>

            <input class="input-button" type="submit" value="Guardar" />
            <input class="input-button-reset" type="button" value="Limpiar" @click="limpiar" />
        </form>
        <div v-if="mensaje">
            <h4 class="alert">{{ mensaje }}</h4>
        </div>
    </div>
    </div>
</div>


`

var agregarSector = Vue.component('agregar-sector',{
    template:templateAgregarSector,
    data: function() {
        return {
            nombre: "",
            descripcion:"",
            mensaje: "",
            errors: []
        }
    },
    created: function() {
        
        if(this.$route.params.id) {
            this.buscar(this.$route.params.id)
        }

    },
    watch: {
        '$route'(to, end) {
            this.limpiar()
        }
    },
    methods: {
        guardar() {
            var self = this
            var sectorService = new SectorService()
            if(this.$route.params.id) {
                var id = this.$route.params.id
                sectorService.modificar(
                    id,
                    self.nombre,
                    self.descripcion
                )
                .then(function(data) {
                    console.log("modificado")
                    self.mensaje = "Modificado correctamente"
                    self.limpiar()
                })
            }else {
            sectorService.agregar(
                self.nombre,
                self.descripcion
            )
            .then(function(data) {
                console.log("Guardado")
                self.mensaje = "Guardado correctamente"
                self.limpiar()
            })
        }

        },
        limpiar() {
            this.nombre = ""
            this.descripcion =""
        },
        buscar(id) {
            var self = this
            var sectorServicio = new SectorService()
            sectorServicio.buscar(id).then(function(data) {
                self.nombre = data.nombre
                self.descripcion = data.descripcion
                
            })
        },
        checkForm: function (e) {
            var self = this
            if (this.nombre !== "" && this.descripcion !== "") {
              self.guardar()
              return true;
            }
      
            this.errors = [];
      
            if (this.nombre === "") {
              this.errors.push('Nombre requirido.');
            }
            if (this.descripcion === "") {
              this.errors.push('Descripcion requirida.');
            }
      
            e.preventDefault();
          }
    }
})