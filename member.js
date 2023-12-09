function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/members/member/skills.html',
        controller: 'MemberSkillsController',
        controllerAs: 'vm',
        scope: {
            member: '=',
            skills: '=',
            skillsList: '='
        }
    };
}