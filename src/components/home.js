import React from "react";
import Navigation from "./navigation";
import { Outlet } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

function Home() {
  return (
    <main>
      <h1 className="text-center my-3 bg-yellow-400 text-gray-700 mx-auto w-fit p-2 rounded-md">
        Welcome to Anees' Enterprises
      </h1>
      <Navigation></Navigation>
      <div className="flex justify-center text-center py-3"></div>
    </main>
  );
}

export default Home;

export const HomePageContent = () => {
  return (
    <div>
      <h1>Anees' Enterprises</h1>
      <p>
        Curabitur ex magna, congue id scelerisque a, suscipit eget urna. Cras ac
        nulla eros. Cras quam risus, consequat suscipit neque nec, finibus
        pretium nisi. Sed ac suscipit risus. Nunc vestibulum justo sem, vitae
        facilisis arcu posuere ac. Donec lacinia vehicula orci, eget faucibus
        velit laoreet quis. Nam imperdiet turpis id tincidunt molestie. Cras
        porta, leo at porta lobortis, nisl orci faucibus justo, sit amet
        pellentesque risus felis eget odio. Mauris sit amet nibh vitae velit
        vehicula eleifend et eu augue. Donec fringilla mauris tincidunt nisl
        sagittis sagittis. Morbi tempus purus at aliquam hendrerit. Cras sed
        dolor ante. Vestibulum ac nunc vulputate, blandit mauris commodo,
        aliquet diam. <br />
        Etiam non ligula lorem. Phasellus eu venenatis massa, et pellentesque
        ante. Etiam malesuada, nisi in suscipit scelerisque, est est
        pellentesque libero, a convallis elit metus ac libero. Sed dignissim
        pulvinar efficitur. Donec at sapien ante. Nam dui eros, lacinia et
        tincidunt a, interdum mattis mauris. Duis vel arcu suscipit mauris
        rhoncus blandit in vitae justo. Nulla facilisi. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Nam et velit quis massa mollis porttitor. Morbi fringilla, erat in
        facilisis suscipit, diam sapien vehicula ex, ac laoreet nisi dui
        volutpat felis. Etiam venenatis posuere erat, vel vehicula neque
        malesuada at.
        <br />
        In vulputate pulvinar mi. Vestibulum nec fringilla sem. Nulla lacinia
        molestie dolor sit amet iaculis. Vivamus id egestas nibh. Aliquam
        vulputate turpis ac congue cursus. Quisque ipsum mi, semper eu arcu et,
        euismod mattis justo. Maecenas ut mattis nisl. Mauris tincidunt nunc id
        hendrerit pharetra.
      </p>
    </div>
  );
};
