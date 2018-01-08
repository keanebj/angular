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
