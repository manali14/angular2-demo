System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TopicService;
    return {
        setters:[],
        execute: function() {
            TopicService = (function () {
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
            exports_1("TopicService", TopicService);
        }
    }
});
//# sourceMappingURL=topic.service.js.map