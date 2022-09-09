import React, { useState } from 'react'
import { Home, Like, Search, Location } from '../../assets/svg'
import WebLogo from '../../assets/images/logo.png'
import {
    Container,
    Image,
    ImageBox,
    List,
    Logo,
    Nav,
    SearchImg,
    SearchBox,
    UList,
    Icons,
    SearchLocations,
    SearchMenu,
    LocationName
} from './styled'
import SideBar from '../drawer'
import { CaretDownOutlined } from '@ant-design/icons'
import {LocationMenu, ProfileMenu} from '../dropDownMenu'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isLocation, setIsLocation] = useState(false)
    console.log(isVisible)
    return (
        <>
            <Container>
                <Nav>
                    <Logo><Image src={WebLogo} /></Logo>
                    <SearchBox>
                        <SearchLocations>
                            <Location />
                            <LocationName onClick={() =>setIsLocation(!isLocation)}>Current Locaion <CaretDownOutlined /></LocationName>
                            
                        </SearchLocations>
                        <SearchMenu>
                            <SearchImg placeholder='Search Menu' />
                            <Search />
                        </SearchMenu>
                        <LocationMenu isLocation={isLocation}/>
                    </SearchBox>
                    <UList>
                        <List><Icons><Home /></Icons></List>
                        <List><Icons><Like /></Icons></List>
                        <List>
                            <ImageBox onClick={() => setIsVisible(!isVisible)}>
                                <Image src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"} alt='user' />
                            </ImageBox>
                            <ProfileMenu isVisible={isVisible} />
                        </List>
                    </UList>
                </Nav>
            </Container>
            <SideBar />
        </>
    )
}

export default Header