import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Container } from 'react-bootstrap';

const data = [
    {
        name: 'Assignment-1',
        mark: 60,
        yv: 60,
    },
    {
        name: 'Assignment-2',
        mark: 60,
        yv: 30,
    },
    {
        name: 'Assignment-3',
        mark: 58,
        yv: 25,
    },
    {
        name: 'Assignment-4',
        mark: 60,
        yv: 20,
    },
    {
        name: 'Assignment-5',
        mark: 56,
        yv: 15,
    },
    {
        name: 'Assignment-6',
        mark: 60,
        yv: 10,
    },
    {
        name: 'Assignment-7',
        mark: 60,
        yv: 5,
    },
];

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#008000', '#000080', '#800000', '#808000'];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const dataItem = payload[0].payload;
        return (
            <div className="custom-tooltip">
                <p className="label">{`${dataItem.name} (${dataItem.mark})`}</p>
            </div>
        );
    }

    return null;
};

const Statistics = () => (
    <div>
        <h2 className='text-center mt-3'>Assignments Statistics</h2>
        <Container className="d-flex justify-content-center align-items-center h-100">
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="yv"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label={({ name, mark }) => `${name} (${mark})`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </Container>
    </div>
);

export default Statistics;
