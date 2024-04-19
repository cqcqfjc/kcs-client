import { FC, memo } from "react";
import { View,Text } from "@tarojs/components";
import { AtAvatar,AtTag } from 'taro-ui';
import "./index.scss";

const UserState:FC=()=>{
  return (
    <View className='user-state'>
      <AtAvatar circle size='large'></AtAvatar>
      <View className='user-info'>
        <Text className='user-name' numberOfLines={1} maxLines={1}  decode space='emsp'>微信用户</Text>
        <AtTag size='small' type='primary' circle active>中山驾校</AtTag>
      </View>
      <View className='setting'>
        <View className='at-icon at-icon-settings'></View>
      </View>
    </View>
  );
}

export default memo(UserState);
