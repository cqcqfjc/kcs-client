import { View, Input, Text, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { AtList, AtListItem, AtAvatar,AtButton } from 'taro-ui';
import './index.scss'

export default function PersonalProfile() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  function navigateSecurity(){
    Taro.navigateTo({
      url: '/packages/personal/security/index'
    })
  }

  return (
    <View className='personal_profile'>
      <View className='form-panel'>
        <AtList hasBorder={false}>
          <AtListItem title='头像' arrow='right' extraText={
            <AtAvatar circle size='small' text='kcs' image='https://taro-ui.jd.com/img/logo-taro.png'></AtAvatar>
          }
          ></AtListItem>
          <AtListItem title='姓名' arrow='right' extraText={
            <Input type='text' placeholder='请输入姓名'></Input>
          }
          ></AtListItem>
          <AtListItem title='性别' arrow='right' extraText='男'></AtListItem>
          <AtListItem title='生日' extraText={
            <View className='disable-edit'>
              <Text>1993-05-01</Text>
              <View className='icon'>
                <Image className='img' src='/assets/icons/lock.svg'></Image>
              </View>
            </View>
          }
          ></AtListItem>
          <AtListItem title='驾校' hasBorder={false} extraText={
            <View className='disable-edit'>
              <Text>中山驾校</Text>
              <View className='icon'>
                <Image className='img' src='/assets/icons/lock.svg'></Image>
              </View>
            </View>
          }
          ></AtListItem>
        </AtList>
      </View>

      <AtButton onClick={navigateSecurity} className='btn' circle full type='primary'>账户与安全</AtButton>
      <AtButton className='btn logout' circle full type='primary'>退出登录</AtButton>
    </View>
  )
}
