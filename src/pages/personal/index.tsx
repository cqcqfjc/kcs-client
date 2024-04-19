import { View, Text, Image } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { AtBadge,AtList, AtListItem } from 'taro-ui';
import UserState from '@/components/UserState';
import './index.scss';


export default function Personal() {

  useLoad(() => {
    console.log('Page loaded.')
  })


  return (
    <View className='personal'>
      <View className='profile-order-panel'>
        <View className='profile-panel'>
          <UserState></UserState>
        </View>
        <View className='order-panel'>
          <View className='order-panel-title'>
            <Text>我的订单</Text>
            <View className='more'>
              <Text>更多</Text>
              <View className='at-icon at-icon-chevron-right'></View>
            </View>
          </View>
          <View className='order-panel-grid'>
            <View className='grid-item'>
              <AtBadge dot>
                <Image className='grid-item-icon' src='/assets/icons/bankcard.svg' svg></Image>
                <Text className='grid-item-text'>待付款</Text>
              </AtBadge>
            </View>
            <View className='grid-item'>
              <AtBadge>
                <Image className='grid-item-icon' src='/assets/icons/schedule.svg' svg></Image>
                <Text className='grid-item-text'>待使用</Text>
              </AtBadge>
            </View>
            <View className='grid-item'>
              <AtBadge>
                <Image className='grid-item-icon' src='/assets/icons/car.svg' svg></Image>
                <Text className='grid-item-text'>使用中</Text>
              </AtBadge>
            </View>
            <View className='grid-item'>
              <AtBadge>
                <Image className='grid-item-icon' src='/assets/icons/transfer.svg' svg></Image>
                <Text className='grid-item-text'>超时单</Text>
              </AtBadge>
            </View>
          </View>

        </View>
      </View>
      <AtList className='actions' hasBorder={false}>
        <AtListItem className='bg1' title='我的积分' arrow='right' thumb='/assets/icons/points.svg' />
        <AtListItem className='bg2' title='教练认证' arrow='right' extraText='已认证' thumb='/assets/icons/id-card-h.svg' />
        <AtListItem className='bg3' title='地图导航' arrow='right' thumb='/assets/icons/map-draw.svg' />
        <AtListItem className='bg4' title='员工工作台' arrow='right' thumb='/assets/icons/workbench.svg' />
        <AtListItem className='bg5' title='常见问题' arrow='right'  thumb='/assets/icons/help.svg' />
        <AtListItem className='bg6' title='关于我们' arrow='right'  hasBorder={false} thumb='/assets/icons/trademark.svg' />
      </AtList>
      <View className='container-placeholder'></View>
      <View className='copyright'>
        <Text>Version 0.0.1</Text>
        <Text>&copy;2024 kcs-client </Text>
        <Text>Powered by kcs-client v0.0.1</Text>
      </View>
    </View>
  )
}
