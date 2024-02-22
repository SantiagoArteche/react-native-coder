import { FlatList } from "react-native";
import categories from "../../data/categories.json";
import { CategoryItem } from "../CategoryItem/CategoryItem";
export const Categories = ({ navigation }) => {
  return (
    <>
      <FlatList
        style={{ flexGrow: 0 }}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </>
  );
};
