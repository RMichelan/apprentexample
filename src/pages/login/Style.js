import styled from 'styled-components/native';


export const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
   background-color: #46D0D9;
`;

export const Logo = styled.Image.attrs(props => ({
    source: require('../../images/logo.png'),
    resizeMode: 'contain',
}))`
    width: 205px;
    height: 150px;
    margin-top: -422px;
    margin-bottom: 50px;  
`;

export const LoginArea = styled.View`
    width: 100%;
    height: 600px;
    margin-bottom: -500px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    /* align-items: center; */
    /* justify-content: center; */
    background-color: #F8FBFF;
`;

export const Title = styled.Text`
    margin-top: 50px;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Roboto';
    color: #13497B;
    text-align: center;
`;

export const Subtitle = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    font-family: 'Roboto';
    font-weight: bold;
    color: 'rgba(0, 0, 0, 0.3)';
    text-align: center;
`;

export const FieldArea = styled.View`
    margin-top: 30px;
    align-items: flex-start;
    padding-left: 30px;
    padding-right: 30px;
`;

export const Label = styled.Text`
    margin-top: 12px;
    font-size: 16px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #13497B;
`;

export const Field = styled.TextInput`
    margin-top: 5px;
    width: 100%;
    height: 45px;
    background-color: #FFFFFF;
    border: 1px;
    border-color: 'rgba(0, 0, 0, 0.1)';
    border-radius: 8px;
`;

export const Button = styled.TouchableOpacity.attrs((props) => ({
    activeOpacity: 0.8
}))`
    margin-top: 40px;
    width: 100%;
    height: 55px;
    border-radius: 8px;
    background-color: #13497B;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
`;

export const OtherNeedsArea = styled.View`
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const ForgotPassword = styled.Text`
    font-size: 14px;
    color: 'rgba(0, 0, 0, 0.4)';
    font-weight: bold;
`;

export const CreateAccount = styled.Text`
    font-size: 14px;
    color: #13497B;
    font-weight: bold;
`;

