angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
                $stateProvider
                        .state('app.icons', {
                            url: "/icons",
                            abstract: true,
                            template: '<ui-view></ui-view>',
                            ncyBreadcrumb: {
                                label: 'Icons'
                            }
                        })
                        .state('app.icons.fontawesome', {
                            url: '/font-awesome',
                            templateUrl: 'views/icons/font-awesome.html',
                            ncyBreadcrumb: {
                                label: 'Font Awesome'
                            }
                        })
                        .state('app.icons.simplelineicons', {
                            url: '/simple-line-icons',
                            templateUrl: 'views/icons/simple-line-icons.html',
                            ncyBreadcrumb: {
                                label: 'Simple Line Icons'
                            }
                        })
                        .state('app.components', {
                            url: "/components",
                            abstract: true,
                            template: '<ui-view></ui-view>',
                            ncyBreadcrumb: {
                                label: ' '
                            }
                        })
                        .state('app.components.home', {
                            url: '/home',
                            templateUrl: 'views/components/employer/home.html',
                            ncyBreadcrumb: {
                                label: 'Home'
                            }
                        })
                        .state('app.components.access', {
                            url: '/access_manager',
                            templateUrl: 'views/components/regulatory/access_manager.html',
                            ncyBreadcrumb: {
                                label: 'Access Manager'
                            }
                        })
                        .state('app.components.projects', {
                            url: '/projects',
                            templateUrl: 'views/components/employer/projects.html',
                            ncyBreadcrumb: {
                                label: 'Projects'
                            }
                        })
                        .state('app.components.jobs', {
                          url: '/jobs/:projectID',
                            templateUrl: 'views/components/employer/jobs.html',
                            ncyBreadcrumb: {
                                label: 'Jobs'
                            }
                        })
                        .state('app.components.addJobs', {
                            url: '/addJobs',
                            templateUrl: 'views/components/employer/addJobs.html',
                            ncyBreadcrumb: {
                                label: 'Add Jobs'
                            }
                        })
                        .state('app.components.labour', {
                            url: '/labour_qr',
                            templateUrl: 'views/common/employee/labour_qr.html',
                            ncyBreadcrumb: {
                                label: 'Labour QR Code'
                            }
                        })
                        .state('app.components.employee_home', {
                            url: '/employee_home',
                            templateUrl: 'views/common/employee/employee_home.html',
                            ncyBreadcrumb: {
                                label: 'Employee Home'
                            }
                        })
                        .state('app.components.project_detail', {
                            url: '/project_detail',
                            templateUrl: 'views/common/employee/project_detail.html',
                            ncyBreadcrumb: {
                                label: 'Project Detail'
                            }
                        })
                        .state('app.components.add_job', {
                            url: '/add_job',
                            templateUrl: 'views/common/employee/add_job.html',
                            ncyBreadcrumb: {
                                label: 'Add/View Job'
                            }
                        })
                        .state('app.components.forms', {
                            url: '/forms',
                            templateUrl: 'views/components/forms.html',
                            ncyBreadcrumb: {
                                label: 'Forms'
                            }
                        })
                        .state('app.components.switches', {
                            url: '/switches',
                            templateUrl: 'views/components/switches.html',
                            ncyBreadcrumb: {
                                label: 'Switches'
                            }
                        })
                        .state('app.components.tables', {
                            url: '/tables',
                            templateUrl: 'views/components/tables.html',
                            ncyBreadcrumb: {
                                label: 'Tables'
                            }
                        })
                        .state('app.widgets', {
                            url: '/widgets',
                            templateUrl: 'views/widgets.html',
                            ncyBreadcrumb: {
                                label: 'Widgets'
                            },
                            resolve: {
                                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                        // you can lazy load controllers
                                        return $ocLazyLoad.load({
                                            files: ['js/controllers/widgets.js']
                                        });
                                    }]
                            }
                        })
                        .state('app.charts', {
                            url: '/charts',
                            templateUrl: 'views/charts.html',
                            ncyBreadcrumb: {
                                label: 'Charts'
                            },
                            resolve: {
                                // Plugins loaded before
                                // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                                //     return $ocLazyLoad.load([
                                //         {
                                //             serial: true,
                                //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
                                //         }
                                //     ]);
                                // }],
                                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                        // you can lazy load files for an existing module
                                        return $ocLazyLoad.load({
                                            files: ['js/controllers/charts.js']
                                        });
                                    }]
                            }
                        })
            }]);
