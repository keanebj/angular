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
