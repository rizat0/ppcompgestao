const ctx = document.getElementById('graficoDefesas').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [
            {
                label: 'Desmarcações',
                data: [5, 2, 1, 3, 4, 2],
                backgroundColor: '#2d5c46'
            },
            {
                label: 'Aprovações',
                data: [17, 16, 18, 15, 14, 17],
                backgroundColor: '#69b18e'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#000'
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#000' }
            },
            y: {
                beginAtZero: true,
                ticks: { color: '#000' }
            }
        }
    }
});
