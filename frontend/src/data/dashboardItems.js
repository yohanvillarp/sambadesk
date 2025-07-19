const dashboardItems = [
  {
    title: "Usuarios",
    image: "https://cdn-icons-png.flaticon.com/512/18913/18913742.png",
    description:
      "Gestiona cuentas de usuario, contraseñas, grupos y propiedades del dominio con Samba Tool.",
    path: "/usuarios",
    bg: "bg-blue-100",
    actions: [
      { label: "Crear usuario", path: "/usuarios/crear" },
      { label: "Ver lista de usuarios", path: "/usuarios/lista" },
    ],
  },
  {
    title: "Grupos",
    image: "/dashboard/grupo.png",
    description:
      "Crea y administra grupos de seguridad o distribución para organizar usuarios.",
    path: "/grupos",
    bg: "bg-green-100",
    actions: [
      { label: "Crear grupo", path: "/grupos/crear" },
      { label: "Listar grupos", path: "/grupos/lista" },
    ],
  },
  {
    title: "Equipos",
    image: "/dashboard/equipo.png",
    description:
      "Registra o visualiza equipos unidos al dominio. También puedes eliminarlos.",
    path: "/equipos",
    bg: "bg-yellow-100",
    actions: [
      { label: "Registrar equipo", path: "/equipos/crear" },
      { label: "Lista de equipos", path: "/equipos/lista" },
      { label: "Eliminar equipo", path: "/equipos/eliminar" },
    ],
  },
  {
    title: "Unidades Organizativas",
    image: "/dashboard/ou.png",
    description:
      "Organiza objetos como usuarios y grupos por departamentos o áreas mediante OUs.",
    path: "/unidades-organizativas",
    bg: "bg-pink-100",
    actions: [
      { label: "Crear OU", path: "/unidades-organizativas/crear" },
      { label: "Lista de OUs", path: "/unidades-organizativas/lista" },
      { label: "Mover objeto a OU", path: "/unidades-organizativas/mover" },
    ],
  },
  {
    title: "Configuración DNS",
    image: "/dashboard/dns.png",
    description:
      "Agrega o edita zonas DNS, registros A, CNAME, MX y configura resolución interna.",
    path: "/dns",
    bg: "bg-purple-100",
    actions: [
      { label: "Agregar zona DNS", path: "/dns/zonas/agregar" },
      { label: "Ver zonas", path: "/dns/zonas/lista" },
      { label: "Agregar registro A", path: "/dns/registro-a" },
      { label: "Agregar CNAME", path: "/dns/cname" },
      { label: "Agregar MX", path: "/dns/mx" },
    ],
  },
];

export default dashboardItems;
