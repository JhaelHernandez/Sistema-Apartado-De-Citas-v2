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
    
    public partial class Grupo
    {
        public int GrupoID { get; set; }
        public string Grupo1 { get; set; }
        public string Turno { get; set; }
        public int MateriaGrupoID { get; set; }
        public Nullable<bool> Activo { get; set; }
    
        public virtual MateriaDelGrupo MateriaDelGrupo { get; set; }
        public virtual Semestre Semestre { get; set; }
    }
}
