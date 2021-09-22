import styled from "styled-components";
import {FaAngleDown} from 'react-icons/fa'


export const HeroContainer = styled.div `
    width: 100%;
    height: 80vh;
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url("https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c2d86bb166809064181470_hero-bg.jpg");
    color: #fff;
`
export const HeroHeading = styled.h1 `
    font-size: 80px;
    letter-spacing: 2px;
    margin-top: 100px;
    margin-bottom: 30px;
    font-weight: 100;

`
export const HeroParagraph = styled.p `
    text-align: center;
    font-size: 18px;
    margin-bottom: 60px;
    letter-spacing: 1.2px;
    line-height: 30px;
`
export const HeroBtnWrapper = styled.div `
    display: flex;
    
`

export const AngleDown = styled(FaAngleDown) `
    font-size: 50px;
    /* margin-top: 60px; */

    &:hover {
        color: #4D8CF5;
        cursor: pointer;
        transition: color 0.2s ease-in-out
    }
`