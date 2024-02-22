import Image from "next/image";
import styles from "./page.module.css";
import DrawerNav from "./component/DrawerNav";
import { ChakraProvider } from "@chakra-ui/react";
import Tab1 from "./component/Tab1";
import SubTable from "./component/SubTable";
import NavBar from "./component/NavBar";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <DrawerNav />
        <Tab1 />
        <SubTable />
      </ChakraProvider>
    </>
  );
}
