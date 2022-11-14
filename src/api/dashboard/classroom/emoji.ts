import { defHttp } from '/@/utils/http/axios';
import { SetEmojiParams } from './model/emojiModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  SetEmoji = '/emoji/send',
}
/**
 * @description: send emoji api
 */
export function setEmojiApi(params: SetEmojiParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get(
    {
      url: Api.SetEmoji,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
