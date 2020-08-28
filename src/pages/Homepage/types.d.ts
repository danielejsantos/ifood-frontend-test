export interface Values {
  name: string;
  value: string;
}

export interface TimestampValidation {
  entityType: number;
  pattern: number;
  primativeType: string;
}

export interface LimitValidation {
  max: number;
  min: number;
  primativeType: string;
}

export interface OffsetValidation {
  primativeType: string;
}

export interface ArrayOfValues {
  id: string;
  name: string;
  values: Values[];
}

export interface ArrayOfTimestampValidation {
  id: string;
  name: string;
  validation: TimestampValidation[];
}

export interface ArrayOfLimitValidation {
  id: string;
  name: string;
  validation: Validation[];
}

export interface ArrayOfOffsetValidation {
  id: string;
  name: string;
  validation: Validation[];
}

export interface FiltersOptionsProps {
  filters: [
    {
      locale: ArrayOfValues[];
      country: ArrayOfValues[];
      timestamp: ArrayOfTimestampValidation[];
      timestamp: ArrayOfLimitValidation[];
      timestamp: ArrayOfOffsetValidation[];
    }
  ];
}

export interface FiltersValueProps {
  locale: string;
  country: string;
  timestamp: number;
  limit: number;
  offset: number;
}

export interface ActionType {
  type: string;
  payload: any;
}
