"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Profile() {
  const router = useRouter()
  return (
    <div>
      <h1>Profile List</h1>
      <div>
        <Link href='/profile/1'>Profile 1</Link>
        <Link href='/profile/2'>Profile 2</Link>
        <Link href='/profile/3'>Profile 3</Link>
        <Link 
          href={{
            pathname: '/profile/3',
            query: {
              userName: "Sambert"
            },
          }}>
            <div>A big square I got some text</div>
          </Link>
        <a href="/profile/1"></a>
      </div>
    </div>
  );
}
