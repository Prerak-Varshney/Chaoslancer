import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {

    

    return (
        <div className="w-full h-18 flex items-center justify-between px-20">
            <h1 className={`font-semibold text-3xl`}>Chaoslancer</h1>
            <div>
            <SignedOut>
                <div className='bg-zinc-700 rounded-md px-4 py-1 transition-all duration-300 hover:bg-zinc-600'>
                    <SignInButton />
                </div>
            </SignedOut>
            <SignedIn>
                <UserButton 
                    appearance={{
                        elements: {
                            avatarBox: {
                                width: 40,
                                height: 40
                            }
                        }
                    }}
                />
            </SignedIn>
            </div>
        </div>
    )
}

export default Navbar;