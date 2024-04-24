import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtList, AtListItem } from 'taro-ui';
import './index.scss'

export default function PersonalSecurity() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='personal_security'>
      <AtList className='panel' hasBorder={false}>
        <AtListItem title='手机号码' arrow='right' extraText='13800000000'></AtListItem>
        <AtListItem title='修改登录密码' arrow='right'></AtListItem>
        <AtListItem title='微信绑定' arrow='right' extraText='已绑定' hasBorder={false}></AtListItem>
      </AtList>
      <AtList className='panel' hasBorder={false}>
        <AtListItem title='账户注销' arrow='right' hasBorder={false}></AtListItem>
      </AtList>
    </View>
  )
}
