System.register(['angular2/core', './topic.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, topic_service_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (topic_service_1_1) {
                topic_service_1 = topic_service_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                function NavigationComponent(topicService) {
                    this.topics = topicService.getTopics();
                }
                NavigationComponent.prototype.addTopic = function () {
                    this.id = Math.max.apply(Math, this.topics.map(function (o) {
                        return o.id;
                    })) + 1;
                    this.topics.push({ name: this.topicName, createdBy: this.createdBy, description: this.description, id: this.id });
                    this.clearTopics();
                };
                NavigationComponent.prototype.removeTopic = function (id) {
                    var index = this.topics.map(function (e) {
                        return e.id;
                    }).indexOf(id);
                    if (index != -1) {
                        this.topics.splice(index, 1);
                    }
                };
                NavigationComponent.prototype.clearTopics = function () {
                    this.id = "";
                    this.topicName = "";
                    this.description = "";
                    this.createdBy = "";
                };
                NavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'navigation',
                        templateUrl: 'app/topicForm.component.html',
                        providers: [topic_service_1.TopicService]
                    }), 
                    __metadata('design:paramtypes', [topic_service_1.TopicService])
                ], NavigationComponent);
                return NavigationComponent;
            }());
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});
//# sourceMappingURL=navigation.component.js.map