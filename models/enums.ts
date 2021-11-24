enum Enum_Rol {
    estudiante = "Estudiante",
    lider = "Lider",
    administrador = "Administrador",
}

enum Enum_EstadoUsuario {
    pendiente = "Pendiente",
    autorizado = "Autorizado",
    no_autorizado = "No autorizado",
}

enum Enum_EstadoProyecto {
    activo = "Activo",
    inacivo = "Inactivo",
}

enum Enum_FaseProyecto {
    iniciado = "Iniciado",
    desarrollo = "En desarrollo",
    terminado = "Terminado",
    nula = "",
}
export {Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto};