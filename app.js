var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
           type: 'line',
           data: {
               
               labels: ['Remaming Capacity','Used Energy'],
               datasets: [{
                   label: 'Voltage',
                   data: [99,1],
                   backgroundColor: [
               
                       '#30aadd',
                       '#D3D3D3'
                       
                   ],
               borderColor: 'rgb(255,99,132)',
                  
               }]
           },
          options:{}
       });

       