<script setup>
const messages = [
  {
    avatar: 'https://i.pravatar.cc/20',
    name: 'João',
    time: '10:30',
    text: 'Oi, como você está?',
  },
  {
    avatar: 'https://i.pravatar.cc/40',
    name: 'Maria',
    time: '17:20',
    text: 'Estou precisando de ajuda.',
  },
  {
    avatar: 'https://i.pravatar.cc/18',
    name: 'Camila',
    time: '07:18',
    text: 'Oi, como você está?',
  },
  {
    avatar: 'https://i.pravatar.cc/32',
    name: 'Raquel',
    time: '14:41',
    text: 'Estou precisando de ajuda.',
  },
  {
    avatar: 'https://i.pravatar.cc/35',
    name: 'Pedro',
    time: '11:34',
    text: 'Oi, como você está?',
  },
  {
    avatar: 'https://i.pravatar.cc/21',
    name: 'Caique',
    time: '17:54',
    text: 'Estou precisando de ajuda.',
  },
]
</script>

<template>
  <div v-for="message in messages" class="chat-card">
    <div class="avatar">
      <img :src="message.avatar" alt="Avatar" />
    </div>
    <div class="message">
      <div class="name">{{ message.name }}</div>
      <div class="time">{{ message.time }}</div>
      <div class="text">{{ message.text }}</div>
    </div>
  </div>
</template>

<style scoped>
.chat-card {
  align-items: center;
  background-color: rgb(39, 39, 39);
  border-radius: 0.2rem;
  display: flex;
  gap: 16px;
  margin-top: 10px;
  padding: 10px;

  &:hover {
    background-color: var(--orange);
    cursor: pointer;
  }

  & .avatar {
    border-radius: 100%;
    max-height: 50px;
    max-width: 50px;
    height: 100%;
    width: 100%;
    overflow: hidden;

    & img {
      width: 100%;
    }
  }

  & .message {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;

    & .name {
      font-weight: bold;
    }

    & .time {
      font-size: 0.8rem;
    }

    & .text {
      font-size: 0.8rem;
      width: 100%;
    }
  }
}
</style>
