import { getMongoRepository, MongoRepository } from 'typeorm';
import Notification from '../schemas/Notification';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

// DTO: Data Transfer Object
// interface CreateAppointmentDTO {
//     provider: string;
//     date: Date;
// }

class NotificationsRepository implements INotificationsRepository {
    private ormRepository: MongoRepository<Notification>;

    constructor() {
        this.ormRepository = getMongoRepository(Notification, 'mongo');
    }
    // private appointments: Appointment[];

    // constructor() {
    //     this.appointments = [];
    // }

    // public all(): Appointment[] {
    //     return this.appointments;
    // }

    public async create({
        content,
        recipient_id,
    }: ICreateNotificationDTO): Promise<Notification> {
        const notification = this.ormRepository.create({
            content,
            recipient_id,
        });

        await this.ormRepository.save(notification);

        return notification;
    }
}

export default NotificationsRepository;
