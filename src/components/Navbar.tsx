import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {

    

    return (
        <div className="w-full h-18 flex items-center justify-between px-20">
            <h1 className={`font-semibold text-3xl text-teal-500`}>Chaoslancer</h1>
            <div className={`hidden lg:flex items-center lg:space-x-16 font-normal`}>
                {
                    [
                        {link: '#', text: 'Solutions'}, 
                        {link: '/developers', text: 'Developers'}, 
                        {link: '#', text: 'Company'}, 
                        {link: '#', text: 'Hire'}
                    ].map((item, index) => (
                        <a key={index} href={item.link} className={`hover:text-teal-500 transition-all duration-300`}>{item.text}</a>
                    ))
                }

            </div>

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
                                    width: 35,
                                    height: 35
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