import Link from 'next/link'
import styles from '../styles.module.css'


function Footer(props){
    return (
        <>
            <ul>
                {props.users.map( (user) =>
                // <li key={user.id}>
                    <Link href="/user/[id].js" as={`/user/${user.id}`} key={user.id}>
                        <a className={styles.link}>{user.first_name} {user.last_name}</a>
                    </Link>
                // </li>
                )}
            </ul>
            <footer><small>@copyright ASAC</small></footer>
        </>
    );
}

export default Footer;
