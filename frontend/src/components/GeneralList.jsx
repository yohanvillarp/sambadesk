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
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mr-2",
        cancelButton:
          "bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500",
        title: "text-lg font-semibold",
        htmlContainer: "text-sm text-gray-700",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/user/delete/${username}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: "Eliminado",
                text: data.message,
                icon: "success",
                buttonsStyling: false,
                customClass: {
                  confirmButton:
                    "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                },
              });
              onDelete(username);
            } else {
              Swal.fire({
                title: "Error",
                text: data.message || "No se pudo eliminar",
                icon: "error",
                buttonsStyling: false,
                customClass: {
                  confirmButton:
                    "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700",
                },
              });
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al eliminar",
              icon: "error",
              buttonsStyling: false,
              customClass: {
                confirmButton:
                  "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700",
              },
            });
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
            <span className="text-blue-gray-800 font-medium text-base">
              {user}
            </span>
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