import { useLoaderData } from "react-router-dom";
import { getMenu, getOrder } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
// APPLayout children

function Menu() {
  const menu = useLoaderData();
  console.log("menu==>",menu);

  return <ul>{menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id}>
    
  </MenuItem>)}
  </ul>;
}

export async function loader() {
  const menu = await getMenu(); return menu;
}


export default Menu;
