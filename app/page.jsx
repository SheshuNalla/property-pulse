import Link from 'next/link';
const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl">Welcome</h1>
      <Link href="./properties" className="text-4xl">Properties Page</Link>
    </div>
  )
}

export default HomePage