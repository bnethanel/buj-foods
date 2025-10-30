'use client'
import { userService } from "@/app/services/user/user.service.local"
import { useRouter } from 'next/navigation'

export function LoginForm() {
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const username = (form.elements.namedItem('username') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value

    try {
      await userService.login({ username, password })
      alert('Login successful!')
      router.push('/')
    } catch {
      alert('Invalid username or password')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-sm mx-auto space-y-4">
      <h1 className="text-2xl font-semibold text-center">Login</h1>
      <input
        name="username"
        placeholder="Username"
        className="border rounded p-2 w-full"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border rounded p-2 w-full"
      />
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </form>
  )
}
