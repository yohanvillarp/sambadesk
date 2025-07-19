import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid"; // Asegúrate de tener esto

function GeneralList({ items = [] }) {
  return (
    <Card className="w-96">
      <List>
        {items.map((user, index) => (
          <ListItem key={index} ripple={false} className="py-1 pr-1 pl-4">
            {user}
            <ListItemSuffix>
              <IconButton variant="text" color="blue-gray">
                <TrashIcon className="h-5 w-5" />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default GeneralList;
