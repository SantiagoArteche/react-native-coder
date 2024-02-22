import { Home } from "../screens/Home/Home";
import { ItemListCategories } from "../screens/ItemListCategories/ItemListCategories";
import { ItemListDetail } from "../screens/ItemListDetail/ItemListDetail";

export const navigatorRoutes = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "ItemListDetail",
    component: ItemListDetail,
  },
  {
    name: "ItemListCategories",
    component: ItemListCategories,
  },
];
