const convertToData = (selection, arrData,arrKeys) => {
    selection.each((index, val) => {
        let splitThem = $(val).text().split(':')
        arrKeys.push(splitThem[0])
        arrData.push(splitThem[1])
    })
    return arrData + arrKeys
}
console.log(Chart.defaults.global.options)



$(() => {
    let statsData = []
    let statsList = $(".info-stats > ul > li")
    let statsLabel = []
    let damageData = []
    let damageList = $(".info-damages > ul > li")
    convertToData(statsList, statsData, statsLabel)
    console.log(statsData)
    console.log(statsLabel)

    const ctx = $('#myChart')
    let myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: statsLabel,
            datasets: [{
                fontFamily: "'Balsamiq Sans', cursive",
                label: 'STATS',
                data: statsData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            legend: {
                labels: {
                    display: false,
                    fontSize: 12
                }
            },
            title: {
                display: true,
                text: "Pokemon Stats",
                fontFamily: "'Balsamiq Sans', cursive",
                fontSize: 20,
            },
            scale: {
                angleLines:{display:false},
                ticks:{
                    beginAtZero:true
                }
            },
            tooltips: {
                callbacks:{
                    label: (tooltipItem, data) => {
                        var label = data.labels[tooltipItem.index] || '';
                        console.log(data.labels[tooltipItem.index])
                        console.log(tooltipItem)
                        console.log(label)
                        if (label) {
                            label += ': ';
                        }
                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                        return label;
                    }
                },
                mode: 'label',
                backgroundColor: "orange"
            }
        }
    });
})