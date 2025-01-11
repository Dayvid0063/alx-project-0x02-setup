import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/layout/Header'
import UserCard from '../components/common/UserCard'
import { User } from '../interfaces'

const Users: NextPage = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching users:', error)
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Users - ALX Project 2</title>
                <meta name="description" content="Users page" />
            </Head>

            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Users</h1>

                {loading ? (
                    <div className="text-center">
                        <p className="text-lg text-gray-600">Loading users...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}

export default Users
