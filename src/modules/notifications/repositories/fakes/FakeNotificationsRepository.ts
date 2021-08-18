import { ObjectID } from 'mongodb';
import Notification from '../../infra/typeorm/schemas/Notification';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

// DTO: Data Transfer Object
// interface CreateAppointmentDTO {
//     provider: string;
//     date: Date;
// }

class NotificationsRepository implements INotificationsRepository {
    private notifications: Notification[] = [];

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
        const notification = new Notification();

        Object.assign(notification, {
            id: new ObjectID(),
            content,
            recipient_id,
        });

        this.notifications.push(notification);

        return notification;
    }
}

export default NotificationsRepository;
