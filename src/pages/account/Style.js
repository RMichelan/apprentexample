import styled from 'styled-components/native';


export const Container = styled.View`
   flex: 1;
   align-items: center;
   background-color: #FFFFFF;
`;



export const ProfilePanel = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
`;

export const ProfileInfo = styled.View`
    justify-content: flex-start;
`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #143656;
    font-family: 'Roboto';
`;

export const RankPanel = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

export const AddressPanel = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

export const Address = styled.Text`
    font-size: 11px;
    font-family: 'Roboto';
    color: #143656;

`;

export const ProfilePicture = styled.Image.attrs(props => ({
    source: require('../../images/profile.png'),
}))`
    width: 90px;
    height: 90px;
    border-radius: 45px;
    margin-left: 20px;
`;



export const GeneralInfos = styled.ScrollView.attrs(props => ({
    showsVerticalScrollIndicator: false,
}))`
    width: 100%;
    height: 600px;
    margin-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #F4F8FC;
`;

export const GoldArea = styled.View`
    margin-top: 30px;
    justify-content: center;
    align-items: flex-start;
`;

export const Title = styled.Text`
   font-size: 20px;
   font-weight: bold;
   color: #143656;
`;

export const ScrollGold = styled.ScrollView.attrs(props => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
}))`
    margin-top: 12px;
`;

export const CardGold = styled.View`
    width: 230px;
    height: 125px;
    margin-right: 15px;
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
`;

export const TitleCardGold = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #143656;
    text-align: center;
    margin-bottom: 10px;
`;

export const IconCardGold = styled.View`
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextCardGold = styled.Text`
    margin-left: 5px;
    font-size: 14px;
    color: #143656;
`;

export const ViewMoreCardGold = styled.Text`
    margin-top: 10px;
    font-size: 12px;
    color: #46D0D9;
    text-align: center;
`;

export const TextInformation = styled.Text`
    color: 'rgba(0, 0, 0, 0.35)';
    font-size: 10px;
    text-align: justify;
`;


export const PostArea = styled.View`
    margin-top: 30px;
    justify-content: center;
    align-items: flex-start;
`;

export const Post = styled.ImageBackground.attrs(props => ({
    // source: require('../../images/kitchen.jpeg'),
    resizeMode: 'cover',
}))`
    margin-top: 12px;
    width: 379px;
    height: 357px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const PostAddress = styled.View`
    flex-direction: row;
    margin-top: 15px;
    margin-left: 15px;
    width: 130px;
    height: 26px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    background-color: 'rgba(255, 255, 255, 0.6)';
`;

export const TextPostAddress = styled.Text`
    font-size: 11px;
    color: #143656;
`;

export const PostCard = styled.View`
    width: 96%;
    height: 103px;
    background-color: #FFFFFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: auto;
    padding-top: 10px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 10px;
`;

export const Favourite = styled.TouchableOpacity.attrs((props) => ({
    activeOpacity: 0.9,
}))`
    position: absolute;
    right: 30px;
    bottom: 78px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-width: 1px;
    border-color: #ebebeb;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
`;

export const TitlePostInfo = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #143656;
    text-align: left;
`;

export const InfosPost = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
`;

export const ProfileInfosPost = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ProfilePost = styled.View`
    margin-top: 5px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const ProfilePostPicture = styled.Image.attrs(props => ({
    source: require('../../images/profile.png'),
}))`
    width: 30px;
    height: 30px;
    border-radius: 15px;
`;

export const NamePost = styled.Text`
    margin-left: 5px;
    font-size: 11px;
    color: #143656;
`;

export const RankPost = styled.View`
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HomeInfos = styled.View`
    align-items: center;
    justify-content: center;
`;

export const HomePrice = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #143656;
`;

export const HomeDetails = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const QtdIcons = styled.Text`
    font-size: 12px;
    color: #8A9BAB;
    margin-right: 7px;
`;