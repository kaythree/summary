var grid = angular.module("gridModule",["kendo.directives"]);
angular.module("AngularModule",["gridModule","accordionApp"]);
var accordian = angular.module("accordionApp",[]);

accordian.controller("SummaryController" , function($scope){
	$scope.init = function () {
		$('.sd-block').click(function(){
		   	if(! $(this).hasClass('active') ){
		   		$('.sd-block').removeClass('active');
		   		$(this).addClass('active');
		   		if( $(this).hasClass('summary') ) {
			    	$("#details-grid").removeClass("mytask").addClass("summary");
			    }
			    else if ($(this).hasClass('mytask') ) {
			    	$("#details-grid").removeClass("summary").addClass("mytask");
			    }
		 	}
		});
	}
});

grid.controller("mytaskGridCtrl", function($scope){
	$scope.mainGridOptions = {
		dataSource: [ 
						{ 
							User: "User 1",
						 	Groups: "Group1 , Group2, Group3, Group4",
						 	View: "",
						 	Edit: "",
						 	Create: "",
						 	Reject: "",
						 	Approve: ""
						},
						{ 
							User: "User 2",
						 	Groups: "Group5 , Group6, Group7, Group8",
						 	View: "",
						 	Edit: "",
						 	Create: "",
						 	Reject: "",
						 	Approve: ""
						},
						{ 
							User: "User 3",
						 	Groups: "Group5 , Group6, Group7, Group8",
						 	View: "",
						 	Edit: "",
						 	Create: "",
						 	Reject: "",
						 	Approve: ""
						}
				],
		height: 180,
		sortable: true,
		selectable: "row",
		scrollable: false,
		columnMenu: {
			columns: false,
			sortable: true
		},
		filterable: {
			extra: false,
			mode: "menu"
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
			field: "User",
			title: "User",
			width: 200
		}, {
			field: "Groups",
			title: "Groups"
		}, {
			field: "View",
			title: "View"
		}, {
			field: "Edit",
			title: "Edit"
		}, {
			field: "Create",
			title: "Create"
		}, {
			field: "Reject",
			title: "Reject"
		}, {
			field: "Approve",
			title: "Approve"
		}],
		dataBinding: function(e) {
				var $pagerRefresh = $('.k-pager-refresh').clone();
				var $grid = $('#details-grid.mytask');
				//$('.k-pager-refresh').remove();
				$grid.find('.k-grid-header tr th:first-child').prepend($pagerRefresh);

				$grid.find('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');

				$grid.on('click','.scheck',function(){
					if( this.checked ){
						$(this).closest('tr').addClass('active');
						$('.approval-buttons').addClass('active');
					} else {
						$(this).closest('tr').removeClass('active');
						if( $('.scheck:checked').length == 0 ) {
							$('.approval-buttons').removeClass('active');
						}
					}
				})
				
				$grid.on('click','.comment-btn',function(){		
					$('.commentbox,.sm-overlay').show();
					$('.sm-overlay,.sum-lightbox .buttons button').click(function(){
						$('.commentbox,.sm-overlay').hide()
					})
				});
		}
	};

	
});

	/* summary ctrl */
	grid.controller("summaryGridCtrl", function($scope){
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
		sortable: true,
		selectable: "row",
		scrollable: false,
		columnMenu: {
			columns: false
		},
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
			  display: " {2}"
			}
		},
		dataBound: function() {
			this.expandRow(this.tbody.find("tr.k-master-row"));
		},
		columns: [
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
				var $grid = $('#details-grid.summary');
				$('.k-pager-refresh').remove();
				$grid.find('.k-grid-header tr th:first-child').prepend($pagerRefresh);

				$grid.find('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');

				$grid.on('click','.scheck',function(){
					if( this.checked ){
						$(this).closest('tr').addClass('active');
						$('.approval-buttons').addClass('active');
					} else {
						$(this).closest('tr').removeClass('active');
						if( $('.scheck:checked').length == 0 ) {
							$('.approval-buttons').removeClass('active');
						}
					}
				})
		}
	};
});



