import { FormControl } from "@/components/ui/form-control";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { View, ImageBackground } from 'react-native'; // Added these imports

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <ImageBackground
      source={require('@/assets/login-bg.webp')} // Update this path to your image location
      className="flex-1"
    >
      <View className="flex-1 justify-end p-10">
        <FormControl className="p-4 border rounded-lg max-w-[500px] border-outline-300 bg-white">
          <VStack space="2xl">
            <Heading size="2xl" className="text-typography-900 leading-3.5 pt-1">Welcome...</Heading>
            <VStack space="xs">
              <Text className="text-typography-500">Email</Text>
              <Input className="min-w-[250px]">
                <InputField type="text" />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text className="text-typography-500">Password</Text>
              <Input className="text-center">
                <InputField type={showPassword ? "text" : "password"} />
                <InputSlot className="pr-3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                  />
                </InputSlot>
              </Input>
            </VStack>
            <HStack space="sm">
              <Button className="flex-1" variant="outline" onPress={() => {}}>
                <ButtonText>Sign Up</ButtonText>
              </Button>
              <Button className="flex-1" onPress={() => {}}>
                <ButtonText>Sign In</ButtonText>
              </Button>
            </HStack>
          </VStack>
        </FormControl>
      </View>
    </ImageBackground>
  );
}