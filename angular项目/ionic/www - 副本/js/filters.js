angular.module('homeApp')
.filter('datetime',function($filter){
  return function(v,format){
    if(!v||v.length===0){
      return '';
    }else{
      var dt = typeof(v) =='object' ? v : new Date((v+'').replace(/-/g,'/') + ':00');
      return $filter('date')(dt,format);
    }
  };
})
.filter('weekDay',function(){
  var weekDay = ['日','一','二','三','四','五','六'];
  return function(v){
    if(!v||v.length===0){
      return '';
    }else{
      var dt = typeof(v) =='object' ? v : new Date((v+'').replace(/-/g,'/') + ' 00:00:00');
      return '星期'+weekDay[dt.getDay()];
    }
  };
})
.filter('timeWithDateName',function($filter){
  return function(v){
    if(!v||v.length===0){
      return '';
    }else{
      var dt = typeof(v) =='object' ? v : new Date((v+'').replace(/-/g,'/') + ':00');
      var target = new Date();
      var today = target.getTime();
      var secondPerDay = 1000*60*60*24;
      var dateStr = '';
      if(dt.toDateString() == target.toDateString()){
        dateStr = '今天';
      }

      target.setTime(today - secondPerDay);
      if(dt.toDateString() == target.toDateString()){
        dateStr =  '昨天';
      }

      target.setTime(today - secondPerDay*2);
      if(dt.toDateString() == target.toDateString()){
        dateStr =  '前天';
      }
      return dateStr + ' ' + $filter('date')(dt,'HH:mm');
    }
  };
})
.filter('replaceNull',function(){
  return function(v){
    return v&&v.length>0?v:'--';
  };
})
;
