//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Datos
{
    using System;
    using System.Collections.Generic;
    
    public partial class CarreraMaestro
    {
        public int CarreraMaestroID { get; set; }
        public int CarreraID { get; set; }
        public string MaestroID { get; set; }
        public Nullable<bool> Activo { get; set; }
    
        public virtual Carrera Carrera { get; set; }
        public virtual Maestro Maestro { get; set; }
    }
}
