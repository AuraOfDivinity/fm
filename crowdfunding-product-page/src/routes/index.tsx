import { createFileRoute } from "@tanstack/react-router";
import ProductBrief from "../components/ProductBrief";

export const Route = createFileRoute('/')({
  component: Home
})

function Home (){
  return(<ProductBrief/>)
}