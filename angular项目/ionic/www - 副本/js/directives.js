angular.module('homeApp')
	.directive('closePopupBackDrop', function($ionicGesture) {
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
	})
	.directive('clickOnStart', function($timeout) {
		return {
			restrict: 'A',
			link: function($scope, ele, attrs) {
				$timeout(function() {
					ele.trigger('click');
				}, 50);
			}
		};
	})
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
	.directive('highCharts', function($timeout, $filter) {
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
	});
