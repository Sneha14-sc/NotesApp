"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const broker_1 = require("../rmq/broker");
const notes_service_1 = require("./notes.service");
let NotesController = class NotesController {
    constructor(notesService) {
        this.notesService = notesService;
        this.broker = broker_1.Broker.getInstance();
        this.topicArray = ['NOTES_ADD', 'NOTES_UPDATE', 'NOTES_DELETE'];
        this.serviceName = ['IOT_SERVICE', 'IOT_SERVICE', 'IOT_SERVICE'];
        this.module_init();
    }
    async module_init() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.broker.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                var value = this.topicArray[i];
                return async (result) => {
                    let responseModelwithDto;
                    try {
                        switch (value) {
                            case 'NOTES_ADD':
                                this.notesService.create(result.message.note);
                                break;
                            case 'NOTES_UPDATE':
                                var uid = result.message.id;
                                this.notesService.update(uid, result.message);
                                break;
                            case 'NOTES_DELETE':
                                var id = result.message;
                                this.notesService.delete(id);
                                break;
                        }
                        responseModelwithDto = result;
                        for (var i = 0; i < result.OnSuccessTopicsToPush.length; i++) {
                            const topicName = result.OnSuccessTopicsToPush[i];
                            this.broker.PublicMessageToTopic(topicName, responseModelwithDto);
                        }
                    }
                    catch (error) {
                        console.log('Error Occured while listening to queues');
                        console.log(error, result);
                        for (var i = 0; i < result.OnFailureTopicsToPush.length; i++) {
                            const topicName = result.OnFailureTopicsToPush[i];
                            this.broker.PublicMessageToTopic(topicName, responseModelwithDto);
                        }
                    }
                };
            })());
        }
    }
    findAll() {
        return this.notesService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "findAll", null);
NotesController = __decorate([
    (0, common_1.Controller)('notes'),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
exports.NotesController = NotesController;
//# sourceMappingURL=notes.controller.js.map