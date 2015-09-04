var accordian = angular.module("accordionApp",[]);
var grid = angular.module("gridModule",["kendo.directives"]);
angular.module("AngularModule",["gridModule","accordionApp"]);
accordian.directive('accordion', function () {
  return {
    restrict:'E',
    transclude:false,
    controller:'AccordionController',
    templateUrl:'accordion.html'
  }
});

accordian.directive('activeTab', function () {
	return function(scope,element,attributes){
		element.bind("click", function(){
			if(!element.hasClass("active")){
				element.addClass("active");
				element.find("i.fa-angle-right").removeClass("fa-angle-right").addClass("fa-angle-down");
			}
			else{
				element.removeClass("active");
				element.find("i.fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
			}
		});
	}
});

accordian.controller("AccordionController" , function($scope){
	$scope.itemInfo = [
							{"itemType":"Required" ,"itemIcon":"fa-asterisk"},
							{"itemType":"Recommended" ,"itemIcon":"fa-circle-thin"},
							{"itemType":"Optional" ,"itemIcon":"fa-cog"}
					   ];
	$scope.init = function () {
		$('.accr-menu .item-icon').click(function(){
			$(this).find('.menu-dropdown').toggle();
		});
		$('.accr-menu .item-icon li .fancy-check').click(function(){
			if( $(this).val() == "all" ) {
				if( $(this).is(':checked') ) {
					$(this).closest('.accr-menu').find('.fancy-check').prop("checked",true);
					console.log($(this).is(':checked'))
				} else {
					$(this).closest('.accr-menu').find('.fancy-check').prop("checked",false);
				}
			}
		});
	}
});
grid.controller("GridCtrl", function($scope){
	$scope.mainGridOptions = {
		dataSource: [ { ProcessId: "123456789876456",
					 Description: "Description Info Here",
					 Originator: "Originator Name",
					 Concept: "Offer",
					 Type: "Originator Name",
					 DateTime: "Originator Name"
					},
					{ ProcessId: "123456789876456",
					 Description: "Description Info Here",
					 Originator: "Originator Name",
					 Concept: "Offer",
					 Type: "Originator Name",
					 DateTime: "Originator Name"
					},
					{ ProcessId: "123456789876456",
					 Description: "Description Info Here",
					 Originator: "Originator Name",
					 Concept: "Offer",
					 Type: "Originator Name",
					 DateTime: "Originator Name"
					},
					{ ProcessId: "123456789876456",
					 Description: "Description Info Here",
					 Originator: "Originator Name",
					 Concept: "Offer",
					 Type: "Originator Name",
					 DateTime: "Originator Name"
					}],
		height: 180,
		sortable: true,
		selectable: "row",
		scrollable: false,
		pageable: {
			refresh: true,
			pageSizes: false,
			buttonCount: 2,
			pageSize: 2,
			info: true,
			messages: {
			  display: " {2}"
			}
		},
		dataBound: function() {
			this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		columns: [{
			field: "ProcessId",
			title: "ProcessId",
			width: 200
		}, {
			field: "Description",
			title: "Description"
		}, {
			field: "Originator",
			title: "Originator"
		}, {
			field: "Description",
			title: "Description"
		}, {
			field: "Concept",
			title: "Concept"
		}, {
			field: "Type",
			title: "Type"
		}, {
			field: "DateTime",
			title: "Date / Time"
		}],
		dataBinding: function(e) {
				var $pagerRefresh = $('.k-pager-refresh').clone();
				$('#details-grid .k-pager-refresh').remove();
				$('#details-grid .k-grid-header tr th:first-child').prepend($pagerRefresh);

				$('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');
		}
	};
});



