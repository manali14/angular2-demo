import {Component} from 'angular2/core'
import {TopicService} from './topic.service'

@Component({
    selector: 'navigation',
    templateUrl: 'app/topicForm.component.html',
    providers: [TopicService]
})
export class NavigationComponent {
    topicName;
    id;
    description;
    createdBy;
    topics;

    constructor(topicService:TopicService) {
        this.topics = topicService.getTopics();
    }

    addTopic() {
        this.id = Math.max.apply(Math, this.topics.map(function (o) {
                return o.id;
            })) + 1;
        this.topics.push({name: this.topicName, createdBy: this.createdBy, description: this.description, id: this.id});
        this.clearTopics();
    }

    removeTopic(id) {
        var index = this.topics.map(function (e) {
            return e.id;
        }).indexOf(id);
        if (index != -1) {
            this.topics.splice(index, 1);
        }
    }

    clearTopics() {
        this.id = "";
        this.topicName = "";
        this.description = "";
        this.createdBy = "";
    }
}
