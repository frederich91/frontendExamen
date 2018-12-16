
class SectorService {

    constructor() {

    }

    listar() {
        var url = config.url  + "/sector"

        return fetch(url)
        .then(function(respuesta) {
            //convertimos la respuesta
            //en un json
            return respuesta.json()
        })
    }

    agregar(nombre, descripcion) {

        var url = config.url + "/sector"

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

        var url = config.url + "/sector/" + id;

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
        var url = config.url + "/sector/" + id; 
        
        return fetch(url, { 'method': 'GET'})
        .then(function(respuesta){
            //convertimos la respuesta del 
            //servidor en json
            return respuesta.json()
        })
    }

    eliminar(id) {
        var url = config.url + "/sector/" + id; 
        
        return fetch(url, { 'method': 'DELETE'})
        .then(function(respuesta){
            //convertimos la respuesta del 
            //servidor en json
            return respuesta.json()
        })
    }

}