import { View, FlatList, Image } from "react-native";
import { useCart } from "@/store/cartStore";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Redirect } from "expo-router";

export default function CartScreen() {
  const items = useCart((state) => state.items);
  const resetCart = useCart((state) => state.resetCart);
  const getTotal = useCart((state) => state.getTotal);

  const onCheckout = async () => {
    //send order to the server
    resetCart();
  }

  //Redirect to home if cart is empty
  if (items.length === 0) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1">
      <FlatList
        data={items}
        contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto p-2 pb-32"
        renderItem={({ item }) => (
          <HStack className="bg-white p-3">
            <VStack space="sm">
              <Text bold>Item: {item.product.name}</Text>
              <Image
                source={{ uri: item.product.image }}
                className="w-20 h-20 rounded-md"
                resizeMode="contain"
              />
              <Text>LKR {item.product.price}</Text>
            </VStack>
            <Text className="ml-auto">Quantity: {item.quantity}</Text>
          </HStack>
        )}
      />

      {/* Fixed bottom section */}
      <View className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200">
        <Text className="text-lg font-bold mb-2">
          Total Amount:                                            LKR {getTotal()}.00
        </Text>
        <Button 
          className="w-full bg-black py-1"
          onPress={onCheckout}
        >
          <ButtonText>Checkout</ButtonText>
        </Button>
      </View>
    </View>
  );
}