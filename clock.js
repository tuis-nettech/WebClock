function echodigit(line, value) {
  'use strict'
  var ary = [
    [' #### ','   #  ',' #### ',' #### ','#   # ','######',' #### ','######',' #### ',' #### ','      ','      #'],
    ['#    #','   #  ','#    #','#    #','#   # ','#     ','#    #','     #','#    #','#    #','  ##  ','     # '],
    ['#    #','   #  ','     #','     #','#   # ','#     ','#     ','    # ','#    #','#    #','  ##  ','    #  '],
    ['#    #','   #  ',' #### ','##### ','######','##### ','######','    # ',' #### ',' #####','      ','   #   '],
    ['#    #','   #  ','#     ','     #','    # ','     #','#    #','   #  ','#    #','     #','  ##  ','  #    '],
    ['#    #','   #  ','#     ','#    #','    # ','#    #','#    #','   #  ','#    #','#    #','  ##  ',' #     '],
    [' #### ','   #  ','######',' #### ','    # ',' #### ',' #### ','   #  ',' #### ',' #### ','      ','#      ']
  ];
  var digit = ary[line][value];
  return digit;
}

var date0string;
var date1string;
var date2string;
var date3string;
var date4string;
var date5string;
var date6string;

var time0string;
var time1string;
var time2string;
var time3string;
var time4string;
var time5string;
var time6string;

function clock() {
    'use strict'
    var now = new Date();
    var y = now.getFullYear() + '';
    var mo = now.getMonth() + 1 + '';
    var d = now.getDate() + '';
    var h = now.getHours() + '';
    var mi = now.getMinutes() + '';
    var s = now.getSeconds() + '';

    if (mo < 10)
        mo = '0' + mo;
    if (d < 10)
        d = '0' + d;
    if (h < 10)
        h = '0' + h;
    if (mi < 10)
        mi = '0' + mi;
    if (s < 10)
        s = '0' + s;

    var year = {
        'y0': y.substring(0, 1),
        'y1': y.substring(1, 2),
        'y2': y.substring(2, 3),
        'y3': y.substring(3, 4)
    };
    var monts = {
        'mo0': mo.substring(0, 1),
        'mo1': mo.substring(1, 2)
    };
    var day = {
        'd0': d.substring(0, 1),
        'd1': d.substring(1, 2)
    };
    var hour = {
        'h0': h.substring(0, 1),
        'h1': h.substring(1, 2)
    };
    var minute = {
        'mi0': mi.substring(0, 1),
        'mi1': mi.substring(1, 2)
    };
    var second = {
        's0': s.substring(0, 1),
        's1': s.substring(1, 2)
    };
    var tarr0 = [echodigit(0, hour.h0), ' ', echodigit(0, hour.h1), ' ', echodigit(0, 10), ' ', echodigit(0, minute.mi0), ' ', echodigit(0, minute.mi1), ' ', echodigit(0, 10), ' ', echodigit(0, second.s0), ' ', echodigit(0, second.s1)];
    time0string = tarr0.join('');
    var tarr1 = [echodigit(1, hour.h0), ' ', echodigit(1, hour.h1), ' ', echodigit(1, 10), ' ', echodigit(1, minute.mi0), ' ', echodigit(1, minute.mi1), ' ', echodigit(1, 10), ' ', echodigit(1, second.s0), ' ', echodigit(1, second.s1)];
    time1string = tarr1.join('');
    var tarr2 = [echodigit(2, hour.h0), ' ', echodigit(2, hour.h1), ' ', echodigit(2, 10), ' ', echodigit(2, minute.mi0), ' ', echodigit(2, minute.mi1), ' ', echodigit(2, 10), ' ', echodigit(2, second.s0), ' ', echodigit(2, second.s1)];
    time2string = tarr2.join('');
    var tarr3 = [echodigit(3, hour.h0), ' ', echodigit(3, hour.h1), ' ', echodigit(3, 10), ' ', echodigit(3, minute.mi0), ' ', echodigit(3, minute.mi1), ' ', echodigit(3, 10), ' ', echodigit(3, second.s0), ' ', echodigit(3, second.s1)];
    time3string = tarr3.join('');
    var tarr4 = [echodigit(4, hour.h0), ' ', echodigit(4, hour.h1), ' ', echodigit(4, 10), ' ', echodigit(4, minute.mi0), ' ', echodigit(4, minute.mi1), ' ', echodigit(4, 10), ' ', echodigit(4, second.s0), ' ', echodigit(4, second.s1)];
    time4string = tarr4.join('');
    var tarr5 = [echodigit(5, hour.h0), ' ', echodigit(5, hour.h1), ' ', echodigit(5, 10), ' ', echodigit(5, minute.mi0), ' ', echodigit(5, minute.mi1), ' ', echodigit(5, 10), ' ', echodigit(5, second.s0), ' ', echodigit(5, second.s1)];
    time5string = tarr5.join('');
    var tarr6 = [echodigit(6, hour.h0), ' ', echodigit(6, hour.h1), ' ', echodigit(6, 10), ' ', echodigit(6, minute.mi0), ' ', echodigit(6, minute.mi1), ' ', echodigit(6, 10), ' ', echodigit(6, second.s0), ' ', echodigit(6, second.s1)];
    time6string = tarr6.join('');
    var darr0 = [echodigit(0, year.y0), ' ', echodigit(0, year.y1), ' ', echodigit(year.y2, 0), ' ', echodigit(year.y3, 0), echodigit(0, 11), echodigit(monts.mo0, 0), ' ', echodigit(monts.mo1, 0), echodigit(11, 0), echodigit(day.d0, 0), ' ', echodigit(day.d1, 0)];
    date0string = darr0.join('');
    var darr1 = [echodigit(1, year.y0), ' ', echodigit(1, year.y1), ' ', echodigit(year.y2, 1), ' ', echodigit(year.y3, 1), echodigit(1, 11), echodigit(monts.mo0, 1), ' ', echodigit(monts.mo1, 1), echodigit(11, 1), echodigit(day.d0, 1), ' ', echodigit(day.d1, 1)];
    date1string = darr1.join('');
    var darr2 = [echodigit(2, year.y0), ' ', echodigit(2, year.y1), ' ', echodigit(year.y2, 2), ' ', echodigit(year.y3, 2), echodigit(2, 11), echodigit(monts.mo0, 2), ' ', echodigit(monts.mo1, 2), echodigit(11, 2), echodigit(day.d0, 2), ' ', echodigit(day.d1, 2)];
    date2string = darr2.join('');
    var darr3 = [echodigit(3, year.y0), ' ', echodigit(3, year.y1), ' ', echodigit(year.y2, 3), ' ', echodigit(year.y3, 3), echodigit(3, 11), echodigit(monts.mo0, 3), ' ', echodigit(monts.mo1, 3), echodigit(11, 3), echodigit(day.d0, 3), ' ', echodigit(day.d1, 3)];
    date3string = darr3.join('');
    var darr4 = [echodigit(4, year.y0), ' ', echodigit(4, year.y1), ' ', echodigit(year.y2, 4), ' ', echodigit(year.y3, 4), echodigit(4, 11), echodigit(monts.mo0, 4), ' ', echodigit(monts.mo1, 4), echodigit(11, 4), echodigit(day.d0, 4), ' ', echodigit(day.d1, 4)];
    date4string = darr4.join('');
    var darr5 = [echodigit(5, year.y0), ' ', echodigit(5, year.y1), ' ', echodigit(year.y2, 5), ' ', echodigit(year.y3, 5), echodigit(5, 11), echodigit(monts.mo0, 5), ' ', echodigit(monts.mo1, 5), echodigit(11, 5), echodigit(day.d0, 5), ' ', echodigit(day.d1, 5)];
    date5string = darr5.join('');
    var darr6 = [echodigit(6, year.y0), ' ', echodigit(6, year.y1), ' ', echodigit(year.y2, 6), ' ', echodigit(year.y3, 6), echodigit(6, 11), echodigit(monts.mo0, 6), ' ', echodigit(monts.mo1, 6), echodigit(11, 6), echodigit(day.d0, 6), ' ', echodigit(day.d1, 6)];
    date6string = darr6.join('');

    document.getElementById('time0').innerHTML = time0string;
    document.getElementById('time1').innerHTML = time1string;
    document.getElementById('time2').innerHTML = time2string;
    document.getElementById('time3').innerHTML = time3string;
    document.getElementById('time4').innerHTML = time4string;
    document.getElementById('time5').innerHTML = time5string;
    document.getElementById('time6').innerHTML = time6string;
    document.getElementById('hms').innerHTML = hour.h0 + '' + hour.h1 + '' + minute.mi0 + '' + minute.mi1 + '' + second.s0 + '' + second.s1;

    document.getElementById('date0').innerHTML = date0string;
    document.getElementById('date1').innerHTML = date1string;
    document.getElementById('date2').innerHTML = date2string;
    document.getElementById('date3').innerHTML = date3string;
    document.getElementById('date4').innerHTML = date4string;
    document.getElementById('date5').innerHTML = date5string;
    document.getElementById('date6').innerHTML = date6string;
    document.getElementById('ymd').innerHTML = y + '' + mo + '' + d;
}

function fontSize() {
    var x = (window.innerWidth) / 35;
    var y = (window.innerWidth) / 65;
    document.getElementById('time0').style.fontSize = x + 'px';
    document.getElementById('time1').style.fontSize = x + 'px';
    document.getElementById('time2').style.fontSize = x + 'px';
    document.getElementById('time3').style.fontSize = x + 'px';
    document.getElementById('time4').style.fontSize = x + 'px';
    document.getElementById('time5').style.fontSize = x + 'px';
    document.getElementById('time6').style.fontSize = x + 'px';
    document.getElementById('date0').style.fontSize = y + 'px';
    document.getElementById('date1').style.fontSize = y + 'px';
    document.getElementById('date2').style.fontSize = y + 'px';
    document.getElementById('date3').style.fontSize = y + 'px';
    document.getElementById('date4').style.fontSize = y + 'px';
    document.getElementById('date5').style.fontSize = y + 'px';
    document.getElementById('date6').style.fontSize = y + 'px';
}
setInterval(clock, 1000);
setInterval(fontSize, 10);
