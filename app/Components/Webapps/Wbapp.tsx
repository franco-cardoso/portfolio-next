import styled from "styled-components";
import { motion } from "framer-motion";

const Wbapp = (props: { img: string; title: string; subTitle: string; desc: string }) => {
    const { img, title, subTitle, desc } = props;

    return (
        <div className="mainContainer">
            <BackgroundImg img={img} className="bgImg" />
            <div className="textWrapperWb">
                <div>
                    <h1 className="appTitle">{title}</h1>
                    <h2 className="appSub">{subTitle}</h2>
                    <p className="appDesc">{desc}</p>
                </div>
            </div>
        </div>
    );
};

const BackgroundImg = styled.div<{ img: string }>`
    background-image: linear-gradient(270deg, rgba(0, 0, 0, 1) 18%, rgba(0, 0, 0, 0.35898109243697474) 100%),
        url(${(props) => props.img});
    background-position: left;
    background-size: cover;
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    transition: 1s;
    z-index: 0;
`;

const MainContainer = styled(motion.div)<{ img: string }>`
    // height: 300px;
    width: 100%;
    position: relative;
    /* background-image: linear-gradient(270deg, rgba(0, 0, 0, 1) 18%, rgba(0, 0, 0, 0.35898109243697474) 100%),
        url(${(props) => props.img});
    background-size: cover;
    background-position: left; */
    /* background-size: cover; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 3px;
    transition: 1s;
    /* &:hover {
        transform: scale(1.05);
        backdrop-filter: brightness(150%);
    } */
`;

export default Wbapp;
