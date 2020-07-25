import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppoinmentDTO from '../dtos/ICreateAppoinmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppoinmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
