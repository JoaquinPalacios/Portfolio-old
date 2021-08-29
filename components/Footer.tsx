export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <div>Copyright {new Date().getFullYear()}</div>
            <div>Github</div>
        </footer>
    );
}
 
export default Footer;