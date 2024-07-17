import logoImg from '../../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export function Header(){
    return(
        <header className="w-full h-28 px-2 text-white bg-bgHeader ">
            <div className='max-w-screen-xl mx-auto flex justify-center items-center h-28 justify-between'>
                <div className='flex justify-center items-center'>

                    <Link href="/">
                        <Image
                            src={logoImg}
                            alt='Logo do site dalygames'
                            quality={100}
                            priority={true}
                            className='w-full hover:scale-105'
                        />
                    </Link>

                </div>

                <div className='justify-center items-center space-x-4'>
                    <Link href="/">
                        Games 
                    </Link>

                    <Link href="/profile">
                        Perfil
                    </Link>
                </div>

            </div>
        </header>
    )
}