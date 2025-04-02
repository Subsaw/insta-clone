import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import {styles} from '../styles/auth.styles.js'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <TouchableOpacity onPress={() => alert('you touched me')}>
        <Text>Press me</Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert('you touched me')}>
        <Text>Press me bigger</Text>
      </Pressable>

      <Image source={require('../assets/images/icon.png')} style={{width: 100, height: 100}}/>
      <Image source={{uri: 'https://row.hyperx.com/cdn/shop/files/hyperx_alloy_core_rgb_es_1_top_down.jpg?v=1734473869'}} style={{width: 100, height: 100}}/>
    </View>
  );
}


