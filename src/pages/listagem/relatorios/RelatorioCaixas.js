import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Header from '../../../components/Header';
import styles from './RelatorioCaixas.module.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AlertErro } from '../../../components/Alertas';
import Loading from '../../../components/Loading';
import { Apis } from '../../../Apis';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Relatório de Pesos Dos Ultimos 7 Dias',
        },
    },
};

const RelatorioCaixas = () => {
    const [loading, setLoading] = useState(false);
    const [pesos, setPesos] = useState([]);
    const params = useParams();

    useEffect(() => {
        handlePeso();
    }, []);

    const handlePeso = async () => {
        try {
            setLoading(true);
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('@pesagem_token')}`
                }
            }

            const response = await axios.get(`${Apis.urlPesoCaixa}/${params?.caixa_id}`, requestOptions);
            setPesos(response.data.registros);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            AlertErro(error.response.data.retorno.mensagem);
        }
    }

    // Gerando as labels (por exemplo, "1", "2", ..., "22")
    const labels = pesos.map((_, index) => (index + 1).toString());

    // Gerando os dados do gráfico com base no array de pesos
    const data = {
        labels,
        datasets: [
            {
                label: 'Pesos',
                data: pesos.map(item => parseFloat(item.peso_atual)),  // Convertendo peso_atual para float
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(153, 155, 156, 0.5)',
            },
        ],
    };
    if (loading) {
        return <Loading />;
    }
    return (
        <div className={styles.view_relatorio}>
            <Header />
            <div className={styles.container_relatorio_caixas}>
                {pesos?.length > 0 &&
                    <Line options={options} data={data} className={styles.grafico} />
                }
            </div>
        </div>
    );
};

export default RelatorioCaixas;
