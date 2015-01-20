/**
 * Created by Vencislav on 14.10.2014 г..
 */
function but(btn) {
    var screen = document.getElementById('screen').value;
    if('='==btn) {
        screen = eval(screen);
    }
    else if('C'==btn) {
        screen = '0';
    }
    else {
        if(0==screen) {
            screen =btn;
        }
        else {
            screen += btn;
        }
    }
    document.getElementById('screen').value=screen;
}
