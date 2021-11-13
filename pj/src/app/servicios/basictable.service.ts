/* Se intento implementar servicios al basictable, pero a la final falto el conocimiento para realizarlo.
   En basictable.service.ts; en basictable.component.ts; y en basictable.component.html se encuentra en comentarios
   lo que se intento hacer para implementar los servicios.

import { Injectable } from "@angular/core";

@Injectable()

export class BasictableService{
    
    private tablas: Tabla[]=[
        {
            nombre: "Deshmukh",
            apellido: "Prohaska",
            usuario: "@Genelia",
            rol: "admin"
        },
        {
            nombre: "Deshmukh",
            apellido: "Gaylord",
            usuario: "@Ritesh",
            rol: "member"
        },
        {
            nombre: "Sanghani",
            apellido: "Gusikowski",
            usuario: "@Govinda",
            rol: "developer"
        },
        {
            nombre: "Roshan",
            apellido: "Rogahn",
            usuario: "@Hritik",
            rol: "supporter"
        },
        {
            nombre: "Joshi",
            apellido: "Hickle",
            usuario: "@Maruti",
            rol: "member"
        },
        {
            nombre: "Nigam",
            apellido: "Eichmann",
            usuario: "@Sonu",
            rol: "supporter"
        }
    ]
    
    constructor(){
        console.log("Servicio Dashboard listo para usarse...")
    }

    
    getTablas():Tabla[]{
        return this.tablas;
    }
    
}


export interface Tabla{
    nombre: string;
    apellido: string;
    usuario: string;
    rol: string;
}
*/