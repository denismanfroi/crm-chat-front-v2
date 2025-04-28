<script setup>
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { usersCollection } from '@/stores/collections/users'

const { getUser, updateUser } = usersCollection()
const users = ref([])
const clients = ref([])
const userData = ref('Denis')

const listClients = async () => {
  const clientsDB = collection(db, 'clients')
  const snapshot = await getDocs(clientsDB)

  const clients = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return clients
}

const updateRefUser = async (uid) => {
  updateUser(uid, { name: 'Denis', last_name: 'Rosa Manfroi' })
}

onMounted(async () => {
  const getRefUser = await getUser()
  users.value = getRefUser

  const clientsData = await listClients()
  clients.value = clientsData
})
</script>

<template>
  <section>
    <h1>List Users - Firestore</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        <p contenteditable="true">{{ user.name }}</p>
        <p contenteditable="true">{{ user.last_name }}</p>
        <p contenteditable="true">{{ user.email }}</p>
        <p contenteditable="true">{{ user.isActive }}</p>
        <p>{{ user.uid }}</p>
        <!-- <button @click="updateRefUser(user.id)">Atualizar dados</button> -->
      </li>
    </ul>
  </section>

  <section>
    <h1>List Clients - Firestore</h1>

    <ul>
      <li v-for="client in clients" :key="client.id">
        <p>{{ client.name }}</p>
        <img :src="client.image" alt="" />
      </li>
    </ul>
  </section>
</template>
