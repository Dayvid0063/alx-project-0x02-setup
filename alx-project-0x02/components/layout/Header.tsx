import Link from 'next/link'

const Header = () => {
    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                        ALX Project 2
                    </Link>
                    <div className="space-x-4">
                        <Link href="/" className="text-gray-600 hover:text-gray-900">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header