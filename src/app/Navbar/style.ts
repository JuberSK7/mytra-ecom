import styled from 'styled-components'

export const ContainerHeader = styled.div`
position: sticky;
top: 0;
height: 78px;
background: #fff;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;`

export const Nav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const NavLeft = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-left: 24px;

img{
   
    height: 46px;
    
   
}
ul{
  
display: flex;
flex-direction: row;
text-decoration: none;
list-style: none;
}
li{
    padding-left: 18px;
}
`

export const NavRight = styled.div`
display: flex;
align-items: center;
flex-direction: row;
margin: 18px;



input{

    font-size: 14px;
    height: 20px;
    line-height: 24px;
    width: 95%;
    color: #696e79;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    padding: 8px 10px 10px;
    margin: 0;
    outline: 0;
    border: 1px solid #f5f5f6;
    border-radius: 0 4px 4px 0;
    border-left: 0;
    background: #f5f5f6;


    @media screen and (max-width: 780px) {
        display: none;
     }
    
}
`

export const ItemBox = styled.div`
display: flex;
align-item: center;
flex-direction: row;`

export const Profile = styled.div`
padding:  12px;
font-size: 12px;`

export const Wishlist = styled.div`
padding:  12px;
font-size: 12px;`

export const Bag = styled.div`
padding:  12px;
font-size: 12px;`