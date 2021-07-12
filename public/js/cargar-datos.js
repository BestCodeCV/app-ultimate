let button5 = document.getElementById('button-important')

button5.addEventListener('click', () => {
            let tableBody=""
           tableBody += '<tr>';
           tableBody += '  <td>' + 123 + '</td>';
           tableBody += '  <td>' + 111 + '</td>';
           tableBody += '  <td>' + 111 + '</td>';
           tableBody += '  <td>' + 111 + '</td>';
           tableBody += '  <td>' + 111 + '</td>';
           tableBody += '  <td>' + 122 + '</td>';
           tableBody += '  <td>' + '45asdf' + '</td>';
           tableBody += '  <td>' + 42 + '</td>';
           tableBody += '</tr>';
           
           document.getElementById("tablebody").innerHTML += tableBody;
   });