const insert = document.getElementById("insert");

window.addEventListener("keydown",(e)=>{
    insert.innerHTML = `
        <div class = "color">
        <table border="2">
        <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
        </tr>
        <tr>
        <td>${e.key === " " ? "space": e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
        </tr>
        </div>

    `

})