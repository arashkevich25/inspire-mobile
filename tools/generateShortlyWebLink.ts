import { BitlyClient } from 'bitly';

import { ThirdPartApiCredo } from 'configs/thirdPartApiCredo';

const bitly = new BitlyClient(ThirdPartApiCredo.Bitly);

export function generatePostUrl(postId: string) {
    return bitly.shorten(`https://web.app-inspire.net/post/${postId}`);
}
