namespace Server.Entities;

/// Визовая анкета студента
public class StudentVisaRequestEntity {
    public Guid Id { get; set; }

    /// Студент, который отправил визовую анкету
    public StudentEntity Student { get; set; } = null!;

    public Guid StudentId { get; set; }

    /// Статус визовой анкеты
    public VisaRequestStatusEnum Status { get; set; } = VisaRequestStatusEnum.Pending;

    /// Комментарий сотрудника
    public string? EmployeeComment { get; set; }

    /// Регистрационный номер заполняемый только сотрудником
    public string? RegistrationNumber { get; set; }

    /// Категория визы
    public VisaCategoryEnum? Category { get; set; }

    /// Кратность визы
    public VisaMultiplicityEnum? Multiplicity { get; set; }

    /// В связи с ...
    public string? Reason { get; set; }

    /// Адрес постановки на миграционный учёт
    public string? AddressOfMigrationRegistration { get; set; }

    /// Маршрут предполагаемого пребывания
    public string? EstimatedRouteOfStay { get; set; }

    /// Адрес в стране постоянного проживания
    public string? AddressInCountryOfContinuousResidence { get; set; }

    /// Место работы или учёбы, должность
    public string? PlaceOfWorkOrStudyAndEmploymentPosition { get; set; }

    /// Родственники на территории РФ
    public string? RussianFederationRelatives { get; set; }

    /// Прилагаемые документы
    public string? AttachedDocuments { get; set; }
}



/// Требуемая кратность визы в визовой анкете
public enum VisaMultiplicityEnum {
    /// Однократная
    Single,
    /// Двукратная
    Double,
    /// Многократная
    Multiple,
}

/// Требуемая категория визы в визовой анкете
public enum VisaCategoryEnum {
    /// обыкновенная - частная
    RegularPrivate,
    /// обыкновенная - гуманитарная
    RegularHumanitarian,
    /// обыкновенная - деловая
    RegularBusiness,
    /// обыкновенная - рабочая
    RegularWorking,
    /// обыкновенная - туристическая
    RegularTourist,
    /// обыкновенная - туристическая групповая
    RegularGroupTravel,
    /// обыкновенная - учебная
    RegularStudy,
    /// обыкновенная - на въезд в РФ в целях приёма в гражданство РФ
    RegularNationalEntry,
    /// транзитная
    Transit,
    /// временно проживающего лица
    TemporaryResident,
}

/// Статус анкеты на визу
public enum VisaRequestStatusEnum {
    /// Ожидает проверки сотрудником
    Pending,
    /// Требуются правки студента
    PendingCorrectionsByStudent,
    /// Проверена
    Verified,
    /// Передана в визовый отдел
    Finished,
}