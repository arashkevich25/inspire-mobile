import { generatePostUrl } from './generateShortlyWebLink';
import I18n from './translate';

import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';

export async function copyPostPublicUrl(postId: string): Promise<void> {
    const { link } = await generatePostUrl(postId);
    Clipboard.setString(link);
    Toast.show({
        text2: I18n.t('showPostModal.notify.copyUrl.title'),
        type: 'success',
    });
}
