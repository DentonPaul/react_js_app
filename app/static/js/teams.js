// Defining async function
function get_teams() {
    
    // const data = '[{"school":"Illinois","mascot":"Fighting Illini","color":"#f77329","alt_color":"#fa6300"},{"school": "Indiana","mascot":"Hoosiers","color":"#7D110C","alt_color":"#eeedeb"},{"school":"Iowa","mascot":"Hawkeyes","color":"#000000","alt_color":"#ffe100"},{"school":"Maryland","mascot":"Terrapins","color":"#D5002B","alt_color":"#ffcd00"},{"school":"Michigan","mascot":"Wolverines","color":"#00274c","alt_color":"#00274c"},{"school":"Michigan State","mascot":"Spartans","color":"#18453B","alt_color":"#ffffff"},{"school":"Minnesota","mascot":"Golden Gophers","color":"#981a31","alt_color":"#981a31"},{"school":"Nebraska","mascot":"Cornhuskers","color":"#F20017","alt_color":"#f5f1e7"},{"school":"Northwestern","mascot":"Wildcats","color":"#372286","alt_color":"#d6cac1"},{"school":"Ohio State","mascot":"Buckeyes","color":"#DE3121","alt_color":"#666666"},{"school":"Penn State","mascot":"Nittany Lions","color":"#00265D","alt_color":"#002e5c"},{"school":"Purdue","mascot":"Boilermakers","color":"#B89D29","alt_color":"#a4a9ad"},{"school":"Rutgers","mascot":"Scarlet Knights","color":"#d21034","alt_color":"#ffffff"}, {"school": "Wisconsin","mascot":"Badgers","color":"#A00001","alt_color":"#f7f7f7"}]';
    const data = '[{"school":"Illinois","mascot":"Fighting Illini","color":"#f77329","alt_color":"#fa6300","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/356.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/356.png"},{"school":"Indiana","mascot":"Hoosiers","color":"#7D110C","alt_color":"#eeedeb","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/84.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/84.png"},{"school":"Iowa","mascot":"Hawkeyes","color":"#000000","alt_color":"#ffe100","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/2294.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/2294.png"},{"school":"Maryland","mascot":"Terrapins","color":"#D5002B","alt_color":"#ffcd00","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/120.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/120.png"},{"school":"Michigan","mascot":"Wolverines","color":"#00274c","alt_color":"#00274c","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/130.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/130.png"},{"school":"Michigan State","mascot":"Spartans","color":"#18453B","alt_color":"#ffffff","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/127.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/127.png"},{"school":"Minnesota","mascot":"Golden Gophers","color":"#981a31","alt_color":"#981a31","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/135.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/135.png"},{"school":"Nebraska","mascot":"Cornhuskers","color":"#F20017","alt_color":"#f5f1e7","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/158.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/158.png"},{"school":"Northwestern","mascot":"Wildcats","color":"#372286","alt_color":"#d6cac1","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/77.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/77.png"},{"school":"Ohio State","mascot":"Buckeyes","color":"#DE3121","alt_color":"#666666","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/194.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/194.png"},{"school":"Penn State","mascot":"Nittany Lions","color":"#00265D","alt_color":"#002e5c","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/213.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/213.png"},{"school":"Purdue","mascot":"Boilermakers","color":"#B89D29","alt_color":"#a4a9ad","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/2509.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/2509.png"},{"school":"Rutgers","mascot":"Scarlet Knights","color":"#d21034","alt_color":"#ffffff","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/164.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/164.png"},{"school":"Wisconsin","mascot":"Badgers","color":"#A00001","alt_color":"#f7f7f7","logo_1":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500\\/275.png","logo_2":"http:\\/\\/a.espncdn.com\\/i\\/teamlogos\\/ncaa\\/500-dark\\/275.png"}]'
    const obj = JSON.parse(data);
    console.log(obj)
    show(obj);

}
// Calling that async function
get_teams();
  
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>school</th>
          <th>mascot</th>
          <th>color</th>
          <th>alt_color</th>
          <th>logo 1</th>
          <th>logo 2</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
        <td>${r.school}</td>
        <td>${r.mascot}</td>        
        <td style="background-color: ${r.color}; width=100"></td>          
        <td style="background-color: ${r.alt_color}; width=100"></td>      
        <td><img src="${r.logo_1}" alt="" width=100 height=100></td>
        <td><img src="${r.logo_2}" alt="" width=100 height=100></td>
        </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("teams").innerHTML = tab;
}