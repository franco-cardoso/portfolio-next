import styled from "styled-components";
import Link from 'next/link';

type Button = {
    text: string;
    path: string;
};

const NavbarButtons = (props: { btns: Button[]; setShowMenu?: Function }) => {
    const { btns, setShowMenu } = props;

    return (
        <>
            {btns.map((btn, index) => (
                <div key={index}>
                    <Link href={btn.path} style={{ textDecoration: "none", margin: "5px 0", width: "max-content" }}>
                        <Btn onClick={() => setShowMenu && setShowMenu(false)}>{btn.text}</Btn>
                    </Link>
                </div>
            ))}
        </>
    );
};

export const Btn = styled.button`
    all: unset;
    color: #e4e4e4;
    padding: 5px;
    cursor: pointer;
    font-family: "Mukta";
    font-size: 18px;
    transition: 400ms;
    &:hover {
        color: #949494;
        transform: scale(1.2);
    }
`;
export default NavbarButtons;
