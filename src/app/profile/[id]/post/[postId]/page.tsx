"use client"
import { useParams, useRouter } from 'next/navigation'

export default function ProfileID() {
  const params = useParams()
  const router = useRouter()
  
  console.log(router);
  
  
  return (
    <div>
      <h1>Profile page id: {params?.id} </h1>
    </div>
  );
}
