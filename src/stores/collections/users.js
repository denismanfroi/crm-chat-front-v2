import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, addDoc, getDocs, updateDoc } from 'firebase/firestore'

export const usersCollection = defineStore('users', () => {
  const usersCollection = collection(db, 'users')

  // Cadastra um novo usuário na base users
  const signupUser = async (uid, name, last_name, email, isActive = false) => {
    try {
      await addDoc(usersCollection, {
        uid,
        name,
        last_name,
        email,
        isActive,
        createdAt: new Date(),
      })
    } catch (error) {
      console.error(`signupUser - Collection: ${error}`)
    }
  }
  // Retorna os usuários da base users
  const getUser = async () => {
    try {
      const snapshot = await getDocs(usersCollection)
      const listUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      return listUsers
    } catch (error) {
      console.error(`getUser - Collection: ${error}`)
    }
  }

  // Atualizar dados de usuário base users
  const updateUser = async (uid, data) => {
    const userRef = doc(db, 'users', uid)

    try {
      await update(userRef, data)
    } catch (error) {
      console.error(`updateUser - Collection: ${error}`)
    }
  }

  return {
    signupUser,
    getUser,
    updateUser,
  }
})
