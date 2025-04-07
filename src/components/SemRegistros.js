import Header from './Header';
import styles from './SemRegistros.module.scss';
import img_sem_registros from '../assets/fundo.png';
import { FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
const SemRegistros = ({ setPesquisar, pesquisar }) => {
    const navigation = useNavigate();
    return (
        <div className={styles.container_sem_registros}>
            <Header setPesquisar={setPesquisar} pesquisar={pesquisar} />
            <div className={styles.area_sem_registros}>
                <img src={img_sem_registros} alt="sem registros" />
            </div>
            <button title='Adicionar nova caixa' className={styles.btn_add_caixa} onClick={() => navigation('/caixa/create')}>
                <FiPlus />
            </button>
        </div>
    );
}
export default SemRegistros;