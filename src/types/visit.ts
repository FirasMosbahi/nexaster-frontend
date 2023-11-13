export type Visit = {
  seanceNumber: number;
  patient: string;
};
export type Patient = {
  firstName: string;
  lastName: string;
  gender: string;
  weight: {
    actualWeight: number;
    bodyFat?: number;
    waterPercentage?: number;
  };
  height: number;
  observations: string[];
  prespection: string[];
  diseases: string[];
};
