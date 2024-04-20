import { FC, memo } from "react";
import { View,Text } from "@tarojs/components";
import { AtAvatar,AtTag } from 'taro-ui';
import "./index.scss";
import Taro from "@tarojs/taro";

const UserState:FC=()=>{
  function navigateProfile(){
    Taro.navigateTo({
      url: '/pages/personal_profile/index'
    })
  }

  return (
    <View className='user-state'>
      <AtAvatar circle size='large'></AtAvatar>
      <View className='user-info'>
        <Text className='user-name' numberOfLines={1} maxLines={1}  decode space='emsp'>微信用户</Text>
        <AtTag size='small' type='primary' circle active>中山驾校</AtTag>
      </View>
      <View className='setting' onClick={navigateProfile}>
        <View className='at-icon at-icon-settings'></View>
      </View>
    </View>
  );
}

export default memo(UserState);
