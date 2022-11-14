import { CommentGetParams, CommentListGetResultModel } from './model/commentModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CommentList = '/comment/list/page',
}

export const getCommentList = (params: CommentGetParams) =>
  defHttp.get<CommentListGetResultModel>({ url: Api.CommentList, params });
