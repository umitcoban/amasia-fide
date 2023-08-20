import { Line } from 'react-chartjs-2';


export interface Props {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
    }[];
}

const BasicChart: React.FC<Props> = (props: Props) => {
    const options = {
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Test',
            },
        },
    };

    return (
        <div className='flex justify-center items-center flex-nowrap mx-auto w-full h-full overflow-hidden'>
            <div className='w-full lg:w-3/4 xl:w-1/2'>
                <Line data={props} options={options} />
            </div>
        </div>
    );
};

export default BasicChart;
