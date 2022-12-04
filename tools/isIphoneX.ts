import { Dimensions, Platform } from 'react-native';

export function isIphoneX() {
    const dim = Dimensions.get('window');
    return Platform.OS === 'ios' ? isIPhoneXSize(dim) : false;
}

export function isIPhoneXSize(dim: any) {
    return dim.height >= 812 || dim.width >= 812;
}
