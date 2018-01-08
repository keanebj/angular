angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('addfamily.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u6DFB\u52A0\u5BB6\u4EBA</ion-nav-title>\n  <ion-nav-buttons side="secondary">\n      <button class="button button-stable" ng-if="familyUserId==null" ng-click="save()">\n       \u786E\u5B9A\n      </button>\n    <button class="button button-stable" ng-if="familyUserId>0" ng-click="updatefamily()">\n       \u7F16\u8F91\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="addfamily">\n      <div class="modifyuserinfo">\n        <div class="modifyuserinfo-info">\n          <div class="modifyuserinfo-info-headpic" ngf-select="selectFiles($files)" ngf-accept="\'image/*\'">\n            <div class="modifyuserinfo-headpic-text">\u81EA\u5B9A\u4E49\u5934\u50CF</div>\n            <!-- {{familyUserId}} -->\n            <div class="modifyuserinfo-headpic-img">\n            <img ngf-src="user.headerImage?user.headerImage+\'-suishi200\':\'./img/myhome-userimg.png\'" alt="">\n            </div>\n            <span><i class="icon ion-ios-arrow-right"></i></span>\n          </div>\n          <div class="modifyuserinfo-info-name">\n            <div class="modifyuserinfo-headpic-name-text">\u59D3\u540D</div>\n            <div class="modifyuserinfo-headpic-username-text"><input type="text" ng-model="data.name" placeholder="\u8BF7\u8F93\u5165\u540D\u5B57" id=""></div>\n            <span><i class="icon ion-ios-arrow-right"></i></span>\n          </div>\n          <div class="modifyuserinfo-info-name" ng-click="showFamilySex(1)">\n            <div class="modifyuserinfo-headpic-name-text">\u6027\u522B</div>\n            <div class="modifyuserinfo-headpic-username-text">{{SexValue}}</div>\n            <span><i class="icon ion-ios-arrow-right"></i></span>\n          </div>\n          <div class="modifyuserinfo-info-name" ng-model="data.birth" mobiscroll-date="dateSettings">\n            <div class="modifyuserinfo-headpic-name-text">\u8BF7\u9009\u62E9\u65E5\u671F\uFF1A</div>\n            <div class="modifyuserinfo-headpic-username-text">{{data.birth|date:\'yyyy\u5E74MM\u6708dd\u65E5\'}}</div>\n            <span><i class="icon ion-ios-arrow-right"></i></span>\n          </div>\n          <div class="modifyuserinfo-info-name" ng-click="showFamilyRrelationship(1)">\n            <div class="modifyuserinfo-headpic-name-text">\u5BB6\u4EBA\u5173\u7CFB</div>\n            <div class="modifyuserinfo-headpic-username-text">{{dict.dictName}}</div>\n            <span><i class="icon ion-ios-arrow-right"></i></span>\n          </div>\n          <div class="modifyuserinfo-info-name">\n            <div class="modifyuserinfo-headpic-name-text">\u624B\u673A\u53F7</div>\n            <div class="modifyuserinfo-headpic-username-text"><input type="text" name="" ng-model="data.phone" placeholder="\u8BF7\u8F93\u5165\u5BB6\u4EBA\u624B\u673A\u53F7" id=""></div>\n            <span></span>\n          </div>\n        </div>\n      </div>\n  </ion-content>\n</ion-view>\n\n');
$templateCache.put('appointment.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>{{title}}</ion-nav-title>\n  <ion-content class="telephonereservation">\n  <ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0" on-refresh="doRefresh()"></ion-refresher>\n    <div class="telephonereservation-list" ng-repeat="x in listData.pageList"\n      ng-class="{\'telephonereservation-disabled\':x.enableSchedule!=\'1\' || x.scheduledNbr==x.maxScheduleNbr}">\n      <div class="telephonereservation-list-title">\n        <div class="telephonereservation-list-title-date">\n          <p class="telephonereservation-list-title-time">{{x.beginTime}}~{{x.endTime}}</p>\n          <p class="telephonereservation-list-title-week" ng-bind="{0:\'\u661F\u671F\u4E00\',1:\'\u661F\u671F\u4E8C\',2:\'\u661F\u671F\u4E09\',3:\'\u661F\u671F\u56DB\',4:\'\u661F\u671F\u4E94\',5:\'\u661F\u671F\u516D\',6:\'\u661F\u671F\u5929\'}[x.dayOfWeek]"></p>\n          <p class="telephonereservation-list-title-month" ng-bind="x.workDate|date:\'yyyy\u5E74MM\u6708dd\u65E5\'"></p>\n        </div>\n        <div class="telephonereservation-list-title-order">\n          <div class="telephonereservation-list-title-overorder">\n            <span>\u5DF2\u9884\u7EA6</span><em class="telephonereservation-num" ng-bind="x.scheduledNbr"></em>\n          </div>\n          <div class="telephonereservation-list-title-surplus">\n            <span>\u5269\u4F59</span><em class="telephonereservation-num" ng-bind="x.maxScheduleNbr - x.scheduledNbr"></em>\n          </div>\n        </div>\n      </div>\n      <div class="telephonereservation-list-body">\n        <div class="telephonereservation-list-body-symptom">\n          <div>\u75C7\u72B6\uFF1A</div>\n          <textarea placeholder="\u8BF7\u8F93\u5165\u75C7\u72B6\u63CF\u8FF0" ng-disabled="canSchedule(x)" ng-model="x.symptomDesc" auto-height-on-input></textarea>\n        </div>\n        <div class="telephonereservation-list-body-symptom">\n          <div>\u5907\u6CE8\uFF1A</div>\n          <textarea placeholder="\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F" ng-disabled="canSchedule(x)" ng-model="x.comments" auto-height-on-input></textarea>\n        </div>\n      </div>\n      <div class="telephonereservation-list-btn">\n        <button class="button button-small telephonereservation-list-btn-button"\n        ng-disabled="canSchedule(x)"\n        ng-bind="x.enableSchedule!=\'1\'?\'\u5DF2\u9884\u7EA6\':x.scheduledNbr==x.maxScheduleNbr?\'\u9884\u7EA6\u5DF2\u6EE1\':\'\u6211\u8981\u9884\u7EA6\'"\n        ng-click="save(x)"></button>\n      </div>\n    </div>\n    <ion-infinite-scroll\n      ng-if="canLoadMore()"\n      distance="10%"\n      immediate-check="false"\n      on-infinite="loadMoreData()"></ion-infinite-scroll>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('cancelacontract.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u533B\u751F\u8BE6\u60C5</ion-nav-title>\n  <ion-content class="has-footer doctorlist">\n    <div class="mydoctor">\n      <div class="myhomedoctor-doctor">\n        <dl>\n          <span class="oversign">\u5DF2\u7B7E{{doctorInfo.signedNbr}}\u4EBA</span>\n          <dt><img src="./img/doctor.png" alt=""><div class="mydoctor-title">{{doctorInfo.jobTitle}}</div></dt>\n          <dd class="myhomedoctor-name">{{doctorInfo.realName}}</dd>\n          <dd class="myhomedoctor-post">{{doctorInfo.orgName}}&nbsp;{{doctorInfo.departmentName}}</dd>\n        </dl>\n      </div>\n    </div>\n    <div class="cancelacontract-introduce">\n      <div class="cancelacontract-introduce-title">\n        \u533B\u751F\u7B80\u4ECB\n      </div>\n      <div class="cancelacontract-introduce-body">\n        {{doctorInfo.synopsis}}{{doctorInfo.experience}}\n      </div>\n    </div>\n    <div class="doctorlist-generalservice">\n      <div class="doctorlist-generalservice-title">\n        \u5168\u79D1\u670D\u52A1\n      </div>\n      <div class="doctorlist-generalservice-body">\n        12\u4E2A\u6708\uFF08\uFFE50.00\uFF09\n      </div>\n    </div>\n    <div class="doctorlist-patientinformation">\n      <div class="doctorlist-patientinformation-title">\n        \u5C31\u8BCA\u4EBA\u4FE1\u606F\n      </div>\n      <div class="doctorlist-patientinformation-body">\n        <div class="doctorlist-patientinformation-body-patient-visits">\u5C31\u8BCA\u4EBA</div>\n        <div class="doctorlist-patientinfomation-body-signnum"><span>24</span>\u4EBA</div>\n      </div>\n    </div>\n    <div class="doctorlist-servicecontent">\n      <div class="doctorlist-servicecontent-title">\n        \u5168\u79D1\u670D\u52A1\n      </div>\n      <div class="doctorlist-servicecontent-body">\n        \u670D\u52A1\u5F85\u786E\u5B9A\uFF01\n        <!-- \u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u9996\u90FD\u533B\u79D1\u5927\u5B66\u5BA3\u6B66\u533B\u9662\u7279\u7EA6\u987E\u95EE\uFF0C\u4E2D\u56FD\u7F8E\u4E09\u56FD\u6267\u7167\u533B\u5E08\uFF0C\u591A\u5E74\u4ECE\u4E8B\u4E09\u7532\u7406\u5DE5\u4F5C\u3002\u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\uFF0C\u9996\u90FD\u533B\u5E08\u5927\u5B66\u5BA3\u6B66\u533B\u9662\u7279\u7EA6\u987E\u95EE\uFF0C\u4E2D\u56FD\u3001\u7F8E\u56FD\u4E09\u56FD\u6267\u7167\u533B\u5E08\u591A\u5E74\u4ECE\u4E8B\u4E09\u7532\u7406\u5DE5\u4F5C\u3002 -->\n      </div>\n    </div>\n    <div class="doctorlist-servicenote">\n      <div class="doctorlist-servicenote-title">\n        \u670D\u52A1\u8BF4\u660E\n      </div>\n      <div class="doctorlist-servicenote-body">\n        <p class="doctorlist-servicenote-body-sign">1\u3001\u652F\u4ED8\u6210\u529F\u540E\uFF0C\u5373\u53EF\u4EAB\u53D7\u533B\u751F\u670D\u52A1\uFF0C\u62DF\u5B9A\u5065\u5EB7\u8BA1\u5212\u3002</p>\n        <p>2\u3001\u670D\u52A1\u5305\u62EC\uFF1A\u533B\u751F\u5B9A\u671F\u56DE\u8BBF\u4E0E\u8BC4\u4F30\uFF0C\u4E0D\u9650\u6B21\u6570\u3002</p>\n        <p>3\u3001\u5982\u60A8\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u53EF\u62E8\u62534002344543\u54A8\u8BE2\u3002</p>\n      </div>\n    </div>\n  </ion-content>\n  <div class="bar bar-footer row contract-application" ng-if="signStatus==0 && signDoctorId==doctorId">\n    <button class="button button-calm col col-100" ng-click="cancelBespoke()">\u53D6\u6D88\u7B7E\u7EA6</button>\n  </div>\n  <div class="bar bar-footer row contract-application" ng-if="signStatus==1 || signDoctorId!=doctorId">\n    <!-- <button class="button button-calm col col-100" ng-click="confirmBespoke()">\u7B7E\u7EA6\u7533\u8BF7</button> -->\n  </div>\n  <div class="bar bar-footer row contract-application" ng-if="signStatus==null||sDoctorId==null">\n    <button class="button button-calm col col-100" ng-click="confirmBespoke()">\u7B7E\u7EA6\u7533\u8BF7</button>\n  </div>\n</ion-view>\n');
$templateCache.put('current1.html','<div class="now-schedule-list">\n<div class="now-schedule now-schedule-one">\n  <div class="schedule-user-info">\n    <div class="schedule-user-info-head"><img src="img/user.png" alt=""></div>\n    <div class="schedule-user-info-name">\n      <span>\u5218\u5065</span> <br />\n      46\u5C81|\u7537\n    </div>\n    <div class="schedule-user-info-date">2016-12-03</div>\n  </div>\n  <div class="schedule-time"><span class="sch-time-hour">9:30</span><span class="sch-time-till">\u81F3</span><span class="sch-time-hour">12:00</span></div>\n  <div class="schedule-symptom">\u75C7\u72B6\uFF1A<span>\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0</span></div>\n  <div class="schedule-remarks">\u5907\u6CE8\uFF1A<span>\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0</span></div>\n  <div class="schedule-btn">\n    <div><button class="button button-small button-update">\u4FEE\u6539\u9884\u7EA6</button></div>\n    <div><button class="button button-small button-cancel">\u53D6\u6D88\u9884\u7EA6</button></div>\n  </div>\n</div><div class="now-schedule">\n  <div class="schedule-user-info">\n    <div class="schedule-user-info-head"><img src="img/user.png" alt=""></div>\n    <div class="schedule-user-info-name">\n      <span>\u5218\u5065</span> <br />\n      46\u5C81|\u7537\n    </div>\n    <div class="schedule-user-info-date">2016-12-03</div>\n  </div>\n  <div class="schedule-time"><span class="sch-time-hour">9:30</span><span class="sch-time-till">\u81F3</span><span class="sch-time-hour">12:00</span></div>\n  <div class="schedule-symptom">\u75C7\u72B6\uFF1A\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0</div>\n  <div class="schedule-remarks">\u5907\u6CE8\uFF1A\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0</div>\n  <div class="schedule-btn">\n    <div><button class="button button-small button-update">\u4FEE\u6539\u9884\u7EA6</button></div>\n    <div><button class="button button-small button-cancel">\u53D6\u6D88\u9884\u7EA6</button></div>\n  </div>\n</div>\n<div class="now-schedule">\n  <div class="schedule-user-info">\n    <div class="schedule-user-info-head"><img src="img/user.png" alt=""></div>\n    <div class="schedule-user-info-name">\n      <span>\u5218\u5065</span> <br />\n      46\u5C81|\u7537\n    </div>\n    <div class="schedule-user-info-date">2016-12-03</div>\n  </div>\n  <div class="schedule-time"><span class="sch-time-hour">9:30</span><span class="sch-time-till">\u81F3</span><span class="sch-time-hour">12:00</span></div>\n  <div class="schedule-symptom">\u75C7\u72B6\uFF1A\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0</div>\n  <div class="schedule-remarks">\u5907\u6CE8\uFF1A\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0</div>\n  <div class="schedule-btn">\n    <div><button class="button button-small button-update">\u4FEE\u6539\u9884\u7EA6</button></div>\n    <div><button class="button button-small button-cancel">\u53D6\u6D88\u9884\u7EA6</button></div>\n  </div>\n</div><div class="now-schedule">\n  <div class="schedule-user-info">\n    <div class="schedule-user-info-head"><img src="img/user.png" alt=""></div>\n    <div class="schedule-user-info-name">\n      <span>\u5218\u5065</span> <br />\n      46\u5C81|\u7537\n    </div>\n    <div class="schedule-user-info-date">2016-12-03</div>\n  </div>\n  <div class="schedule-time"><span class="sch-time-hour">9:30</span><span class="sch-time-till">\u81F3</span><span class="sch-time-hour">12:00</span></div>\n  <div class="schedule-symptom">\u75C7\u72B6\uFF1A\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0</div>\n  <div class="schedule-remarks">\u5907\u6CE8\uFF1A\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0</div>\n  <div class="schedule-btn">\n    <div><button class="button button-small button-update">\u4FEE\u6539\u9884\u7EA6</button></div>\n    <div><button class="button button-small button-cancel">\u53D6\u6D88\u9884\u7EA6</button></div>\n  </div>\n</div>\n</div>\n');
$templateCache.put('current2.html','<div class="now-schedule-list">\n<div class="history-schedule now-schedule-one">\n  <div class="history-schedule-user">\n    <div class="histroy-schedule-date">\n        <span>19</span>10\u6708\n    </div>\n    <div class="history-schedule-info">\n      <div class="history-schedule-time">10:00\u81F311:30</div>\n      <div class="history-schedule-symptom">\u75C7\u72B6\uFF1A<span>\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0\u5177\u4F53\u75C7\u72B6\u63CF\u8FF0</span></div>\n      <div class="history-schedule-remarks">\u5907\u6CE8\uFF1A<span>\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0\u5177\u4F53\u5907\u6CE8\u63CF\u8FF0</span></div>\n    </div>\n  </div>\n</div>\n</div>\n');
$templateCache.put('doctordetail.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u533B\u751F\u8BE6\u60C5</ion-nav-title>\n  <ion-content class="doctorlist">\n    <div class="mydoctor">\n      <div class="myhomedoctor-doctor">\n        <dl>\n          <span class="oversign">\u5DF2\u7B7E34\u4EBA</span>\n          <dt><img src="./img/doctor.png" alt=""><div class="mydoctor-title">\u4E3B\u4EFB\u533B\u5E08</div></dt>\n          <dd class="myhomedoctor-name">\u674E\u7ACB\u6052</dd>\n          <dd class="myhomedoctor-post">\u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F&nbsp;\u6162\u6027\u75C5</dd>\n        </dl>\n      </div>\n    </div>\n    <div class="doctorlist-generalservice">\n      <div class="doctorlist-generalservice-title">\n        \u5168\u79D1\u670D\u52A1\n      </div>\n      <div class="doctorlist-generalservice-body">\n        12\u4E2A\u6708\uFF08\uFFE50.00\uFF09\n      </div>\n    </div>\n    <div class="doctorlist-patientinformation">\n      <div class="doctorlist-patientinformation-title">\n        \u5C31\u8BCA\u4EBA\u4FE1\u606F\n      </div>\n      <div class="doctorlist-patientinformation-body">\n        <div class="doctorlist-patientinformation-body-patient-visits">\u5C31\u8BCA\u4EBA</div><div class="doctorlist-patientinfomation-body-signnum"><span>24</span>\u4EBA</div>\n      </div>\n    </div>\n    <div class="doctorlist-servicecontent">\n      <div class="doctorlist-servicecontent-title">\n        \u670D\u52A1\u5185\u5BB9\n      </div>\n      <div class="doctorlist-servicecontent-body">\n        \u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u4E13\u5BB6\u3002\u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u4E13\u5BB6\u3002\u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u4E13\u5BB6\u3002\u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u4E13\u5BB6\u3002\u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u4E13\u5BB6\u3002\u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u4E13\u5BB6\u3002\n      </div>\n    </div>\n    <div class="doctorlist-servicenote">\n      <div class="doctorlist-servicenote-title">\n        \u670D\u52A1\u8BF4\u660E\n      </div>\n      <div class="doctorlist-servicenote-body">\n        <p class="doctorlist-servicenote-body-sign">1\u3001\u652F\u4ED8\u6210\u529F\u540E\uFF0C\u5373\u53EF\u4EAB\u53D7\u533B\u751F\u670D\u52A1\uFF0C\u62DF\u5B9A\u5065\u5EB7\u8BA1\u5212\u3002</p>\n        <p>2\u3001\u670D\u52A1\u5305\u62EC\uFF1A\u533B\u751F\u5B9A\u671F\u56DE\u8BBF\u4E0E\u8BC4\u4F30\uFF0C\u4E0D\u9650\u6B21\u6570\u3002</p>\n        <p>3\u3001\u5982\u60A8\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u53EF\u62E8\u62534002344543\u54A8\u8BE2\u3002</p>\n      </div>\n    </div>\n    <div class="doctor-agreehomedoctor-sign">\n      <input type="checkbox" name="" id=""><span>\u540C\u610F\u5BB6\u5EAD\u533B\u751F\u670D\u52A1\u534F\u8BAE</span>\n    </div>\n  </ion-content>\n  <div class="bar bar-footer row contract-application">\n    <button class="button button-calm col col-100" ng-click="confirmBespoke()">\u7B7E\u7EA6\u7533\u8BF7</button>\n  </div>\n</ion-view>\n');
$templateCache.put('doctorlist.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u533B\u751F\u5217\u8868</ion-nav-title>\n  <ion-content class="doctor-list" scoll-height>\n    <div ng-repeat="doctor in listDoctor">\n      <dl class="doctorlist-info" ui-sref="cancelacontract({doctorId:doctor.doctorId})">\n        <dt class="doctorlist-info-headpic"><img src="{{doctor.headerImage}}" alt=""></dt>\n        <dd class="doctorlist-info-news">\n          <div class="doctorlist-info-news-name"><span class="doctorlist-doctorname">{{doctor.realName}}</span> | <span class="doctorlist-doctorjob">{{doctor.jobTitle}}</span></div>\n          <div class="doctorlist-info-news-hospital">{{doctor.orgName}}-{{doctor.departmentName}}</div>\n          <div class="doctorlist-info-news-area">{{doctor.provinceName}}{{doctor.cityName}}{{doctor.districtName}}</div>\n        </dd>\n        <dd class="doctorlist-info-signinfo">\n          <div class="doctorlist-info-signinfo-people">\u5DF2\u7B7E<span class="doctorlist-info-signinfo-num">50</span>\u4EBA</div>\n          <div class="doctorlist-info-signinfo-distances">3.2km</div>\n        </dd>\n      </dl>\n    </div>\n  </ion-content>\n</ion-view>\n\n');
$templateCache.put('docupload.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u62CD\u7167\u4E0A\u4F20</ion-nav-title>\n  <ion-content class="docupload">\n      <div class="docupload-list">\n        <div class="docupload-photo">\n          <div class="docupload-photo-list" ng-repeat="x in uploadInfo.files" ng-if="x.progress==100">\n            <img ngf-src="x.result.result[0]?x.result.result[0] + \'-suishi200\':\'\'">\n            <span class="docupload-remove" ng-click="removeFile(x)"><i class="ion-minus-round"></i></span>\n          </div><div class="docupload-photo-list" ngf-select="selectFiles($files)" multiple ngf-accept="\'image/*\'">\n            <i class="ion-ios-plus-empty"></i>\n          </div>\n        </div>\n      </div>\n      <div class="docupload-censorate">\n        <span>\u68C0\u67E5\u673A\u6784</span>\n        <input type="text" ng-model="data.orgName" placeholder="\u8BF7\u8F93\u5165\u68C0\u67E5\u673A\u6784\u540D\u79F0">\n      </div>\n      <div class="docupload-checktime">\n        <span>\u68C0\u67E5\u65F6\u95F4</span>\n        <div ng-model="data.date" ng-bind="data.date|date:\'yyyy\u5E74MM\u6708dd\u65E5\'" mobiscroll-date="dateSettings"></div>\n      </div>\n      <div class="docupload-remarks">\n        <p>\u5907\u6CE8</p>\n        <textarea cols="30" rows="10" ng-model="data.comments"></textarea>\n      </div>\n  </ion-content>\n      <div class="bar bar-footer row">\n        <button class="button button-calm col col-100 docupload-btn" ng-click="save()">\n          \u4FDD\u5B58\n        </button>\n      </div>\n</ion-view>\n');
$templateCache.put('family-relationship.html','<ion-modal-view hide-nav-bar="false">\n  <ion-header-bar>\n    <div class="bar bar-header bar-positive row row-center">\n      <div class="col col-50 col-center">\n        \u6DFB\u52A0\u5BB6\u4EBA\n      </div>\n      <div class="col col-50 col-center">\n        <button class="button button-clear pull-right button-small" ng-click="cancelSelect()">\u53D6\u6D88</button>\n      </div>\n    </div>\n  </ion-header-bar>\n  <ion-content class="family-relationship">\n    <ion-list ng-repeat="listFamily in listFamilyRel">\n        <a class="item" ng-click="addfamilyDict(listFamily.dictCode,listFamily.dictName)">{{listFamily.dictName}}</a>\n    </ion-list>\n  </ion-content>\n</ion-modal-view>\n');
$templateCache.put('family-sex.html','<ion-modal-view hide-nav-bar="false">\n  <ion-header-bar>\n    <div class="bar bar-header bar-positive row row-center">\n      <div class="col col-50 col-center">\n        \u6027\u522B\n      </div>\n      <div class="col col-50 col-center">\n        <button class="button button-clear pull-right button-small" ng-click="cancelSelectSex()">\u53D6\u6D88</button>\n      </div>\n    </div>\n  </ion-header-bar>\n  <ion-content class="family-relationship">\n      <ion-list ng-repeat="sex in sex">\n        <a class="item" ng-click="addSex(sex.id,sex.value)">{{sex.value}}</a>\n    </ion-list>\n  </ion-content>\n</ion-modal-view>\n');
$templateCache.put('familylist.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u6211\u7684\u5BB6\u4EBA</ion-nav-title>\n  <ion-nav-buttons side="secondary">\n      <button class="button button-stable" ng-click="doSomething()">\n       \u4FDD\u5B58\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="familylist">\n    <div class="family-list">\n      <div class="schedule-user-info" ng-repeat="familylist in familylist" ui-sref="addfamily({familyUserId:familylist.relUserId})">\n        <div class="schedule-user-info-head"><img src="img/user.png" alt=""></div>\n        <div class="schedule-user-info-name">\n          <span>{{familylist.relUserName}}</span> <br />\n          \u5173\u7CFB|{{familylist.relTypeName}}\n        </div>\n      </div>\n      <div class="familylist-add-family" ui-sref="addfamily">\n        <button class="button add-family">\n        </button>\n      </div>\n    </div>\n  </ion-content>\n  </ion-view>\n');
$templateCache.put('healthFiles.html','<ion-view hide-nav-bar="false">\n<ion-nav-title>\u5065\u5EB7\u6863\u6848</ion-nav-title>\n<ion-nav-buttons side="secondary">\n<button class="button button-small button-clear" ui-sref="docupload"><i class="fa fa-camera"></i></button>\n</ion-nav-buttons>\n<ion-content scroll="false">\n<div class="healthFiles-tab-header">\n  <li ng-repeat="x in [\'\u8840\u538B\',\'\u8840\u7CD6\',\'\u8840\u8102\',\'BMI\']" ng-click="toggleTab($index)" ng-class="$index==slider.activeIndex?\'active\':\'\'">\n    <span ng-bind="x"></span>\n  </li>\n</div>\n<ion-slides class="healthFiles-slides" slider="data.slider">\n<!-- \u8840\u538B -->\n<ion-slide-page>\n<ion-content class="has-footer">\n<ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0" on-refresh="doRefresh()"></ion-refresher>\n<ion-scroll>\n<div class="healthFiles-content-wrapper">\n  <article ng-repeat="x in listBloodPressure.pageList" ng-class="{\'0\':\'healthFiles-normal\',\'1\':\'healthFiles-warm\',\'2\':\'healthFiles-danger\'}[x.identify]">\n    <section class="healthFiles-item-title clearFix">\n      <date ng-bind="x.recordDate|datetime:\'yyyy-MM-dd\'"></date>\n      <time ng-bind="x.recordDate|timeWithDateName"></time>\n    </section>\n    <section class="healthFiles-item-wrapper">\n      <ul class="healthFiles-item-content">\n        <li class="healthFiles-item-before">\n          <div>\n            <span class="healthFiles-value-font" ng-bind="x.examItems.SBP.checkItemResult"></span>\n            <span class="healthFiles-unit-font" ng-bind="x.examItems.SBP.unit"></span>\n          </div>\n          <div class="healthFile-item-name">\n            <span class="healthFiles-name-font">\u9AD8\u538B</span>\n            <i ng-class="{\'2\':\'ion-arrow-up-c\',\'1\':\'ion-arrow-down-c\',\'0\':\'ion-minus\'}[x.examItems.SBP.trend]"></i>\n          </div>\n        </li>\n        <li class="healthFiles-item-after">\n          <div>\n            <span class="healthFiles-value-font" ng-bind="x.examItems.DBP.checkItemResult">86</span>\n            <span class="healthFiles-unit-font" ng-bind="x.examItems.DBP.unit"></span>\n          </div>\n          <div class="healthFile-item-name">\n            <span class="healthFiles-name-font">\u4F4E\u538B</span>\n            <i ng-class="{\'2\':\'ion-arrow-up-c\',\'1\':\'ion-arrow-down-c\',\'0\':\'ion-minus\'}[x.examItems.DBP.trend]"></i>\n          </div>\n        </li>\n      </ul>\n    </section>\n  </article>\n</div>\n</ion-scroll>\n<ion-infinite-scroll\n  ng-if="canLoadMore(0)"\n  distance="10%"\n  immediate-check="false"\n  on-infinite="loadMoreData()"></ion-infinite-scroll>\n</ion-content>\n</ion-slide-page>\n<ion-slide-page>\n<!-- \u8840\u7CD6 -->\n<ion-content class="has-footer">\n<ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0" on-refresh="doRefresh()"></ion-refresher>\n<ion-scroll>\n<div class="healthFiles-content-wrapper">\n  <article ng-repeat="x in listBloodGlucose.pageList" ng-class="{\'0\':\'healthFiles-normal\',\'1\':\'healthFiles-warm\',\'2\':\'healthFiles-danger\'}[x.identify]">\n    <section class="healthFiles-item-title clearFix">\n      <date ng-bind="x.recordDate|datetime:\'yyyy-MM-dd\'"></date>\n      <time ng-bind="x.mealTypeName"></time>\n    </section>\n    <section class="healthFiles-item-wrapper">\n      <ul class="healthFiles-item-content">\n        <li class="healthFiles-item-before">\n          <div>\n            <span class="healthFiles-value-font" ng-bind="x.examItems.PRE_MEAL?x.examItems.PRE_MEAL.checkItemResult:\'--\'"></span>\n            <span class="healthFiles-unit-font">mmol/L</span>\n          </div>\n          <div class="healthFile-item-name">\n            <span class="healthFiles-name-font">\u9910\u524D</span>\n            <i ng-class="{\'2\':\'ion-arrow-up-c\',\'1\':\'ion-arrow-down-c\',\'0\':\'ion-minus\'}[x.examItems.PRE_MEAL.trend]"></i>\n          </div>\n        </li>\n        <li class="healthFiles-item-after">\n          <div>\n            <span class="healthFiles-value-font" ng-bind="x.examItems.AFT_MEAL?x.examItems.AFT_MEAL.checkItemResult:\'--\'"></span>\n            <span class="healthFiles-unit-font">mmol/L</span>\n          </div>\n          <div class="healthFile-item-name">\n            <span class="healthFiles-name-font">\u9910\u540E</span>\n            <i ng-class="{\'2\':\'ion-arrow-up-c\',\'1\':\'ion-arrow-down-c\',\'0\':\'ion-minus\'}[x.examItems.AFT_MEAL.trend]"></i>\n          </div>\n        </li>\n      </ul>\n    </section>\n  </article>\n</div>\n</ion-scroll>\n<ion-infinite-scroll\n  ng-if="canLoadMore(1)"\n  distance="10%"\n  immediate-check="false"\n  on-infinite="loadMoreData()"></ion-infinite-scroll>\n</ion-content>\n</ion-slide-page>\n<ion-slide-page>\n<!-- \u8840\u8102 -->\n<ion-content class="has-footer">\n<ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0" on-refresh="doRefresh()"></ion-refresher>\n<ion-scroll>\n<div class="healthFiles-content-wrapper">\n  <article ng-repeat="x in listBloodFat.pageList" ng-class="{\'0\':\'healthFiles-normal\',\'1\':\'healthFiles-warm\',\'2\':\'healthFiles-danger\'}[x.identify]">\n    <section class="healthFiles-item-title clearFix">\n      <date ng-bind="x.recordDate|datetime:\'yyyy-MM-dd\'"></date>\n      <time ng-bind="x.recordDate|timeWithDateName"></time>\n    </section>\n    <section class="healthFiles-item-one-col-content">\n      <div class="healthFiles-item-one-col-value">\n        <span class="healthFiles-value-font" ng-bind="x.examItems.BF.checkItemResult"></span>\n        <span class="healthFiles-unit-font" ng-bind="x.examItems.BF.unit"></span>\n      </div>\n      <div class="healthFiles-item-one-col-name">\n        <span class="healthFiles-name-font">\u8840\u8102</span>\n        <i ng-class="{\'2\':\'ion-arrow-up-c\',\'1\':\'ion-arrow-down-c\',\'0\':\'ion-minus\'}[x.examItems.BF.trend]"></i>\n      </div>\n    </section>\n  </article>\n</div>\n</ion-scroll>\n<ion-infinite-scroll\n  ng-if="canLoadMore(2)"\n  distance="10%"\n  immediate-check="false"\n  on-infinite="loadMoreData()"></ion-infinite-scroll>\n</ion-content>\n</ion-slide-page>\n<ion-slide-page>\n<!-- BMI -->\n<ion-content class="has-footer">\n<ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0" on-refresh="doRefresh()"></ion-refresher>\n<ion-scroll>\n<div class="healthFiles-content-wrapper">\n  <article ng-repeat="x in listBasicCheck.pageList" ng-class="{\'0\':\'healthFiles-normal\',\'1\':\'healthFiles-warm\',\'2\':\'healthFiles-danger\'}[x.identify]">\n    <section class="healthFiles-item-title clearFix">\n      <date ng-bind="x.recordDate|datetime:\'yyyy-MM-dd\'"></date>\n      <time ng-bind="x.recordDate|timeWithDateName"></time>\n    </section>\n    <section class="healthFiles-item-wrapper">\n      <ul class="healthFiles-item-content">\n        <li class="healthFiles-item-before healthFiles-bmi-item-before">\n          <div>\n            <span class="healthFiles-bmi-value-font" ng-bind="x.examItems.BMI.checkItemResult"></span>\n          </div>\n          <div class="healthFile-item-name">\n            <span class="healthFiles-name-font">BMI</span>\n            <i ng-class="{\'2\':\'ion-arrow-up-c\',\'1\':\'ion-arrow-down-c\',\'0\':\'ion-minus\'}[x.examItems.BMI.trend]"></i>\n          </div>\n        </li>\n        <li class="healthFiles-bmi-item">\n          <div>\n            <span class="healthFiles-value-font" ng-bind="x.examItems.HEIGHT.checkItemResult"></span>\n            <span class="healthFiles-unit-font">cm</span>\n          </div>\n          <div class="healthFile-item-name">\n            <span class="healthFiles-name-font">\u8EAB\u9AD8</span>\n            <i ng-class="{\'2\':\'ion-arrow-up-c\',\'1\':\'ion-arrow-down-c\',\'0\':\'ion-minus\'}[x.examItems.HEIGHT.trend]"></i>\n          </div>\n        </li>\n        <li class="healthFiles-bmi-item">\n          <div>\n            <span class="healthFiles-value-font" ng-bind="x.examItems.WEIGHT.checkItemResult"></span>\n            <span class="healthFiles-unit-font">kg</span>\n          </div>\n          <div class="healthFile-item-name">\n            <span class="healthFiles-name-font">\u4F53\u91CD</span>\n            <i ng-class="{\'2\':\'ion-arrow-up-c\',\'1\':\'ion-arrow-down-c\',\'0\':\'ion-minus\'}[x.examItems.WEIGHT.trend]"></i>\n          </div>\n        </li>\n      </ul>\n    </section>\n  </article>\n</div>\n</ion-scroll>\n<ion-infinite-scroll\n  ng-if="canLoadMore(3)"\n  distance="10%"\n  immediate-check="false"\n  on-infinite="loadMoreData()"></ion-infinite-scroll>\n</ion-content>\n</ion-slide-page>\n</ion-slides>\n</ion-content>\n<ion-footer-bar class="healthFiles-foot-bar">\n<button class="button button-small button-positive" ng-click="dataRecord()">\u8BB0\u5F55\u6570\u636E</button>\n</ion-footer-bar>\n</ion-view>\n');
$templateCache.put('home.html','<ion-view hide-nav-bar="false" has-tabs>\n  <ion-nav-view name="home-index" ></ion-nav-view>\n  <ion-tabs class="tabs-icon-top tabs-color-active-positive" has-header="true" padding="true">\n    <!-- \u9996\u9875 Tab -->\n    <ion-tab title="\u9996\u9875" icon-off="home-icon icon-zhuye" icon-on="home-icon icon-zhuye" ui-sref="home.index">\n    </ion-tab>\n\n    <!-- \u6211\u7684\u533B\u751F Tab -->\n    <ion-tab title="\u6211\u7684\u670D\u52A1" icon-off="home-icon icon-fuwu" icon-on="home-icon icon-fuwu" ui-sref="home.servicehome">\n    </ion-tab>\n\n    <!-- \u6211\u7684\u8BA1\u5212 Tab -->\n    <ion-tab title="\u6211\u7684\u6863\u6848" disabled="isNotLogin()" icon-off="home-icon icon-dangan" icon-on="home-icon icon-dangan" ui-sref="healthFiles">\n    </ion-tab>\n    <!-- \u5065\u5EB7\u6863\u6848 Tab -->\n    <ion-tab title="\u6211" disabled="isNotLogin()" icon-off="home-icon icon-wode" icon-on="home-icon icon-wode" ui-sref="home.myhome">\n    </ion-tab>\n  </ion-tabs>\n</ion-view>\n');
$templateCache.put('index.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u591A\u70B9\u5065\u5EB7</ion-nav-title>\n  <ion-nav-buttons side="secondary">\n  <button class="button button-small button-clear" ng-click="toggleMenu()"><i class="ion-navicon-round"></i></button>\n  </ion-nav-buttons>\n  <ion-content class="home has-tabs">\n    <div class="home-index-cricle-wrapper">\n      <div class="cricle-ring">\n        <div class="cricle-part" ng-repeat="(key,value) in cricle"\n          ng-style="{transform:\'rotate(\'+(45 + value.index*deg)+\'deg)\'}"\n          ng-class="\'cricle-part-\'+value.status"\n          ui-sref="{{value.state}}">\n            <div ng-style="{transform:\'translateX(-50%) translateY(-50%) rotate(\'+(-45 - value.index*deg)+\'deg)\'}">\n              <i class="iconfont" ng-class="value.icon"></i>\n              <span ng-bind="value.name"></span>\n            </div>\n          </div>\n          <div class="cricle-ring-avatar" ui-sref="login" ng-if="isNotLogin()" ngf-thumbnail="\'img/headimg.png\'" ngf-as-background="true"></div>\n          <div class="cricle-ring-name-label" ng-if="isNotLogin()">\u8BF7\u767B\u5F55</div>\n\n          <div class="cricle-ring-avatar" ng-if="!isNotLogin()"\n            ngf-as-background="true"\n            ngf-thumbnail="user.headerImage?user.headerImage+\'-suishi200\':\'img/07.jpg\'"></div>\n          <div class="cricle-ring-name-label" ng-if="!isNotLogin()" ng-bind="user.name"></div>\n      </div>\n      <div class="cricle-ring-legend">\n        <div class="cricle-ring-low">\u6B63\u5E38</div>\n        <div class="cricle-ring-normal">\u8FC7\u4F4E</div>\n        <div class="cricle-ring-high">\u8FC7\u9AD8</div>\n      </div>\n    </div>\n    <div class="home-myplay-advice">\n      <div class="home-myplan" ui-sref="schedule">\n        <div class="home-myplan-title" ng-class="{\'home-myplan-title-disabled\':!lastSchedulePlan}">\n          \u6211\u7684\u8BA1\u5212\n        </div>\n        <div class="home-myplan-body" ng-if="!!lastSchedulePlan">\n          <div class="home-myplan-body-date" ng-bind="lastSchedulePlan.workDate|date:\'yyyy\u5E74MM\u6708dd\u65E5\'"></div>\n          <div class="home-myplan-body-time">\n            <time ng-bind="lastSchedulePlan.beginTime"></time>\n            -\n            <time ng-bind="lastSchedulePlan.endTime"></time>\n          </div>\n          <div class="home-myplan-logo">\n            <i class="servicehome-lists icon-video-copy"\n              ng-class="{\'home-myplan-logo-inactive\':lastSchedulePlan.scheduleType!=\'VEDIO_SCHEDULE\'}"></i>\n            <i class="servicehome-lists icon-yiyao"\n              ng-class="{\'home-myplan-logo-inactive\':lastSchedulePlan.scheduleType!=\'OUTPATIENT\'}"></i>\n            <i class="servicehome-lists icon-shouji"\n              ng-class="{\'home-myplan-logo-inactive\':lastSchedulePlan.scheduleType!=\'TEL_SCHEDULE\'}"></i>\n          </div>\n        </div>\n        <div class="home-myplan-body home-myplan-title-disabled" ng-if="!lastSchedulePlan">\n          <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E</div>\n        </div>\n      </div>\n      <div class="home-doctoradvice">\n        <div class="home-doctoradvice-title">\n          \u533B\u751F\u5EFA\u8BAE\n        </div>\n        <div class="home-doctoradvice-body" ng-if="!!lastFeedback" ng-bind="lastFeedback.doctorMark"></div>\n        <div class="home-myplan-body home-myplan-title-disabled" ng-if="!lastFeedback">\n          <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E</div>\n        </div>\n      </div>\n    </div>\n    <div class="home-img-advice">\n      <img src="./img/home-img-advice.png" alt="">\n    </div>\n    <div class="recommend-doctor">\n      <div class="recommend-doctor-title">\n        <div class="recommend-physician">\n          \u63A8\u8350\u533B\u5E08\n        </div>\n        <div class="recommend-all" ui-sref="doctorlist">\n          \u5168\u90E8\n        </div>\n        <span>&gt;</span>\n      </div>\n      <div class="recomend-doctor-list">\n        <dl ng-repeat="x in doctorList" ui-sref="cancelacontract({doctorId:x.doctorId})">\n          <dt><img ngf-src="x.headerImage||\'./img/doctor.png\'" alt=""></dt>\n          <dd class="recomend-doctor-list-info">\n            <p class="recomend-doctor-list-name"><em ng-bind="x.realName"></em> | <span ng-bind="x.jobTitle"></span></p>\n            <p class="recomend-doctor-list-post">{{x.orgName}}-{{x.departmentName}}</p>\n            <p class="recomend-doctor-list-address"><span></span>{{x.provinceName}}{{x.cityName}}{{x.districtName}}</p>\n          </dd>\n          <dd class="recomend-doctor-sign">\n            <p class="recomend-doctor-sign-num">\u5DF2\u7B7E<span>{{x.signedNbr}}</span>\u4EBA</p>\n            <!-- <p>3.2km</p> -->\n          </dd>\n        </dl>\n      </div>\n    </div>\n    <div class="health-advice">\n      <div class="health-advice-title">\n        <div class="health-advice-title-section">\n          \u5065\u5EB7\u54A8\u8BE2\n        </div>\n        <div class="health-advice-title-all">\n          \u5168\u90E8\n        </div>\n        <span>&gt;</span>\n      </div>\n      <div class="health-advice-list">\n        <dl>\n          <dt>\n            <img src="./img/health-advice.png" alt="">\n          </dt>\n          <dd class="health-advice-list-text">\n            <p class="health-advice-list-text-info">\u60F3\u8981\u4F60\u7684\u89C6\u529B\u5065\u5EB7\uFF0C\u90A3\u4E48\u770B\u770B\u8FD9\u4E9B\u4F60\u90FD\u505A\u5230\u4E86\u5417\uFF1F</p>\n            <p class="health-advice-list-text-store">\u76DB\u5510\u672C\u8349\u65D7\u8230\u5E97</p>\n          </dd>\n        </dl>\n        <dl>\n          <dt>\n            <img src="./img/health-advice.png" alt="">\n          </dt>\n          <dd class="health-advice-list-text">\n            <p class="health-advice-list-text-info">\u60F3\u8981\u4F60\u7684\u89C6\u529B\u5065\u5EB7\uFF0C\u90A3\u4E48\u770B\u770B\u8FD9\u4E9B\u4F60\u90FD\u505A\u5230\u4E86\u5417\uFF1F</p>\n            <p class="health-advice-list-text-store">\u76DB\u5510\u672C\u8349\u65D7\u8230\u5E97</p>\n          </dd>\n        </dl>\n        <dl>\n          <dt>\n            <img src="./img/health-advice.png" alt="">\n          </dt>\n          <dd class="health-advice-list-text">\n            <p class="health-advice-list-text-info">\u60F3\u8981\u4F60\u7684\u89C6\u529B\u5065\u5EB7\uFF0C\u90A3\u4E48\u770B\u770B\u8FD9\u4E9B\u4F60\u90FD\u505A\u5230\u4E86\u5417\uFF1F</p>\n            <p class="health-advice-list-text-store">\u76DB\u5510\u672C\u8349\u65D7\u8230\u5E97</p>\n          </dd>\n        </dl>\n        <dl>\n          <dt>\n            <img src="./img/health-advice.png" alt="">\n          </dt>\n          <dd class="health-advice-list-text">\n            <p class="health-advice-list-text-info">\u60F3\u8981\u4F60\u7684\u89C6\u529B\u5065\u5EB7\uFF0C\u90A3\u4E48\u770B\u770B\u8FD9\u4E9B\u4F60\u90FD\u505A\u5230\u4E86\u5417\uFF1F</p>\n            <p class="health-advice-list-text-store">\u76DB\u5510\u672C\u8349\u65D7\u8230\u5E97</p>\n          </dd>\n        </dl>\n        <dl>\n          <dt>\n            <img src="./img/health-advice.png" alt="">\n          </dt>\n          <dd class="health-advice-list-text">\n            <p class="health-advice-list-text-info">\u60F3\u8981\u4F60\u7684\u89C6\u529B\u5065\u5EB7\uFF0C\u90A3\u4E48\u770B\u770B\u8FD9\u4E9B\u4F60\u90FD\u505A\u5230\u4E86\u5417\uFF1F</p>\n            <p class="health-advice-list-text-store">\u76DB\u5510\u672C\u8349\u65D7\u8230\u5E97</p>\n          </dd>\n        </dl>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('login.html','<ion-view hide-nav-bar="false">\n    <ion-nav-title>\u7528\u6237\u767B\u5F55</ion-nav-title>\n    <ion-content>\n        <div class="index-header">\n            <div class="index-logo">\n                <div class="logo">\n                    <img src="img/logo.png" alt="">\n                </div>\n                <div class="logo_health">\n                    <img src="img/logo_health.png" alt="">\n                </div>\n            </div>\n        </div>\n        <div class="index-input">\n            <div class="input-list">\n                <div class="item-input input-list-user">\n                    <span class="fa fa-user"></span><input type="tel" id="input-user" class="input-user"  placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D/\u624B\u673A\u53F7" ng-model="data.phone">\n                </div>\n                <div class="item-input input-list-pwd">\n                    <span class="ion-locked"></span>\n                    <input type="password" class="input-pwd" ng-show="!showpwd" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" ng-model="data.password">\n                    <input type="text" class="input-pwd" ng-show="showpwd" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" ng-model="data.password">\n                    <button class="button button-clear button-eye" ng-click="togglePwd()">\n                      <i ng-class="!showpwd?\'ion-eye\':\'ion-eye-disabled\'"></i>\n                    </button>\n                </div>\n            </div>\n            <div class="index-menus">\n                <span class="index-phone-login" ui-sref="register">\u624B\u673A\u6CE8\u518C</span>\n                <span class="index-forget_password" ui-sref="Forgetpwd">\u5FD8\u8BB0\u5BC6\u7801</span>\n            </div>\n            <div class="index-login-btn">\n              <button class="button button-block button-light index-login-btn-border" ng-click="login()">\u767B\u5F55</button>\n          </div>\n        </div>\n    </ion-content>\n</ion-view>\n');
$templateCache.put('modifyaddress.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u4FEE\u6539\u5730\u5740</ion-nav-title>\n    <ion-nav-buttons side="secondary">\n      <button class="button button-stable" ng-click="save()">\n       \u4FDD\u5B58\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="selectArea-wrapper">\n    <div class="list">\n      <a class="item item-icon-right" ng-click="selectArea(1)">\n          \u6240\u5728\u5730\u533A\uFF1A\n          <span ng-bind="getFullPath()"></span>\n        <i class="icon ion-ios-arrow-right"></i>\n      </a>\n      <div class="item">\n        <div>\u8BE6\u7EC6\u5730\u5740\uFF1A</div>\n        <div class="modifaddress-minuteaddress">\n          <textarea ng-model="data.address" class="modifaddress-textarea" cols="30" rows="10" placeholder="\u8BF7\u8F93\u5165\u5730\u5740"></textarea>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('modifyBirthday.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u51FA\u751F\u65E5\u671F</ion-nav-title>\n  <ion-nav-buttons side="secondary">\n    <button class="button button-stable" ng-click="save()">\n     \u786E\u5B9A\n    </button>\n  </ion-nav-buttons>\n  <ion-content class="modifyusername">\n    <div class="list">\n      <div class="item item-input" click-on-start ng-model="data.birth" mobiscroll-date="dateSettings">\n          \u8BF7\u9009\u62E9\u65E5\u671F\uFF1A{{data.birth|date:\'yyyy\u5E74MM\u6708dd\u65E5\'}}\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('modifyMobile.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u4FEE\u6539\u624B\u673A\u53F7\u7801</ion-nav-title>\n    <ion-nav-buttons side="secondary">\n      <button class="button button-light button-small" ng-click="save()">\n       \u786E\u5B9A\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="modifyMobile-wrapper">\n    <form class="register-form" name="regForm" novalidate="true" ng-model="formData">\n        <div class="register-input-area">\n            <div class="item-input">\n                <span>\u624B\u673A\u53F7\u7801</span>\n                <input type="tel" name="mobileNow"\n                    readonly\n                    required\n                    class="register-input"\n                    ng-value="formData.mobileNow">\n            </div>\n            <div class="item-input">\n                <span>\u65B0\u624B\u673A\u53F7\u7801</span>\n                <input type="tel" name="mobile"\n                    required\n                    ng-change="checkPwd(regForm)"\n                    class="register-input"\n                    placeholder="\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7\u7801"\n                    ng-model="formData.mobile">\n            </div>\n            <div class="item-input">\n                <span>\u786E\u8BA4\u624B\u673A\u53F7\u7801</span>\n                <input type="tel" name="confirmMobile"\n                    required\n                    class="register-input"\n                    placeholder="\u8BF7\u786E\u8BA4"\n                    ng-change="checkPwd(regForm)"\n                    ng-model="formData.confirmMobile">\n            </div>\n            <div class="item-input">\n                <span class="register-under-line">\u9A8C\u8BC1\u7801</span>\n                <input type="number" name="code"\n                    required\n                    class="register-input register-under-line register-code"\n                    placeholder="\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"\n                    ng-model="formData.code">\n                <button class="button register-btn-color"\n                    ng-class="checkDisabled(regForm)?\'button-light\':\'button-positive\'"\n                    ng-disabled="checkDisabled(regForm)"\n                    ng-bind="codeText"\n                    ng-click="getCode()"></button>\n            </div>\n        </div>\n    </form>\n  </ion-content>\n</ion-view>\n\n');
$templateCache.put('modifyName.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u4FEE\u6539\u59D3\u540D</ion-nav-title>\n  <ion-nav-buttons side="secondary">\n    <button class="button button-stable" ng-click="save()">\n     \u786E\u5B9A\n    </button>\n  </ion-nav-buttons>\n  <ion-content class="modifyName-wrapper">\n    <div class="list">\n      <div class="item">\n        <input class="modifyName-input" placeholder="\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D" ng-model="data.name"/>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n\n');
$templateCache.put('modifyPassword.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u4FEE\u6539\u5BC6\u7801</ion-nav-title>\n  <ion-nav-buttons side="secondary">\n    <button class="button button-stable" ng-click="save()">\n     \u786E\u5B9A\n    </button>\n  </ion-nav-buttons>\n  <ion-content class="modifyPassword-wrapper">\n    <form class="register-form" name="regForm" novalidate="true" ng-model="formData">\n        <div class="register-input-area">\n            <div class="item-input">\n                <span>\u624B\u673A\u53F7\u7801</span>\n                <input type="tel"\n                    readonly\n                    class="register-input modifyPassword-readonly"\n                    ng-value="formData.oldMobile+\'(\u5DF2\u7ED1\u5B9A)\'">\n            </div>\n            <div class="item-input">\n                <span>\u65B0\u5BC6\u7801</span>\n                <input type="password" name="pwd"\n                    maxlength="16"\n                    minlength="6"\n                    required\n                    ng-change="checkPwd(regForm)"\n                    class="register-input"\n                    placeholder="\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"\n                    ng-model="formData.pwd">\n            </div>\n            <div class="item-input">\n                <span>\u786E\u8BA4\u5BC6\u7801</span>\n                <input type="password" name="confirmPwd"\n                    maxlength="16"\n                    minlength="6"\n                    required\n                    class="register-input"\n                    placeholder="\u8BF7\u786E\u8BA4\u8F93\u5165"\n                    ng-change="checkPwd(regForm)"\n                    ng-model="formData.confirmPwd">\n            </div>\n            <div class="item-input">\n                <span class="register-under-line">\u9A8C\u8BC1\u7801</span>\n                <input type="number" name="code"\n                    required\n                    maxlength="6"\n                    minlength="6"\n                    class="register-input register-under-line register-code"\n                    placeholder="\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"\n                    ng-model="formData.code">\n                <button class="button register-btn-color"\n                    ng-class="checkDisabled(regForm)?\'button-light\':\'button-positive\'"\n                    ng-disabled="checkDisabled(regForm)"\n                    ng-bind="codeText"\n                    ng-click="getCode()"></button>\n            </div>\n        </div>\n    </form>\n  </ion-content>\n</ion-view>\n\n');
$templateCache.put('modifySex.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u6027\u522B</ion-nav-title>\n  <ion-content class="modifySex-wrapper">\n  <div class="list">\n      <div class="item">\n        <div ng-repeat="x in [{id:1,txt:\'\u7537\'},{id:2,txt:\'\u5973\'}] track by $index" ng-click="save(x)">\n          <span ng-bind="x.txt" class="modifySex-label"></span>\n          <i class="modifySex-icon" ng-class="sex.id==x.id?\'ion-checkmark\':\'\'"></i>\n        </div>\n      </div>\n  </div>\n  </ion-content>\n</ion-view>\n\n');
$templateCache.put('modifyuserinfo.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u4E2A\u4EBA\u4FE1\u606F</ion-nav-title>\n  <ion-content class="modifyuserin">\n  <div class="modifyuserinfo">\n    <div class="modifyuserinfo-info">\n      <div class="modifyuserinfo-info-headpic" ngf-select="selectFiles($files)" ngf-accept="\'image/*\'">\n        <div class="modifyuserinfo-headpic-text">\u5934\u50CF</div>\n        <div class="modifyuserinfo-headpic-img">\n          <img ngf-src="user.headerImage?user.headerImage+\'-suishi200\':\'./img/myhome-userimg.png\'" alt="">\n        </div>\n        <span>&gt;</span>\n      </div>\n      <div class="modifyuserinfo-info-name" ui-sref="modifyusername">\n        <div class="modifyuserinfo-headpic-name-text">\u59D3\u540D</div>\n        <div class="modifyuserinfo-headpic-username-text" ng-bind="user.name||\'\u533F\u540D\'"></div>\n        <span>&gt;</span>\n      </div>\n      <div class="modifyuserinfo-info-name" ui-sref="modifySex">\n        <div class="modifyuserinfo-headpic-name-text">\u6027\u522B</div>\n        <div class="modifyuserinfo-headpic-username-text" ng-bind="{1:\'\u7537\',2:\'\u5973\',null:\'\u7537\'}[user.sex]"></div>\n        <span>&gt;</span>\n      </div>\n      <div class="modifyuserinfo-info-name" ui-sref="modifyBirthday">\n        <div class="modifyuserinfo-headpic-name-text">\u51FA\u751F\u65E5\u671F</div>\n        <div class="modifyuserinfo-headpic-username-text" ng-model="user.birth" mobiscroll-datetime="dateSettings" ng-bind="user.birth|date:\'yyyy\u5E74MM\u6708dd\u65E5\'"></div>\n        <span>&gt;</span>\n      </div>\n      <div class="modifyuserinfo-info-name" ui-sref="modifyMobile">\n        <div class="modifyuserinfo-headpic-name-text">\u624B\u673A</div>\n        <div class="modifyuserinfo-headpic-username-text" ng-bind="user.mobile"></div>\n        <span>&gt;</span>\n      </div>\n      <div class="modifyuserinfo-info-name">\n        <div class="modifyuserinfo-headpic-name-text">\u56FA\u8BDD</div>\n        <div class="modifyuserinfo-headpic-username-text modifyuserinfo-tel" ng-bind="user.telphone"></div>\n        <!-- <span>&gt;</span> -->\n      </div>\n      <div class="modifyuserinfo-info-name" ui-sref="modifyaddress">\n        <div class="modifyuserinfo-headpic-name-address">\u5730\u5740</div>\n        <div class="modifyuserinfo-addredd" ng-bind-template="{{user.provinceName}} {{user.cityName}} {{user.districtName}} {{user.addr}}"></div>\n        <span>&gt;</span>\n      </div>\n    </div>\n    <div class="modifyuserinfo-info social-security">\n      <div class="modifyuserinfo-info-name">\n        <div class="modifyuserinfo-headpic-name-text">\u793E\u4FDD\u53F7</div>\n        <div class="modifyuserinfo-headpic-username-text" ng-bind="user.socialSecNo"></div>\n        <span></span>\n      </div>\n      <div class="modifyuserinfo-info-name">\n        <div class="modifyuserinfo-headpic-name-text">\u5065\u5EB7\u6863\u6848\u7F16\u53F7</div>\n        <div class="modifyuserinfo-headpic-username-text" ng-bind="user.fileNo"></div>\n        <span></span>\n      </div>\n    </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('modifyusername.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u59D3\u540D</ion-nav-title>\n    <ion-nav-buttons side="secondary">\n      <button class="button button-stable" ng-click="save()">\n       \u786E\u5B9A\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="modifyusername">\n    <div class="list">\n      <div class="item item-input">\n        <label>\u59D3\u540D\uFF1A</label>\n        <input class="modifyName-input" placeholder="\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D" ng-model="data.name"/>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('myhome.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u6211\u7684\u4E3B\u9875</ion-nav-title>\n  <ion-nav-buttons side="secondary">\n    <button class="button button-clear myhome-userinfo-header-button" ng-click="toggleMenu()">\n     <i class="icon iconfont icon-xiaoxi"></i>\n    </button>\n  </ion-nav-buttons>\n  <ion-content overflow-scroll>\n    <div class="myhome">\n      <div class="myhome-userinfo has-tabs">\n        <dl>\n          <dt class="myhome-user-head"><img ngf-src="user.headerImage||\'./img/doctor.png\'" alt=""></dt>\n          <dd class="myhome-user-name">{{user.name}}<span>VIP</span></dd>\n          <dd class="myhome-user-sex">\u7537<span>|</span> {{user.age}}\u5C81</dd>\n        </dl>\n        <div class="myhome-user-address"><i class="fa fa-map-marker myhome-address"></i>{{user.addr}}</div>\n      </div>\n      <div class="myhome-about" ui-sref="modifyuserinfo">\n        <div class="myhome-user-info">\n          \u4E2A\u4EBA\u4FE1\u606F\n          <span>&gt;</span>\n        </div>\n      </div>\n      <div class="myhome-about" ui-sref="familylist">\n        <div class="myhome-user-info">\n          \u6211\u7684\u5BB6\u4EBA\n          <span>&gt;</span>\n        </div>\n      </div>\n      <div class="myhome-about" ui-sref="myhomedoctor">\n        <div class="myhome-user-info">\n          \u6211\u7684\u5BB6\u5EAD\u533B\u751F\n          <span>&gt;</span>\n        </div>\n      </div>\n      <div class="myhome-user-vip">\n        <div class="myhome-user-info">\n          \u4F1A\u5458\u4E13\u533A\n          <span>&gt;</span>\n        </div>\n      </div>\n      <div class="myhome-user-help" ui-sref="suggest">\n        <div class="myhome-user-info">\n          \u5E2E\u52A9\u4E0E\u53CD\u9988\n          <span>&gt;</span>\n        </div>\n      </div>\n      <div class="myhome-about" ui-sref="setting">\n        <div class="myhome-user-info">\n          \u8BBE\u7F6E\n          <span>&gt;</span>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('myhomedoctor.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u6211\u7684\u5BB6\u5EAD\u533B\u751F</ion-nav-title>\n  <ion-content class="modifyaddress">\n    <div class="mydoctor">\n      <div class="myhomedoctor-doctor">\n        <dl>\n          <dt>\n            <img ngf-src="doctor.headerImage||\'./img/doctor.png\'">\n            <div class="mydoctor-title" ng-bind="doctor.jobTitle"></div>\n          </dt>\n          <dd class="myhomedoctor-name" ng-bind="doctor.realName"></dd>\n          <dd class="myhomedoctor-post">\n            <span ng-bind="doctor.orgName"></span>\n            <span ng-bind="doctor.job"></span>&nbsp;\n            <span ng-bind="doctor.departmentName"></span>\n          </dd>\n        </dl>\n      </div>\n    </div>\n    <div class="myhomedoctor-service-time">\n      \u670D\u52A1\u671F\u9650\n    </div>\n    <div class="myhomedoctor-service-date-time">\n      <span ng-if="user.startDate && user.endDate">{{user.startDate|date:\'yyyy\u5E74MM\u6708\'}}\u81F3{{user.endDate|date:\'yyyy\u5E74MM\u6708\'}}</span>\n      <span ng-if="!user.startDate && !user.endDate">--&nbsp;\u81F3&nbsp;--</span>\n    </div>\n    <div class="myhomedoctor-service-content">\n      \u670D\u52A1\u5185\u5BB9\n    </div>\n    <div class="myhomedoctor-service-cont">\n      \u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u9996\u90FD\u533B\u79D1\u5927\u5B66\u5BA3\u6B66\u533B\u9662\u7279\u522B\u987E\u95EE\uFF0C\u4E2D\u56FD\u7F8E\u56FD\u4E09\u56FD\u6267\u7167\u533B\u5E08\uFF0C\u591A\u5E74\u4ECE\u4E8B\u4E09\u7532\u7406\u5DE5\u4F5C\u3002\u9ED1\u9F99\u6C5F\u548C\u5E73\u533B\u9662\u4E1A\u52A1\u9662\u957F\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u6211\u7701\u8D44\u6DF1\u5185\u79D1\u4E13\u5BB6\u4E13\u5BB6\u4E13\u5BB6\uFF0C\u9996\u90FD\u533B\u79D1\u5927\u5B66\u5BA3\u6B66\u533B\u9662\u7279\u522B\u987E\u95EE\uFF0C\u4E2D\u56FD\u7F8E\u56FD\u4E09\u56FD\u6267\u7167\u533B\u5E08\uFF0C\u591A\u5E74\u4ECE\u4E8B\u4E09\u7532\u7406\u5DE5\u4F5C\u3002\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('recordbloodfat.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u8840\u8102</ion-nav-title>\n    <ion-nav-buttons side="secondary">\n      <button class="button button-stable" ng-click="save()">\n       \u4FDD\u5B58\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="recordbloodfat">\n    <div high-charts config="chartConfig" class="high-charts" load-chart-data="loadChartData"></div>\n    <div class="recordbloodfat-date" ng-model="data.datetime" mobiscroll-datetime="dateSettings">\n      {{data.datetime|datetime:\'yyyy\u5E74MM\u6708dd\u65E5 HH:mm\'}}\n    </div>\n    <div class="recordbloodfat-time-pressure">\n      <div class="recordbloodfat-time-pressure-record" click-on-start ng-model="data.numVal" mobiscroll-number="numSettings">\n        <span class="recordbloodfat-time-pressure-num" ng-bind="data.numVal"></span>mmol/L\n      </div>\n      <div class="recordbloodfat-subsisted">\n        \u8840\u8102\n      </div>\n    </div>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('recordbloodglucose.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u8840\u7CD6</ion-nav-title>\n    <ion-nav-buttons side="secondary">\n      <button class="button button-stable" ng-click="save()">\n       \u4FDD\u5B58\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="recordbloodglucose">\n    <div high-charts config="chartConfig" class="high-charts" load-chart-data="loadChartData"></div>\n    <div class="recordbloodglucose-date" ng-model="data.datetime" mobiscroll-datetime="dateSettings">\n      {{data.datetime|datetime:\'yyyy\u5E74MM\u6708dd\u65E5 HH:mm\'}}\n    </div>\n    <div class="recordbloodglucose-time-pressure">\n      <div class="recordbloodglucose-time-pressure-record" click-on-start ng-model="data.numVal" mobiscroll-number="numSettings">\n        <span class="recordbloodglucose-time-pressure-num" ng-bind="data.numVal"></span>mmol/L\n      </div>\n      <div class="recordbloodglucose-subsisted">\n        <span ng-repeat="x in mealTimeList" ng-bind="x.dictName" ng-class="{\'recordbloodglucose-subsisted-check\':data.selectedTime == x}" ng-click="data.selectedTime = x"></span>\n      </div>\n      <div class="recordbloodglucose-subsisted-time">\n        <span ng-repeat="x in mealTypeList" ng-bind="x.dictName" ng-class="{\'recordbloodglucose-subsisted-check\':data.selectedType == x}" ng-click="data.selectedType = x"></span>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('recordbloodpressure.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u8840\u538B</ion-nav-title>\n    <ion-nav-buttons side="secondary">\n      <button class="button button-stable" ng-click="save()">\n       \u4FDD\u5B58\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="recordbloodpressure">\n    <div high-charts config="chartConfig" class="high-charts" load-chart-data="loadChartData"></div>\n    <div class="recordbloodpressure-date" ng-model="data.datetime" mobiscroll-datetime="dateSettings">\n      {{data.datetime|datetime:\'yyyy\u5E74MM\u6708dd\u65E5 HH:mm\'}}\n    </div>\n    <div class="recordbloodpressure-time-pressure">\n      <div class="recordbloodpressure-time-tallpressure" click-on-start ng-model="data.hightVal" mobiscroll-number="numSettings">\n          <div class="recordbloodpressure-time-tall-num">\n            <span ng-bind="data.hightVal"></span>mmhg\n          </div>\n          <div class="recordbloodpressure-time-tall-text">\n              \u9AD8\u538B\n          </div>\n      </div>\n      <div class="bloodpressure-tall-low"></div>\n      <div class="recordbloodpressure-time-lowpressure" ng-model="data.lowVal" mobiscroll-number="numSettings">\n          <div class="recordbloodpressure-time-low-num">\n            <span ng-bind="data.lowVal"></span>mmhg\n          </div>\n          <div class="recordbloodpressure-time-low-text">\n              \u4F4E\u538B\n          </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('recordbmi.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>BMI</ion-nav-title>\n    <ion-nav-buttons side="secondary">\n      <button class="button button-stable" ng-click="save()">\n       \u4FDD\u5B58\n      </button>\n    </ion-nav-buttons>\n  <ion-content class="recordbmi">\n    <div high-charts config="chartConfig" class="high-charts" load-chart-data="loadChartData"></div>\n    <div class="recordbmi-date" ng-model="data.datetime" mobiscroll-datetime="dateSettings">\n      {{data.datetime|datetime:\'yyyy\u5E74MM\u6708dd\u65E5 HH:mm\'}}\n    </div>\n    <div class="recordbmi-time-pressure">\n      <div class="recordbmi-time-tallpressure" click-on-start ng-model="data.heightVal" mobiscroll-number="heightSettings">\n          <div class="recordbmi-time-tall-num">\n            <span ng-bind="data.heightVal"></span>cm\n          </div>\n          <div class="recordbmi-time-tall-text">\n              \u8EAB\u9AD8\n          </div>\n      </div>\n      <div class="bloodpressure-tall-low">\n\n      </div>\n      <div class="recordbmi-time-lowpressure" ng-model="data.weightVal" mobiscroll-number="weightSettings">\n          <div class="recordbmi-time-low-num">\n            <span ng-bind="data.weightVal"></span>kg\n          </div>\n          <div class="recordbmi-time-low-text">\n              \u4F53\u91CD\n          </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('register.html','<ion-view hide-nav-bar="false">\n    <ion-nav-title>\u6CE8\u518C</ion-nav-title>\n    <ion-nav-buttons side="left">\n        <button class="button button-clear button-back" ng-click="doSomething()">\n        <i class="ion-ios-close-outline"></i>\n        </button>\n    </ion-nav-buttons>\n    <ion-content>\n    <form class="register-form" name="regForm" novalidate="true" ng-model="formData">\n        <div class="register-input-area">\n            <div class="item-input">\n                <span>\u624B\u673A\u53F7</span>\n                <input type="tel" name="mobile"\n                    required\n                    class="register-input"\n                    placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7"\n                    ng-model="formData.mobile">\n            </div>\n            <div class="item-input">\n                <span>\u5BC6\u7801</span>\n                <input type="password" name="pwd"\n                    maxlength="16"\n                    minlength="6"\n                    required\n                    ng-change="checkPwd(regForm)"\n                    class="register-input"\n                    placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"\n                    ng-model="formData.pwd">\n            </div>\n            <div class="item-input">\n                <span>\u786E\u8BA4\u5BC6\u7801</span>\n                <input type="password" name="confirmPwd"\n                    maxlength="16"\n                    minlength="6"\n                    required\n                    class="register-input"\n                    placeholder="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"\n                    ng-change="checkPwd(regForm)"\n                    ng-model="formData.confirmPwd">\n            </div>\n            <div class="item-input">\n                <span class="register-under-line">\u9A8C\u8BC1\u7801</span>\n                <input type="number" name="code"\n                    required\n                    class="register-input register-under-line register-code"\n                    placeholder="\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"\n                    ng-model="formData.code">\n                <button class="button register-btn-color"\n                    ng-class="checkDisabled(regForm)?\'button-light\':\'button-positive\'"\n                    ng-disabled="checkDisabled(regForm)"\n                    ng-bind="codeText"\n                    ng-click="getCode()"></button>\n            </div>\n        </div>\n        <div class="register-submit-btn">\n            <button class="button button-block register-btn-color"\n            ng-class="regForm.$invalid?\'button-light\':\'button-positive\'"\n            ng-disabled="regForm.$invalid"\n            ng-click="register()">\u6CE8\u518C</button>\n        </div>\n        <div class="register-terms">\u5DF2\u9605\u8BFB\u5E76\u540C\u610F<a ui-sref="terms">\u300A\u591A\u70B9\u5065\u5EB7\u7528\u6237\u670D\u52A1\u6761\u6B3E\u300B</a></div>\n    </form>\n    </ion-content>\n</ion-view>\n');
$templateCache.put('schedule.html','<ion-view hide-nav-bar="false">\n<ion-nav-title>\u6211\u7684\u9884\u7EA6</ion-nav-title>\n<ion-content scroll="false">\n<div class="healthFiles-tab-header">\n  <li ng-repeat="x in tabNames" ng-click="toggleTab($index)" ng-class="$index==slider.activeIndex?\'active\':\'\'">\n    <span ng-bind="x"></span>\n  </li>\n</div>\n<ion-slides class="healthFiles-slides" slider="data.slider">\n<ion-slide-page>\n<ion-content>\n<ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0" on-refresh="doRefresh()"></ion-refresher>\n<ion-scroll>\n<div class="schedule-content-wrapper">\n  <div>\n    <div class="now-schedule-list">\n      <div class="schedule-user-info">\n        <div class="schedule-user-info-head"><img ngf-src="doctorInfo.headerImage?doctorInfo.headerImage+\'-suishi200\':\'img/user.png\'" alt=""></div>\n        <div class="schedule-user-info-name">\n          <span ng-bind="doctorInfo.realName"></span> <br />\n          <em ng-bind="doctorInfo.age||46"></em>\u5C81 | <em ng-bind="{\'1\':\'\u7537\',\'2\':\'\u5973\',null:\'\u7537\'}[doctorInfo.sex]"></em>\n        </div>\n        <div class="schedule-user-info-all">\n          <i class="servicehome-lists icon-shouji"\n            ng-click="doFilter(\'TEL_SCHEDULE\')"\n            ng-class="{\'servicehome-lists-active\':filter==\'TEL_SCHEDULE\'}"></i>\n          <i class="servicehome-lists icon-video-copy"\n            ng-click="doFilter(\'VEDIO_SCHEDULE\')"\n            ng-class="{\'servicehome-lists-active\':filter==\'VEDIO_SCHEDULE\'}"></i>\n          <i class="servicehome-lists icon-yiyao"\n            ng-click="doFilter(\'OUTPATIENT\')"\n            ng-class="{\'servicehome-lists-active\':filter==\'OUTPATIENT\'}"></i>\n          <span ng-click="doFilter(\'\')" ng-class="{\'servicehome-lists-active\':filter==\'\'}">\u5168\u90E8</span>\n        </div>\n      </div>\n    </div>\n    <div class="healthFiles-content-wrapp now-schedule-list" ng-repeat="x in listCurrentSchedule.pageList">\n      <div class="now-schedule now-schedule-one">\n        <div class="schedule-user-info">\n          <div class="schedule-user-info-tel">\n            <i class="servicehome-lists" ng-class="icon[x.scheduleType]"></i><span ng-bind="type[x.scheduleType]"></span>\n          </div>\n          <div class="schedule-user-info-date" ng-bind="x.workDate"></div>\n        </div>\n        <div class="schedule-time">\n          <span class="sch-time-hour" ng-bind="x.beginTime"></span>\n          <span class="sch-time-till">\u81F3</span><span class="sch-time-hour" ng-bind="x.endTime"></span>\n        </div>\n        <div class="schedule-symptom">\u75C7\u72B6\uFF1A<span ng-bind="x.symptomDesc"></span></div>\n        <div class="schedule-remarks">\u5907\u6CE8\uFF1A<span ng-bind="x.comments"></span></div>\n        <div class="schedule-btn">\n          <div><button class="button button-small button-update" ui-sref="appointment({type:x.scheduleType,id:x.id})">\u4FEE\u6539\u9884\u7EA6</button></div>\n          <div><button class="button button-small button-cancel" ng-click="cancel(x)" ng-model="_popup" close-popup-back-drop>\u53D6\u6D88\u9884\u7EA6</button></div>\n        </div>\n      </div>\n    </div>\n    <div ng-if="listCurrentSchedule.pageList.length==0">\u6CA1\u6709\u6570\u636E</div>\n  </div>\n</div>\n</ion-scroll>\n<ion-infinite-scroll ng-if="canLoadMore(0)" distance="10%" immediate-check="false" on-infinite="loadMoreData()"/>\n</ion-content>\n</ion-slide-page>\n<ion-slide-page>\n<ion-content>\n<ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0" on-refresh="doRefresh()"></ion-refresher>\n<ion-scroll>\n<div class="schedule-content-wrapper">\n  <div class="history-schedule">\n    <div class="healthFiles-content-wrapp now-schedule-list" ng-repeat="x in listHistorySchedule.pageList">\n      <div class="history-schedule now-schedule-one">\n        <div class="history-schedule-user">\n          <div class="histroy-schedule-date">\n            <span ng-bind="x.workDate|date:\'d\'">19</span><em ng-bind="x.workDate|date:\'MM\u6708\'">10\u6708</em>\n          </div>\n          <div class="history-schedule-info">\n            <div class="history-schedule-time">{{x.beginTime}}\u81F3{{x.endTime}} <span class="servicehome-lists"><i class=" icon-shouji"></i></span>  </div>\n            <div class="history-schedule-symptom">\u75C7\u72B6\uFF1A<span ng-bind="x.symptomDesc"></span></div>\n            <div class="history-schedule-remarks">\u5907\u6CE8\uFF1A<span ng-bind="x.comments"></span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</ion-scroll>\n<ion-infinite-scroll ng-if="canLoadMore(1)" distance="10%" immediate-check="false" on-infinite="loadMoreData()"/>\n</ion-content>\n</ion-slide-page>\n</ion-slides>\n</ion-content>\n</ion-view>\n');
$templateCache.put('selectArea.html','<ion-modal-view>\n  <ion-header-bar>\n    <div class="bar bar-header bar-positive row row-center">\n      <div class="col col-50 col-center">\n        \u9009\u62E9\u5730\u533A\n      </div>\n      <div class="col col-50 col-center">\n        <button class="button button-clear pull-right button-small" ng-click="cancelArea()">\u53D6\u6D88</button>\n      </div>\n    </div>\n  </ion-header-bar>\n  <ion-content class="selectArea-wrapper">\n    <div class="list">\n      <a class="item item-icon-right" ng-repeat="x in areas" ng-click="selectArea(nowLevel+1,x)">\n        <i class="icon ion-ios-arrow-right"></i>\n        {{x.regionName}}\n      </a>\n    </div>\n  </ion-content>\n</ion-modal-view>\n');
$templateCache.put('servicehome.html','<ion-view hide-nav-bar="false">\n  <ion-nav-title>\u6211\u7684\u670D\u52A1</ion-nav-title>\n  <ion-nav-buttons side="secondary">\n  <button class="button button-small button-clear" ng-click="toggleMenu()"><i class="ion-navicon-round"></i></button>\n  </ion-nav-buttons>\n  <ion-content class="servicehome has-tabs">\n    <div class="servicehome-doctor" ng-if="user.signStatus == \'1\' || user.signStatus == \'0\'">\n      <div class="servicehome-doctor-head">\n        <img ngf-src="doctorInfo.headerImage||\'./img/doctor.png\'" class="servicehome-doctor-head-pic" alt="">\n        <div class="servicehome-doctor-head-job">{{doctorInfo.jobTitle}}</div>\n      </div>\n      <div class="servicehome-doctor-info">\n        <dic class="servicehome-doctor-name"><span>{{doctorInfo.realName}}</span>{{doctorInfo.age}}\u5C81</dic>\n        <dic class="servicehome-doctor-title">{{doctorInfo.orgName}}|\u6162\u75C5\u79D1</dic>\n        <dic class="servicehome-doctor-tel">\u7535\u8BDD\uFF1A{{doctorInfo.mobile}}</dic>\n      </div>\n      <div class="doctor-not-confirmed" ng-if="user.signStatus==\'0\'" ui-sref="cancelacontract({doctorId:user.doctorId})">\n        \u5BB6\u5EAD\u533B\u5E08<br>\u786E\u8BA4\u4E2D\u2026\u2026\n      </div>\n    </div>\n    <div class="servicehome-myservice">\n      <div class="servicehome-myprescription" ng-click="comeSoon()">\n        <i class="servicehome-lists icon-jiancha"></i>\u6211\u7684\u5904\u65B9\n      </div>\n      <div class="servicehome-myservice-center">\n      </div>\n      <div class="service-mychecklist" ng-click="comeSoon()">\n        <i class="servicehome-lists icon-chufangxinxi"></i>\n        \u6211\u7684\u68C0\u67E5\u5355\n      </div>\n    </div>\n    <div class="servicehome-list servicehome-first">\n      <dl ng-click="comeSoon()">\n        <dt><i class="servicehome-lists icon-zixun"></i></dt>\n        <dd>\u56FE\u6587\u54A8\u8BE2</dd>\n      </dl>\n      <dl ui-sref="appointment({type:\'TEL_SCHEDULE\'})">\n        <dt><i class="servicehome-lists icon-shouji"></i></dt>\n        <dd>\u7535\u8BDD\u9884\u7EA6</dd>\n      </dl>\n      <dl ui-sref="appointment({type:\'VEDIO_SCHEDULE\'})">\n        <dt><i class="servicehome-lists icon-video-copy"></i></dt>\n        <dd>\u89C6\u9891\u9884\u7EA6</dd>\n      </dl>\n    </div>\n    <div class="servicehome-list">\n      <dl ui-sref="appointment({type:\'OUTPATIENT\'})">\n        <dt><i class="servicehome-lists icon-yiyao"></i></dt>\n        <dd>\u5C31\u8BCA\u9884\u7EA6</dd>\n      </dl>\n      <dl ng-click="comeSoon()">\n        <dt><i class="servicehome-lists icon-yao"></i></dt>\n        <dd>\u9001\u836F</dd>\n      </dl>\n      <dl ng-click="comeSoon()">\n        <dt><i class="servicehome-lists icon-kangfu"></i></dt>\n        <dd>\u5EB7\u590D</dd>\n      </dl>\n    </div>\n    <div class="servicehome-list">\n      <dl ng-click="comeSoon()">\n        <dt><i class="servicehome-lists icon-peizhenfuwurenqun"></i></dt>\n        <dd>\u966A\u8BCA</dd>\n      </dl>\n      <dl ng-click="comeSoon()">\n        <dt><i class="servicehome-lists icon-zixun"></i></dt>\n        <dd>\u968F\u8BBF</dd>\n      </dl>\n      <dl ng-click="comeSoon()">\n        <dt><i class="servicehome-lists icon-tijian"></i></dt>\n        <dd>\u4F53\u68C0</dd>\n      </dl>\n    </div>\n    <div class="servicehome-lists-buttom-bar" ng-if="user.signStatus != \'0\' && user.signStatus !=\'1\'">\n      <button class="button button-full button-energized" ng-click="goSign()">\u6211\u8981\u7B7E\u7EA6</button>\n    </div>\n  </ion-content>\n  </ion-view>\n');
$templateCache.put('setting.html','<ion-view hide-nav-bar="false">\n<ion-nav-title>\u8BBE\u7F6E</ion-nav-title>\n<ion-content class="content-list-wrapper">\n<div class="content-list">\n  <div class="content-list-item" ui-sref="modifyPassword">\n    <div class="content-list-item-label">\u4FEE\u6539\u5BC6\u7801</div>\n    <div class="content-list-item-text"></div>\n    <span><i class="ion-ios-arrow-forward"></i></span>\n  </div>\n  <div class="content-list-item" ng-click="clearCache()" ng-model="_popup" close-popup-back-drop>\n    <div class="content-list-item-label">\u6E05\u9664\u7F13\u5B58</div>\n    <div class="content-list-item-text">10.5MB</div>\n    <span><i class="ion-ios-arrow-forward"></i></span>\n  </div>\n  <div class="content-list-item">\n    <div class="content-list-item-label">\u68C0\u6D4B\u7248\u672C\u66F4\u65B0</div>\n    <div class="content-list-item-text">v1.0.0</div>\n    <span><i class="ion-ios-arrow-forward"></i></span>\n  </div>\n  <div class="content-list-item">\n    <div class="content-list-item-label">\u5173\u4E8E\u6211\u4EEC</div>\n    <div class="content-list-item-text"></div>\n    <span><i class="ion-ios-arrow-forward"></i></span>\n  </div>\n</div>\n<div>\n  <button class="button setting-button-quit-login" ng-click="logout()">\u9000\u51FA\u767B\u5F55</button>\n</div>\n</ion-content>\n</ion-view>\n');
$templateCache.put('suggest.html','<ion-view hide-nav-bar="false">\n<ion-nav-title>\u6295\u8BC9\u4E0E\u5EFA\u8BAE</ion-nav-title>\n<ion-content class="suggest-wrapper">\n  <div class="list">\n      <div class="item">\u60A8\u7684\u53CD\u9988</div>\n      <div class="item suggest-feedback-item">\n        <div class="suggest-feedback-wrapper">\n          <textarea class="suggest-feedback-input" placeholder="\u5728\u6B64\u8F93\u5165\u60A8\u63D0\u51FA\u7684\u610F\u89C1"></textarea>\n          <div class="suggest-feedback-upload-wrapper">\n            <div class="suggest-feedback-upload-btn"><i class="ion-ios-plus-empty"></i></div>\n            <div class="suggest-feedback-upload-txt">\n              <p>\u8BF7\u4E0A\u4F20\u95EE\u9898\u622A\u56FE</p>\n              <p>\uFF08\u65B9\u4FBF\u6211\u4EEC\u66F4\u597D\u7684\u5904\u7406\u60A8\u7684\u53CD\u9988\uFF09</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="item suggest-item">\n        <div>\u8054\u7CFB\u65B9\u5F0F</div>\n        <div class="suggest-item-two-col">\n          <label>\u624B\u673A\u53F7</label>\n          <input placeholder="\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7\u4EE5\u4FBF\u4E8E\u6211\u4EEC\u8054\u7CFB\u5230\u60A8">\n        </div>\n        <div class="suggest-item-two-col">\n          <label>\u5FAE\u4FE1/QQ</label>\n          <input placeholder="\u8F93\u5165\u60A8\u7684\u793E\u4EA4\u5E10\u53F7\u4EE5\u4FBF\u4E8E\u6211\u4EEC\u8054\u7CFB\u5230\u60A8">\n        </div>\n      </div>\n  </div>\n  <div class="register-submit-btn">\n      <button class="button button-block register-btn-color"\n      class="button-light"\n      ng-click="submit()">\u63D0\u4EA4</button>\n  </div>\n</ion-content>\n</ion-view>\n');
$templateCache.put('terms.html','<ion-view hide-nav-bar="false">\n<ion-nav-title>\u670D\u52A1\u6761\u6B3E</ion-nav-title>\n<ion-nav-buttons side="left">\n<button class="button" ng-click="doSomething()">\n<i class="ion-ios-close-outline icon-size-20"></i>\n</button>\n</ion-nav-buttons>\n<ion-content>\n\u591A\u70B9\u5065\u5EB7\u670D\u52A1\u6761\u6B3E\n</ion-content>\n</ion-view>\n');}]);
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('homeApp', ['ionic', 'templates','ngFileUpload', 'mobiscroll-datetime', 'mobiscroll-number'])
	.run(['$ionicPlatform', function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);

			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
	}])

.config(['$logProvider', '$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', '$ionicConfigProvider', '$anchorScrollProvider', function($logProvider, $stateProvider, $urlRouterProvider, $sceDelegateProvider, $ionicConfigProvider, $anchorScrollProvider) {
	$logProvider.debugEnabled(true);
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.views.maxCache(0);
	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.position('standard');
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
	$ionicConfigProvider.templates.maxPrefetch(0);
	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
		.state('home', {
			url: "/home",
			cache: false,
			templateUrl: "home.html",
      controller:"homeCtrl"
		})
		.state('home.index', {
			url: '/index',
			cache: false,
			views: {
				'home-index': {
					templateUrl: 'index.html',
					controller: 'homeIndexCtrl'
				}
			}
		})
		.state('home.servicehome', {
			url: '/servicehome',
			cache: false,
			views: {
				'home-index': {
					templateUrl: 'servicehome.html',
          controller: 'serviceHomeCtrl'
				}
			}
		})
		.state('healthFiles', {
			url: '/healthFiles',
			cache: false,
			templateUrl: 'healthFiles.html',
			controller: 'healthFilesCtrl',
      resolve:{
        checkLogin: ['UserService',function(UserService){
          return UserService.checkLogin();
        }]
      }
		})
		.state('home.myhome', {
			url: '/myhome',
			cache: false,
			views: {
				'home-index': {
					templateUrl: 'myhome.html',
          controller:'myhomeCtrl',
          resolve:{
            checkLogin: ['UserService',function(UserService){
              return UserService.checkLogin();
            }]
          }
				}
			}
		})
		.state('login', {
			url: '/login',
			cache: false,
			templateUrl: 'login.html',
			controller: 'loginCtrl'
		})
		.state('register', {
			url: '/register',
			cache: false,
			templateUrl: 'register.html',
			controller: 'registerCtrl'
		})
		.state('terms', {
			url: '/terms',
			cache: false,
			templateUrl: 'terms.html'
		})
		.state('schedule', {
			url: '/schedule',
			cache: false,
			templateUrl: 'schedule.html',
			controller: 'schedule'
		})
		.state('modifyuserinfo', {
			url: '/modifyuserinfo',
			cache: false,
			templateUrl: 'modifyuserinfo.html',
      controller: 'modifyuserinfoCtrl'
		})
		.state('modifyMobile', {
			url: '/modifyMobile',
			cache: false,
			templateUrl: 'modifyMobile.html',
			controller: 'modifyMobileCtrl'
		})
		.state('modifyaddress', {
			url: '/modifyaddress',
			cache: false,
			templateUrl: 'modifyaddress.html',
      controller: 'modifyAddressCtrl'
		})
		.state('modifyPassword', {
			url: '/modifyPassword',
			cache: false,
			templateUrl: 'modifyPassword.html',
			controller: 'modifyPasswordCtrl'
		})
    .state('modifySex', {
      url: '/modifySex',
      cache: false,
      templateUrl: 'modifySex.html',
      controller: 'modifySexCtrl'
    })
		.state('modifyBirthday', {
			url: '/modifyBirthday',
			cache: false,
			templateUrl: 'modifyBirthday.html',
			controller: 'modifyBirthdayCtrl'
		})
		.state('suggest', {
			url: '/suggest',
			cache: false,
			templateUrl: 'suggest.html'
		})
		.state('myhomedoctor', {
			url: '/myhomedoctor',
			cache: false,
			templateUrl: 'myhomedoctor.html',
      controller:'myhomedoctorCtrl',
      resolve:{
        checkSign: ['UserService',function(UserService){
          return UserService.checkSign();
        }]
      },
		})
		.state('modifyusername', {
			url: '/modifyusername',
			cache: false,
			templateUrl: 'modifyusername.html',
      controller: 'modifyNameCtrl'
		})
		.state('selectArea', {
			url: '/selectArea',
			cache: false,
			templateUrl: 'selectArea.html',
			controller: 'selectAreaCtrl'
		})
		.state('familylist', {
			url: '/familylist',
			cache: false,
			templateUrl: 'familylist.html',
      controller:'familylist'
		})
		.state('setting', {
			url: '/setting',
			cache: false,
			templateUrl: 'setting.html',
			controller: 'settingCtrl'
		})
		.state('addfamily', {
			url: '/addfamily?familyUserId',
			cache: false,
			templateUrl: 'addfamily.html',
      controller: 'addfamilyCtrl'
		})
		.state('recordbloodpressure', {
			url: '/recordbloodpressure',
			cache: false,
			templateUrl: 'recordbloodpressure.html',
			controller: 'recordblodpressureCtrl'
		})
		.state('recordbloodfat', {
			url: '/recordbloodfat',
			cache: false,
			templateUrl: 'recordbloodfat.html',
			controller: 'recordbloodfatCtrl'
		})
		.state('recordbloodglucose', {
			url: '/recordbloodglucose',
			cache: false,
			templateUrl: 'recordbloodglucose.html',
			controller: 'recordbloodglucoseCtrl'
		})
		.state('recordbmi', {
			url: '/recordbmi',
      cache: false,
      templateUrl: 'recordbmi.html',
      controller: 'recordbmiCtrl'
    })
    .state('doctorlist', {
      url: '/doctorlist',
      cache: false,
      templateUrl: 'doctorlist.html',
      controller:'doctorlistCtrl'
    })
    .state('doctordetail', {
      url: '/doctordetail',
      cache: false,
      templateUrl: 'doctordetail.html'
    })
    .state('cancelacontract', {
      url: '/cancelacontract?doctorId',
      cache: false,
      templateUrl: 'cancelacontract.html',
      controller:'cancelacontractCtrl'
    })
    .state('appointment', {
      url: '/appointment?type&id',
      cache: false,
      templateUrl: 'appointment.html',
      controller:'appointmentCtrl',
      resolve:{
        checkSign: ['UserService',function(UserService){
          return UserService.checkSign();
        }]
      },
      params:{
        type:'OUTPATIENT'
      }
    })
		.state('family-relationship', {
			url: '/family-relationship',
			cache: false,
			templateUrl: 'family-relationship.html'
		})
		.state('docupload', {
			url: '/docupload',
			cache: false,
			templateUrl: 'docupload.html',
      controller:'docuploadCtrl'
		});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/home/index');

}]);


angular.module('homeApp')
	.directive('closePopupBackDrop', ['$ionicGesture', function($ionicGesture) {
		return {
			scope: false, //共享父scope
			restrict: 'A',
			require: 'ngModel',
			replace: false,
			link: function(scope, ele, attrs, ctrl) {
				var $htmlEl = angular.element(document.querySelector('html'));
				$ionicGesture.on("touch", function(event) {
					if (event.target.nodeName === "HTML" && ctrl.$viewValue.isPopup) {
						ctrl.$viewValue.result.close();
						ctrl.$viewValue.isPopup = false;
					}
				}, $htmlEl);
			}
		};
	}])
	.directive('clickOnStart', ['$timeout', function($timeout) {
		return {
			restrict: 'A',
			link: function($scope, ele, attrs) {
				$timeout(function() {
					ele.trigger('click');
				}, 50);
			}
		};
	}])
	.directive('autoHeightOnInput', function() {
		return {
			restrict: 'A',
			link: function($scope, ele, attrs) {
				var opts = {
					maxHeight: null || attrs.maxHeight,
					minHeight: ele.height()
				};

				ele.bind("paste cut keydown keyup focus blur input", function() {
					var height, style = this.style;
					this.style.height = opts.minHeight + 'px';
					if (this.scrollHeight > opts.minHeight) {
						if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
							height = opts.maxHeight;
							style.overflowY = 'scroll';
						} else {
							height = this.scrollHeight;
							style.overflowY = 'hidden';
						}
						// style.height = height + 'px';
						ele.height(height - 14).parent().height(height - 8);
					}
				});
			}
		};
	})
	.directive('highCharts', ['$timeout', '$filter', function($timeout, $filter) {
		return {
			scope: {
				loadChartData: '&'
			},
			restrict: 'A',
			link: function($scope, ele, attrs) {
				var randomId = (Math.random() + '').replace('.', '');
				ele.attr('id', randomId);
				var chartConfigs = {
					chart: {
						type: 'spline',
						marginTop: 30
					},
					title: {
						text: '',
						style: {
							display: 'none'
						}
					},
					subtitle: {
						text: '',
						style: {
							display: 'none'
						}
					},
					xAxis: {
						labels: {
							style: {
								color: '#fff'
							}
						}
					},
					yAxis: {
						title: {
							text: '',
							style: {
								display: 'block',
								color: '#fff'
							}
						},
						labels: {
							style: {
								color: '#fff'
							}
						}
					},
					tooltip: {
						crosshairs: true,
						backgroundColor: 'rgba(0,0,0,0.2)',
						borderColor: 'rgba(0,0,0,0.2)',
						shared: true,
						borderRadius: 5,
						style: {
							padding: 10,
							color: '#fff',
							lineHeight: 18
						}
					},
					legend: {
						itemStyle: {
							color: '#fff'
						}
					},
					plotOptions: {
						spline: {
							marker: {
								radius: 4,
								lineColor: '#666666',
								lineWidth: 1
							}
						}
					},
					credits: {
						enabled: false
					},
					exporting: {
						enabled: false
					}
				};

				$scope.loadChartData()(chartConfigs).then(function(rep) {
					chartConfigs.series = [];
					var dataObj = {},
						categories = [];
					//将多个结果数组的长度统一，并且按降序排序；
					var maxLength = 0;
					//计算最长节点个数,顺便排序
					$.each(rep.data.result, function() {
						this.data.sort(function(a, b) {
							return a.checkTime > b.checkTime ? 1 : -1;
						});

						if (this.data.length > maxLength) {
							maxLength = this.data.length;
						}
					});

					//将不足长度的数组补齐（从前面插入空对象）
					$.each(rep.data.result, function() {
						for (var i = 0; i < maxLength - this.data.length; i++) {
							this.data.unshift({});
						}
					});

					$.each(rep.data.result, function(index, item) {
						var data = item;
						var series = {};
						series.name = data.name;
						series.marker = {
							symbol: 'square'
						};
						series.data = [];

						var i = 1;
						dataObj[index] = {
							name: data.name,
							map: {}
						};

						$.each(data.data, function() {
							series.data.push(parseFloat(this.checkValue));
							dataObj[index].map[i] = this;
							if (i > categories.length) {
								categories.push(i);
							}
							i++;
						});

						//设置数据
						chartConfigs.series.push(series);

						//x轴标签显示的值
						chartConfigs.xAxis.categories = categories;

						//y轴标签显示值的格式化方法，加单位可用这个方法加
						if (!chartConfigs.yAxis.labels.formatter) {
							chartConfigs.yAxis.labels.formatter = function() {
								return this.value;
							};
						}

						//弹出提示信息的格式化方法
						if (rep.formatter) {
							chartConfigs.tooltip.formatter = function() {
								return rep.formatter.call(this, dataObj);
							};
						} else {
							chartConfigs.tooltip.formatter = function() {
								var self = this;
								var result = [];
								$.each(dataObj, function(i) {
									if (typeof(this.map[self.x].checkTime) == 'undefined') {
										return;
									}
									result.push(this.map[self.x].checkTime ? $filter('datetime')(this.map[self.x].checkTime, 'yyyy年MM月dd日 HH:mm') : '');
									result.push('<br/>');
									result.push(this.name + '：');
									result.push(typeof(this.map[self.x].checkValue) != 'undefined' ? this.map[self.x].checkValue : '');
									if (rep.unit) {
										if (typeof(rep.unit) == 'object') {
											result.push(rep.unit[i]);
										} else {
											result.push(rep.unit);
										}
									}
									result.push('<br/>');
								});
								result.pop();
								return result.join('');
							};
						}

					});

          if(rep.configFn){
            rep.configFn.call(this,chartConfigs);
          }

					Highcharts.chart(randomId, chartConfigs);
				});
			}
		};
	}]);

angular.module('homeApp')
	.service('httpService', ['$q', '$http', 'Config', '$ionicLoading', function($q, $http, Config, $ionicLoading) {
		return {
			load: function(key, params, config) {
				/*
				读取接口数据，config支持属性：
				disableLoadingMsg 是否禁用loading提示
				loadingMsg 加载中的提示信息
				disableSuccessMsg 是否禁用成功提示
				successMsg 成功的提示信息
				successDuration 成功提示的持续时间，单位毫秒
				disableErrorMsg 是否禁用失败提示
				errorMsg 失败的提示信息
				errorDuration 失败提示的持续时间，单位毫秒
				*/
				var deferred = $q.defer();
				config = angular.extend({
					disableLoadingMsg: false,
					loadingMsg: '加载中，请稍候...',
					disableSuccessMsg: false,
					successDuration: 1000,
					errorDuration: 2000,
					disableErrorMsg: false
				}, config);

				if (!config.disableLoadingMsg) {
					$ionicLoading.show({
						template: config.loadingMsg
					});
				}

				$http.post(Config.Server + Config.urls[key], angular.extend({
					// 'callback': 'JSON_CALLBACK'
				}, params), {
					transformResponse: function(data) {
						//处理精度丢失的问题
						data = data.replace(/:([0-9]{18})([,|\}])/g, ':"$1"$2');
						return JSON.parse(data);
					}
				}).then(function(rep) {
					if (rep.data.code == '200') {
						if (config.disableSuccessMsg || !(config.successMsg || (rep.data.result&&rep.data.result.message))) {
							$ionicLoading.hide();
						} else {
							$ionicLoading.show({
								template: config.successMsg || rep.data.message,
								duration: config.successDuration
							});
						}
						deferred.resolve(rep);
					} else {
						if (config.disableErrorMsg) {
							$ionicLoading.hide();
						} else {
							$ionicLoading.show({
								template: config.errorMsg || rep.data.message,
								duration: config.errorDuration
							});
						}
						deferred.reject(rep);
					}
				}, function(err) {
					deferred.reject(err);
					$ionicLoading.hide();
				});
				return deferred.promise;
			}
		};
	}])
	.service('Session', ['$http', '$rootScope', function($http, $rootScope) {
		var service = this;
		var ssdata;
		if (localStorage.ssdata) {
			ssdata = JSON.parse(localStorage.ssdata);
		} else {
			ssdata = {
				user: {}
			};
		}

		service.regUser = function(data) {
			service.set(data.result.user).set('token', data.result.token).set('currentUserId',data.result.user.userId);
			$rootScope.ssdata = ssdata;
			$http.defaults.headers.common.Authorization = 'Bearer ' + data.result.token;
		};

		service.set = function(key, val) {
			if (typeof(val)=='undefined') {
				ssdata = arguments[0];
				localStorage.ssdata = JSON.stringify(ssdata);
			} else {
				if (!localStorage.ssdata) {
					localStorage.setItem("ssdata", '{}');
				}
				var tempObj = JSON.parse(localStorage.ssdata);
				tempObj[key] = val;
				localStorage.ssdata = JSON.stringify(tempObj);
				ssdata = JSON.parse(localStorage.ssdata);
			}
			return service;
		};

		service.get = function(key) {
			return key ? ssdata[key] : ssdata;
		};

		service.remove = function(key) {
			if (!localStorage.ssdata) {
				return service;
			}
			var tempObj = JSON.parse(localStorage.ssdata);
			delete tempObj[key];
			localStorage.ssdata = JSON.stringify(tempObj);
			ssdata = JSON.parse(localStorage.ssdata);
			return service;
		};

		service.clean = function() {
			ssdata = {};
			localStorage.setItem("ssdata", '{}');
			return service;
		};
	}])
	.service('popupHelper', ['$q', '$ionicPopup', function($q, $ionicPopup) {
		return {
			showConfirm: function($scope, template) {
				$scope._popup = {
					'isPopup': false
				};

				var deferred = $q.defer();

				$scope._popup.result = $ionicPopup.confirm({
					template: template, //'确认吗?',
					okText: '确定',
					okType: 'button-positive',
					cancelText: '取消',
					cancelType: 'button-default'
				});

				$scope._popup.result.then(function(res) {
					if (res) {
						deferred.resolve();
					} else {
						deferred.reject();
					}
				});

				$scope._popup.isPopup = true;

				return deferred.promise;
			}
		};
	}])
	.service('UploadHelper', ['$q', '$ionicPopover', '$ionicLoading', '$timeout', 'Config', 'Upload', function($q,$ionicPopover,$ionicLoading,$timeout,Config,Upload) {
    this.selectFileHandler = function($scope,$files,uploadInfoName){
      var deferred = $q.defer();
      uploadInfoName = uploadInfoName || 'uploadInfo';
      var template = ''+
        '<ion-popover-view>'+
          '<ion-header-bar class="row bar bar-header bar-positive">'+
            '<div class="col" ng-bind="'+uploadInfoName+'.uploadStatus"></div>'+
          '</ion-header-bar>'+
          '<ion-content class="fileupload-content">'+
            '<div class="list padding-horizontal padding-bottom">' +
              '<div class="fileupload-list-item" ng-repeat="x in '+uploadInfoName+'.files" ng-if="!!x.isNewFile">'+
                '<div class="fileupload-list-file" ng-bind="x.name" ng-style="{color:x.progress==100?\'#00acee\':\'\'}"></div>'+
                '<div class="fileupload-progress-bar">'+
                  '<span class="fileupload-progress-bar-passed" ng-style="{width:x.progress+\'%\'}"></span>'+
                  '<span class="fileupload-progress-bar-not-completed"></span>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</ion-content>'+
          '<ion-footer-bar class="fileupload-footer-bar" ng-show="!'+uploadInfoName+'.isUploading">'+
            '<a class="fileupload-btn-confirm touch-with-hightlight" ng-click="'+uploadInfoName+'.startUpload()">确定</a>'+
            '<a class="fileupload-btn-cancel touch-with-hightlight" ng-click="'+uploadInfoName+'.cancelUpload()">取消</a>'+
          '</ion-footer-bar>'+
       '</ion-popover-view>';
      var uploadInfo = {files:[]};
      if(!$scope[uploadInfoName]){
        $scope[uploadInfoName] = uploadInfo;
      }else{
        uploadInfo = $scope[uploadInfoName];
      }

      uploadInfo.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope,
        animation: 'slide-in-up',
        backdropClickToClose: false
      });

      $.each($files,function(){
        this.isNewFile = true;
        uploadInfo.files.push(this);
      });
      uploadInfo.uploadStatus = '您已选择以下文件';
      uploadInfo.popover.show();

      uploadInfo.startUpload = function(){
        uploadInfo.isUploading = true;
        uploadInfo.uploadStatus = '文件传输中，请稍候...';

        var completeCount = 0;
        $.each($files,function(i,file){
          Upload.applyExifRotation(file).then(function(){
            file.upload = Upload.upload({
              url: Config.Server + Config.urls.uploadImage,
              data: {file: file}
            });

            file.upload.then(
              function (response) {
                $timeout(function () {
                  file.result = response.data;
                  file.isNewFile = false;
                  if(++completeCount==$files.length){
                    $timeout(function(){
                      uploadInfo.uploadStatus = '文件传输完成！';
                      $ionicLoading.show({
                        template: '文件传输完成！',
                        duration: 700
                      }).then(function(){
                        uploadInfo.isUploading = false;
                        uploadInfo.popover.remove();
                      });
                    },100);
                    deferred.resolve($files);
                  }
                });
              },
              function (response) {
                if (response.status > 0) {
                  uploadInfo.uploadStatus = response.status + ': ' + response.data;
                }
              },
              function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
              }
            );
          });
        });
      };

      uploadInfo.cancelUpload = function(){
        uploadInfo.isUploading = false;
        uploadInfo.popover.remove();
        if($files.length>0){
          uploadInfo.files.splice(uploadInfo.files.indexOf($files[0]));
        }
        deferred.reject();
      };

      return deferred.promise;
    };
	}]);

angular.module('homeApp')
	.constant('Config', {
    Server:'http://service.suishidata.com',
    // Server:'http://192.168.1.101:8087',
    urls:{
      login:'/user/account/login',
      register:'/user/account/register',
      getCode:'/user/account/checkCodeSend',
      healthkpi:'/api/user/healthkpi',
      listDoctor:'/homepage/user/listDoctor',
      getLastFeedback:'/api/feedback/getLastFeedback',
      modifyInfo:'/api/user/changeUserInfo',
      modifyMobile:'/api/user/changeUserMobile',
      getUserInfo:'/api/user/getUserInfo',
      modifyPassword:'/api/user/changeUserPassword',
      listFamilyRel:'/common/listFamilyRel',
      listRegion:'/common/listRegion',
      addFamily:'/api/user/addFamily',
      listBloodPressure:'/api/healthdocmgr/listBloodPressure',
      listBloodFat:'/api/healthdocmgr/listBloodFat',
      listBloodGlucose:'/api/healthdocmgr/listBloodGlucose',
      listBasicCheck:'/api/healthdocmgr/listBasicCheck',
      saveHealthData:'/api/healthdocmgr/saveHealthData',
      saveHealthBlg:'/api/healthdocmgr/saveHealthBlg',
      getCurveData:'/api/healthdocmgr/getCurveData',
      listMealTime:'/common/listMealTime',
      listFamily:'/api/user/listFamily',
      applySign:'/api/user/getFamilyInfo',
      uploadImage:'/img/upload/multiFile',
      uploadHeaderImage:'/img/upload/headImage',
      docUpload:'/api/healthdocmgr/uploadHealthData',
      listDoctorSchedulePlan:'/api/user/schedulemgr/listDoctorSchedulePlan',
      listCurrentSchedule:'/api/user/schedulemgr/listCurrentSchedule',
      listHistorySchedule:'/api/user/schedulemgr/listHistorySchedule',
      getDoctorInfo:'/api/doctor/getDoctorInfo',
      saveUserSchedule:'/api/user/schedulemgr/saveUserSchedule',
      cancelScheduleByUser:'/api/user/schedulemgr/cancelScheduleByUser',
      confirmBespoke:'/api/user/applySign',
      cancelBespoke:'/api/user/cancelSign',
      getLastSchedulePlan:'/api/user/schedulemgr/getLastSchedulePlan'
    },
    getDefaultDateSetting: function() {
      return {
        theme: 'ios',
        circular: false,
        display: 'bottom',
        animate: 'slideUp',
        lang: 'zh',
        showScrollArrows: false,
        layout: 'fixed',
        // headerText:'{value}',
        dateFormat: 'yyyy-MM-dd',
        dateWheels: 'yyyy mm dd',
        // yearSuffix:'年',
        monthSuffix: '月',
        // daySuffix:'日',
        buttons: ['set', 'now', 'cancel'],
        max: new Date(),
        formatValue: function(data) {
          return data[0] + '-' + data[1] + '-' + data[2];
        }
      };
    },
		getDefaultDatetimeSetting: function() {
			return {
				theme: 'ios',
				circular: false,
				display: 'bottom',
				animate: 'slideUp',
				lang: 'zh',
				showScrollArrows: false,
				layout: 'fixed',
				// headerText:'{value}',
				dateFormat: 'yyyy-MM-dd',
				timeFormat: 'HH-ii',
				dateWheels: 'yyyy mm dd',
				timeWheels: 'HH ii',
				// yearSuffix:'年',
				monthSuffix: '月',
				// daySuffix:'日',
				buttons: ['set', 'now', 'cancel'],
				max: new Date(new Date().getFullYear() + 3, new Date().getMonth(), new Date().getDate()),
				formatValue: function(data) {
					return data[0] + '-' + data[1] + '-' + data[2] + ' ' + data[3] + ':' + data[4];
				}
			};
		},
    getDefaultDecimalSetting: function(){
      return {
        theme: 'ios',
        lang: 'zh',
        display: 'bottom',
        animate: 'slideUp',
        maxWidth: 100 // More info about maxWidth: https://docs.mobiscroll.com/3-0-0_beta5/angular/number#!opt-maxWidth
      };
    }
	})
;

angular.module('homeApp')
.filter('datetime',['$filter', function($filter){
  return function(v,format){
    if(!v||v.length===0){
      return '';
    }else{
      var dt = typeof(v) =='object' ? v : new Date((v+'').replace(/-/g,'/') + ':00');
      return $filter('date')(dt,format);
    }
  };
}])
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
.filter('timeWithDateName',['$filter', function($filter){
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
}])
.filter('replaceNull',function(){
  return function(v){
    return v&&v.length>0?v:'--';
  };
})
;

angular.module('homeApp')
	.controller('registerCtrl', ['$state', '$scope', '$ionicLoading', '$ionicViewSwitcher', '$log', 'UserService', 'Session', function($state, $scope, $ionicLoading, $ionicViewSwitcher, $log, UserService, Session) {
		$scope.formData = {};
		$scope.checkPwd = function(form) {
			form.confirmPwd.$setValidity('confirmPwd', $scope.formData.pwd == $scope.formData.confirmPwd);
		};
		$scope.codeText = "获取验证码";

		$scope.getCode = function() {
			UserService.checkBeforePost(function() {
				if(!$scope.formData.mobile || $scope.formData.mobile.length != 11) {
					return '请正确输入手机号码';
				} else if (!$scope.formData.pwd || $scope.formData.pwd.length === 0) {
					return '请输入密码';
				}
			}).then(function() {
				UserService.getCode($scope);
			});
		};

		$scope.checkDisabled = function(form) {
			return !UserService.getCodeCompleted() ||
				form.mobile.$invalid ||
				form.pwd.$invalid ||
				form.confirmPwd.$invalid;
		};

		$scope.register = function() {
			UserService.checkBeforePost(function() {
				if(!$scope.formData.mobile || $scope.formData.mobile.length != 11) {
					return '请正确输入手机号码';
				} else if (!$scope.formData.pwd || $scope.formData.pwd.length === 0) {
					return '请输入密码';
				}
			}).then(function() {
				UserService.register($scope.formData.mobile, $scope.formData.pwd, $scope.formData.confirmPwd, $scope.formData.code).then(function(rep) {
					Session.regUser(rep.data);
					$ionicViewSwitcher.nextDirection("forwoard");
					$state.go('home.index');
				});
			});
		};
	}]);

angular.module('homeApp')
	.controller('healthFilesCtrl', ['$q', '$scope', '$state', '$rootScope', 'UserService', function($q, $scope, $state, $rootScope, UserService) {
		function getExamItem(detail) {
			var result = {};
			$.each(detail, function() {
				result[this.checkItemCode] = this;
			});
			return result;
		}

		function setExamItem(pageList) {
			$.each(pageList, function() {
				if (this.examItems) {
					return;
				}
				this.examItems = getExamItem(this.details);
			});
		}

		var tabs = ['listBloodPressure', 'listBloodGlucose', 'listBloodFat', 'listBasicCheck'];

		function loadTabContent(tabIndex, pageIndex) {
			var deferred = $q.defer();
			UserService[tabs[tabIndex]](pageIndex,5).then(function(rep) {
				if (pageIndex == 1) {
					$scope[tabs[tabIndex]] = rep.data.result;
				} else {
          $scope[tabs[tabIndex]].pageNo = pageIndex;
          $scope[tabs[tabIndex]].pageTotal = rep.data.result.pageTotal;
					$scope[tabs[tabIndex]].pageList = $scope[tabs[tabIndex]].pageList.concat(rep.data.result.pageList);
				}
				setExamItem(rep.data.result.pageList);
				deferred.resolve(rep);
			}, function(err) {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		loadTabContent(0, 1);
		loadTabContent(1, 1);
		loadTabContent(2, 1);
		loadTabContent(3, 1);

		$scope.doRefresh = function() {
			loadTabContent($scope.slider.activeIndex, 1)
				.finally(function() {
					$scope.$broadcast('scroll.refreshComplete');
				});
		};

    $scope.loadMoreData = function(){
      loadTabContent($scope.slider.activeIndex, $scope[tabs[$scope.slider.activeIndex]].pageNo + 1)
        .finally(function() {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $scope.canLoadMore = function(tbidx){
      if(!$scope[tabs[tbidx]]){
        return false;
      }
      return $scope[tabs[tbidx]].pageNo<$scope[tabs[tbidx]].pageTotal;
    };

		$scope.toggleTab = function(index) {
			$scope.slider.slideTo(index);
		};

		$scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
			// data.slider is the instance of Swiper
			$scope.slider = data.slider;
			$scope.slider.slideTo($rootScope.recordFilesTabIndex);
		});

		$scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
			$rootScope.recordFilesTabIndex = $scope.slider.activeIndex;
			$scope.$apply();
		});

		var views = ['recordbloodpressure', 'recordbloodglucose', 'recordbloodfat', 'recordbmi'];
		$scope.dataRecord = function() {
			$state.go(views[$scope.slider.activeIndex]);
		};
	}]);

angular.module('homeApp')

.controller('schedule', ['$q', '$scope', '$state', '$rootScope', 'UserService', 'popupHelper', function($q, $scope, $state, $rootScope, UserService, popupHelper) {
	$scope.type = {
		'OUTPATIENT': '就诊预约',
		'TEL_SCHEDULE': '电话预约',
		'VEDIO_SCHEDULE': '视频预约'
	};

  $scope.icon = {
    'OUTPATIENT': 'icon-yiyao',
    'TEL_SCHEDULE': 'icon-shouji',
    'VEDIO_SCHEDULE': 'icon-video-copy'
  };

  $scope.filter = '';

	var tabs = ["listCurrentSchedule", "listHistorySchedule"];

	function loadTabContent(tabIndex, pageIndex) {
		var deferred = $q.defer();
		UserService[tabs[tabIndex]](pageIndex, 5, $scope.filter).then(function(rep) {
			if (!$scope.doctorInfo) {
				$scope.doctorInfo = rep.data.result.doctorInfo;
			}

			if (pageIndex == 1) {
				$scope[tabs[tabIndex]] = rep.data.result.pageResult;
			} else {
				$scope[tabs[tabIndex]].pageNo = pageIndex;
				$scope[tabs[tabIndex]].pageTotal = rep.data.result.pageResult.pageTotal;
				$scope[tabs[tabIndex]].pageList = $scope[tabs[tabIndex]].pageList.concat(rep.data.result.pageResult.pageList);
			}
			deferred.resolve(rep);
		}, function(err) {
			deferred.reject(err);
		});
		return deferred.promise;
	}
	loadTabContent(0, 1);
	loadTabContent(1, 1);

  $scope.doFilter = function(filterType){
    $scope.filter = filterType;
    $scope.doRefresh();
  };

	$scope.doRefresh = function() {
		loadTabContent($scope.slider.activeIndex, 1)
			.finally(function() {
				$scope.$broadcast('scroll.refreshComplete');
			});
	};
	$scope.loadMoreData = function() {
		loadTabContent($scope.slider.activeIndex, $scope[tabs[$scope.slider.activeIndex]].pageNo + 1)
			.finally(function() {
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
	};

	$scope.canLoadMore = function(tbidx) {
		if (!$scope[tabs[tbidx]]) {
			return false;
		}
		return $scope[tabs[tbidx]].pageNo < $scope[tabs[tbidx]].pageTotal;
	};

	$scope.cancel = function(item) {
		popupHelper.showConfirm($scope, '确定要取消该预约吗？').then(function() {
			UserService.cancelScheduleByUser(item.id).then(function() {
				$scope.doRefresh();
			});
		});
	};

	$scope.toggleTab = function(index) {
		$scope.slider.slideTo(index);
	};

	$scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
		// data.slider is the instance of Swiper
		$scope.slider = data.slider;
		$scope.slider.slideTo($rootScope.schedule);
	});

	$scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
		$rootScope.schedule = $scope.slider.activeIndex;
		$scope.$apply();
	});
	$scope.tabNames = ['当前预约', '历史预约'];
}]);

angular.module('homeApp')
.controller('selectAreaCtrl',function(){
});

angular.module('homeApp')
	.controller('modifyuserinfoCtrl', ['$log', '$scope', 'Session', '$ionicPopover', 'Config', 'UploadHelper', '$filter', 'UserService', function($log, $scope, Session, $ionicPopover,Config,UploadHelper,$filter,UserService) {
		$scope.user = Session.get();

    $scope.selectFiles = function($files){
      if($files.length===0){
        return;
      }

      UploadHelper.selectFileHandler($scope,$files).then(function(files){
        UserService.modifyInfo({
          headerImage:$scope.user.headerImage = files[0].result.result[0]
        }).then(function(){
          $scope.refreshUserInfo();
        });
      });
    };

    $scope.dateSettings = Config.getDefaultDatetimeSetting();
    $scope.dateSettings.defaultValue = new Date($scope.user.birth.replace(/-/g,'/')+ ' 00:00:00');
    $scope.dateSettings.onSet = function(){
      var dt = $filter('date')($scope.user.birth, 'yyyy-MM-dd');
      UserService.modifyInfo({
        birth: dt
      }).then(function(rep) {
        Session.set('birth',dt);
      });
    };
	}]);

angular.module('homeApp')
	.controller('modifySexCtrl', ['$log', '$scope', 'Session', '$ionicHistory', '$ionicLoading', 'UserService', function($log,$scope,Session,$ionicHistory,$ionicLoading,UserService) {
		$scope.sex = {
			id: 1
		};

    var sex = Session.get('sex');
    if(sex){
      $scope.sex = {id:sex};
    }

    $scope.save = function(x){
      $scope.sex = x;
      UserService.modifyInfo({
        sex:$scope.sex.id
      }).then(function(){
        // Session.set('sex',$scope.sex.id);
        $scope.refreshUserInfo().then(function(){
          $ionicHistory.goBack();
        });
      });
    };
	}]);

angular.module('homeApp')
	.controller('modifyMobileCtrl', ['$scope', '$log', '$ionicHistory', '$ionicLoading', 'UserService', 'Session', function($scope, $log,$ionicHistory,$ionicLoading, UserService, Session) {
		$scope.formData = {
			mobileNow: Session.get('mobile'),
			userId: Session.get('userId')
		};
		$scope.checkMobile = function(form) {
			form.confirmMobile.$setValidity('confirmMobile', $scope.formData.mobile == $scope.formData.confirmMobile);
		};

		$scope.codeText = "获取验证码";
		$scope.getCode = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.formData.mobile || !/(13|14|15|18)[0-9]{9}/.test($scope.formData.mobile)) {
					return '请正确输入新手机号码';
				} else if ($scope.formData.mobile != $scope.formData.confirmMobile) {
					return '两次输入的手机号不一致';
				}
			}).then(function() {
				UserService.getCode($scope);
			});
		};

		$scope.save = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.formData.mobile || !/(13|14|15|18)[0-9]{9}/.test($scope.formData.mobile)) {
					return '请正确输入新手机号码';
				} else if ($scope.formData.mobile != $scope.formData.confirmMobile) {
					return '两次输入的手机号不一致';
				} else if (!$scope.formData.code || ($scope.formData.code + '').length != 6) {
					return '请正确输入收到的验证码';
				}
			}).then(function() {
				UserService.modifyMobile($scope.formData.mobile, $scope.formData.code).then(function(rep) {
          $scope.refreshUserInfo().then(function(){
  					$ionicHistory.goBack();
          });
				});
			});
		};

		$scope.checkDisabled = function(form) {
			return !UserService.getCodeCompleted() ||
				form.mobile.$invalid ||
				form.confirmMobile.$invalid;
		};
	}]);

angular.module('homeApp')
	.controller('modifyPasswordCtrl', ['$scope', '$log', '$ionicLoading', 'UserService', 'Session', function($scope, $log, $ionicLoading, UserService, Session) {
		$scope.formData = {
			userId: Session.get('userId'),
			oldMobile: Session.get('mobile')
		};
		$scope.checkPwd = function(form) {
			form.confirmPwd.$setValidity('confirmPwd', $scope.formData.pwd == $scope.formData.confirmPwd);
		};
		$scope.codeText = "获取验证码";

		$scope.getCode = function() {
			UserService.getCode($scope);
		};

		$scope.checkDisabled = function() {
			return !UserService.getCodeCompleted();
		};

		$scope.save = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.formData.pwd || $scope.formData.pwd.length===0) {
					return '请正确输入新密码';
				} else if ($scope.formData.pwd != $scope.formData.confirmPwd) {
					return '两次输入的密码不一致';
				} else if (!$scope.formData.code || ($scope.formData.code + '').length != 6) {
					return '请正确输入收到的验证码';
				}
			}).then(function() {
				UserService.modifyPassword($scope.formData.pwd, $scope.formData.code).then(function() {
          $ionicHistory.goBack();
				});
			});
		};
	}]);

angular.module('homeApp')
	.controller('modifyAddressCtrl', ['$log', '$scope', 'Session', '$ionicModal', '$ionicLoading', '$ionicHistory', 'UserService', function($log, $scope, Session, $ionicModal, $ionicLoading,$ionicHistory,UserService) {
		$scope.data = {};
    var user = Session.get();
		$ionicModal.fromTemplateUrl('selectArea.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});

		$scope.data.areaSelected = {};
    if(user.provinceId&&user.provinceName&&user.cityId&&user.cityName&&user.district&&user.districtName){
      $scope.data.areaSelected[2] = {
        id:user.provinceId,
        regionName:user.provinceName
      };
      $scope.data.areaSelected[3] = {
        id:user.cityId,
        regionName:user.cityName
      };
      $scope.data.areaSelected[4] = {
        id:user.district,
        regionName:user.districtName
      };
    }

    $scope.data.address = Session.get('addr');

		$scope.selectArea = function(nowLevel, item) {
			if (nowLevel > 1) {
				$scope.data.areaSelected[nowLevel] = item;
				for (var i = nowLevel + 1; i <= 4; i++) {
					delete $scope.data.areaSelected[i];
				}
			}
			$scope.nowLevel = nowLevel;

			if (nowLevel > 3) {
				$scope.modal.hide();
				return;
			} else {
				UserService.listRegion(item ? item.id : null).then(function(rep) {
					$scope.areas = rep.data.result;
					$scope.nowLevel = nowLevel;
					if (nowLevel == 1) {
						$scope.modal.show();
					}
				});
			}
		};

		$scope.cancelArea = function() {
			$scope.modal.hide();
		};

		$scope.save = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.data.areaSelected[2] || !$scope.data.areaSelected[3] || !$scope.data.areaSelected[4]) {
					return '请正确选择地区';
				} else if (!$scope.data.address || $scope.data.address.length === 0) {
					return '请填写详细地址';
				}
			}).then(function() {
				UserService.modifyInfo({
          provinceId:$scope.data.areaSelected[2].id,
          provinceName:$scope.data.areaSelected[2].regionName,
          cityId:$scope.data.areaSelected[3].id,
          cityName:$scope.data.areaSelected[3].regionName,
          district:$scope.data.areaSelected[4].id,
          districtName:$scope.data.areaSelected[4].regionName,
          addr:$scope.data.address
				}).then(function() {
          $scope.refreshUserInfo().then(function(){
            $ionicHistory.goBack();
          });
        });
			});
		};

		$scope.getFullPath = function() {
			var result = '';
			angular.forEach($scope.data.areaSelected, function(value) {
				result += ' ' + value.regionName;
			});
			return result;
		};

		$scope.$on('$destroy', function() {
			$scope.modal.remove();
		});
	}]);

angular.module('homeApp')
	.controller('modifyNameCtrl', ['$scope', 'Session', '$ionicLoading', '$ionicHistory', 'UserService', function($scope, Session, $ionicLoading, $ionicHistory, UserService) {
		$scope.data = {
			name: Session.get('name')
		};

		$scope.save = function() {
			$ionicLoading.show({
				template: '提交中，请稍候...'
			});

			UserService.modifyInfo({
				name: $scope.data.name
			}).then(function() {
          $scope.refreshUserInfo().then(function(){
  					$ionicHistory.goBack();
          });
			});
		};
	}]);

angular.module('homeApp')
	.controller('modifyBirthdayCtrl', ['$log', '$scope', 'Session', '$ionicHistory', '$filter', 'UserService', 'Config', function($log, $scope, Session,$ionicHistory,$filter,UserService,Config) {
		$scope.data = {
			birth: Session.get('birth')
		};

    $scope.dateSettings = Config.getDefaultDateSetting();
    $scope.dateSettings.min = new Date('1900-1-1');

		$scope.save = function() {
      var dt = $filter('date')($scope.data.birth, 'yyyy-MM-dd');
			UserService.modifyInfo({
				birth: dt
			}).then(function(rep) {
        Session.set('birth',dt);
        $ionicHistory.goBack();
			});
		};
	}]);

angular.module('homeApp')
.controller('settingCtrl', ['$scope', 'popupHelper', function($scope,popupHelper){
    $scope.clearCache = function(){
      popupHelper.showConfirm($scope,'确定要清除缓存吗?').then(function(){
        console.log('ok');
      },function(){
        console.log('cancel');
      });
    };

    $scope.logout = function(){
      popupHelper.showConfirm($scope,'确定要退出吗?').then(function(){
        console.log('ok');
      },function(){
        console.log('cancel');
      });
    };
}]);

angular.module('homeApp')
	.controller('recordblodpressureCtrl', ['$q', '$scope', 'Config', 'UserService', '$filter', '$ionicHistory', function($q,$scope, Config, UserService, $filter, $ionicHistory) {
    $scope.data = {};
		$scope.data.datetime = new Date();
		$scope.dateSettings = Config.getDefaultDatetimeSetting();
		$scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

		$scope.data.hightVal = 126;
		$scope.data.lowVal = 86;
		$scope.numSettings = Config.getDefaultDecimalSetting();
		$scope.numSettings.max = 250;
		$scope.numSettings.min = 50;

		$scope.save = function() {
			var detail = [{
				checkItemCode: 'SBP',
				checkItemResult: $scope.data.hightVal
			}, {
				checkItemCode: 'DBP',
				checkItemResult: $scope.data.lowVal
			}];
			UserService.saveHealthData('BLOOD_PRESSURE',
				$filter('date')($scope.data.datetime, 'yyyy-MM-dd HH:mm'), detail
			).then(function() {
				$ionicHistory.goBack();
			});
		};

    $scope.loadChartData = function(config) {
      var deferred = $q.defer();
      UserService.getCurveData('BLOOD_PRESSURE').then(function(rep){
        config.yAxis.title.text = '血压(mmhg)';

        //整体背景色
        config.chart.backgroundColor = "#8373cb";
        rep.unit = ' (mmhg)';
        rep.formatter = function(data){
            var result = [];
            result.push($filter('datetime')(data[0].map[this.x].checkTime, 'yyyy年MM月dd日 HH:mm'));
            result.push('<br/>');
            result.push(data[0].name+'：');
            result.push(data[0].map[this.x].checkValue);
            result.push(' (mmhg)<br/>');
            result.push(data[1].name+'：');
            result.push(data[1].map[this.x].checkValue);
            result.push(' (mmhg)<br/>');
            return result.join('');
        };

        deferred.resolve(rep);
      });

      return deferred.promise;
    };
	}]);

angular.module('homeApp')
	.controller('recordbloodglucoseCtrl', ['$q', '$scope', 'Config', 'UserService', '$ionicHistory', '$filter', function($q,$scope,Config,UserService,$ionicHistory,$filter) {
    $scope.data = {};
    $scope.data.datetime = new Date();
    $scope.dateSettings = Config.getDefaultDatetimeSetting();
    $scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

    $scope.data.numVal = 4.2;
    $scope.numSettings = Config.getDefaultDecimalSetting();
    $scope.numSettings.max = 25;
    $scope.numSettings.min = 1;

    UserService.listMealTime().then(function(rep){
      $scope.mealTimeList = rep.data.result.mealTimeList;
      $scope.mealTypeList = rep.data.result.mealTypeList;
      $scope.data.selectedTime = $scope.mealTimeList[0];
      $scope.data.selectedType = $scope.mealTypeList[0];
    });

    $scope.save = function() {
      var detail = [{
        checkItemCode: $scope.data.selectedTime.dictCode,
        checkItemResult: $scope.data.numVal
      }];

      UserService.saveHealthBlg(
        $filter('date')($scope.data.datetime, 'yyyy-MM-dd HH:mm'),
        $scope.data.selectedType,
        detail
      ).then(function() {
        $ionicHistory.goBack();
      });
    };

    $scope.loadChartData = function(config) {
      var deferred = $q.defer();
      UserService.getCurveData('BLOOD_GLUCOSE').then(function(rep){
        config.yAxis.title.text = '血糖(mmol/L)';

        //整体背景色
        config.chart.backgroundColor = "#8373cb";
        rep.unit = ' (mmol/L)';
        deferred.resolve(rep);
      });

      return deferred.promise;
    };
	}]);

angular.module('homeApp')
	.controller('recordbloodfatCtrl', ['$q', '$scope', 'Config', 'UserService', '$ionicHistory', '$filter', function($q,$scope, Config, UserService, $ionicHistory, $filter) {
		$scope.data = {};
		$scope.data.datetime = new Date();
		$scope.dateSettings = Config.getDefaultDatetimeSetting();
		$scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

		$scope.data.numVal = 4.2;
		$scope.numSettings = Config.getDefaultDecimalSetting();
		$scope.numSettings.max = 25;
		$scope.numSettings.min = 1;

		$scope.save = function() {
			var detail = [{
				checkItemCode: 'BF',
				checkItemResult: $scope.data.numVal
			}];
			UserService.saveHealthData('BLOOD_FAT',
				$filter('date')($scope.data.datetime, 'yyyy-MM-dd HH:mm'), detail
			).then(function() {
				$ionicHistory.goBack();
			});
		};

		$scope.loadChartData = function(config) {
      var deferred = $q.defer();
      UserService.getCurveData('BLOOD_FAT').then(function(rep){
        config.yAxis.title.text = '血脂(mmol/L)';

        //整体背景色
        config.chart.backgroundColor = "#8373cb";
        rep.unit = ' (mmol/L)';
        deferred.resolve(rep);
      });

      return deferred.promise;
		};
	}]);

angular.module('homeApp')
	.controller('recordbmiCtrl', ['$q', '$scope', 'Config', 'UserService', '$ionicHistory', '$filter', function($q,$scope,Config,UserService,$ionicHistory,$filter) {
    $scope.data = {};
    $scope.data.datetime = new Date();
    $scope.dateSettings = Config.getDefaultDatetimeSetting();
    $scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

    $scope.data.heightVal = 175;
    $scope.heightSettings = Config.getDefaultDecimalSetting();
    $scope.heightSettings.min = 10;
    $scope.heightSettings.max = 300;
    $scope.heightSettings.step = 1;

    $scope.data.weightVal = 64;
    $scope.weightSettings = Config.getDefaultDecimalSetting();
    $scope.weightSettings.min = 10;
    $scope.weightSettings.max = 300;

    $scope.save = function() {
      var detail = [{
        checkItemCode: 'HEIGHT',
        checkItemResult: $scope.data.heightVal
      },{
        checkItemCode: 'WEIGHT',
        checkItemResult: $scope.data.weightVal
      },{
        checkItemCode: 'BMI',
        checkItemResult: (parseFloat($scope.data.weightVal) / Math.pow(parseFloat($scope.data.heightVal)/100,2)).toFixed(2)
      }];

      UserService.saveHealthData('BASIC_INFO',
        $filter('date')($scope.data.datetime, 'yyyy-MM-dd HH:mm'), detail
      ).then(function() {
        $ionicHistory.goBack();
      });
    };

    $scope.loadChartData = function(config) {
      var deferred = $q.defer();
      UserService.getCurveData('BASIC_INFO').then(function(rep){
        config.yAxis.title.text = 'BMI指数';

        //整体背景色
        config.chart.backgroundColor = "#4a8aca";
        rep.formatter = function(data){
            var result = [];
            result.push($filter('datetime')(data[0].map[this.x].checkTime, 'yyyy年MM月dd日 HH:mm'));
            result.push('<br/>');
            result.push(data[0].name+'：');
            result.push(data[0].map[this.x].checkValue);
            result.push(' (cm)<br/>');
            result.push(data[1].name+'：');
            result.push(data[1].map[this.x].checkValue);
            result.push(' (kg)<br/>');
            result.push(data[2].name+'：');
            result.push(data[2].map[this.x].checkValue);
            return result.join('');
        };

        rep.configFn = function(config){
          config.series.splice(0,2);
        };

        deferred.resolve(rep);
      });

      return deferred.promise;
    };
	}]);

angular.module('homeApp')
.controller('loginCtrl', ['$scope', '$state', '$ionicViewSwitcher', 'UserService', '$log', '$ionicLoading', 'Session', function($scope,$state,$ionicViewSwitcher,UserService,$log,$ionicLoading,Session){
  $scope.showpwd = false;
  $scope.data = {};

  $scope.togglePwd = function(){
    $scope.showpwd = !$scope.showpwd;
  };

  $scope.login = function(){
    UserService.checkBeforePost(function(){
      if (!$scope.data.phone || $scope.data.phone.length != 11) {
        return '请正确输入手机号码';
      } else if (!$scope.data.password || $scope.data.password.length === 0) {
        return '请输入密码';
      }
    }).then(function(){
      UserService.login($scope.data.phone,$scope.data.password).then(function(rep){
        Session.regUser(rep.data);
        $ionicViewSwitcher.nextDirection("forwoard");
        $state.go('home.index');
      });
    });
  };
}]);

angular.module('homeApp')
.controller('menuCtrl', ['$scope', '$state', '$log', '$ionicLoading', '$ionicSideMenuDelegate', 'Session', 'UserService', function($scope,$state,$log,$ionicLoading,$ionicSideMenuDelegate,Session,UserService){
  $scope.shiftuser=function(userId){
    UserService.refreshUserInfo().then(function(){
      Session.set('currentUserId',userId);
      $ionicSideMenuDelegate.toggleLeft();
      $ionicLoading.show({
        template: '用户切换成功',
        duration: 1500
      });
      $state.reload($state.current);
    });
  };
}]);

angular.module('homeApp')
	.controller('mainCtrl', ['$scope', '$state', '$rootScope', '$ionicSideMenuDelegate', 'UserService', 'Session', function($scope, $state, $rootScope, $ionicSideMenuDelegate, UserService,Session) {
		// $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		// 	var viewsHasMenu = ['home.index', 'home.myhome', 'home.servicehome'];
		// 	$ionicSideMenuDelegate.canDragContent(viewsHasMenu.indexOf(toState.name) >= 0);
		// });

    UserService.loadUserInfo();

    $rootScope.toggleMenu = function(){
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.user=Session.get();
    $rootScope.refreshUserInfo = function(){
      //刷新用户信息
      return UserService.refreshUserInfo();
    };

    $rootScope.refreshFamilyList = function(){
      //刷新用户家庭信息
      if (Session.get('doctorId')&&Session.get('userId')) {
        UserService.familyList().then(function(rep) {
          $rootScope.familylist=rep.data.result;
        });
      }
    };

    $rootScope.refreshFamilyList();
	}])
;

angular.module('homeApp')
	.controller('navCtrl', ['$scope', '$state', '$rootScope', '$ionicSideMenuDelegate', 'UserService', 'Session', function($scope, $state, $rootScope, $ionicSideMenuDelegate, UserService,Session) {
    var views = ['recordbloodpressure', 'recordbloodglucose', 'recordbloodfat','recordbmi'];
    var bgColor = {
      '-1':'bgcolor00acee',//'#00acee'
      '0':'bgcolor8373cb',//'#8373cb'
      '1':'bgcolor8373cb',
      '2':'bgcolor8373cb',
      '3':'bgcolor4a8aca'//'#4a8aca'
    };

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.bgColorClass = bgColor[views.indexOf(toState.name)];
    });
	}])
;

angular.module('homeApp')
.controller('homeCtrl', ['$scope', 'Session', function($scope,Session){
  $scope.isNotLogin = function(){
    return !Session.get('userId');
  };
}])
;

angular.module('homeApp')
	.controller('homeIndexCtrl', ['$scope', 'UserService', 'Session', function($scope, UserService,Session) {
    $scope.user = Session.get();
		$scope.cricle = {
			recordbloodglucose: {
				index: 0,
				name: '血糖',
				icon: 'icon-xietangyi',
				state: 'recordbloodglucose',
				status: 'none'
			},
			recordbloodfat: {
				index: 1,
				name: '血脂',
				icon: 'icon-icon',
				state: 'recordbloodfat',
				status: 'none'
			},
			recordbmi: {
				index: 2,
				name: 'BMI',
				icon: 'icon-tizhong',
				state: 'recordbmi',
				status: 'none'
			},
			recordbloodpressure: {
				index: 3,
				name: '血压',
				icon: 'icon-xieyayi',
				state: 'recordbloodpressure',
				status: 'none'
			}
		};
		$scope.deg = 360 / 4;

    UserService.listDoctor().then(function(rep){
      $scope.doctorList = rep.data.result;
    });

    if(Session.get('userId')){
  		UserService.getHealthKPI().then(function(rep) {
  			var data = rep.data.result;
        var statusName = ['normal','warn','danger'];
  			$scope.cricle.recordbloodglucose.status = statusName[data.BLOOD_GLUCOSE?data.BLOOD_GLUCOSE.identify:0];
        $scope.cricle.recordbloodpressure.status = statusName[data.BLOOD_PRESSURE?data.BLOOD_PRESSURE.identify:0];
        $scope.cricle.recordbloodfat.status = statusName[data.BLOOD_FAT?data.BLOOD_FAT.identify:0];
        $scope.cricle.recordbmi.status = statusName[data.BASIC_INFO?data.BASIC_INFO.identify:0];
  		});

      UserService.getLastFeedback().then(function(rep){
        $scope.lastFeedback = rep.data.result;
      });

      UserService.getLastSchedulePlan().then(function(rep){
        $scope.lastSchedulePlan = rep.data.result;
      });
    }
	}]);

angular.module('homeApp')
  .controller('relationshipCtrl', ['$scope', '$state', '$rootScope', '$log', '$ionicLoading', 'UserService', function($scope, $state,$rootScope,$log,$ionicLoading,UserService) {
    UserService.listFamilyRel().then(function(rep) {
      $scope.listFamilyRel=rep.data.result;
    },function(err){
      $log.log(err);
    });
  }]);

angular.module('homeApp')
	.controller('docuploadCtrl', ['Config', '$scope', 'Session', 'popupHelper', '$ionicPopover', 'UploadHelper', 'UserService', '$ionicHistory', '$filter', function(Config, $scope, Session,popupHelper,$ionicPopover,UploadHelper,UserService,$ionicHistory,$filter) {
    $scope.data = {
      date : new Date(),
    };
    $scope.dateSettings = Config.getDefaultDateSetting();
    $scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

    $scope.selectFiles = function($files){
      if($files.length===0){
        return;
      }

      UploadHelper.selectFileHandler($scope,$files);
    };

    $scope.removeFile = function(file){
      popupHelper.showConfirm($scope,'确定要移除这张照片吗？').then(function(){
        var pos = $scope.uploadInfo.files.indexOf(file);
        if(pos>=0){
          $scope.uploadInfo.files.splice(pos,1);
        }
      });
    };

    $scope.save = function(){
      UserService.checkBeforePost(function(){
        if($scope.uploadInfo.files.length===0){
          return '请上传照片';
        }else if(!$scope.data.orgName||$scope.data.orgName.length===0){
          return '请填写检查机构名称';
        }
      }).then(function(){
        var reportImages = [];
        $.each($scope.uploadInfo.files,function(){
          reportImages = reportImages.concat(this.result.result);
        });
        console.log(reportImages);
        UserService.docUpload($filter('date')($scope.data.date, 'yyyy-MM-dd HH:mm'),$scope.data.comments,$scope.data.orgName,reportImages).then(function(){
          $scope.data.date = new Date();
          $scope.data.orgName = '';
          $scope.data.comments = '';
          $scope.uploadInfo.files = [];
        });
      });
    };
	}]);

angular.module('homeApp')
	.controller('appointmentCtrl', ['$log', '$q', '$scope', '$stateParams', '$ionicHistory', 'UserService', function($log,$q,$scope,$stateParams,$ionicHistory,UserService) {
    $scope.title={
      'OUTPATIENT':'就诊预约',
      'TEL_SCHEDULE':'电话预约',
      'VEDIO_SCHEDULE':'视频预约'
    }[$stateParams.type];

		function loadData(pageIndex) {
			var deferred = $q.defer();
			UserService.listAppointment($stateParams.type,pageIndex,5).then(function(rep) {
				// $log.log(rep);
				if (pageIndex == 1) {
					$scope.listData = rep.data.result;
				} else {
					$scope.listData.pageNo = pageIndex;
					$scope.listData.pageTotal = rep.data.result.pageTotal;
					$scope.listData.pageList = $scope.listData.pageList.concat(rep.data.result.pageList);
				}
				deferred.resolve(rep);
			}, function(err) {
				deferred.reject(err);
			});
			return deferred.promise;
		}

    loadData(1);

    $scope.doRefresh = function() {
      loadData(1)
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.loadMoreData = function(){
      loadData($scope.listData.pageNo + 1)
        .finally(function() {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $scope.canLoadMore = function(tbidx){
      if(!$scope.listData){
        return false;
      }
      return $scope.listData.pageNo<$scope.listData.pageTotal;
    };

    $scope.canSchedule = function(x){
      return x.enableSchedule!='1' || x.scheduledNbr==x.maxScheduleNbr;
    };

    $scope.save = function(item){
      UserService.checkBeforePost(function(){
        if(!item.symptomDesc||item.symptomDesc.length===0){
          return '请输入症状描述信息';
        }
      }).then(function(){
        UserService.saveUserSchedule($stateParams.type,item,$stateParams.id).then(function(rep){
          if($stateParams.id){
            $ionicHistory.goBack();
          }else{
            item.enableSchedule = '0';
            item.scheduledNbr = rep.data.result.scheduledNbr;
          }
        });
      });
    };
	}]);

angular.module('homeApp')
	.controller('doctorlistCtrl', ['$q', '$scope', '$state', '$stateParams', '$ionicViewSwitcher', 'UserService', '$log', '$ionicLoading', 'Session', function($q, $scope, $state, $stateParams, $ionicViewSwitcher, UserService, $log, $ionicLoading, Session) {
		var doctorId = $stateParams.doctorId;
		UserService.listDoctor().then(function(rep) {
			// console.log(rep);
			$scope.listDoctor = rep.data.result;
			// console.log($scope.listDoctor);
		}, function(err) {
			deferred.reject(err);
		});
	}])
;

angular.module('homeApp')
.controller('cancelacontractCtrl', ['$q', '$scope', '$state', '$stateParams', '$ionicPopup', '$ionicViewSwitcher', 'popupHelper', 'UserService', '$log', '$ionicLoading', 'Session', function($q,$scope,$state,$stateParams,$ionicPopup,$ionicViewSwitcher,popupHelper,UserService,$log,$ionicLoading,Session){
  UserService.getDoctorInfo($stateParams.doctorId).then(function(rep) {
    $scope.doctorInfo=rep.data.result;
  });
  $scope.doctorId=$stateParams.doctorId;
  $scope.signDoctorId=Session.get('doctorId');
  $scope.signStatus=Session.get('signStatus');
  $scope.sDoctorId=Session.get('doctorId');

  $scope.cancelBespoke=function(){
    popupHelper.showConfirm($scope,'确定取消签约吗？').then(function(){
      UserService.cancelBespoke().then(function(rep) {
        Session.set('signStatus',null)
        .set('doctorId',null);
          if (rep.data.code=='200') {
            setTimeout(function() {
              $state.go('home.servicehome');
            },3000);
          }
      });
    },function(){
    });
  };

  $scope.confirmBespoke=function() {
    UserService.confirmBespoke($stateParams.doctorId).then(function(rep){
      if (rep.data.code=='200'){
        Session.set('signStatus',0);
        Session.set('doctorId',$scope.doctorId);
        $ionicLoading.show({
          template:'签约申请已发送，请耐心等待医生确认',
          duration:3000
        });
        setTimeout(function() {
          $state.go('home.servicehome');
        },3000);
      }
    });
  };
}]);

angular.module('homeApp')
.controller('serviceHomeCtrl', ['$state', '$scope', 'Session', '$ionicLoading', 'UserService', function($state,$scope,Session,$ionicLoading,UserService){
  $scope.user = Session.get();
  if (Session.get('doctorId')&&Session.get('userId')) {
    UserService.getDoctorInfo($scope.user.doctorId).then(function(rep){
      $scope.doctorInfo=rep.data.result;
      // console.log($scope.doctorInfo);
    });
  }
  $scope.goSign = function(){
    if(!Session.get('userId')){
      $ionicLoading.show({
        template:'请先登录',
        duration:1000
      });
      $state.go('login');
      return;
    }

    $state.go('doctorlist');
  };

  $scope.comeSoon = function(){
    $ionicLoading.show({
      template:'即将开放，敬请期待',
      duration:1000
    });
  };
}])
;

angular.module('homeApp')
.controller('myhomeCtrl', ['$scope', 'Session', function($scope,Session){
  $scope.user = Session.get();
}]);

angular.module('homeApp')
.controller('familylist', ['$scope', '$state', '$rootScope', '$log', '$stateParams', '$ionicLoading', 'UserService', '$ionicModal', function($scope, $state,$rootScope,$log,$stateParams,$ionicLoading,UserService,$ionicModal){
  UserService.familyList().then(function(rep) {
    if (rep.data.code=='200') {
      $scope.familylist=rep.data.result;
    }
  });
}])
;

angular.module('homeApp')
	.controller('addfamilyCtrl', ['$scope', '$state', '$rootScope', '$log', '$stateParams', '$ionicLoading', 'UserService', '$ionicModal', 'Session', 'UploadHelper', 'Config', function($scope, $state, $rootScope, $log, $stateParams, $ionicLoading, UserService, $ionicModal, Session, UploadHelper, Config) {
		$scope.user = Session.get();
		$scope.dateSettings = Config.getDefaultDateSetting();
		$scope.dateSettings.min = new Date('1900-1-1');

		$scope.selectFiles = function($files) {
			if ($files.length === 0) {
				return;
			}

			UploadHelper.selectFileHandler($scope, $files).then(function(files) {
				UserService.modifyInfo({
					headerImage: $scope.user.headerImage = files[0].result.result[0]
				}).then(function() {
					$scope.refreshUserInfo();
					// Session.set('headerImage',$scope.user.headerImage);
				});
			});
		};
		$scope.dict = {
			dictCode: '',
			dictName: ''
		};
		$scope.data = {
			name: '',
			birth: '',
			phone: ''
		};
		$ionicModal.fromTemplateUrl('family-relationship.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$ionicModal.fromTemplateUrl('family-sex.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal2 = modal;
		});
		$scope.showFamilyRrelationship = function(selectFamilyRrelationship) {
			$scope.modal.show();
			UserService.listFamilyRel().then(function(rep) {
				$scope.listFamilyRel = rep.data.result;
				// console.log($scope.listFamilyRel)
			}, function(err) {
				$ionicLoading.show({
					template: err,
					duration: 2000
				});
				$log.log(err);
			});
		};
		$scope.showFamilySex = function(selectFamilyRrelationship) {
			$scope.modal2.show();
			$scope.sex = {
				0: {
					id: 1,
					value: '男'
				},
				1: {
					id: 2,
					value: '女'
				}
			};
		};
		$scope.addSex = function(id, value) {
			$scope.SexId = id;
			$scope.SexValue = value;
			$scope.modal2.hide();
		};
		$scope.cancelSelectSex = function() {
			$scope.modal2.hide();
		};
		$scope.cancelSelect = function() {
			$scope.modal.hide();
		};
		$scope.addfamilyDict = function(dictCode, dictName) {
			// console.log(dictName)
			$scope.dict.dictName = dictName;
			$scope.dict.dictCode = dictCode;
			$scope.modal.hide();
		};
		$scope.save = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.data.name || $scope.data.name.length === 0) {
					return '请填写家人名称';
				} else if (!$scope.data.birth || $scope.data.birth.length === 0) {
					return '请填写家人出生日期';
				} else if (!$scope.dict.dictCode || $scope.dict.dictCode.length === 0 || !$scope.dict.dictName || $scope.dict.dictName.length === 0) {
					return '请选择关系';
				} else if ($scope.data.phone.length > 0 && $scope.data.phone.length != 11) {
					return '请正确输入手机号';
				}
			}).then(function() {
				UserService.addFamily($scope.user.headerImage, $scope.data.name, $scope.data.birth, $scope.dict.dictCode,
					$scope.dict.dictName, $scope.dict.phone, $scope.SexId).then(
					function(rep) {
						// console.log(rep);
						if (rep.data.code == '200') {
							$ionicLoading.show({
								template: '成功添加家人',
								duration: 1500
							});
							$state.go("familylist");
							$rootScope.refreshFamilyList();
						}
					});
			});

		};
		if ($stateParams.familyUserId) {
			$scope.familyUserId = $stateParams.familyUserId;
			UserService.applySign($stateParams.familyUserId).then(function(rep) {
				// console.log(rep)
			});
		} else {
			$scope.familyUserId = null;
		}
	}]);

angular.module('homeApp')
.controller('myhomedoctorCtrl',['$scope', 'UserService', 'Session', function($scope,UserService,Session){
  UserService.getDoctorInfo(Session.get('doctorId')).then(function(rep){
    $scope.doctor = rep.data.result;
    $scope.user = Session.get();
  });
}])
;

angular.module('homeApp')
	.service('UserService', ['$q', '$http', 'httpService', 'Session', '$ionicLoading', '$state', '$timeout', '$interval', '$ionicViewSwitcher', function($q, $http, httpService, Session, $ionicLoading, $state, $timeout, $interval, $ionicViewSwitcher) {
		var resendSecond = 10,
			secondLeft = resendSecond,
			isGettingCode = false;

		return {
			login: function(uid, pwd) {
				return httpService.load('login', {
					username: uid,
					password: pwd
				}, {
					loadingMsg: '登录中'
				});
			},
			getCodeCompleted: function() {
				return !isGettingCode && secondLeft == resendSecond;
			},
			checkBeforePost: function(checkFun) {
				var deferred = $q.defer();
				$timeout(function() {
					var errMsg = checkFun.call(this);
					if (errMsg) {
						$ionicLoading.show({
							template: errMsg,
							duration: 1000
						});
						deferred.reject();
					} else {
						deferred.resolve();
					}
				});
				return deferred.promise;
			},
			getCode: function($scope) {
				if (secondLeft != resendSecond || isGettingCode) {
					return;
				} else {
					isGettingCode = true;
					$scope.codeText = "获取中...";
				}

				httpService.load('getCode', {
					userId: $scope.formData.mobile ? '' : $scope.formData.userId,
					mobile: $scope.formData.mobile
				}, {
					successMsg: '验证码已发送',
					successDuration: 1500,
					errorDuration: 1500
				}).then(function(rep) {
					isGettingCode = false;
					secondLeft = resendSecond - 1;
					$scope.codeText = secondLeft + "秒后重发";
					$interval(function() {
						secondLeft--;
						$scope.codeText = secondLeft + "秒后重发";
					}, 1000, resendSecond - 1).then(function() {
						secondLeft = resendSecond;
						$scope.codeText = "获取验证码";
					});
				}, function() {
					isGettingCode = false;
					$scope.codeText = "获取验证码";
				});
			},
			register: function(mobile, pwd, confirmPwd, code) {
				return httpService.load('register', {
					username: mobile,
					password: pwd,
					confirmPassword: confirmPwd,
					checkCode: code
				}, {
					successMsg: '注册成功'
				});
			},
			loadUserInfo: function() {
				var userId = Session.get('userId'),
          currentUserId = Session.get('currentUserId'),
					token = Session.get('token');
				if (userId && token) {
					$http.defaults.headers.common.Authorization = 'Bearer ' + token;
					httpService.load('getUserInfo', {
						userId: userId
					}, {
						disableSuccessMsg: true,
						disableErrorMsg: true
					}).then(function(rep) {
						Session.set(rep.data.result).set('token', token).set('currentUserId',currentUserId);
					});
				} else {
					$ionicViewSwitcher.nextDirection("forwoard");
					$state.go('login');
				}
			},
      refreshUserInfo:function(){
        var userId = Session.get('userId'),
        currentUserId = Session.get('currentUserId'),
        token = Session.get('token');
        return httpService.load('getUserInfo', {
          userId: userId
        }, {
          disableSuccessMsg: true,
          disableErrorMsg: true
        }).then(function(rep) {
          Session.set(rep.data.result).set('token', token).set('currentUserId',currentUserId);
        });
      },
			modifyInfo: function(params) {
				return httpService.load('modifyInfo', angular.extend({
					userId: Session.get('userId')
				}, params), {
					successMsg: '修改成功'
				});
			},
			modifyMobile: function(mobile, code) {
				return httpService.load('modifyMobile', {
					userId: Session.get('userId'),
					mobile: mobile,
					checkCode: code
				});
			},
			modifyPassword: function(pwd, code) {
				return httpService.load('modifyPassword', {
					userId: Session.get('userId'),
					password: pwd,
					confirmPassword: pwd,
					checkCode: code
				});
			},
			listFamilyRel: function(code) {
				return httpService.load('listFamilyRel', {

				});
			},
			listRegion: function(id) { //地区列表
				return httpService.load('listRegion', {
					id: id
				}, {
					disableErrorMsg: true,
					disableSuccessMsg: true
				});
			},
      addFamily:function(headerImage,name,birth,dictCode,dictName,phone,sex) {
        return httpService.load('addFamily',{
          userId:Session.get('userId'),
          headerImage:headerImage,
          relUserName:name,
          mobile:phone,
          birth:birth,
          relTypeId:dictCode,
          relTypeName:dictName,
          sex:sex
        });
      },
      confirmBespoke:function(doctorId) {
        return httpService.load('confirmBespoke',{
          userId:Session.get('userId'),
          doctorId:doctorId
        });
      },
			saveHealthData: function(examItemCode, recordDate, detail) { //保存健康指标（血压，血脂，BMI）
				return httpService.load('saveHealthData', {
					userId: Session.get('currentUserId'),
					examItemCode: examItemCode,
					recordDate: recordDate,
					detail: detail
				});
			},
			saveHealthBlg: function(recordDate, mealType, detail) { //保存血糖健康指标
				return httpService.load('saveHealthBlg', {
					userId: Session.get('currentUserId'),
					examItemCode: 'BLOOD_GLUCOSE',
					recordDate: recordDate,
					mealTypeCode: mealType.dictCode,
					mealTypeName: mealType.dictName,
					detail: detail
				});
			},
			listBloodPressure: function(pageIndex, pageSize) {
				return httpService.load('listBloodPressure', {
					userId: Session.get('currentUserId'),
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
      listCurrentSchedule:function(pageIndex, pageSize, scheduleType){
        return httpService.load('listCurrentSchedule', {
          userId: Session.get('currentUserId'),
          pageNbr: pageIndex,
          scheduleType:scheduleType,
          pageSize: pageSize || 10
        }, {
          disableLoadingMsg: true,
          disableSuccessMsg: true,
          disableErrorMsg: true
        });
      },
      listHistorySchedule:function(pageIndex, pageSize) {
        return httpService.load('listHistorySchedule', {
          userId: Session.get('currentUserId'),
          pageNbr: pageIndex,
          pageSize: pageSize || 10
        }, {
          disableLoadingMsg: true,
          disableSuccessMsg: true,
          disableErrorMsg: true
        });
      },
			listBloodFat: function(pageIndex, pageSize) {
				return httpService.load('listBloodFat', {
					userId: Session.get('currentUserId'),
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
			listBasicCheck: function(pageIndex, pageSize) {
				return httpService.load('listBasicCheck', {
					userId: Session.get('currentUserId'),
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
			listBloodGlucose: function(pageIndex, pageSize) {
				return httpService.load('listBloodGlucose', {
					userId: Session.get('currentUserId'),
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
			listMealTime: function() {
				return httpService.load('listMealTime');
			},
			familyList: function() {
				return httpService.load('listFamily', {
					userId: Session.get('userId')
				});
			},
			applySign: function(relUserId) {
				return httpService.load('applySign', {
					userId: Session.get('userId'),
					relUserId: relUserId
				});
			},
			docUpload: function(recordDate, comments, orgName, reportImages) {
				return httpService.load('docUpload', {
					userId: Session.get('currentUserId'),
					recordDate: recordDate,
					comments: comments,
					orgName: orgName,
					reportImages: reportImages
				}, {
					successMsg: '档案上传成功'
				});
			},
			listAppointment: function(scheduleType, pageIndex, pageSize) {
				return httpService.load('listDoctorSchedulePlan', {
					userId: Session.get('currentUserId'),
					scheduleType: scheduleType,
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
			getHealthKPI: function() {
				return httpService.load('healthkpi', {
          userId: Session.get('currentUserId')
        });
			},
			listDoctor: function() {
				return httpService.load('listDoctor');
			},
			getLastFeedback: function() {
				return httpService.load('getLastFeedback', {
					userId: Session.get('currentUserId')
				});
			},
			getCurveData: function(examItemCode) {
				return httpService.load('getCurveData', {
					userId: Session.get('currentUserId'),
					examItemCode: examItemCode
				});
			},
      getLastSchedulePlan: function(examItemCode) {
        return httpService.load('getLastSchedulePlan', {
          userId: Session.get('currentUserId')
        });
      },
      saveUserSchedule: function(scheduleType,planDetail,userScheduleId){
        return httpService.load('saveUserSchedule',{
          userId: Session.get('currentUserId'),
          userScheduleId: userScheduleId,
          scheduleType: scheduleType,
          planDetail:planDetail
        });
      },
      getDoctorInfo:function(doctorId) {
        return httpService.load('getDoctorInfo',{
          doctorId:doctorId
        });
      },
      cancelScheduleByUser:function(userScheduleId) {
        return httpService.load('cancelScheduleByUser',{
          userScheduleId:userScheduleId
        },{
          successMsg: '预约已取消'
        });
      },
      cancelBespoke:function(){
        return httpService.load('cancelBespoke',{
          userId:Session.get('userId')
        });
      },
      checkSign: function(){
        var deferred = $q.defer();
        $timeout(function(){
          if(Session.get('signStatus')=='1'){
            deferred.resolve();
          }else{
            $ionicLoading.show({
              template:'请签约后再进行此操作',
              duration:1000
            });
            deferred.reject();
          }
        });
        return deferred.promise;
      },
      checkLogin: function(){
        var deferred = $q.defer();
        $timeout(function(){
          if(Session.get('userId')){
            deferred.resolve();
          }else{
            $ionicLoading.show({
              template:'请先登录',
              duration:1000
            });

            $state.go('login');
            deferred.reject();
          }
        });
        return deferred.promise;
      }
		};
	}]);
