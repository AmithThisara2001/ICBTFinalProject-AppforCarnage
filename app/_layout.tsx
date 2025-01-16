import "@/global.css";
import {Stack} from 'expo-router';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function Rootlayout() {
  return (<GluestackUIProvider><Stack/></GluestackUIProvider>); //Import header for the all pages
}