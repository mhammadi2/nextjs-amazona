// import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import { ShoppingCartIcon} from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/signin' className='flex items-center header-button'>
          {/* <UserIcon className='h-8 w-8' /> */}
          {/* <span className='font-bold'>Sign in</span>
           */}
           Hello, Sign In
        </Link>

        <Link href='/cart' className='header-button'>
          {/* <ShoppingCartIcon className='h-8 w-8' />
          <span className='font-bold'>Cart</span> */}
          <div className='flex items-end'>
            <ShoppingCartIcon className='h-8 w-8' />
            Cart

          </div>

        </Link>
      </nav>
    </div>
  )
}