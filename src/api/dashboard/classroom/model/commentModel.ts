import { BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */

export interface CommentPostParams {
  id: string;
  rid: string;
  content: string;
}
export interface CommentGetParams {
  current: number;
  pageSize: number;
}
export interface CommentListItem {
  commentId: string;
  id: string;
  userName: string;
  userAvatar: string;
  content: string;
  createTime: string;
}

/**
 * @description: Request list return value
 */
export type CommentListGetResultModel = BasicFetchResult<CommentListItem>;
