import { BackgroundStyled, EntryBtn, TitleStyled } from './homePage.styled.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <BackgroundStyled>
            <TitleStyled>Welcome to app!</TitleStyled>
            <Link to="/tweets ">
                <EntryBtn> Entry </EntryBtn>
            </Link>
        </BackgroundStyled>
    );
};

export default HomePage;
