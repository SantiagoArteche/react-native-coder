import { FlatList } from "react-native";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { useSelector } from "react-redux";
export const Categories = ({ navigation }) => {
  const { allCategories } = useSelector((state) => state.shop);
  return (
    <>
      <FlatList
        style={{ flexGrow: 0 }}
        data={allCategories}
        renderItem={({ item }) => (
        
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </>
  );
};
