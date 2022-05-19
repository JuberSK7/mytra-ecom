import React from 'react'
import styled from 'styled-components'
import logo from './images/bitcoin.webp'
import ether from './images/ethereum.webp'
interface Props {
    
}

export const Token = (props: Props) => {
    return (
        <div>
                  <TokenContainer>

                  <TokenRow1>
                    <TokenMain>
                    <h1 className="heading">Collection</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol">Volumn</p>
                    <p className="token-percent red">24h%</p>
                    <p className="token-percent green">7d%</p>
                    <p className="token-price">Floor Price</p>
                    <p className="token-valume">Owners</p>
                    <p className="token-marketcap">Items</p>
                    </TokenData>
            </TokenRow1>

            <TokenRow>
                    <TokenMain>
                        <h3>1.</h3>
                    <img src={logo} alt='crypto' className="images"/>
                    <h1 className="heading">Bored Ape Ach Clube</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol">27.685.8</p>
                    <p className="token-percent red">+60%</p>
                    <p className="token-percent green">-44%</p>
                    <p className="token-price">$103k</p>
                    <p className="token-valume">$64k</p>
                    <p className="token-marketcap">10.4k</p>
                    </TokenData>
            </TokenRow>

            <TokenRow>
                    <TokenMain>
                    <h3>2.</h3>
                    <img src={logo} alt='crypto' className="images"/>
                    <h1 className="heading">Bored Ape Ach Clube</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol"><img src={ether} className='token'/>27.685.8</p>
                    <p className="token-percent red">+60%</p>
                    <p className="token-percent green">-44%</p>
                    <p className="token-price">$103k</p>
                    <p className="token-valume">$64k</p>
                    <p className="token-marketcap">10.4k</p>
                    </TokenData>
            </TokenRow>

            <TokenRow>
                    <TokenMain>
                    <h3>3.</h3>
                    <img src={logo} alt='crypto' className="images"/>
                    <h1 className="heading">Bored Ape Ach Clube</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol">27.685.8</p>
                    <p className="token-percent red">+60%</p>
                    <p className="token-percent green">-44%</p>
                    <p className="token-price">$103k</p>
                    <p className="token-valume">$64k</p>
                    <p className="token-marketcap">10.4k</p>
                    </TokenData>
            </TokenRow>

            <TokenRow>
                    <TokenMain>
                    <h3>4.</h3>
                    <img src={logo} alt='crypto' className="images"/>
                    <h1 className="heading">Bored Ape Ach Clube</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol">27.685.8</p>
                    <p className="token-percent red">+60%</p>
                    <p className="token-percent green">-44%</p>
                    <p className="token-price">$103k</p>
                    <p className="token-valume">$64k</p>
                    <p className="token-marketcap">10.4k</p>
                    </TokenData>
            </TokenRow>

            <TokenRow>
                    <TokenMain>
                    <h3>5.</h3>
                    <img src={logo} alt='crypto' className="images"/>
                    <h1 className="heading">Bored Ape Ach Clube</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol">27.685.8</p>
                    <p className="token-percent red">+60%</p>
                    <p className="token-percent green">-44%</p>
                    <p className="token-price">$103k</p>
                    <p className="token-valume">$64k</p>
                    <p className="token-marketcap">10.4k</p>
                    </TokenData>
            </TokenRow>

            <TokenRow>
                    <TokenMain>
                    <h3>6.</h3>
                    <img src={logo} alt='crypto' className="images"/>
                    <h1 className="heading">Bored Ape Ach Clube</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol">27.685.8</p>
                    <p className="token-percent red">+60%</p>
                    <p className="token-percent green">-44%</p>
                    <p className="token-price">$103k</p>
                    <p className="token-valume">$64k</p>
                    <p className="token-marketcap">10.4k</p>
                    </TokenData>
            </TokenRow>

            <TokenRow>
                    <TokenMain>
                    <h3>7.</h3>
                    <img src={logo} alt='crypto' className="images"/>
                    <h1 className="heading">Bored Ape Ach Clube</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol">27.685.8</p>
                    <p className="token-percent red">+60%</p>
                    <p className="token-percent green">-44%</p>
                    <p className="token-price">$103k</p>
                    <p className="token-valume">$64k</p>
                    <p className="token-marketcap">10.4k</p>
                    </TokenData>
            </TokenRow>

            <TokenRow>
                    <TokenMain>
                    <h3>8.</h3>
                    <img src={logo} alt='crypto' className="images"/>
                    <h1 className="heading">Bored Ape Ach Clube</h1>
                    </TokenMain>
                    <TokenData>
                    <p className="token-symbol">27.685.8</p>
                    <p className="token-percent red">+60%</p>
                    <p className="token-percent green">-44%</p>
                    <p className="token-price">$103k</p>
                    <p className="token-valume">$64k</p>
                    <p className="token-marketcap">10.4k</p>
                    </TokenData>
            </TokenRow>
        </TokenContainer>
        </div>
    )
}

export const TokenContainer = styled.div`
display: flex;
flex-direction: column;

height: 100vh;

background-color: black;
`
export const TokenRow = styled.div`
height: 56px;
margin: 4px 24px;
background-color: #1C2833;
border-radius: 14px;
display: flex;
flex-direction: row;
align-items: center;
justify-items: start;


`
export const TokenRow1 = styled.div`
height: 56px;
margin: 4px 24px;
background-color: black;
border-radius: 14px;
display: flex;
flex-direction: row;
align-items: center;
justify-items: start`

export const TokenMain = styled.div`
display: flex;
align-items: center;
padding-left: 14px;
min-width: 300px;

h3{
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
}

.images {
    height: 30px;
    width: 30px;
    margin-left: 12px;
}
.heading {
    text-transform: uppercase;
    margin-left: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
}



`

export const TokenData = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

.token-symbol {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
}
.token-price {
    width: 110px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
}
.token-valume {
    width: 230px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
}

.token-percent {
    width: 100px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
}

.red {
    color: #f00606;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
}
.green {
    color: #11d811;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
}

.token-marketcap {
    width: 155px;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
}

.token{
    height: 25px;
}

`

