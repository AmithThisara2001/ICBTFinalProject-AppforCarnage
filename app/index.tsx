import {FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";


export default function HomeScreen() {

  
  return (
    <FlatList 
    data={products}
    numColumns={2} //Show 2 products per row
    contentContainerClassName="gap-2"
    columnWrapperClassName="gap-2"
    renderItem={({ item }) => <ProductListItem product={item}/>}/> //Show products
  );
}