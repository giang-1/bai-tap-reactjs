function z(kien) {
    switch (kien.value) {
        case '1':
            let q = document.getElementById('textvalue');
            q.value += "1";
            break;
        case '2':
            let w = document.getElementById('textvalue');
            w.value += '2';
            break;
        case '3':
            let e = document.getElementById('textvalue');
            e.value += '3';
            break;
        case '4':
            let r = document.getElementById('textvalue');
            r.value += '4';
            break;
        case '5':
            let t = document.getElementById('textvalue');
            t.value += '5';
            break;
        case '6':
            let y = document.getElementById('textvalue');
            y.value += '6';
            break;
        case '7':
            let u = document.getElementById('textvalue');
            u.value += '7';
            break;
        case '8':
            let i = document.getElementById('textvalue');
            i.value += '8';
            break;
        case '9':
            let o = document.getElementById('textvalue');
            o.value += '9';
            break;
        case '0':
            let p = document.getElementById('textvalue');
            p.value += '0';
            break;
        case '+':
            let a = document.getElementById('textvalue');
            a.value += '+';
            break;
        case '-':
            let s = document.getElementById('textvalue');
            s.value += '-';
            break;
        case '*':
            let d = document.getElementById('textvalue');
            d.value += '*';
        case '/':
            let f = document.getElementById('textvalue');
            f.value += '/';
            break;
        case ',':
            let g = document.getElementById('textvalue');
            g.value += ',';
            break;
        case '=':
            let h = document.getElementById('textvalue');
            h.value = eval(h.value);
            break;


    }
}