"use client"
import { useRouter, useParams, useSearchParams } from 'next/navigation'
const PropertyPage = () => {
  console.log('Hello')
  const router = useRouter();
  const SearchParams = useSearchParams();
  const {id} = useParams();
  const name = SearchParams.get('name');
  return (
    <div>
      <button onClick={() => router.push('/')} className="bg-blue-500 text-white">Go Home {name}</button>
    </div>
  )
}

export default PropertyPage