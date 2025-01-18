import "@/global.css";
import { Stack, Link } from 'expo-router';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart, User } from "lucide-react-native";
import { Pressable, View, StyleSheet } from "react-native";

export default function Rootlayout() {
  return (
    <GluestackUIProvider>
      <Stack screenOptions={{ 
        headerRight: () => (
          <View style={styles.headerIconsContainer}>
            <Link href={'/cart'} asChild>
              <Pressable>
                <Icon as={ShoppingCart} />
              </Pressable>
            </Link>
            <Link href={'/login'} asChild>
              <Pressable style={styles.userIcon}>
                <Icon as={User} />
              </Pressable>
            </Link>
          </View>
        ),
      }}>
        <Stack.Screen name="index" options={{ title: 'Shop' }} />
        <Stack.Screen name="product/[id]" options={{ title: 'Product' }} />
      </Stack>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  headerIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    marginLeft: 30, // Adjust spacing between icons
  },
});
