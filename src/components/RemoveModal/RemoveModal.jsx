import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

export const RemoveModal = ({
  itemId,
  modalVisible,
  handleModal,
  deleteItem,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisible} onRequestClose>
      <View style={style.modal}>
        <View style={style.modal.modalContainer}>
          <Text style={style.modal.title}>Quieres eliminar el producto ?</Text>
          <View style={style.modal.responseContainer}>
            <Pressable
              onPress={() => {
                handleModal();
                deleteItem(itemId);
              }}
            >
              <Text style={style.modal.response}>Si</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                handleModal();
              }}
            >
              <Text style={style.modal.response}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    modalContainer: {
      backgroundColor: "red",
      padding: 20,
      borderRadius: 50,
      width: 300,
    },

    title: { fontSize: 30, textAlign: "center", marginBottom: 20 },
    responseContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    response: {
      fontSize: 22,
      fontWeight: 700,
      backgroundColor: "gray",
      padding: 15,
      borderRadius: 10,
    },
  },
});
