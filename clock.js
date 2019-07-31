function echodigit(value, line) {
  'use strict'
  var ary = [
    [
    ' #### ',
    '#    #',
    '#    #',
    '#    #',
    '#    #',
    '#    #',
    ' #### '],
    [
    '    # ',
    '    # ',
    '    # ',
    '    # ',
    '    # ',
    '    # ',
    '    # '
    ],
    [
    ' #### ',
    '#    #',
    '     #',
    ' #### ',
    '#     ',
    '#     ',
    '######'
    ],
    [
    ' #### ',
    '#    #',
    '     #',
    '##### ',
    '     #',
    '#    #',
    ' #### '
    ],
    [
    '#   # ',
    '#   # ',
    '#   # ',
    '######',
    '    # ',
    '    # ',
    '    # '
    ],
    [
    '######',
    '#     ',
    '#     ',
    '##### ',
    '     #',
    '#    #',
    ' #### '
    ],
    [
    ' #### ',
    '#    #',
    '#     ',
    '######',
    '#    #',
    '#    #',
    ' #### '
    ],
    [
    '######',
    '     #',
    '    # ',
    '    # ',
    '   #  ',
    '   #  ',
    '   #  '
    ],
    [
    ' #### ',
    '#    #',
    '#    #',
    ' #### ',
    '#    #',
    '#    #',
    ' #### '
    ],
    [
    ' #### ',
    '#    #',
    '#    #',
    ' #####',
    '     #',
    '#    #',
    ' #### '
    ],
    [
    '      ',
    '  ##  ',
    '  ##  ',
    '      ',
    '  ##  ',
    '  ##  ',
    '      '
    ]
  ]
  var digit = ary[value][line];
  return digit;
}
function clock()
{
  'use strict'
  var now = new Date();
  var y = now.getFullYear() + '';
  var mo = now.getMonth() + 1 + '';
  var d = now.getDate() + '';
  var h = now.getHours() + '';
  var mi = now.getMinutes() + '';
  var s = now.getSeconds() + '';

  if (mo < 10) mo = '0' + mo;
  if (d < 10) d = '0' + d;
  if (h < 10) h = '0' + h;
  if (mi < 10) mi = '0' + mi;
  if (s < 10) s = '0' + s;

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
  var darr0 = [
    echodigit(year.y0, 0),
    ' ',
    echodigit(year.y1, 0),
    ' ',
    echodigit(year.y2, 0),
    ' ',
    echodigit(year.y3, 0),
    ' ',
    echodigit(monts.mo0, 0),
    ' ',
    echodigit(monts.mo1, 0),
    ' ',
    echodigit(day.d0, 0),
    ' ',
    echodigit(day.d1, 0)
  ];
  var date0string = darr0.join('');
  var darr1 = [
    echodigit(year.y0, 1),
    ' ',
    echodigit(year.y1, 1),
    ' ',
    echodigit(year.y2, 1),
    ' ',
    echodigit(year.y3, 1),
    ' ',
    echodigit(monts.mo0, 1),
    ' ',
    echodigit(monts.mo1, 1),
    ' ',
    echodigit(day.d0, 1),
    ' ',
    echodigit(day.d1, 1)
  ];
  var date1string = darr1.join('');
  var darr2 = [
    echodigit(year.y0, 2),
    ' ',
    echodigit(year.y1, 2),
    ' ',
    echodigit(year.y2, 2),
    ' ',
    echodigit(year.y3, 2),
    ' ',
    echodigit(monts.mo0, 2),
    ' ',
    echodigit(monts.mo1, 2),
    ' ',
    echodigit(day.d0, 2),
    ' ',
    echodigit(day.d1, 2)
  ];
  var date2string = darr2.join('');
  var darr3 = [
    echodigit(year.y0, 3),
    ' ',
    echodigit(year.y1, 3),
    ' ',
    echodigit(year.y2, 3),
    ' ',
    echodigit(year.y3, 3),
    ' ',
    echodigit(monts.mo0, 3),
    ' ',
    echodigit(monts.mo1, 3),
    ' ',
    echodigit(day.d0, 3),
    ' ',
    echodigit(day.d1, 3)
  ];
  var date3string = darr3.join('');
  var darr4 = [
    echodigit(year.y0, 4),
    ' ',
    echodigit(year.y1, 4),
    ' ',
    echodigit(year.y2, 4),
    ' ',
    echodigit(year.y3, 4),
    ' ',
    echodigit(monts.mo0, 4),
    ' ',
    echodigit(monts.mo1, 4),
    ' ',
    echodigit(day.d0, 4),
    ' ',
    echodigit(day.d1, 4)
  ];
  var date4string = darr4.join('');
  var darr5 = [
    echodigit(year.y0, 5),
    ' ',
    echodigit(year.y1, 5),
    ' ',
    echodigit(year.y2, 5),
    ' ',
    echodigit(year.y3, 5),
    ' ',
    echodigit(monts.mo0, 5),
    ' ',
    echodigit(monts.mo1, 5),
    ' ',
    echodigit(day.d0, 5),
    ' ',
    echodigit(day.d1, 5)
  ];
  var date5string = darr5.join('');
  var darr6 = [
    echodigit(year.y0, 6),
    ' ',
    echodigit(year.y1, 6),
    ' ',
    echodigit(year.y2, 6),
    ' ',
    echodigit(year.y3, 6),
    ' ',
    echodigit(monts.mo0, 6),
    ' ',
    echodigit(monts.mo1, 6),
    ' ',
    echodigit(day.d0, 6),
    ' ',
    echodigit(day.d1, 6)
  ];
  var date6string = darr6.join('');
  var tarr0 = [
    echodigit(hour.h0, 0),
    ' ',
    echodigit(hour.h1, 0),
    ' ',
    echodigit(10, 0),
    ' ',
    echodigit(minute.mi0, 0),
    ' ',
    echodigit(minute.mi1, 0),
    ' ',
    echodigit(10, 0),
    ' ',
    echodigit(second.s0, 0),
    ' ',
    echodigit(second.s1, 0)
  ];
  var time0string = tarr0.join('');
  var tarr1 = [
    echodigit(hour.h0, 1),
    ' ',
    echodigit(hour.h1, 1),
    ' ',
    echodigit(10, 1),
    ' ',
    echodigit(minute.mi0, 1),
    ' ',
    echodigit(minute.mi1, 1),
    ' ',
    echodigit(10, 1),
    ' ',
    echodigit(second.s0, 1),
    ' ',
    echodigit(second.s1, 1)
  ];
  var time1string = tarr1.join('');
  var tarr2 = [
    echodigit(hour.h0, 2),
    ' ',
    echodigit(hour.h1, 2),
    ' ',
    echodigit(10, 2),
    ' ',
    echodigit(minute.mi0, 2),
    ' ',
    echodigit(minute.mi1, 2),
    ' ',
    echodigit(10, 2),
    ' ',
    echodigit(second.s0, 2),
    ' ',
    echodigit(second.s1, 2)
  ];
  var time2string = tarr2.join('');
  var tarr3 = [
    echodigit(hour.h0, 3),
    ' ',
    echodigit(hour.h1, 3),
    ' ',
    echodigit(10, 3),
    ' ',
    echodigit(minute.mi0, 3),
    ' ',
    echodigit(minute.mi1, 3),
    ' ',
    echodigit(10, 3),
    ' ',
    echodigit(second.s0, 3),
    ' ',
    echodigit(second.s1, 3)
  ];
  var time3string = tarr3.join('');
  var tarr4 = [
    echodigit(hour.h0, 4),
    ' ',
    echodigit(hour.h1, 4),
    ' ',
    echodigit(10, 4),
    ' ',
    echodigit(minute.mi0, 4),
    ' ',
    echodigit(minute.mi1, 4),
    ' ',
    echodigit(10, 4),
    ' ',
    echodigit(second.s0, 4),
    ' ',
    echodigit(second.s1, 4)
  ];
  var time4string = tarr4.join('');
  var tarr5 = [
    echodigit(hour.h0, 5),
    ' ',
    echodigit(hour.h1, 5),
    ' ',
    echodigit(10, 5),
    ' ',
    echodigit(minute.mi0, 5),
    ' ',
    echodigit(minute.mi1, 5),
    ' ',
    echodigit(10, 5),
    ' ',
    echodigit(second.s0, 5),
    ' ',
    echodigit(second.s1, 5)
  ];
  var time5string = tarr5.join('');
  var tarr6 = [
    echodigit(hour.h0, 6),
    ' ',
    echodigit(hour.h1, 6),
    ' ',
    echodigit(10, 6),
    ' ',
    echodigit(minute.mi0, 6),
    ' ',
    echodigit(minute.mi1, 6),
    ' ',
    echodigit(10, 6),
    ' ',
    echodigit(second.s0, 6),
    ' ',
    echodigit(second.s1, 6)
  ];
  var time6string = tarr6.join('');
  document.getElementById('date0').innerHTML = date0string;
  document.getElementById('date1').innerHTML = date1string;
  document.getElementById('date2').innerHTML = date2string;
  document.getElementById('date3').innerHTML = date3string;
  document.getElementById('date4').innerHTML = date4string;
  document.getElementById('date5').innerHTML = date5string;
  document.getElementById('date6').innerHTML = date6string;
  document.getElementById('time0').innerHTML = time0string;
  document.getElementById('time1').innerHTML = time1string;
  document.getElementById('time2').innerHTML = time2string;
  document.getElementById('time3').innerHTML = time3string;
  document.getElementById('time4').innerHTML = time4string;
  document.getElementById('time5').innerHTML = time5string;
  document.getElementById('time6').innerHTML = time6string;
  document.getElementById('ymd').innerHTML = y + '' + mo + '' + d;
  document.getElementById('hms').innerHTML = hour.h0 + '' + hour.h1 + '' + minute.mi0 + '' + minute.mi1 + '' + second.s0 + '' + second.s1;
}

  function fontSize(){
  var x = (window.innerWidth) / 6 ;
  document.getElementById('date0').style.fontSize = x + '%';
  document.getElementById('date1').style.fontSize = x + '%';
  document.getElementById('date2').style.fontSize = x + '%';
  document.getElementById('date3').style.fontSize = x + '%';
  document.getElementById('date4').style.fontSize = x + '%';
  document.getElementById('date5').style.fontSize = x + '%';
  document.getElementById('date6').style.fontSize = x + '%';
  document.getElementById('time0').style.fontSize = x + '%';
  document.getElementById('time1').style.fontSize = x + '%';
  document.getElementById('time2').style.fontSize = x + '%';
  document.getElementById('time3').style.fontSize = x + '%';
  document.getElementById('time4').style.fontSize = x + '%';
  document.getElementById('time5').style.fontSize = x + '%';
  document.getElementById('time6').style.fontSize = x + '%';
  }

setInterval(clock, 1000);
setInterval(fontSize, 10);
