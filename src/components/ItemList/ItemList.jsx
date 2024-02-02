import { Text, FlatList, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { RemoveModal } from "../RemoveModal/RemoveModal";
export const ItemList = ({ itemList, deleteItem }) => {
  const [itemId, setItemId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () =>
    modalVisible === false ? setModalVisible(true) : setModalVisible(false);

  return (
    <>
      <RemoveModal
        itemId={itemId}
        modalVisible={modalVisible}
        handleModal={handleModal}
        deleteItem={deleteItem}
      />
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <View style={style.flatListContainer}>
            <Text style={{ fontSize: 19 }}>{item.name}</Text>
            <Pressable
              onPress={() => {
                handleModal();
                setItemId(item.id);
              }}
            >
              <Text style={{ fontSize: 19 }}>🗑️</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const style = StyleSheet.create({
  flatListContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 22,
  },
});
