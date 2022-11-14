<template>
  <a-form-item>
    <InputTextArea v-model:value="value" :rows="4" />
  </a-form-item>
  <a-form-item>
    <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
      评论
    </a-button>
  </a-form-item>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Input } from 'ant-design-vue';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  dayjs.extend(relativeTime);
  const InputTextArea = Input.TextArea;

  type Comment = Record<string, string>;

  const comments = ref<Comment[]>([]);
  const submitting = ref<boolean>(false);
  const value = ref<string>('');
  const handleSubmit = () => {
    if (!value.value) {
      return;
    }
    comments.value = [
      {
        author: 'Han Solo',
        avatar: '',
        content: value.value,
        datetime: dayjs().fromNow(),
      },
    ];
    submitting.value = true;

    setTimeout(() => {
      submitting.value = false;
      comments.value = [
        {
          author: 'Han Solo',
          avatar: '',
          content: value.value,
          datetime: dayjs().fromNow(),
        },
        ...comments.value,
      ];
      value.value = '';
    }, 1000);
  };
</script>
