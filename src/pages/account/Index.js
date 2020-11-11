import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
   Container,
   ProfilePanel,
   ProfileInfo,
   Name,
   RankPanel,
   AddressPanel,
   Address,
   ProfilePicture,
   GeneralInfos,
   GoldArea,
   Title,
   ScrollGold,
   CardGold,
   TitleCardGold,
   IconCardGold,
   TextCardGold,
   ViewMoreCardGold,
   TextInformation,
   PostArea,
   Post,
   PostAddress,
   TextPostAddress,
   PostCard,
   Favourite,
   TitlePostInfo,
   InfosPost,
   ProfileInfosPost,
   ProfilePost,
   ProfilePostPicture,
   NamePost,
   RankPost,
   HomeInfos,
   HomePrice,
   HomeDetails,
   QtdIcons,
} from './Style';


export default function Account() {
   return (
      <Container>

         <ProfilePanel>
            <ProfileInfo>
               <Name> Eddie Bremmer </Name>
               <RankPanel>
                  <AntDesign name='star' size={18} color='#46D0D9' />
                  <AntDesign name='star' size={18} color='#46D0D9' />
                  <AntDesign name='star' size={18} color='#46D0D9' />
                  <AntDesign name='star' size={18} color='#46D0D9' />
                  <AntDesign name='star' size={18} color='#F0F0F0' />
               </RankPanel>
               <AddressPanel>
                  <Feather name='map-pin' size={11} color='#143656' />
                  <Address> Los Angeles, CA </Address>
               </AddressPanel>
            </ProfileInfo>
            <ProfilePicture />
         </ProfilePanel>

         <GeneralInfos>
            <GoldArea>
               <Title> FindHome Gold </Title>
               <ScrollGold>
                  <CardGold>
                     <TitleCardGold> Estadistics </TitleCardGold>
                     <IconCardGold>
                        <FontAwesome name='dollar' size={16} color='#46D0D9' />
                        <TextCardGold> 10 sales Complete </TextCardGold>
                     </IconCardGold>
                     <IconCardGold>
                        <Ionicons name='person' size={16} color='#46D0D9' />
                        <TextCardGold> 09 clients </TextCardGold>
                     </IconCardGold>
                     <ViewMoreCardGold> View more info </ViewMoreCardGold>
                  </CardGold>
                  <CardGold>
                     <TitleCardGold> Information </TitleCardGold>
                     <TextInformation> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus condimentum nulla diam proin quis commodo malesuada. Dolor morbi egestas consectetur egestas aliquam tellus. Accumsan tristique consequat nec cras commodo et orci ipsum. </TextInformation>
                  </CardGold>
               </ScrollGold>
            </GoldArea>

            <PostArea>
               <Title> Post </Title>
               {/* TODO: separar o post em um component */}
               <Post source={require('../../images/kitchen.jpeg')}>
                  <PostAddress>
                     <Feather name='map-pin' size={12} color='#143656' />
                     <TextPostAddress> Los Angeles, CA </TextPostAddress>
                  </PostAddress>
                  <PostCard>
                     <Favourite>
                        <AntDesign name='hearto' size={24} color='#E83F67' />
                     </Favourite>
                     <TitlePostInfo> Special House Mix </TitlePostInfo>
                     <InfosPost>
                        <ProfileInfosPost>
                           <ProfilePost>
                              <ProfilePostPicture />
                              <NamePost> Timmy Bremer </NamePost>
                           </ProfilePost>
                           <RankPost>
                              <AntDesign name='star' size={15} color='#46D0D9' />
                              <AntDesign name='star' size={15} color='#46D0D9' />
                              <AntDesign name='star' size={15} color='#46D0D9' />
                              <AntDesign name='star' size={15} color='#F0F0F0' />
                              <AntDesign name='star' size={15} color='#F0F0F0' />
                           </RankPost>
                        </ProfileInfosPost>
                        <HomeInfos>
                           <HomePrice> $1500 usd </HomePrice>
                           <HomeDetails> 
                              <Ionicons name='bed-outline' size={17} color='#8A9BAB' />
                              <QtdIcons> 2 </QtdIcons>

                              <MaterialCommunityIcons name='shower' size={15} color='#8A9BAB' />
                              <QtdIcons> 1 </QtdIcons>

                              <MaterialCommunityIcons name='room-service-outline' size={17} color='#8A9BAB' />
                              <QtdIcons> 1 </QtdIcons>
                           </HomeDetails>
                        </HomeInfos>
                     </InfosPost>
                  </PostCard>
               </Post>

               <Post source={require('../../images/garden.jpg')}>
                  <PostAddress>
                     <Feather name='map-pin' size={12} color='#143656' />
                     <TextPostAddress> New York, NY </TextPostAddress>
                  </PostAddress>
                  <PostCard>
                     <Favourite>
                        <AntDesign name='hearto' size={24} color='#ebebeb' />
                     </Favourite>
                     <TitlePostInfo> Big House for Family </TitlePostInfo>
                     <InfosPost>
                        <ProfileInfosPost>
                           <ProfilePost>
                              <ProfilePostPicture />
                              <NamePost> Tonny Stark </NamePost>
                           </ProfilePost>
                           <RankPost>
                              <AntDesign name='star' size={15} color='#46D0D9' />
                              <AntDesign name='star' size={15} color='#46D0D9' />
                              <AntDesign name='star' size={15} color='#46D0D9' />
                              <AntDesign name='star' size={15} color='#46D0D9' />
                              <AntDesign name='star' size={15} color='#F0F0F0' />
                           </RankPost>
                        </ProfileInfosPost>
                        <HomeInfos>
                           <HomePrice> $1500 usd </HomePrice>
                           <HomeDetails> 
                              <Ionicons name='bed-outline' size={17} color='#8A9BAB' />
                              <QtdIcons> 3 </QtdIcons>

                              <MaterialCommunityIcons name='shower' size={15} color='#8A9BAB' />
                              <QtdIcons> 3 </QtdIcons>

                              <MaterialCommunityIcons name='room-service-outline' size={17} color='#8A9BAB' />
                              <QtdIcons> 2 </QtdIcons>
                           </HomeDetails>
                        </HomeInfos>
                     </InfosPost>
                  </PostCard>
               </Post>
            </PostArea>

         </GeneralInfos>

      </Container>
   );
}