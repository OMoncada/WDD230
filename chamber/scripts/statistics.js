// Sample data for the pie chart and bar graph
document.addEventListener('DOMContentLoaded', function () {
    // JavaScript code for creating the pie chart and bar graph goes here

    const pieChartData = {
        labels: ['Manufacturing', 'Services', 'Retail', 'Technology', 'Finance'],
        datasets: [{
            label: 'Business Distribution',
            data: [20, 30, 15, 10, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderWidth: 1
        }]
    };

    const barGraphData = {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Revenue (in millions)',
            data: [15, 18, 20, 22, 25, 28],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderWidth: 1
        }]
    };

    // Create the pie chart
    var pieChart = new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: pieChartData
    });

    // Create the bar graph
    var barGraph = new Chart(document.getElementById('barGraph'), {
        type: 'bar',
        data: barGraphData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});