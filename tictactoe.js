var body = document.body;
var table = document.createElement('table');
var cell = [];
var turn = 'O';
var turnCnt = 0;
var result = document.createElement('div');
result.style.textAlign = "center";

var ttt = function (e) {
    var nRow = e.target.parentNode.rowIndex;
    var nCol = e.target.cellIndex;

    if (cell[nRow][nCol].textContent === '') {
        cell[nRow][nCol].textContent = turn;
        var hasLine = false;
        //가로줄 완성
        if (cell[nRow][0].textContent === turn &&
            cell[nRow][1].textContent === turn &&
            cell[nRow][2].textContent === turn) {
            hasLine = true;
        }
        //세로줄 완성
        else if (cell[0][nCol].textContent === turn &&
            cell[1][nCol].textContent === turn &&
            cell[2][nCol].textContent === turn) {
            hasLine = true;
        }
        //좌상우하 대각선 완성
        else if (cell[0][0].textContent === turn &&
            cell[1][1].textContent === turn &&
            cell[2][2].textContent === turn) {
            hasLine = true;
        }
        //우상좌하 대각선 완성
        else if (cell[0][2].textContent === turn &&
            cell[1][1].textContent === turn &&
            cell[2][0].textContent === turn) {
            hasLine = true;
        }
        //줄이 만들어졌을 경우
        if (hasLine) {
            result.textContent = "Congratulation! " + turn + " Wins!";
            body.append(result);
            init();
        } else {
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            } turnCnt++;

            if (turnCnt === 9) {
                result.textContent = "Draw!";
                body.append(result);
                init();
            }
        }
    }
}
//승패가 갈리거나, 모든 칸이 꽉 차면 테이블 초기화
var init = function () {
    turn = 'O';
    turnCnt = 0;
    cell.forEach(function (row) {
        row.forEach(function (col) {
            col.textContent = '';
        });
    });
}
//테이블 생성
for (var i = 0; i < 3; i++) {
    var row = document.createElement('tr');
    cell.push([]);
    for (var j = 0; j < 3; j++) {
        var col = document.createElement('td');
        col.addEventListener('click', ttt);
        cell[i].push(col);
        row.appendChild(col);
    }
    table.appendChild(row);
}
body.appendChild(table);