export class Sched {
    Balance?: number;
    DueDate?: Date;
    Term?: number;
    Details?: Details;
}

export class Details {
    Amount?: number;
    Interest?: number;
    Insurance?: number;
}