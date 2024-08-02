"use client"
import { useParams } from 'next/navigation'

export default function ProfileID() {
  const params = useParams()
  return <main>Profile {params?.id} page</main>;
}
