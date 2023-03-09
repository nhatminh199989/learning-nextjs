import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div className="container mx-auto bg-white py-4 px-6">
                <div className="flex gap-6">
                    <Link href={`/about`}>
                        About
                    </Link>
                </div>
            </div>            
        </>
    )
}