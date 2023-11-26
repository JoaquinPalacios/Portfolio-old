import Link, { LinkProps } from "next/link";

export interface AppLinkProps extends LinkProps {
    label: string
}
 
const AppLink: React.FC<AppLinkProps> = ({ href, label}) => {
    return (
        <Link href={href}>
            <a className='green'>{label}</a>
        </Link>
    );
}
 
export default AppLink;