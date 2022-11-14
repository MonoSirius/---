export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
  decimal: boolean;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '在线人数',
    icon: 'yuhangyuan|svg',
    value: 87,
    total: 100,
    color: 'blue',
    action: '',
    decimal: false,
  },
  {
    title: '发送表情人数',
    icon: 'emoji-1|svg',
    value: 80,
    total: 0,
    color: 'orange',
    action: '',
    decimal: false,
  },
  {
    title: '平均分数',
    icon: 'score|svg',
    value: 5.4,
    total: 120000,
    color: 'green',
    action: '',
    decimal: true,
  },
  {
    title: '分数方差',
    icon: 'score2|svg',
    value: 0,
    total: 120000,
    color: 'red',
    action: '',
    decimal: true,
  },
];
