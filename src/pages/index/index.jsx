import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtFab, AtAvatar, AtBadge, AtCountdown,AtCurtain ,AtNoticebar} from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false,
      curtainPng:"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
    }
  }
  config = {
    navigationBarTitleText: '首页'
  }
  onTimeUp () {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }
  handleChange () {
    this.setState({
      isOpened: true
    })
  }
  onClose () {
    this.setState({
      isOpened: false
    })
  }
  render () {
    return (
      <View className='${color-brand} padding_32'>
        <View className='at-icon at-icon-settings index'></View>
        <Text>Hello world!</Text>
        <AtButton loading openType='contact' type='secondary' size='small'>确定</AtButton>
        <View className='fixed'>
          <AtFab onClick={this.handleClick}>
            <Text className='at-fab__icon at-icon at-icon-menu'></Text>
          </AtFab>
        </View>
        <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
        <AtAvatar text='凹凸实验室'></AtAvatar>
        <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        <AtAvatar circle text='凹凸实验室'></AtAvatar>
        <View className='at-article__h1'>这是一级标题这是一级标题</View>
        <View className='at-article__info'>2017-05-07&nbsp;&nbsp;&nbsp;这是作者</View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>这是二级标题</View>
            <View className='at-article__h3'>这是三级标题</View>
            <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ</View>
            <View className='at-article__p'>这是文本段落。这是文本段落。</View>
            <Image
              className='at-article__img'
              src='https://jdc.jd.com/img/400x400'
              mode='widthFix'
            />
          </View>
        </View>

        <AtBadge dot>
          <AtButton size='small'>按钮</AtButton>
        </AtBadge>
        <AtBadge value='NEW'>
          <AtButton size='small'>按钮</AtButton>
        </AtBadge>
        <AtBadge value='···'>
          <AtButton size='small'>按钮</AtButton>
        </AtBadge>

        <AtCountdown
          format={{ hours: ':', minutes: ':', seconds: '' }}
          seconds={10}
          onTimeUp={this.onTimeUp.bind(this)}
        />
        <AtCountdown
          isShowDay
          day={2}
          hours={1}
          minutes={1}
          seconds={10}
        />
        <AtCountdown
          isShowDay
          format={{ hours: ':', minutes: ':', seconds: '' }}
          day={2}
          hours={1}
          minutes={1}
          seconds={10}
        />
        <AtCountdown
          isCard
          minutes={1}
          seconds={10}
        />

        <AtCurtain isOpened={this.state.isOpened}onClose={this.onClose.bind(this)}>
          <Image style='width:100%;height:250px'src={this.state.curtainPng} />
        </AtCurtain>

        <AtButton onClick={this.handleChange.bind(this)}>右上关闭幕帘</AtButton>

        <AtNoticebar close single showMore marquee icon='volume-plus'>这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
      </View>
    )
  }
}
