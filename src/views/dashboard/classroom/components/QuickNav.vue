<template>
  <Card title="课堂状态" size="50">
    <CardGrid v-for="item in navItems" :key="item.star" @click="sendEmoji(item.star)">
      <span class="flex flex-col items-center">
        <Icon :icon="item.icon" :color="item.color" size="40" />
      </span>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card, CardGrid, notification } from 'ant-design-vue';
  import { navItems } from './data';
  import { Icon } from '/@/components/Icon';
  import { useUserStore } from '/@/store/modules/user';

  const userStore = useUserStore();

  async function sendEmoji(star: string) {
    console.log(star);
    try {
      const res = await userStore.setEmoji({
        rid: '1',
        id: '3',
        emoji: star,
      });
      if (res) {
        notification.success({
          message: '设置成功',
          description: ``,
          duration: 3,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>
··
