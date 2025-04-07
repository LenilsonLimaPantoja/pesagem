import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { TbUserHexagon } from "react-icons/tb";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Header = () => {
    const navigation = useNavigate();

    const handleSair = () => {
        localStorage.clear();
        navigation('/login', { replace: true });
    }
    return (
        <div className={styles.container_header}>
            <div className={styles.info_user}>
                <button onClick={() => navigation('/apicultor/alterar')}>
                    <TbUserHexagon className={styles.icone_user} />
                    <HiOutlinePencilAlt className={styles.icone_editar} />
                </button>
                <span>{localStorage.getItem('@pesagem_nome')}</span>
            </div>
            <div className={styles.btns_menu}>
                <button onClick={() => navigation('/home')}>Home</button>
                <button onClick={handleSair}>Sair</button>
            </div>
        </div>
    )
}
export default Header;