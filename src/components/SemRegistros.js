import Header from './Header';
import styles from './SemRegistros.module.scss';
import img_sem_registros from '../assets/fundo.png';
const SemRegistros = ({ setPesquisar, pesquisar }) => {
    return (
        <div className={styles.container_sem_registros}>
            <Header setPesquisar={setPesquisar} pesquisar={pesquisar} />
            <div className={styles.area_sem_registros}>
                <img src={img_sem_registros} alt="sem registros" />
            </div>
        </div>
    );
}
export default SemRegistros;