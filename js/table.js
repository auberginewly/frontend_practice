// 新增数据函数
function addRow() {
    var table = document.getElementById("table");
    // console.log(table);
    // 获取表格的行数 插入位置
    var rowCount = table.rows.length;
    // console.log(rowCount);
    // 插入行节点
    var row = table.insertRow(rowCount);
    //console.log(row);
    // 插入列节点对象
    var nameCol = row.insertCell(0);
    var telCol = row.insertCell(1);
    var actionCol = row.insertCell(2);

    // console.log(row);

    // 修改节点文本内容
    nameCol.innerHTML = '未命名';
    telCol.innerHTML = '无联系方式';
    actionCol.innerHTML = ' <button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';

}

// 删除数据函数
function deleteRow(btn) {
    // 获取父节点 当前行
    var row = btn.parentNode.parentNode;
    // console.log(row);
    // 删除当前行
    row.parentNode.removeChild(row);
} 

// 编辑数据函数
function editRow(btn) {
    // 获取父节点 当前行
    var row = btn.parentNode.parentNode;
    // console.log(row);
    // 获取当前行的单元格
    var nameCol = row.cells[0];
    var telCol = row.cells[1];
    // console.log(nameCol);

    var inputName = prompt("请输入姓名: ");
    var inputTel = prompt("请输入联系方式: ");
    // 修改单元格内容
    nameCol.innerHTML = inputName;
    telCol.innerHTML = inputTel;
    // nameCol.innerHTML = '<input type="text" value="' + nameCol.innerHTML + '">';
    // telCol.innerHTML = '<input type="text" value="' + telCol.innerHTML + '">';
}