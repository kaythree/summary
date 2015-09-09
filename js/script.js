var grid = angular.module("gridModule",["kendo.directives"]);
angular.module("AngularModule",["gridModule","accordionApp"]);
var accordian = angular.module("accordionApp",[]);
accordian.controller("SummaryController" , function($scope){
	
});

grid.controller("GridCtrl", function($scope){
	$scope.tooltipOpt = {"a":"Approve", "m":"Modify", "r":"Reject", "position":"top"};
	$scope.mainGridOptions = {
		dataSource: [ 
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
		sortable: false,
		selectable: "row",
		scrollable: false,
		filterable: {
			extra: false
        },
		pageable: {
			refresh: true,
			pageSizes: false,
			buttonCount: 2,
			pageSize: 5,
			info: true,
			messages: {
			  display: " {5}"
			}
		},
		dataBound: function() {
			this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		columns: [
		{
			title: "<a class='k-link amr' href='#'><span kendo-tooltip k-content='tooltipOpt.a' k-position='tooltipOpt.position'>A</span> <span kendo-tooltip k-content='tooltipOpt.m' k-position='tooltipOpt.position'>M</span> <span kendo-tooltip k-content='tooltipOpt.r' k-position='tooltipOpt.position'>R</span></a>",
			template: "<div class='amr-checks'><input type='checkbox' class='scheck'> <input type='checkbox' class='scheck'> <input type='checkbox' class='scheck'></div>",
		},
		{
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
				var grid = $('#details-grid');
				grid.on('click','.scheck',function(){
					if( this.checked ){
						$(this).closest('tr').addClass('active');
						$('.approval-buttons').addClass('active');
					} else {
						$(this).closest('tr').removeClass('active');
						if( $('.scheck:checked').length == 0 ) {
							$('.approval-buttons').removeClass('active');
						}
					}
				});
				
				grid.on('click','.comment-btn',function(){		
					$('.commentbox,.sm-overlay').show();
					$('.sm-overlay,.sum-lightbox .buttons button').click(function(){
						$('.commentbox,.sm-overlay').hide()
					})
				});
		}
	};

	
});



