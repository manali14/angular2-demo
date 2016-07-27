"use strict";
var TopicService = (function () {
    function TopicService() {
    }
    TopicService.prototype.getTopics = function () {
        return [
            { id: 1, name: "Groovy", createdBy: "Manali", description: "Groovy Basics" },
            { id: 2, name: "Grails", createdBy: "Manali", description: "Grails Basics" },
            { id: 3, name: "Angular 2", createdBy: "Manali", description: "Angular2 Basics" },
        ];
    };
    return TopicService;
}());
exports.TopicService = TopicService;
//# sourceMappingURL=topic.service.js.map