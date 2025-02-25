import Link from 'next/link'
import Image from 'next/image'
import { Text,  useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 40px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const dragonImg = `/images/thumb.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={dragonImg} width={40} height={40} alt="logo" />
                    <Text color={useColorModeValue('gray.200', 'whiteAlpha.900')} fontFamily='Nunito' fontWeight="bold" ml={3} />
                    Rocky Fierro
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
