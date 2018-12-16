
class TipoService {

    constructor() { }

    listar() {
        var url = config.url + "/tipo"

        return fetch(url)
        .then(function(respuesta) {
            //convertimos la respuesta
            //en un json
            return respuesta.json()
        })
    }

    agregar(nombre, descripcion) {

        var url = config.url + "/tipo"

        var data = {
            'nombre':nombre,
            'descripcion':descripcion,
        }
        
        return fetch(url, {
            'method':'POST',
            'body': JSON.stringify(data),
            'headers': {
                'Content-Type':'application/json'
            }
        })
        .then(function(respuesta){
            //convertimos la respuesta del 
            //servidor en json
            return respuesta.json()
        })

    }

    modificar(id, nombre, descripcion) {

        var url = config.url + "/tipo/" + id;

        var data = {
            'nombre':nombre,
            'descripcion':descripcion,
        }
        
        return fetch(url, {
            'method':'PUT',
            'body': JSON.stringify(data),
            'headers': {
                'Content-Type':'application/json'
            }
        })
        .then(function(respuesta){
            //convertimos la respuesta del 
            //servidor en json
            return respuesta.json()
        })

    }

    buscar(id) {
        var url = config.url + "/tipo/" + id; 
        
        return fetch(url, { 'method': 'GET'})
        .then(function(respuesta){
            //convertimos la respuesta del 
            //servidor en json
            return respuesta.json()
        })
    }

    eliminar(id) {
        var url = config.url + "/tipo/" + id; 
        
        return fetch(url, { 'method': 'DELETE'})
        .then(function(respuesta){
            //convertimos la respuesta del 
            //servidor en json
            return respuesta.json()
        })
    }

}