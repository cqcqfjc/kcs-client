import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Messages() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='messages'>
      <Text>Hello world!</Text>
    </View>
  )
}
