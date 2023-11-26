import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export interface NotFoundProps {
    
}
 
const NotFound: React.FC<NotFoundProps> = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    })
    return (
        <div className='text-center mt-5 pt-5'>
            <h1 className='mt-5 py-5'>Joa Palacios Portfolio</h1>
            <h2 className='my-2'>Ooooops...</h2>
            <h2 className='mt-2 mb-3'>That page cannot be found</h2>
            <p className='mb-5 pb-5'>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;