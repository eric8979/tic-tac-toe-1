var player = 0;

const box = document.getElementsByClassName('grid-item');

const playHere = (clickedBox) => {
    if (clickedBox.innerHTML !== ''){
        return
    } else {
        if (player === 0){
            clickedBox.innerHTML = "O";
            player = 1; 
        } else if (player === 1) {
            clickedBox.innerHTML = "X";
            player = 0;
        }
    }

    for (let j=0; j<4; j++){
        let temp = 0;
        for (let i=0; i<4; i++) {
            if (box[i+(4*j)].innerHTML == 'O'){
                temp++;
            } else if (box[i+(4*j)].innerHTML == 'X') {
                temp--;
            }
        }
        if (temp == 4) alert("'O' won!!");
        else if (temp == -4) alert("'X' won!!");
    }
    for (let j=0; j<4; j++) {
        let temp =0;
        for (let i=0; i<4; i++) {
            if (box[(i*4) + j].innerHTML == 'O') {
                temp++;
            } else if (box[(i*4) + j].innerHTML == 'X') {
                temp--;
            }
        }
        if (temp == 4) alert("'O' won!!");
        else if (temp == -4) alert("'X' won!!");
    }
    for (let i=0; i<4; i++) {
        if (box[i * 5].innerHTML === 'O'){
            if (i === 3) {
                alert("'O' won!!");
                break;
            }
            continue;
        } else if (box[i*5].innerHTML === 'X'){
            break;
        }
    }
    for (let i=0; i<4; i++) {
        if (box[i * 5].innerHTML === 'X'){
            if (i === 3) {
                alert("'X' won!!");
                break;
            }
            continue;
        } else if (box[i*5].innerHTML === 'O') {
            break;
        }
    }
    for (let i=0; i<4; i++) {
        if (box[3 + (3*i)].innerHTML === 'O'){
            if (i === 3) {
                alert("'O' won!!");
                break;
            }
            continue;
        } else if (box[3 + (3*i)].innerHTML === 'X'){
            break;
        }
    }
    for (let i=0; i<4; i++) {
        if (box[3 + (3*i)].innerHTML === 'X'){
            if (i === 3) {
                alert("'X' won!!");
                break;
            }
            continue;
        } else if (box[3 + (3*i)].innerHTML === 'O'){
            break;
        }
    }
}
