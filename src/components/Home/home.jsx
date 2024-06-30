import React from "react";
import BottomContent from "./BottomContent";
import Carousal from "./Carousal";
import MidContent from './MidContent';
import TopContent from './TopContent';
import GridImage from "./GridImage";
const Home = () => {

    return (
        <div>
            <Carousal />
            <TopContent />
            <GridImage />
            {/* <MidContent/> */}
            <BottomContent />
        </div>
    );

}
export default Home;