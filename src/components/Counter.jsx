// import { useState } from "react";
// import { View, Text, Pressable } from "react-native";

// export const Counter = () => {
//   const [count, setCount] = useState(0);

//   const plus = () => {
//     if (count < 22) setCount(count + 1);
//   };
//   const minus = () => {
//     if (count > 0) setCount(count - 1);
//   };
//   const reset = () => {
//     if (count !== 0) setCount(0);
//   };
//   return (
//     <View>
//       <Pressable>
//         {" "}
//         <Text onPress={plus}>+</Text>
//       </Pressable>
//       <Pressable>
//         {" "}
//         <Text onPress={minus}>-</Text>
//       </Pressable>
//       <Pressable>
//         {" "}
//         <Text onPress={reset}>Reset</Text>
//       </Pressable>

//       <Text>{count}</Text>
//     </View>
//   );
// };
