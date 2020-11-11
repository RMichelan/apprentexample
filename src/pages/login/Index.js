import React from 'react';
import { StatusBar } from 'react-native';
import {
	Container,
	Logo,
	LoginArea,
	Title,
	Subtitle,
	FieldArea,
	Label,
	Field,
	Button,
	TextButton,
	OtherNeedsArea,
	ForgotPassword,
	CreateAccount,
} from './Style';


export default function Login() {
	return (
		<Container>
			<StatusBar backgroundColor="#00b6c2" barStyle="light-content" />
			<Logo />
			<LoginArea>
				<Title> Welcome </Title>
				<Subtitle> Login for enjoy findhome </Subtitle>
				<FieldArea>
					<Label> Email </Label>
					<Field keyboardType='email-address' />
					<Label> Password </Label>
					<Field secureTextEntry={true} />
					<Button onPress={() => { alert('Login...') }}><TextButton> LOGIN </TextButton></Button>
				</FieldArea>
				<OtherNeedsArea>
					<ForgotPassword onPress={() => { alert('Forget Password') }}> Forgot password? </ForgotPassword>
					<CreateAccount onPress={() => { alert('Create Account') }}> Create new account </CreateAccount>
				</OtherNeedsArea>
			</LoginArea>
		</Container>
	);
}