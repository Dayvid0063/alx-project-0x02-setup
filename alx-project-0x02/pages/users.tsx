import type { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import UserCard from '../components/common/UserCard'
import { User } from '../interfaces'

interface UsersPageProps {
    users: User[]
}

const Users: NextPage<UsersPageProps> = ({ users }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Users - ALX Project 2</title>
                <meta name="description" content="Users page" />
            </Head>

            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Users</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export const getStaticProps = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users: User[] = await response.json()

        return {
            props: {
                users,
            },
            revalidate: 60 // Revalidate every minute
        }
    } catch (error) {
        console.error('Error fetching users:', error)
        return {
            props: {
                users: [],
            },
            revalidate: 60
        }
    }
}

export default Users
