'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
    function ($scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.alerts = [
            {
                icon: 'glyphicon-user',
                color: 'btn-default',
                total: '2,408',
                description: 'Total Accounts'
            },
            {
                icon: 'glyphicon-home',
                color: 'btn-primary',
                total: '376',
                description: 'Total Institutions'
            },
            {
                icon: 'glyphicon-time',
                color: 'btn-warning',
                total: '52',
                description: 'New Accounts in 24H'
            },
            {
                icon: 'glyphicon-flag',
                color: 'btn-danger',
                total: '94',
                description: 'Pending Request'
            },
            {
                icon: 'glyphicon-briefcase',
                color: 'btn-info',
                total: '208',
                description: 'Instructors'
            },
            {
                icon: 'glyphicon-education',
                color: 'btn-success',
                total: '2,123',
                description: 'Students'
            }
        ];
    }
]);
