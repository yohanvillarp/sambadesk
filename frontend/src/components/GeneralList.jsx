import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

function GeneralList({ items = [], onDelete }) {
  const handleDelete = (username) => {
    Swal.fire({
      title: `¿Eliminar a "${username}"?`,
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e53e3e",
      cancelButtonColor: "#718096",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/user/delete/${username}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("✅ Eliminado", data.message, "success");
              onDelete(username); // actualizar lista en componente padre
            } else {
              Swal.fire("❌ Error", data.message || "No se pudo eliminar", "error");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("❌ Error", "Hubo un problema al eliminar", "error");
          });
      }
    });
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <List className="divide-y divide-blue-gray-100">
        {items.map((user, index) => (
          <ListItem
            key={index}
            ripple={false}
            className="py-3 px-6 flex justify-between items-center hover:bg-blue-gray-50 transition-all"
          >
            <span className="text-blue-gray-800 font-medium text-base">{user}</span>
            <ListItemSuffix className="flex gap-3">
              <IconButton
                size="sm"
                variant="outlined"
                color="blue"
                className="flex items-center justify-center border-blue-300 hover:bg-blue-50"
              >
                <PencilIcon className="h-4 w-4" />
              </IconButton>
              <IconButton
                size="sm"
                variant="outlined"
                color="red"
                onClick={() => handleDelete(user)}
                className="flex items-center justify-center border-red-300 hover:bg-red-50"
              >
                <TrashIcon className="h-4 w-4" />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default GeneralList;
