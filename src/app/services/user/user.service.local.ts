import { storageService } from '../async-storage.service.js'
import type { User } from '../../data/types.js'

const USER_STORAGE_KEY = 'userDB'

type PublicUser = Pick<User, '_id' | 'fullname'>

export const userService = {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
  getLoggedinUser,
  saveLoggedinUser,
}

async function getUsers(): Promise<PublicUser[]> {
  const users = (await storageService.query(USER_STORAGE_KEY)) as User[]
  // Return users without their passwords (and without username, if you prefer)
  return users.map(({ _id, fullname }) => ({ _id, fullname }))
}

async function getById(userId: string): Promise<User> {
  return (await storageService.get(USER_STORAGE_KEY, userId)) as User
}

function remove(userId: string): Promise<void> {
  return storageService.remove(USER_STORAGE_KEY, userId)
}

async function update(user: User): Promise<User> {
  await storageService.put(USER_STORAGE_KEY, user)

  const loggedinUser = getLoggedinUser()
  if (loggedinUser && loggedinUser._id === user._id) {
    saveLoggedinUser(user)
  }

  return user
}

async function login(userCred: { username: string; password: string }): Promise<PublicUser> {
  const users = (await storageService.query(USER_STORAGE_KEY)) as User[]
  const user = users.find(
    (u) => u.username === userCred.username && u.password === userCred.password
  )

  if (!user) throw new Error('Invalid username or password')
  return saveLoggedinUser(user)
}

async function signup(userCred: { username: string; password: string; fullname: string }): Promise<PublicUser> {
  const user = (await storageService.post(USER_STORAGE_KEY, userCred)) as User
  return saveLoggedinUser(user)
}

async function logout(): Promise<void> {
  sessionStorage.removeItem(USER_STORAGE_KEY)
}

function getLoggedinUser(): PublicUser | null {
  const raw = sessionStorage.getItem(USER_STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as PublicUser
  } catch {
    return null
  }
}

function saveLoggedinUser(user: User): PublicUser {
  const miniUser: PublicUser = {
    _id: user._id,
    fullname: user.fullname,
  }
  sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(miniUser))
  return miniUser
}
