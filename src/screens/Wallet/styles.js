import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.ScrollView.attrs(() =>({
  vertical: true,
}))`
background: #000,;
flex: 1;
`;

//export const Wrapper = styled.View`
 // background: #000;
  //flex: 1;
//`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction:row;
  align-items:center;
`;

export const Value = styled.Text`
  color:#fff;
  font-size:38px;
  font-weight:200;
`;

export const Bold = styled.Text`
font-weight:bold;
`;


export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const  Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
 flex-direction: row;
 align-items: center;
 justify-content: center;
 border: 1px solid rgba(255, 255, 255, 0.6);
 border-radius: 25px;
 width: 150px;
 height: 45px;
 margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
   background: #1C1C1E;
   height: 60px;
   flex-direction: row;
   padding: 0 16px;
   align-items: center;
   justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8E8E93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1E232A;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;
export const CardBody = styled.View`
flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;
export const CardDetailsTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
export const CardInfo = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 12px;
`;

export const CreditCard = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
`;

export const AddLabel = styled.Text`
  color: #0DB060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;
export const UseTicketContainer = styled.View`
  align-items: center;
  
`;

export const UseTicketButton = styled.TouchableOpacity`
 flex-direction: row;
 justify-content:center;
`;

export const UseTicketLabel = styled.Text`
  color: #0DB060;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  margin:0 15px;
`;