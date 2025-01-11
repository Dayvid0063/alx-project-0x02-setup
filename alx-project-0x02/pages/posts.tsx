import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/layout/Header'
import PostCard from '../components/common/PostCard'
import { Post, PostApiResponse } from '../interfaces'

const Posts: NextPage = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data: PostApiResponse[] = await response.json()

                // Transform API response to match our Post interface
                const transformedPosts = data.map(apiPost => ({
                    id: apiPost.id,
                    title: apiPost.title,
                    content: apiPost.body, // Map API's 'body' to our 'content'
                    userId: apiPost.userId
                }))

                setPosts(transformedPosts)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching posts:', error)
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Posts - ALX Project 2</title>
                <meta name="description" content="Posts page" />
            </Head>

            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Posts</h1>

                {loading ? (
                    <div className="text-center">
                        <p className="text-lg text-gray-600">Loading posts...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                content={post.content}
                                userId={post.userId || 1}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}

export default Posts
