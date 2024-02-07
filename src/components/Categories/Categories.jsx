import { FlatList, View } from "react-native";
import categories from "../../data/categories.json";
import { CategoryItem } from "../CategoryItem/CategoryItem";
export const Categories = ({ selectCategory }) => {
  return (
    <>
      <FlatList
        style={{ flexGrow: 0 }}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem selectCategory={selectCategory} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </>
  );
};
