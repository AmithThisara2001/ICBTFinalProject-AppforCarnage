import "@/global.css";
import { Stack, Link } from 'expo-router';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react-native";
import { Pressable } from "react-native";

export default function Rootlayout() {
  return (
    <GluestackUIProvider>
      <Stack screenOptions={{ headerRight: () => (<Link href={'/cart'} asChild><Pressable><Icon as={ShoppingCart} /></Pressable></Link>), }}>
        <Stack.Screen name="index" options={{ title: 'Shop' }} />
        <Stack.Screen name="product/[id]" options={{ title: 'Product' }} />
      </Stack>
    </GluestackUIProvider>); //Import header for the all pages
}