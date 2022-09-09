import { AimOutlined, ClockCircleOutlined } from '@ant-design/icons'
import React from 'react'
import { Location, LogoutIcon, Profile, Settings } from '../../assets/svg'
import { COLORS } from '../../utils/constant'
import GoogleMapReact from 'google-map-react'
import {
    Button,
    CardMenu,
    ConfirmButton,
    CurrDes,
    CurretnLoc,
    GoogleSearchField,
    MapBlock,
    RecentBody,
    RecentHeader,
    RecentLoc,
    SearchCardFooter,
    SearchImg,
    SerchCardHeader
} from './location.styled'

import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Des,
    Icons,
    Image,
    ImageBox,
    ImgDec,
    List,
    Logout,
    Text,
    UnList
} from './profile.styled'

export const ProfileMenu = ({ isVisible }) => {

    return (
        <>
            <Card className={isVisible && 'isActive'}>
                <CardHeader>
                    <ImageBox>
                        <Image src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"} />
                    </ImageBox>
                    <ImgDec>
                        <Text>User 1</Text>
                        <Des>
                            Lorem Ipsum, sometimes referred to as.
                        </Des>
                    </ImgDec>
                </CardHeader>
                <CardBody>
                    <UnList>
                        <List><Icons><Profile /></Icons><Des>Profile</Des></List>
                        <List><Icons><Settings /></Icons><Des>Setting</Des></List>
                        <List><Icons><Settings /></Icons><Des>View</Des></List>
                    </UnList>
                </CardBody>
                <CardFooter>
                    <Logout>
                        <Des><Icons><LogoutIcon /></Icons>Logout</Des>
                    </Logout>
                </CardFooter>
            </Card>
        </>
    )
}

export const LocationMenu = ({isLocation}) => {
    const cord = { lat: 0, lng: 0 }
    return (
        <>
            <CardMenu className={isLocation && 'isActive'}>
                <SerchCardHeader>
                    <RecentLoc>
                        <RecentHeader>
                            <Text>Recent Location</Text>
                        </RecentHeader>
                        <RecentBody>
                            <ClockCircleOutlined style={{ fontSize: 14 }} /><Des>JLPL Industrial Area, Manauli</Des>
                        </RecentBody>
                    </RecentLoc>

                    <CurretnLoc>
                        <AimOutlined style={{ fontSize: '14px', color: `${COLORS.gpsColor}` }} />
                        <CurrDes color={COLORS.gpsColor}>Detect Current location</CurrDes>
                    </CurretnLoc>

                    <GoogleSearchField>
                        <Location />
                        <SearchImg placeholder='Search Menu' />
                    </GoogleSearchField>

                    <ConfirmButton>
                        <Button>
                            Confirm And Proceed
                        </Button>
                    </ConfirmButton>
                </SerchCardHeader>
                <SearchCardFooter>
                    <MapBlock>
                        <Image src={'https://i.stack.imgur.com/HILmr.png'}/>
                            {/* <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyAZqSyRR9Rd2gXroCK82VwB_qz4ffWjYE8' }}
                            defaultCenter={cord}
                            center={cord}
                            defaultZoom={14}
                            margin={[50,50,50,50]}
                            options={''}
                            onChange={''}
                            onChildClick={''}
                        >

                        </GoogleMapReact> */}
                    </MapBlock>
                </SearchCardFooter>
            </CardMenu></>
    )
}

